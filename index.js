let input = document.getElementById('input')

let button = document.querySelectorAll('button')
button.forEach(function(value){
    value.addEventListener('click',()=>{
       if(value.innerHTML == "="){
        input.innerHTML = eval(input.innerHTML)
       }
       else if(value.innerHTML == "C"){
        input.innerHTML = ""
       }
       else{
        input.innerHTML += value.innerHTML
       }
    })
})