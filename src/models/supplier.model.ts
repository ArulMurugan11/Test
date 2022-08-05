import {Entity, model, property, hasMany, hasOne} from '@loopback/repository';
import {ProductList} from './product-list.model';
import {Location} from './location.model';

@model({settings: {strict: true}})
export class Supplier extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  supplier_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  comp_name: string;
  @property({
    type: 'string',
    required: true,
  })
  mob_num: string;

  @hasMany(() => ProductList, {through: {model: () => Location}})
  productLists: ProductList[];

  @hasOne(() => Location, {keyTo: 'location_id'})
  location_id: Location;

  @property({
    type: 'number',
  })
  locationId?: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Supplier>) {
    super(data);
  }
}

export interface SupplierRelations {
  // describe navigational properties here
}

export type SupplierWithRelations = Supplier & SupplierRelations;
