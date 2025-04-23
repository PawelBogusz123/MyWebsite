let punkty = 0;
//document.write("skibidi");

const userName = document.querySelector("#name");
const btn = document.querySelector("button");
const display = document.querySelector(".display");


/*btn.addEventListener("click", function(){
    const paragraph = document.createElement("p");
    paragraph.style.color = "#f00";
    paragraph.textContent = userName.value;
    
    display.append(paragraph);   

});*/

btn.addEventListener("click", function(event){
    event.preventDefault();
    PokazywanieTekst()
    
});

function PokazywanieTekst(){
    display.replaceWith(`Dziękuje ${userName.value}, upewnie się aby zkontaktować się z tobą jak najszybciej!`)  
}

