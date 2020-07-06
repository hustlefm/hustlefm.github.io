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
  }, 10000)
})
