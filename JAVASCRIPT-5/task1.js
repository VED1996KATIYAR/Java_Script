let ab=document.getElementById("abc")
ab.textContent="Welcome to my website"
ab.style.color="green"

let abc=document.querySelectorAll("li")
for(let i=0;i<abc.length;i++){
    console.log(abc[i].textContent)
}

let a=document.querySelector("a")
a.href="https://www.facebook.com"

let div=document.querySelector("div")
div.title="This is a div element"