var tableForm = document.getElementById ("table");

tableForm.addEventListener( "submit", function (event) {
    event.preventDefault(); //STOP the submission

//Collect the form fields (DOM)
var nameInput =document.getElementById ("name");
var ageInput = document.getElementById ("age");
var classInput = document.getElementById ("class");
var cityInput = document.getElementById ("city");

// Retrieve the values from the form fields
var nameValue = nameInput.value;
var ageValue = ageInput.value;
var classValue = classInput.value;
var cityValue = cityInput.value;
//this means when submit happens, then the function of the table happens

//generating table info
 result = nameInput + ageInput + classInput + cityInput;

  var resultElement = document.getElementById("result");
  resultElement.textContent = result; //show the result in our element.

