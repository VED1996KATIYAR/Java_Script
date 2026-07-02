let h1=document.querySelectorAll("h1")
h1[0].textContent="Hello Bro How are you"
h1[1].textContent="Hello Bro How are you"
let h2=document.querySelectorAll("h2")
h2[0].innerText="Hello Bro How are you"
h2[1].innerText="Hello Bro How are you"


//attribute
// Select the anchor tag
let link = document.querySelector("a");

// ======================
// Get Attribute
// ======================
console.log("Href:", link.getAttribute("href"));
console.log("Target:", link.getAttribute("target"));

// ======================
// Set Attribute
// ======================
link.setAttribute("href", "https://www.github.com");
link.setAttribute("target", "_self");

console.log("New Href:", link.getAttribute("href"));

// ======================
// Remove Attribute
// ======================
// Uncomment this line to remove href
// link.removeAttribute("href");