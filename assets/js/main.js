let output = document.getElementById("output")

function klick() {
    const number1 = document.getElementById("number1").value
    const number2 = document.getElementById("number2").value
    output.innerHTML = number1 - number2
}