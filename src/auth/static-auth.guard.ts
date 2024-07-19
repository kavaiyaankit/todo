import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class StaticAuthGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];
    
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header is missing');
    }
   
    const staticToken = this.configService.get<string>('STATIC_AUTH_TOKEN');
    
    if (authHeader !== staticToken) {
      throw new UnauthorizedException('Invalid token');
    }

    return true;
  }
}
