// Make sure to install the 'pg' package 
import { drizzle } from 'drizzle-orm/node-postgres';
// You can specify any property from the node-postgres connection options
import {Pool} from "pg"

 const pool=new Pool({
    connectionString:process.env.DATABASE_URL,
 })

 export const db=drizzle(pool)
