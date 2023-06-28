const sectionCards = document.querySelector('.cards')
const halfHeightScreen = window.innerHeight * 0.5

function handleShowCards() {
  const sectionCardsTop = sectionCards.getBoundingClientRect().top
  const verifyIfPassedCardsSection = halfHeightScreen > sectionCardsTop

  if (verifyIfPassedCardsSection) {
    sectionCards.classList.add('active')
  }
}

window.addEventListener('scroll', handleShowCards)
