import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { User } from '../../modules/users/user.entity';
import { Post } from '../../modules/posts/post.entity';
import { IDatabaseConfigAttributes } from './interfaces/dbConfig.interface';
export const databaseProviders = [
    {
        provide: SEQUELIZE,
        useFactory: async () => {
            try {
                let config;
                switch (process.env.NODE_ENV) {
                    case DEVELOPMENT:
                        config = databaseConfig.development;
                        break;
                    case TEST:
                        config = databaseConfig.test;
                        break;
                    case PRODUCTION:
                        config = databaseConfig.production;
                        break;
                    default:
                        config = databaseConfig.development;
                }
                // tslint:disable-next-line:no-console
                console.log('env', config);
                const sequelize = new Sequelize(config);
                console.log('Database created successfully or already exists');
                sequelize.addModels([User, Post]);
                await sequelize.sync();
                return sequelize;
            } catch (error) {
                // tslint:disable-next-line:no-console
                console.error(`we have an error, ${error}`);
            }
        },
    },
];
