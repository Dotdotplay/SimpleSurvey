const form = document.getElementById('form');

//An event listener for when the submit button is pressed 
form.addEventListener('submit', (e) => {
    let messages = [];
    let RadioCheckNo = document.getElementById("Under18");
    let checkboxes = document.getElementsByName("Ethnicity");
    let isCheckboxChecked = false;

    // checks if the Radio button for being over 18 is checked
    if(RadioCheckNo.checked === true) {
        messages.push("Age Must be Over 18");
    }

    // Goes through the checkboxes array to see if at least one checkbox is checked 
    for(let i = 0; i < checkboxes.length; i++)
    {
        if(checkboxes[i].checked)
        {
            isCheckboxChecked = true;
        }
    }


    if(isCheckboxChecked === false) {
        messages.push("Must choose an Ethnicity");
    }

    // Alerts the User if something is missing from the form 
    if(messages.length > 0) {
        e.preventDefault();
        alert(messages[0]);
    }

});

 