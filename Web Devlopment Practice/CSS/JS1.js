let a = document.querySelector('button')
a.addEventListener('click', Input)

function Input(){
    let b = prompt("Enter The Name: ")
    a.textContent = "Roll No 1: " + b;
}