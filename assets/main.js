//Assignment 1
function greeting () {
  const inputName = document.getElementById('name').value;
  const greet = document.getElementById('greeting')
  greet.textContent = "Hello "+inputName+ ", welcome to the bootcamp";
}