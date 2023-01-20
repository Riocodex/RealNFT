var setEndDate1 = 'May 29, 2022 6:0:0'
var setEndDate2 = 'June 03, 2022 5:3:1'
var setEndDate3 = 'June 10, 2022 1:0:1'
var setEndDate4 = 'June 18, 2022 1:2:1'
var setEndDate5 = 'July 01, 2022 1:6:6'
var setEndDate6 = 'July 15, 2022 2:5:5'
var setEndDate7 = 'Aug 08, 2022 5:1:4'
var setEndDate8 = 'Aug 20, 2022 1:6:3'
var setEndDate9 = 'Sep 30, 2022 1:5:2'

function startCountDownDate(dateVal) {
  var countDownDate = new Date(dateVal).getTime()
  return countDownDate
}
var cdd1 = startCountDownDate(setEndDate1)
var cdd2 = startCountDownDate(setEndDate2)
var cdd3 = startCountDownDate(setEndDate3)
var cdd4 = startCountDownDate(setEndDate4)
var cdd5 = startCountDownDate(setEndDate5)
var cdd6 = startCountDownDate(setEndDate6)
var cdd7 = startCountDownDate(setEndDate7)
var cdd8 = startCountDownDate(setEndDate8)
var cdd9 = startCountDownDate(setEndDate9)

const countDownTimer = (start, targetDOM) => {
  // Get todays date and time
  var now = new Date().getTime()
  // Find the distance between now and the count down date
  let distance
  if (start === 'cdd1') {
    distance = cdd1 - now
  } else if (start === 'cdd2') {
    distance = cdd2 - now
  } else if (start === 'cdd3') {
    distance = cdd3 - now
  } else if (start === 'cdd4') {
    distance = cdd4 - now
  } else if (start === 'cdd5') {
    distance = cdd5 - now
  } else if (start === 'cdd6') {
    distance = cdd6 - now
  } else if (start === 'cdd7') {
    distance = cdd7 - now
  } else if (start === 'cdd8') {
    distance = cdd8 - now
  } else if (start === 'cdd9') {
    distance = cdd9 - now
  }
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24))
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((distance % (1000 * 60)) / 1000)

  // add 0 at the beginning if days, hours, minutes, seconds values are less than 10
  days = days < 10 ? '0' + days : days
  hours = hours < 10 ? '0' + hours : hours
  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds
  // Output the result in an element with auction-item-x"
  // document.querySelector('#' + targetDOM).textContent =
  // Output the result in an element with auction-item-x"
  document.getElementById(targetDOM).innerText =
    days + ' : ' + hours + ' : ' + minutes + ' : ' + seconds
  if (distance < 0) {
    document.getElementById(targetDOM).innerText = '00 : 00 : 00 : 00'
  }
  // if (distance < 0) {
  //   return '00 : 00 : 00 : 00'
  // } else {
  //   return days + ' : ' + hours + ' : ' + minutes + ' : ' + seconds
  // }
}

export default countDownTimer
