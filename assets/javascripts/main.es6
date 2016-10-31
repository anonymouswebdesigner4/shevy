const shevy = () => {
  if (isHome()) {
    trianglify()
    headerState()
  }
}

const isHome = () => {
  const bodyClasses = document.body.classList
  return /app index/.test(bodyClasses)
}

const trianglify = () => {
  const pattern = Trianglify({
    width: 1200,
    height: 1200,
    x_colors: ['#144052', '#33a1cc', '#144052'],
    y_colors: ['#144052', '#000000']
  })
  const canvas = pattern.canvas()
  const background = document.querySelector('.js-hero-background')

  background.appendChild(canvas)
  setTimeout(function() {
    document.body.classList.add('is-trianglified')
  }, 350)
}

const headerState = () => {
  const onScroll = () => {
    const scrollTop = window.scrollY
    const header = document.querySelector('.js-header')
    const headerHeight = header.offsetHeight
    const hero = document.querySelector('.js-hero')
    const heroHeight = hero.offsetHeight

    const distance = heroHeight - (scrollTop + headerHeight)

    if (distance < 0) {
      document.body.classList.add('has-solid-header')
    } else {
      document.body.classList.remove('has-solid-header')
    }
  }

  document.addEventListener('touchmove', onScroll)
  window.addEventListener('scroll', onScroll)
}

const ready = (fn) => {
  if (document.readyState != 'loading') {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

ready(shevy());