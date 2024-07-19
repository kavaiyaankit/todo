import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { CreateTodoDto, UpdateTodoDto } from './todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async findOne(id: number): Promise<Todo> {
    const todo = await this.todoRepository.findOne({ where: { id } });
    if (!todo) {
      throw new NotFoundException(`Todo item with id ${id} not found`);
    }
    return todo;
  }

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = this.todoRepository.create(createTodoDto);
    return await this.todoRepository.save(todo);
  }

  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    await this.todoRepository.update(id, updateTodoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
