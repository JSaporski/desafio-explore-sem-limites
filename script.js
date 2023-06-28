function initShowCards() {
  const sectionCards = document.querySelector('.cards')
  const halfHeightScreen = window.innerHeight * 0.5

  if (sectionCards) {
    function handleShowCards() {
      const sectionCardsTop = sectionCards.getBoundingClientRect().top
      const verifyIfPassedCardsSection = sectionCardsTop < halfHeightScreen

      if (verifyIfPassedCardsSection) sectionCards.classList.add('active')
      else sectionCards.classList.remove('active')
    }

    window.addEventListener('scroll', handleShowCards)
  }
}

initShowCards()
