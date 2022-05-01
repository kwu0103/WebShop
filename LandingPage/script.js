const bannerText = document.getElementById('banner-text')

const headers = [
  'We offer a solution for every audio challenge!',
  'For over 75 years, our microphones, professional headphones and wireless systems come with a built-in mission: to stay true to the sound and soul the music was given by its artist. ',
  'Buy your headphones from us!'
]

function alternateBannerText () {
  setInterval(() => {
    bannerText.textContent = headers[Math.floor(Math.random() * headers.length)]
  }, 2500)
}

alternateBannerText()
