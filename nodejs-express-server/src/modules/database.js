import sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const dbPromise = sqlite.open({
  filename: './database.db',
  driver: sqlite3.Database,
});

export default dbPromise;
