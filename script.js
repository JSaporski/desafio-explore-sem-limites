const sectionCards = document.querySelector('.cards')
const halfHeightScreen = window.innerHeight * 0.5

function handleShowCards() {
  const sectionCardsTop = sectionCards.getBoundingClientRect().top
  const verifyIfPassedCardsSection = sectionCardsTop < halfHeightScreen

  if (verifyIfPassedCardsSection) {
    sectionCards.classList.add('active')
  } else {
    sectionCards.classList.remove('active')
  }
}

window.addEventListener('scroll', handleShowCards)
