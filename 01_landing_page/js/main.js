const owl = $('#owl_carousel')

owl.owlCarousel({
  center: true,
  loop: true,
  margin: 30,
  startPosition: 1,
  items: 3,
  responsive: {
    0: {
      items: 1,
    },
    320: {
      items: 2,
      margin: 15,
    },
    580: {
      items: 3,
      margin: 15,
    },
    850: {},
    1000: {},
    1200: {
      margin: 30,
    },
  }
})

$('.slider__btn-prev').click(function () {
  owl.trigger('prev.owl.carousel')
})

$('.slider__btn-next').click(function () {
  owl.trigger('next.owl.carousel')
})


const navBtn = document.getElementById('nav_toggle')
const nav = document.getElementById('nav')
const menuIcon = document.getElementById('menu_icon')

navBtn.onclick = function () {
  document.body.classList.toggle('no-scroll')
  nav.classList.toggle('nav-mobile')
  menuIcon.classList.toggle('menu-icon-active')
}
