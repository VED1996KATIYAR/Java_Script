const abcd=document.getElementById("abcd");
abcd.innerText="JavaScript Connection Test";

const img=document.querySelector("img");
img.src="profilecard.png";


//create a new element
//append :: at last
//prepend :: at first

let h2=document.createElement("h2");
h2.textContent="This is a new heading";
document.querySelector("body").append(h2);
let h3=document.createElement("h3");
h3.textContent="This is a new heading 3";
document.querySelector("body").prepend(h3);