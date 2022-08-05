import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {Stock, StockRelations} from '../models';

export class StockRepository extends DefaultCrudRepository<
  Stock,
  typeof Stock.prototype.stock_id,
  StockRelations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(Stock, dataSource);
  }
}
