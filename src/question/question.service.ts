// src/question/question.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  findAll(): Promise<Question[]> {
    return this.questionRepository.find();
  }

  findOne(id: number): Promise<Question> {
    return this.questionRepository.findOne(id);
  }

  async create(question: Partial<Question>): Promise<Question> {
    const newQuestion = this.questionRepository.create(question);
    await this.questionRepository.save(newQuestion);
    return newQuestion;
  }

  async remove(id: number): Promise<void> {
    await this.questionRepository.delete(id);
  }
}
