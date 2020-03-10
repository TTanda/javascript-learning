//Capture the form
var myForm = document.getElementById ("todo-form");

function deleteRow( element ) {
    var todoRow = element.parentNode.parentNode;// go two levels up from button to get row - from tabledata, then to tablerow
    todoRow.parentNode.removeChild(todoRow); // An element cannot delete itself, so we have to tell the parent to do it for us
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
var todoitem =document.getElementById ("todo");


// Retrieve the values from the form fields
var todoitemValue= todoitemField.value;

//this means when submit happens, then the function of the table happens

//Create new element (table row)
var newRow = document.createElement ("TR");
//Create new cell for the row (table data)
var nameCell = document.createElement ("TD");
nameCell.textContent = nameValue; // Add our text to the cell

newRow.appendChild( nameCell ); // Add our cell to the table

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
