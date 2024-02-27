import { AllowNull, DataType, PrimaryKey, Unique } from 'sequelize-typescript';
import type { Migration } from '../../umzugMigration';

export const up: Migration = async ({ context: sequelize }) => {
    await sequelize.getQueryInterface().createTable('users', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataType.STRING,
            allowNull: false
        },
        password: {
            type: DataType.STRING,
            allowNull: false
        },
        email: {
            type: DataType.STRING,
            unique: true
        },
        phone: {
            type: DataType.INTEGER,
        },
        address: {
            type: DataType.STRING,
        },
        profilePhotoName: {
            type: DataType.STRING
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
export const down: Migration = async params => { };
