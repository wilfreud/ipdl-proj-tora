// src/question/question.controller.ts
import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { QuestionService } from './question.service';

@Controller('questions')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Get()
  findAll() {
    return this.questionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.questionService.findOne(id);
  }

  @Post()
  create(@Body() body) {
    return this.questionService.create(body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.questionService.remove(id);
  }
}
