import * as mariadb from "mariadb"
import { PoolConnection } from "mariadb";
import { logger } from "../middlewares/log";

export class Mariadb {

    private pool: mariadb.Pool | null = null;
    public connection: PoolConnection | null = null;

    constructor() {

        this.pool = mariadb.createPool({
            host: process.env.DBHOST,
            user: process.env.DBUSER,
            password: process.env.DBPASSWORD,
            port: Number(process.env.DBPORT),
            connectionLimit: 5
        });

        this.init();
    }

    private async init(){
        if (this.pool != null) {
            try {
                this.connection = await this.pool.getConnection()
                logger.info(`connected to : jdbc:mariadb://${process.env.DBHOST}:${process.env.DBPORT}/`)
            } catch (error) {
                logger.error(error);
            }
        }
    }
    
}

