//Capture the form
var myForm = document.getElementById ("table-form");

function deleteRow( element ) {
    var tableRow = element.parentNode.parentNode;// go two levels up from button to get row - from tabledata, then to tablerow
    tableRow.parentNode.removeChild(tableRow); // An element cannot delete itself, so we have to tell the parent to do it for us
}
var allButtons = document.querySelectorAll("td > button");    
for ( var i=0; i < allButtons.length; i++ ) {
    allButtons[i].addEventListener( "click", function (event ) {
        deleteRow(this);
    } );

} 
//Listen for a form submission
myForm.addEventListener( "submit", function (event) {
    //Prevent the form from submitting
    event.preventDefault(); //STOP the submission

//Collect the form fields (DOM)
var nameField =document.getElementById ("name");
var ageField = document.getElementById ("age");
var schoolClassField = document.getElementById ("school-class");
var cityField = document.getElementById ("city");

// Retrieve the values from the form fields
var nameValue= nameField.value;
var ageValue = ageField.value;
var schoolClassValue = schoolClassField.value;
var cityValue = cityField.value;
//this means when submit happens, then the function of the table happens

//Create new element (table row)
var newRow = document.createElement ("TR");
//Create new cell for the row (table data)
var nameCell = document.createElement ("TD");
nameCell.textContent = nameValue; // Add our text to the cell

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

// Create our delete button
var deleteButton=document.createElement("Button");
deleteButton.textContent = "Delete Row"; //Add text
//These elements are being dynamically added - the eventlistener we added earlier wouldn't see it, we have to add listeners as we are making them.
deleteButton.addEventListener("click", function (event) {
    deleteRow(this);
} );
var actionCell = document.createElement ("TD"); // Create the action cell
actionCell.appendChild (deleteButton); // Adds tje button inside
newRow.appendChild (actionCell); // This  addes this new cell to the existing row as well
//Target your table body
var tableBody = document.getElementById ("table-body");
tableBody.appendChild (newRow);// inject the brand new row, so the user can see it


} );

 

 
