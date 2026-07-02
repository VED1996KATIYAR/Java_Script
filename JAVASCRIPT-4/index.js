let aa=document.querySelectorAll("h1");
//convert js to css
for(let i=0;i<aa.length;i++){
    aa[i].style.color="red";
    aa[i].style.fontSize="30px";
    aa[i].style.backgroundColor="blue"
}

let bb=document.querySelectorAll("h2");
//add class 
bb[0].classList.add("myclass")
console.dir(bb)

//toggle in claass

//b[0].classList.toggle("myclass")  //it will add class if not present and remove if present