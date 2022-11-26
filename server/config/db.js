const mysql = require('mysql')

const db = mysql.createConnection({
host: "192.168.1.172",
user: "bactran",
password: "backhung",
database:"blog_posts" 
})

module.exports = db;