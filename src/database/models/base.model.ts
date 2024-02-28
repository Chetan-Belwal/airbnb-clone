import { AutoIncrement, Column, PrimaryKey } from 'sequelize-typescript';
import { DatesMapping } from './dates-mapping';

export class BaseModel<T> extends DatesMapping<T> {
  @AutoIncrement
  @PrimaryKey
  @Column
  public declare id: number;
}
