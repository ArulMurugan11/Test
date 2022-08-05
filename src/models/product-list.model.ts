import {Entity, hasMany, hasOne, model, property} from '@loopback/repository';
import {Location} from './location.model';
import {Stock} from './stock.model';
import {Supplier} from './supplier.model';

@model({settings: {strict: true}})
export class ProductList extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  prod_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  prod_name: string;

  @property({
    type: 'number',
    required: true,
  })
  prod_qnty: number;

  @property({
    type: 'number',
    required: true,
  })
  prod_price: number;

  @hasMany(() => Supplier, {through: {model: () => Location}})
  suppliers: Supplier[];

  @hasOne(() => Stock)
  stock: Stock;

  @property({
    type: 'number',
  })
  stockId?: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ProductList>) {
    super(data);
  }
}

export interface ProductListRelations {
  // describe navigational properties here
}

export type ProductListWithRelations = ProductList & ProductListRelations;
