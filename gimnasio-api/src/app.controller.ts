import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service.js';

interface Clase {
  id: number;
  nombre: string;
}

@Controller()
export class AppController {
  private clases: Clase[] = [
    { id: 1, nombre: 'Yoga' },
    { id: 2, nombre: 'Spinning' },
  ];

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('clases')
  getClases(): Clase[] {
    return this.clases;
  }

  @Post('clases')
  crearClase(@Body() nuevaClase: Clase): Clase {
    this.clases.push(nuevaClase);
    return nuevaClase;
  }
}