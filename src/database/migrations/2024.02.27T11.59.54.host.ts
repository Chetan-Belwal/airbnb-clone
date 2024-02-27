import { DataType } from 'sequelize-typescript';
import type { Migration } from '../../umzugMigration';

export const up: Migration = async ({context:sequelize}) => {
    await sequelize.getQueryInterface().createTable('host',{
        id:{
            type:DataType.INTEGER
        },
        user_id:{
            type:DataType.INTEGER
        },
        BankAccountNumber:{
            type:DataType.INTEGER
        },
        NumberOfListing:{
            type:DataType.INTEGER
        },
        created_at: {
            type: DataType.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP()'),
        },
        updated_at: {
            type: DataType.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP()'),
        }
        
    })
};
export const down: Migration = async params => {};
