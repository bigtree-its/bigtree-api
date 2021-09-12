'use strict';

const apickli = require('apickli');
const { Before } = require('@cucumber/cucumber');

Before(function() {
    this.apickli = new apickli.Apickli('http', 'httpbin.org');
    this.apickli.addRequestHeader('Cache-Control', 'no-cache');
    // this.apickli.setDefaultTimeout(60 * 1000); // this is in ms
});