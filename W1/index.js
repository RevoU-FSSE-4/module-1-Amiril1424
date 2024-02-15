function calculate() {
    const phi = 3.141592654
    let diameter = document.getElementById("diameter1").value;
    let thickness = document.getElementById("thickness1").value;

    let result = phi * ((diameter ** 4) - (diameter - 2 * thickness) ** 4) / (32 * diameter) / 1000;

    alert(result)
}

function myFunction() {
    alert("Thank You for Joining Us!");
}

