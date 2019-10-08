let teamOneScore = 0
let teamTwoScore = 0

// Adds one to the current score every time the function is called
const teamOneAddOne = () => {
  document.querySelector('.team-1-score').textContent = teamOneScore += 1
  if (teamOneScore === 10) {
    document.querySelector('.team-1-score').style.color = "red"
    alert('Team 1 has won the game!')
  } else {
    document.querySelector('.team-1-score').style.color = "black"
  }
}
const teamTwoAddOne = () => {
  document.querySelector('.team-2-score').textContent = teamTwoScore += 1
}

// Subtracts one to the current score every time the function is called
const teamOneSubtractOne = () => {
  document.querySelector('.team-1-score').textContent = teamOneScore -= 1
  if (teamOneScore === 10) {
    document.querySelector('.team-1-score').style.color = "red"
  } else {
    document.querySelector('.team-1-score').style.color = "black"
  }
}
const teamTwoSubtractOne = () => {
  document.querySelector('.team-2-score').textContent = teamTwoScore -= 1
}

const main = () => {
  // Displays the current score
  document.querySelector('.team-1-score').textContent = teamOneScore
  document.querySelector('.team-2-score').textContent = teamTwoScore

  // This is telling the browser that when the .team-1-add-button is clicked, call the teamOneAddOne function
  document.querySelector('.team-1-add-button').addEventListener('click', teamOneAddOne)
  // This is telling the browser that when the .team-1-subtract-button button is clicked, call the teamOneSubtractOne function
  document.querySelector('.team-1-subtract-button').addEventListener('click', teamOneSubtractOne)
  // This is telling the browser that when the .team-2-add-button is clicked, call the teamTwoAddOne function
  document.querySelector('.team-2-add-button').addEventListener('click', teamTwoAddOne)
  // This is telling the browser that when the .team-2-subtract-button button is clicked, call the teamTwoSubtractOne function
  document.querySelector('.team-2-subtract-button').addEventListener('click', teamTwoSubtractOne)


}

// This is telling the browser that once the DOM is loaded, call the 'main' function
document.addEventListener('DOMContentLoaded', main)