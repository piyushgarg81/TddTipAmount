function getTipAmount(billAmount, tipRate){
  var tip = Math.round(billAmount * tipRate * 100) / 100
  return tip
}

function getTotalAmount(billAmount, tipRate){
  var tip = Math.round(billAmount * tipRate * 100) / 100
  var totalAmount = billAmount + tip
  return totalAmount
}

exports.getTipAmount = getTipAmount
exports.getTotalAmount = getTotalAmount




// function getTipAmount (billAmount, tipRate = 0.20) {
//   const tipAmount = billAmount * tipRate
// }

// const isLeapYear = (year) => {
//   return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
// }
//
// exports.isLeapYear = isLeapYear
