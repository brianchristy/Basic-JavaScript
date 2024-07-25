const inputEl= document.querySelector(".input");
const bodyEl=document.querySelector("body")

inputEl.checked =JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody(){
    if (inputEl.checked){
        bodyEl.style.background="#040c0e"
    }else{
        bodyEl.style.background="#525b56"
    }
}

inputEl.addEventListener("input", () => {
    updateBody()
    updateLocalStorage()
});

function updateLocalStorage(){
    localStorage.setItem("mode",JSON.stringify(inputEl.checked));
}