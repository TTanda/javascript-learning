//Capture the form
var myForm = document.getElementById ("table-form");
//Listen for a form submission
myForm.addEventListener( "submit", function (event) {
    //Prevent the form from submitting
    event.preventDefault(); //STOP the submission

//Collect the form fields (DOM)
var nameField =document.getElementById ("name");
console.log (nameField);
var ageField = document.getElementById ("age");
var schoolClassField = document.getElementById ("school-class");
var cityField = document.getElementById ("city");

// Retrieve the values from the form fields
var nameValue= nameField.value;
console.log (nameValue);
var ageValue = ageField.value;
var schoolClassValue = schoolClassField.value;
var cityValue = cityField.value;
//this means when submit happens, then the function of the table happens

//Create new element (table row)
var newRow = document.createElement ("TR");
//Create new cell for the row (table data)
var nameCell = document.createElement ("TD");
nameCell.textContent = nameValue; // Add our text to the cell
console.log (nameCell);
newRow.appendChild( nameCell ); // Add our cell to the table


//Create new cell for the row (table data)
var ageCell = document.createElement ("TD");
ageCell.textContent = ageValue; // Add our text to the cell
newRow.appendChild( ageCell ); // Add our cell to the table

//Create new element (table row)
//Create new cell for the row (table data)
var schoolClassCell = document.createElement ("TD");
schoolClassCell.textContent = schoolClassValue; // Add our text to the cell
newRow.appendChild( schoolClassCell ); // Add our cell to the table

//Create new element (table row)
//Create new cell for the row (table data)
var cityCell = document.createElement ("TD");
cityCell.textContent = cityValue; // Add our text to the cell
newRow.appendChild( cityCell ); // Add our cell to the table
console.log (newRow);
//Target your table body
var tableBody = document.getElementById ("table-body");
tableBody.appendChild (newRow);// inject the brand new row, so the user can see it


} );

 

 
