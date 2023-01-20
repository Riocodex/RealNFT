/* Template Name: Superex - NFT Marketplace HTML Template
   Author: Shreethemes
   E-mail: support@shreethemes.in
   Website: https://shreethemes.in
   Created: February 2022
   Version: 1.5.0
   File Description: Common JS file of the template(plugins.init.js)
*/

/*********************************/
/*         INDEX                 */
/*================================
 *     01)  Tiny Slider          *
 *     02)  Tobii lightbox       *
 *     03)  Shuffle JS           *
 *     04)  Selectr              *
 *     05)  Choice js            *
 *     06)  Countdown            * For Auction Items
 *     07)  Data Counter         *
 *     08)  Upload Profile       *
 *     09)  Datepicker js        *
 *     10)  Typed Text animation * (animation)
 *     11)  Connect wallet       * For MetaMask Wallet
 *     12)  Back Button          *
 *     13)  Switcher JS          *
 ================================*/

//=========================================//
/*            01) Tiny slider              */
//=========================================//

if (document.getElementsByClassName('tiny-two-item').length > 0) {
  var slider = tns({
    container: '.tiny-two-item',
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: 'bottom',
    speed: 400,
    gutter: 12,
    responsive: {
      992: {
        items: 2,
      },

      767: {
        items: 2,
      },

      320: {
        items: 1,
      },
    },
  })
}

if (document.getElementsByClassName('tiny-three-item').length > 0) {
  var slider = tns({
    container: '.tiny-three-item',
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: 'bottom',
    speed: 400,
    gutter: 12,
    responsive: {
      992: {
        items: 3,
      },

      767: {
        items: 2,
      },

      320: {
        items: 1,
      },
    },
  })
}

if (document.getElementsByClassName('tiny-four-item').length > 0) {
  var slider = tns({
    container: '.tiny-four-item',
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    nav: false,
    speed: 400,
    gutter: 12,
    responsive: {
      992: {
        items: 4,
      },

      767: {
        items: 2,
      },

      320: {
        items: 1,
      },
    },
  })
}

if (document.getElementsByClassName('tiny-three-item-nav-arrow').length > 0) {
  var slider = tns({
    container: '.tiny-three-item-nav-arrow',
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: 'bottom',
    controlsText: [
      '<i class="mdi mdi-chevron-left "></i>',
      '<i class="mdi mdi-chevron-right"></i>',
    ],
    nav: false,
    speed: 400,
    gutter: 12,
    responsive: {
      992: {
        items: 3,
      },

      767: {
        items: 2,
      },

      320: {
        items: 1,
      },
    },
  })
}

if (document.getElementsByClassName('tiny-four-item-nav-arrow').length > 0) {
  var slider = tns({
    container: '.tiny-four-item-nav-arrow',
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: 'bottom',
    controlsText: [
      '<i class="mdi mdi-chevron-left "></i>',
      '<i class="mdi mdi-chevron-right"></i>',
    ],
    nav: false,
    speed: 400,
    gutter: 12,
    responsive: {
      992: {
        items: 4,
      },

      767: {
        items: 2,
      },

      320: {
        items: 1,
      },
    },
  })
}

if (document.getElementsByClassName('tiny-five-item').length > 0) {
  var slider = tns({
    container: '.tiny-five-item',
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: 'bottom',
    speed: 400,
    gutter: 12,
    responsive: {
      1025: {
        items: 5,
      },

      992: {
        items: 3,
      },

      767: {
        items: 2,
      },

      320: {
        items: 1,
      },
    },
  })
}

if (document.getElementsByClassName('tiny-five-item-nav-arrow').length > 0) {
  var slider = tns({
    container: '.tiny-five-item-nav-arrow',
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: 'bottom',
    controlsText: [
      '<i class="mdi mdi-chevron-left "></i>',
      '<i class="mdi mdi-chevron-right"></i>',
    ],
    nav: false,
    speed: 400,
    gutter: 10,
    responsive: {
      992: {
        items: 5,
      },

      767: {
        items: 3,
      },

      320: {
        items: 1,
      },
    },
  })
}

//=========================================//
/*              02) Tobii lightbox         */
//=========================================//

try {
  const tobii = new Tobii()
} catch (err) {}

//=========================================//
/*              03) Shuffle JS             */
//=========================================//

try {
  var Shuffle = window.Shuffle

  class Demo {
    constructor(element) {
      if (element) {
        this.element = element
        this.shuffle = new Shuffle(element, {
          itemSelector: '.picture-item',
          sizer: element.querySelector('.my-sizer-element'),
        })

        // Log events.
        // this.addShuffleEventListeners()
        // this._activeFilters = []
        // this.addFilterButtons()
      }
    }

    /**
     * Shuffle uses the CustomEvent constructor to dispatch events. You can listen
     * for them like you normally would (with jQuery for example).
     */
    // addShuffleEventListeners() {
    //     this.shuffle.on(Shuffle.EventType.LAYOUT, (data) => {
    //         console.log('layout. data:', data);
    //     });
    //     this.shuffle.on(Shuffle.EventType.REMOVED, (data) => {
    //         console.log('removed. data:', data);
    //     });
    // }

    // addFilterButtons() {
    //   const options = document.querySelector('.filter-options')
    //   if (!options) {
    //     return
    //   }

    //   const filterButtons = Array.from(options.children)
    //   const onClick = this._handleFilterClick.bind(this)
    //   filterButtons.forEach(button => {
    //     button.addEventListener('click', onClick, false)
    //   })
    // }

    // _handleFilterClick(evt) {
    //   const btn = evt.currentTarget
    //   const isActive = btn.classList.contains('active')
    //   const btnGroup = btn.getAttribute('data-group')

    //   this._removeActiveClassFromChildren(btn.parentNode)

    //   let filterGroup
    //   if (isActive) {
    //     btn.classList.remove('active')
    //     filterGroup = Shuffle.ALL_ITEMS
    //   } else {
    //     btn.classList.add('active')
    //     filterGroup = btnGroup
    //   }

    //   this.shuffle.filter(filterGroup)
    // }

    // _removeActiveClassFromChildren(parent) {
    //   const {children} = parent
    //   for (let i = children.length - 1; i >= 0; i--) {
    //     children[i].classList.remove('active')
    //   }
    // }
  }

  //   document.addEventListener('DOMContentLoaded', () => {
  //     window.demo = new Demo(document.getElementById('grid'))
  //   })
} catch (err) {}

//=========================================//
/*                 04) Selectr             */
//=========================================//
try {
  new Selectr('#select-items', {searchable: false})
} catch (error) {}

//=========================================//
/*            05) Choice js                */
//=========================================//
try {
  var singleCriteria = new Choices('#choices-criteria')
  var singleCategorie = document.getElementById('choices-type')
  if (singleCategorie) {
    var singleCategories = new Choices('#choices-type')
  }
} catch (error) {}

//=========================================//
/*            06) Countdown                */
//=========================================//
try {
  var setEndDate1 = 'March 29, 2022 6:0:0'
  var setEndDate2 = 'April 03, 2022 5:3:1'
  var setEndDate3 = 'April 10, 2022 1:0:1'
  var setEndDate4 = 'April 18, 2022 1:2:1'
  var setEndDate5 = 'May 01, 2022 1:6:6'
  var setEndDate6 = 'May 15, 2022 2:5:5'
  var setEndDate7 = 'June 08, 2022 5:1:4'
  var setEndDate8 = 'June 20, 2022 1:6:3'
  var setEndDate9 = 'July 30, 2022 1:5:2'

  function startCountDownDate(dateVal) {
    var countDownDate = new Date(dateVal).getTime()
    return countDownDate
  }

  function countDownTimer(start, targetDOM) {
    // Get todays date and time
    var now = new Date().getTime()

    // Find the distance between now and the count down date
    var distance = start - now

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    )
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    // add 0 at the beginning if days, hours, minutes, seconds values are less than 10
    days = days < 10 ? '0' + days : days
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    // Output the result in an element with auction-item-x"
    document.querySelector('#' + targetDOM).textContent =
      days + ' : ' + hours + ' : ' + minutes + ' : ' + seconds

    // If the count down is over, write some text
    if (distance < 0) {
      // clearInterval();
      document.querySelector('#' + targetDOM).textContent = '00 : 00 : 00 : 00'
    }
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

  if (document.getElementById('auction-item-1'))
    setInterval(function () {
      countDownTimer(cdd1, 'auction-item-1')
    }, 1000)
  if (document.getElementById('auction-item-2'))
    setInterval(function () {
      countDownTimer(cdd2, 'auction-item-2')
    }, 1000)
  if (document.getElementById('auction-item-3'))
    setInterval(function () {
      countDownTimer(cdd3, 'auction-item-3')
    }, 1000)
  if (document.getElementById('auction-item-4'))
    setInterval(function () {
      countDownTimer(cdd4, 'auction-item-4')
    }, 1000)
  if (document.getElementById('auction-item-5'))
    setInterval(function () {
      countDownTimer(cdd5, 'auction-item-5')
    }, 1000)
  if (document.getElementById('auction-item-6'))
    setInterval(function () {
      countDownTimer(cdd6, 'auction-item-6')
    }, 1000)
  if (document.getElementById('auction-item-7'))
    setInterval(function () {
      countDownTimer(cdd7, 'auction-item-7')
    }, 1000)
  if (document.getElementById('auction-item-8'))
    setInterval(function () {
      countDownTimer(cdd8, 'auction-item-8')
    }, 1000)
  if (document.getElementById('auction-item-9'))
    setInterval(function () {
      countDownTimer(cdd9, 'auction-item-9')
    }, 1000)
} catch (error) {}

//maintenance

try {
  if (document.getElementById('maintenance')) {
    var seconds = 3599
    function secondPassed() {
      var minutes = Math.round((seconds - 30) / 60)
      var remainingSeconds = seconds % 60
      if (remainingSeconds < 10) {
        remainingSeconds = '0' + remainingSeconds
      }
      document.getElementById('maintenance').innerHTML =
        minutes + ':' + remainingSeconds
      if (seconds == 0) {
        clearInterval(countdownTimer)
        document.getElementById('maintenance').innerHTML = 'Buzz Buzz'
      } else {
        seconds--
      }
    }
    var countdownTimer = setInterval('secondPassed()', 1000)
  }
} catch (err) {}

//=========================================//
/*              07) Data Counter           */
//=========================================//

try {
  const counter = document.querySelectorAll('.counter-value')
  const speed = 2500 // The lower the slower

  counter.forEach(counter_value => {
    const updateCount = () => {
      const target = +counter_value.getAttribute('data-target')
      const count = +counter_value.innerText

      // Lower inc to slow and higher to slow
      var inc = target / speed

      if (inc < 1) {
        inc = 1
      }

      // Check if target is reached
      if (count < target) {
        // Add inc to count and output in counter_value
        counter_value.innerText = (count + inc).toFixed(0)
        // Call function every ms
        setTimeout(updateCount, 1)
      } else {
        counter_value.innerText = target
      }
    }

    updateCount()
  })
} catch (err) {}

//=========================================//
/*            08) Upload Profile           */
//=========================================//
try {
  var loadFile = function (event) {
    var image = document.getElementById(event.target.name)
    image.src = URL.createObjectURL(event.target.files[0])
  }
} catch (error) {}

//=========================================//
/*/*            09) Datepicker js          */
//=========================================//

try {
  const start = datepicker('.start', {id: 1})
  const end = datepicker('.end', {id: 1})
} catch (err) {}

//=========================================//
/*/* 10) Typed Text animation (animation) */
//=========================================//

try {
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate
    this.el = el
    this.loopNum = 0
    this.period = parseInt(period, 10) || 2000
    this.txt = ''
    this.tick()
    this.isDeleting = false
  }

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length
    var fullTxt = this.toRotate[i]
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'
    var that = this
    var delta = 200 - Math.random() * 100
    if (this.isDeleting) {
      delta /= 2
    }
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period
      this.isDeleting = true
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false
      this.loopNum++
      delta = 500
    }
    setTimeout(function () {
      that.tick()
    }, delta)
  }

  function typewrite() {
    if (toRotate === 'undefined') {
      changeText()
    } else var elements = document.getElementsByClassName('typewrite')
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type')
      var period = elements[i].getAttribute('data-period')
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period)
      }
    }
    // INJECT CSS
    var css = document.createElement('style')
    css.type = 'text/css'
    css.innerHTML =
      '.typewrite > .wrap { border-right: 0.08em solid transparent}'
    document.body.appendChild(css)
  }
  window.onload(typewrite())
} catch (err) {}

//=========================================//
/*            11) Connect wallet           */
//=========================================//
;(async function () {
  try {
    //Basic Actions Section
    const onboardButton = document.getElementById('connectWallet')

    //   metamask modal
    const modal = document.getElementById('modal-metamask')
    const closeModalBtn = document.getElementById('close-modal')

    //   wallet address
    const myPublicAddress = document.getElementById('myPublicAddress')

    //Created check function to see if the MetaMask extension is installed
    const isMetaMaskInstalled = () => {
      //Have to check the ethereum binding on the window object to see if it's installed
      const {ethereum} = window
      return Boolean(ethereum && ethereum.isMetaMask)
    }

    const onClickConnect = async () => {
      if (!isMetaMaskInstalled()) {
        //meta mask not installed
        modal.classList.add('show')
        modal.style.display = 'block'
        return
      }
      try {
        await ethereum.request({method: 'eth_requestAccounts'})
        const accounts = await ethereum.request({method: 'eth_accounts'})
        myPublicAddress.innerHTML =
          accounts[0].split('').slice(0, 6).join('') +
          '...' +
          accounts[0]
            .split('')
            .slice(accounts[0].length - 7, accounts[0].length)
            .join('')
      } catch (error) {
        console.error(error)
      }
    }

    const closeModal = () => {
      modal.classList.remove('show')
      modal.style.display = 'none'
    }

    if (isMetaMaskInstalled()) {
      const accounts = await ethereum.request({method: 'eth_accounts'})
      if (!!accounts[0]) {
        myPublicAddress.innerHTML =
          accounts[0].split('').slice(0, 6).join('') +
          '...' +
          accounts[0]
            .split('')
            .slice(accounts[0].length - 7, accounts[0].length)
            .join('')
      }
    }

    onboardButton.addEventListener('click', onClickConnect)
    closeModalBtn.addEventListener('click', closeModal)
  } catch (error) {}
})()

//=========================================//
/*/*            12) Back Button            */
//=========================================//
document
  .getElementsByClassName('back-button')[0]
  ?.addEventListener('click', e => {
    if (document.referrer !== '') {
      e.preventDefault()
      window.location.href = document.referrer
    }
  })

//=========================================//
/*            13) Switcher JS              */
//=========================================//

try {
  function toggleSwitcher() {
    var i = document.getElementById('style-switcher')
    if (i) {
      if (i.style.left === '-189px') {
        i.style.left = '0px'
      } else {
        i.style.left = '-189px'
      }
    }
  }

  function setColor(theme) {
    document.getElementById('color-opt').href = 'css/colors/' + theme + '.css'
    toggleSwitcher(false)
  }

  function setTheme(theme) {
    document.getElementById('theme-opt').href = './css/' + theme + '.min.css'
    toggleSwitcher(false)
  }
} catch (error) {}
