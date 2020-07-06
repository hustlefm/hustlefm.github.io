window.addEventListener('load', function () {
  var timer = 10
  var countDown = setInterval(function () {
    var element = document.getElementById('countdown')

    element.innerText = timer + ''

    timer--
  }, 1000)

  setTimeout(function () {
    clearInterval(countDown)

    ym(41224924,'reachGoal','redirect')

    window.location.href = 'http://radio-hustle.com'
  }, 10000)
})
