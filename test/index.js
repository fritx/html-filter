'use strict'
require('./_setup')
const cases = require('./_cases')
const filter = require('../')
const should = require('should')

describe('html-filter', () => {
  cases.forEach((item) => {
    it(item[0], () => {
      filter(item[1]).should.be.eql(item[2])
    })
  })
})
