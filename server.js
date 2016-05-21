#!/usr/bin/env node
'use strict'

var http = require('http');
var express = require('express');
var app = express();

app.use(express.static('website'));
app.use(express.static('data'));

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});


