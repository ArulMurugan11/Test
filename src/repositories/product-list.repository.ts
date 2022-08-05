import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {ProductList, ProductListRelations} from '../models';

export class ProductListRepository extends DefaultCrudRepository<
  ProductList,
  typeof ProductList.prototype.prod_id,
  ProductListRelations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(ProductList, dataSource);
  }
}
