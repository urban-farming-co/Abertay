var schema  = 'urbanfarming';
var vcapServices = require('./vcapServices');
var fs      = require('fs');
var conStr  = vcapServices.elephantsql[0].credentials.uri;
var pg      = require('pg');
var Client  = require('pg').Client;
var table   = 'livedateyo';
var processed = "processeddata";
var processedData = schema + "." + processed;
var liveData = schema + "." + table;

var express = require("express");
var port = 8000;
var clientPromise;

function askDatabase( sql, callback ) {
    console.log(sql)
        if (clientPromise == null) {
            clientPromise = pg.connect(conStr);
        }   
    clientPromise.then(function (client) {
        client.query(sql, callback);
    })  
}   


function  listTables(callback){ 
    var tableCheck = "SELECT table_name FROM information_schema.tables WHERE table_schema='"+schema+"'";
    askDatabase(tableCheck, function(err, row) {
        if (err) {console.error(err)}
        console.log(row);
        tables = ["", "", ""];
        for (var n =0; n<row.rowCount ; n++){
            tables[n] = schema +"."+ row.rows[n].table_name;
        }
        callback(tables);
    })
}


var app = express();
app.listen(port, (err)=> {
    if (err) {
        return console.error(err);
    }
    console.log("server is listening on port "+port);
})
app.get('/', (req, res) => {
    // list tables
    listTables( (c)=> {
        res.write(JSON.stringify(c ));

        res.end();
    })
})

