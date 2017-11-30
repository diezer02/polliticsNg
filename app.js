var express = require('express');
const http = require('http');
const path = require('path');
const PORT = process.env.PORT || 4200

express()
  .use(express.static(path.join(__dirname, 'dist')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('dist/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))