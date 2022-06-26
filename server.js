const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()


let db,
      dbConnectionString = process.env.DB_STRING, 
      dbName = 'rap',
      collection


MongoClient.connect(dbConnectionString)
    .then(client =>{
        console.log('connected to the database')
        db = client.db(dbName)
        collection = db.collection('rappers')    
    })     

// set a view engine
app.set('view engine', 'ejs')
// deploy public folder for the css and client side js 
app.use(express.static('public'))  
app.use(express.urlencoded({extended : true}))  
app.use(express.json())


app.get('/', (req, res) =>{
    res.render('index.ejs')
})




// PORT 8000

app.listen(process.env.PORT || PORT, () =>{
    console.log(`server is running on port`)
})

