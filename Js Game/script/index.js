let random_number = Math.floor(Math.random() * 100) + 1
let remainingAttempts = 10
let attempts = []

function start_game(){
    let chosen_one = document.getElementById("number").value
    let resetButton = document.getElementById("resetButton")
    let submitButton = document.getElementById("submit")
    if(isNaN(chosen_one) || chosen_one > 100 || chosen_one < 1){
        alert("Enter a valid number")
        return
    }
    if(attempts.includes(chosen_one)){
        alert("Ya has intentado este número")
        return
    }
    let result = document.getElementById("result")
    let letspantry = document.getElementById("attempts")

    if(chosen_one == random_number){
        result.style.display = "block"
        result.style.backgroundColor = "green"
        submitButton.disabled = true
        resetButton.style.display = "block"

        result.innerHTML = '<p style="padding: 20px; color: white;">Congratulations, you hit the number!!!</p>'
    } else if(chosen_one < random_number)
    {
        result.style.display = "block"
        result.style.backgroundColor = "red"
        result.innerHTML = '<p style="padding: 20px; color: white;">The number is too low</p>'
    } else if(chosen_one > random_number){
        result.style.display = "block"
        result.style.backgroundColor = "red"
        result.innerHTML = '<p style="padding: 20px; color: white;">The number is too high</p>'
    }
    if(remainingAttempts <= 0){
        alert("Game Over. No more attempts left. The number was " + random_number)
        submitButton.disabled = true
        resetButton.style.display = "block"
        return
    }
    attempts.push(chosen_one)
    remainingAttempts--
    letspantry.innerHTML = remainingAttempts + '<br>Previous attempts: ' + attempts.join(', ')
}

function reset_game() {
    random_number = Math.floor(Math.random() * 100) + 1
    remainingAttempts = 10
    attempts = []
    document.getElementById("resetButton").style.display = "none"
    document.getElementById("result").style.display = "none"
    document.getElementById("submit").disabled = false
    document.getElementById("attempts").innerHTML = ''
}

document.getElementById("resetButton").addEventListener("click", reset_game)