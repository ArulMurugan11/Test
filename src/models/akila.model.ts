import {Entity, model, property} from '@loopback/repository';

@model()
export class Akila extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  userName: string;

  @property({
    type: 'number',
    required: true,
  })
  userId: number;


  constructor(data?: Partial<Akila>) {
    super(data);
  }
}

export interface AkilaRelations {
  // describe navigational properties here
}

export type AkilaWithRelations = Akila & AkilaRelations;
