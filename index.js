function calculate() {
    const phi = 3.141592654
    let diameter = document.getElementById("diameter1").value;
    let thickness = document.getElementById("thickness1").value;

    let result = phi * ((diameter ** 4) - (diameter - 2 * thickness) ** 4) / (32 * diameter) / 1000;
    let resultRound = result.toFixed(2);
    document.getElementById("resultQ").innerHTML = "The section modulus value is: " + resultRound + " cm^3";
    // alert(result);
}

function myFunction() {
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let fullName = firstName + " " + lastName;
    alert("Hello " + fullName + "! Thank You for Joining Us!");
}

