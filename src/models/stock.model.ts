import {Entity, hasOne, model, property} from '@loopback/repository';
import {ProductList} from './product-list.model';

@model({settings: {strict: true}})
export class Stock extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  stock_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  stock_name: string;

  @property({
    type: 'number',
    required: true,
  })
  stock_sold: number;

  @property({
    type: 'number',
    required: true,
  })
  stock_remain: number;

  @property({
    type: 'number',
  })
  productListId?: number;

  @hasOne(() => ProductList)
  productList: ProductList;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Stock>) {
    super(data);
  }
}

export interface StockRelations {
  // describe navigational properties here
}

export type StockWithRelations = Stock & StockRelations;
