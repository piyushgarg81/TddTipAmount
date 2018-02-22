const expect = require('chai').expect;
const getTipAmount = require('./tip-amount.js').getTipAmount
const getTotalAmount = require('./tip-amount.js').getTotalAmount

describe('getTipAmount function', function(){

  it('returns tip amount for the billAmount', function(){
    // const result = isLeapYear(1901)
    // expect(result).to.equal(false)
    const tip = getTipAmount(100, 0.2)
    // const total = getTipAmount(100, 0.2)
    expect(tip).to.equal(20)
    // expect(total).to.equal(120)
  })
  it('returns tip amount for the billAmount', function(){
    // const result = isLeapYear(1901)
    // expect(result).to.equal(false)
    const tip = getTipAmount(96, 0.15)
    expect(tip).to.equal(14.40)
  })
})

describe('getTotalAmount function', function(){

  it('returns total amount for the billAmount', function(){
    // const result = isLeapYear(1901)
    // expect(result).to.equal(false)
    const total = getTotalAmount(100, 0.2)
    // const total = getTipAmount(100, 0.2)
    expect(total).to.equal(120)
    // expect(total).to.equal(120)
  })
  it('returns tip amount for the billAmount', function(){
    // const result = isLeapYear(1901)
    // expect(result).to.equal(false)
    const total = getTotalAmount(96, 0.15)
    expect(total).to.equal(110.40)
  })
})
