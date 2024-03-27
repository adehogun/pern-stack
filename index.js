const express = require ('express')
require ('colors');
require ("dotenv").config()

const {Pool} = require('pg');

const port = process.env.PORT || 8080
const app = express()
const pool = new Pool({
  // user: "dgevkybf",
  // database: "dgevkybf",
  // host: "surus.db.elephantsql.com",
  // password: "TV-NSaBq2CH-Si4tMClA3vgXcYUyH1aT",
  // port: 5432,
  connectionString: process.env.CONNECTION_URI,
});
app.get('/', async (req, res) => {
  const result = await pool.query('SELECT NOW();');
  console.log(result);
    // sending hello world
    res.send('Pern Stack App is working now')
  });

app.listen(port,() =>{
    // console log and selecting a color to display on the terminal
    console.log(`Pern Stack Listening on http://localhost:${port}`.bgGreen);

});