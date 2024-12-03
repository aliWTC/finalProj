let button = document.getElementById("createPlan")
let par = document.getElementById("tagForForm")

// Event listener to trigger when the "Create Plan" button is clicked
button.addEventListener('click', function(){
    par.innerHTML =`
        <form id = "myForm">
            <label for="breakfast">Breakfast: </label>
            <input type = "text" id = "breakfast" /> 
            <br>
            <label for="snack1">Snack: </label>
            <input type = "text" id = "snack1"/>
            <br>
            <label for="lunch">Lunch: </label>
            <input type = "text" id = "lunch"/>
            <br>
            <label for="snack2">Snack: </label>
            <input type = "text" id = "snack2"/>
            <br>
            <label for="dinner">Dinner: </label>
            <input type = "text" id = "dinner"/>
            <hr>
            <br>
            <label for="email">Email: </label>
            <input type = "text" id = "email"/>
            <br>
            <label for="Name">Name: </label>
            <input type = "text" id = "name"/>
            <br>
            <label for="goal">Goal: </label>
            <input type = "text" id = "goal"/>
            <br>
            <input type = "button" id = "myButton" value = "Create HTML on-the-fly">
        </form>
    `


    // Event listener to clear plan when the 'Clear Plan' button is clicked
    document.getElementById('clearPlan').addEventListener('click', function(){
        location.reload()  // Reload the page
        window.alert("Plan Cleared")  // Alert message for the user
    })

    // Variables to capture form input values (this is not yet inside the event listener)
    let breakfast = document.getElementById("breakfast").value
    let snack1 = document.getElementById("snack1").value
    let lunch = document.getElementById("lunch").value
    let snack2 = document.getElementById("snack2").value
    let dinner = document.getElementById("dinner").value

    // Event listener to generate the plan when "Create HTML on-the-fly" button is clicked
    document.getElementById("myButton").addEventListener('click',myWindow)
    function myWindow()
    {
        // Variables to capture current form values when the plan is created
        let breakfast = document.getElementById("breakfast").value
        let snack1 = document.getElementById("snack1").value
        let lunch = document.getElementById("lunch").value
        let snack2 = document.getElementById("snack2").value
        let dinner = document.getElementById("dinner").value
        let name = document.getElementById("name").value

        // Initialize the content for the new window
        myText = ("<html>\n<head>\n<title>Welcome</title>\n</head>\n<body>\n");

        // Greet the user with their name
        myText+=`Hi, ${name} <br><br><hr><br>`

        // Loop to display the meal plan for 7 days
        for (i = 1; i<=7; i++){
            myText += (
                `Day ${i}` + '<br>' + 
                '<hr>' + `Breakfast: ${breakfast} <br> Snack 1: ${snack1}
                 <br> Lunch: ${lunch} <br> Snack 2: ${snack2} 
                 <br> Dinner: ${dinner} <br><br>` 
            );
        }

        // Add a button to print or save the meal plan
        myText += `<button onclick="window.print()">Print</button>`;
        myText += `<button onclick="window.download()">Download PDF</button>`;


        // Close the HTML tags
        myText += ("</body>\n</html>");



        let email = document.getElementById("email").value
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
        if (!emailPattern.test(email)) {
            window.alert("Please enter a valid email address.");
            return;  // Prevent further actions if the email is invalid
    }

        // Open a new window to display the meal plan
        flyWindow = window.open('about:blank','myPop','width=400,height=200,left=200,top=200');
        flyWindow.document.write(myText);  // Write the content into the new window
    }
})
