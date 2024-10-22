
    //-------PROBLEM--------

    // Q# The Age Calculator: Forgot how old someone is?
    // Calculate it!
    // a. Store the current year in a variable.
    // b. Store their birth year in a variable.
    // c. Calculate their 2 possible ages based on the stored
    // values.
    // Output them to the screen like so: “They are either NN or NN
    // years old”.

    // --------SOLUTION--------

    //a. Store the current year in a variable.
    // let currentYear = new Date().getFullYear();

    // // b. Store their birth year in a variable.
    // let birthYear = 1990;

    //  // c. Calculate their 2 possible ages based on the stored values.
    //  let age1 = currentYear - birthYear;
    //  let age2 = age1 - 1;
     
    //  document.write(`The person is either ${age1} or ${age2} years old.`);
    //  document.write('<h1>Age Calculator</h1>');
    //  document.write(`Current Year : ${currentYear} <br>`);
    //  document.write(`Birth Year : ${birthYear} <br>`);
    //  document.write(`Your Age is : ${age1}`);

            //--------Age Calculator Project--------
    function getDate() {
        // Get the values from the input fields
        let birthInput = document.getElementById('birthDate').value;
        let currentInput = document.getElementById('currentDate').value;
    
        // Validate if both dates are provided
        if (!birthInput || !currentInput) {
            alert('Please enter both Date of Birth and Current Date.');
            return;
        }
    
        // Convert input values to Date objects
        let birthDate = new Date(birthInput);
        let currentDate = new Date(currentInput);
    
        // Calculate age
        let age = currentDate.getFullYear() - birthDate.getFullYear();
        let monthDifference = currentDate.getMonth() - birthDate.getMonth();
    
        // Adjust age if the birthday hasn't occurred yet this year
        if (monthDifference < 0 || (monthDifference === 0 && 
            currentDate.getDate() < birth.getDate())) {
            age--;
        }
    
        // Display the result
        document.getElementById('currentAge').textContent =
         `Your age is ${age} years.`;

    }
    