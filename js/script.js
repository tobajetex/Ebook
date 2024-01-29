// Add custom JavaScript here
//call for the navbar
//apply event listener to check for scroll 
    // if scrollY >50 then add a classlist of bg dark  to the navbar
    // else remove the classlist of bg dark from the navbar
// encapsulation the above instruction in a function.
// trigger the function using document.addeventlistener on the load of the document.
// add other functionality to the navbar list the transition and the opacity. 

const navbar = document.querySelector(".navbar")


function navbarShades(){
    window.addEventListener("scroll",()=>{
        if(window.scrollY > 40){
            navbar.classList.add("scrolled")
        }
        else{
            navbar.classList.remove("scrolled")
        } 
    })
}
document.addEventListener("DOMContentLoaded",navbarShades)