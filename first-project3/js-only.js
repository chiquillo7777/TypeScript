const button = document.querySelector("button")
const input1 = document.getElementById("num1")
const input2 = document.getElementById("num2")

button.addEventListener("click", function(){
    return console.log(input1.value+input2.value)
})