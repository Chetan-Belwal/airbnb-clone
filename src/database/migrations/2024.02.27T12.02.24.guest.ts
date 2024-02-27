import { DataType } from 'sequelize-typescript';
import type { Migration } from '../../umzugMigration';

export const up: Migration = async({context:sequelize})  => {
    await sequelize.getQueryInterface().createTable('guest',{
        id:{
            type:DataType.INTEGER
        },
        user_id:{
            type:DataType.INTEGER
        },
        creditCardNumber:{
            type:DataType.INTEGER
        },
        numOfRating:{
            type:DataType.INTEGER
        }
    })
};
export const down: Migration = async ({context:sequelize}) => {};
