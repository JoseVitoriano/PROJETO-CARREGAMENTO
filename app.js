import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function criarConeccao() {

    const db = await open({
        filename: './banco.db',
        driver: sqlite3.driver,

    });


    db.run('CREATE TABLE IF NOT EXISTS carregos(id INTERGER PRIMARY KEY, deposito TEXT, motorista TEXT, tipo TEXT, cubagem NUMBER, data TEXT)');
    
}

criarConeccao();