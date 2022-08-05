import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: true}})
export class Location extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  location_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  location_name: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'number',
  })
  supplierId?: number;

  @property({
    type: 'number',
  })
  productListId?: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Location>) {
    super(data);
  }
}

export interface LocationRelations {
  // describe navigational properties here
}

export type LocationWithRelations = Location & LocationRelations;
