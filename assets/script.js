
var popup = document.querySelector(".popup")
var popcont= document.querySelector(".popup-cont")
console.log("hello")
 function change(){

    popup.style.display="block"
    popcont.style.display = "block"
    console.log("hello")
}

var cancel =document.querySelector(".cancel")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    
    popup.style.display="none"
    popcont.style.display = "none"
       
})

var add = document.querySelector(".add")
var container = document.querySelector(".container")
var heading = document.getElementById("heading")
var author = document.getElementById("author")
var decription = document.getElementById("description")

add.addEventListener("click",function(event){
    event.preventDefault()
      var div = document.createElement("div")
      div.setAttribute("class","sub-container")
      div.innerHTML = `
      <h2>${heading.value}</h2>
      <p>${decription.value}</p>
      <br>
      <h4> Author :${author.value}</h4>
      <button onclick="del(event)">Del</button>`
      container.append(div)
      popup.style.display="none"
      popcont.style.display = "none"

})

var delet = document.querySelector(".del")

function del(event){
    event.target.parentElement.remove()
}