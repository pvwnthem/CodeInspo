const express = require('express');
const cors = require('cors')


const posts = require('./routes/posts')
const path = require('path')
const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/posts', posts)
const port = process.env.PORT || 8000


app.use(express.static('build'))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})


app.listen(port, () => {
    console.log('listening on ', port)
})