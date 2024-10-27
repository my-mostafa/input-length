const tt = document.querySelector("#tt")
const counter = document.querySelector(".counter")
const fin = tt.getAttribute("maxlength")
tt.addEventListener("keyup", function(){
    counter.innerHTML = fin - tt.value.length
})
