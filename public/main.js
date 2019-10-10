// Shorthand for document.querySelector
const x = (element) => document.querySelector(element)

let teamOneScore = 0
let teamTwoScore = 0

// Adds one to the current score every time the function is called
const teamOneAddOne = () => {
  x('.team-1-score').textContent = teamOneScore += 1
  if (teamOneScore === 10) {
    x('.team-1-score').style.color = "red"
    alert('Team 1 has won the game!')
  } else {
    x('.team-1-score').style.color = "black"
  }
}
const teamTwoAddOne = () => {
  x('.team-2-score').textContent = teamTwoScore += 1
}

// Subtracts one to the current score every time the function is called
const teamOneSubtractOne = () => {
  x('.team-1-score').textContent = teamOneScore -= 1
  if (teamOneScore === 10) {
    x('.team-1-score').style.color = "red"
  } else {
    x('.team-1-score').style.color = "black"
  }
}
const teamTwoSubtractOne = () => {
  x('.team-2-score').textContent = teamTwoScore -= 1
}

// This function takes the value that the user enters, and replaces the 'Team 1' name with the entered value
const updateTeamOneName = () => {
  const teamOneName = x('.team-1-input').value
  x('.team-1-name').textContent = teamOneName
  x('.team-1-input').value = ''
}
const updateTeamTwoName = () => {
  const teamTwoName = x('.team-2-input').value
  x('.team-2-name').textContent = teamTwoName
  x('.team-2-input').value = ''
}

// When the user clicks on the input field, change the background color to 'whitesmoke'
const teamOneInputBG = () => {
  x('.team-1-input').style.backgroundColor = "whitesmoke"
}
const teamTwoInputBG = () => {
  x('.team-2-input').style.backgroundColor = "whitesmoke"
}

// When the user clicks out of the input field, change the background back to its original color
const teamOneInputNoBG = () => {
  x('.team-1-input').style.backgroundColor = ""
}
const teamTwoInputNoBG = () => {
  x('.team-2-input').style.backgroundColor = ""
}

const main = () => {
  // This is telling the browser that when the user clicks on the input field, call these functions
  x('.team-1-input').addEventListener('focus', teamOneInputBG)
  x('.team-2-input').addEventListener('focus', teamTwoInputBG)
  x('.team-1-input').addEventListener('blur', teamOneInputNoBG)
  x('.team-2-input').addEventListener('blur', teamTwoInputNoBG)
  
  // Displays the current score
  x('.team-1-score').textContent = teamOneScore
  x('.team-2-score').textContent = teamTwoScore

  // This is telling the browser that when the .team-1-add-button is clicked, call the teamOneAddOne function
  x('.team-1-add-button').addEventListener('click', teamOneAddOne)
  // This is telling the browser that when the .team-1-subtract-button button is clicked, call the teamOneSubtractOne function
  x('.team-1-subtract-button').addEventListener('click', teamOneSubtractOne)
  // This is telling the browser that when the .team-2-add-button is clicked, call the teamTwoAddOne function
  x('.team-2-add-button').addEventListener('click', teamTwoAddOne)
  // This is telling the browser that when the .team-2-subtract-button button is clicked, call the teamTwoSubtractOne function
  x('.team-2-subtract-button').addEventListener('click', teamTwoSubtractOne)

  // This is telling the browser that when the .update-team-1-name button is clicked, call the updateTeamOneName function
  x('.update-team-1-name').addEventListener('click', updateTeamOneName)
  // This is telling the browser that when the .update-team-2-name button is clicked, call the updateTeamTwoName function
  x('.update-team-2-name').addEventListener('click', updateTeamTwoName)

}

// This is telling the browser that once the DOM is loaded, call the 'main' function
document.addEventListener('DOMContentLoaded', main)