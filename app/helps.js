const express = require('express');
const helps = express.Router();

helps.get('/', (req, res) => {
  res.render('helps', {
    layout: './layouts/default',
    title: 'Help |'
  })
})

module.exports = helps;