// Check if JavaScript is connected
console.log("JavaScript Connected Successfully!");

// Change heading
document.getElementById("heading").innerHTML =
    "JavaScript is Connected Successfully!";

// Change image
const img = document.getElementById("myImage");
img.src = "11.png";
img.alt = "Sample Image";
img.title = "Loaded using JavaScript";