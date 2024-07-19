import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, UseGuards  } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto, UpdateTodoDto } from './todo.dto';
import { StaticAuthGuard } from '../auth/static-auth.guard'; // Adjust the path as necessary

@Controller('todos')
@UseGuards(StaticAuthGuard)
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async findAll() {
    return await this.todoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.todoService.findOne(id);
  }

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    return await this.todoService.create(createTodoDto);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return await this.todoService.update(id, updateTodoDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.todoService.remove(id);
  }
}
