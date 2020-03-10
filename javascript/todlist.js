//Active list
var activeList = document.querySelector("ul");
// Completed list
var completedList = document.querySelector("ul:last-of-type");

//Retrieve input
var newTask = document.querySelector("name="new- task" );
//Form
var form = document.querySelector("form");

//Listen for a form submission
myForm.addEventListener("submit", function (event) {

    //Prevent the form from submitting
    event.preventDefault(); //STOP the submission

    activeList.innerHTML += `
<li>
    <input type="checkbox">
    ` + newTask.value + `
    <button>Delete </button>
</li>
`;

    var newCheckboxes = document.querySelectorAll("ul [type=checkbox]");
    for (var i = 0; i < newCheckboxes.length; i++) {
        var newCheckbox = newCheckboxes[i];
        var li = newCheckbox.parentNode;
        var button = li.children[2];
        button.addEventListener("click", function (event) {
            var isInActiveList = false;
            for (var i = 0; i < activeList.children.length; i++) {
                if (li == activeList.children[i]) {
                    isInActiveList = true;
                }
            }
            if (isInActiveList) {
                activeList.removeChild(li);
            } else {
                completedList.removeChild(li);
            }
        });

        //Listen for click
        newCheckboxbox.addEventListener("click", function (event) {
            li.removeChild(newCheckbox);
            completedList.appendChild(li);

        });
