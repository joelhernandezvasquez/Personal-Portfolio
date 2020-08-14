// VARIABLES

const menuIconBtn = document.querySelector(".menu-icon");
const backdropMenu = document.querySelector(".backdrop-menu");
const closeBackdropMenuBtn = document.querySelector(".close-icon");
const backdropMenuHeading = backdropMenu.querySelector(".menu-header h2");
const menuItems = Array.from(backdropMenu.querySelectorAll(".items"));
const backdropMenuFooter = backdropMenu.querySelector(".menu-footer");
const boxInput = document.querySelector(".contact-us-inputs");
const errorFormMessage = boxInput.querySelector(".error-form");
const submitBtn = document.querySelector(".btn-submit");
const backdropFormSubmitted = document.querySelector(".backdrop-form-submited");
const succesfullMessageModal = document.querySelector(".succesfullMessageModal");


// METHODS

const openMenu = (e) =>
{
  backdropMenu.classList.toggle("visible");
  backdropMenuHeading.classList.add("show");

  gsap.to(menuItems,{opacity:1,stagger:.4,duration:2,ease:"back.out(1.7)"})
  


  TweenMax.from(backdropMenuFooter,1,moveUp);
  
}

const closeBackdropMenu = () =>
{
    backdropMenu.classList.toggle("visible");
    backdropMenuHeading.classList.remove("show");
  
  menuItems.forEach(item =>{
    item.classList.remove("show");
  });
}

const submitContactForm = () =>
{
  userInputValidation();
  hideErrorFormMessage();
 
}

const hideErrorFormMessage = () =>
{
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");

  if(name.value.trim()!="" && email.value.trim()!="" && message.value.trim()!="" )
    if(validateEmail(email.value)) {  
      errorFormMessage.classList.remove("visible");
      emptyInputFields(name,email,message);
      openBackdropFormSubmitted();



    }
    else
      errorTextInput(email);
}

const userInputValidation = () =>
{
  
  
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");

  
  
  validateInputState(name);
  validateInputState(email);
  validateInputState(message);
  
 
 
}
const errorTextInput = (userInput) =>
{

  if(userInput.type!="textarea")
  userInput.style.borderBottom = "1px solid red ";

  else
  userInput.style.border = "1px solid red ";

}

const validateInputState = (input) =>
{
  if(input.value.trim() ==="")
  {
   showErrorFormMessage();
    errorTextInput(input);
    
  }
   else
   {
       input.style.borderBottom = "0.5px solid #98a7b3";
   }
}

const validateEmail = (email) =>
{
 
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

const focusUserInput = (e) =>
{
  if(e.target.type!="textarea")
     e.target.style.borderBottom = "1px solid #095acd";
  else
    e.target.style.border = "1px solid #095acd"; 
  
}
const focusOutUserInput = (e) =>
{
   
  if(e.target.value.trim()==="")
   {
     
    if(e.target.type!="textarea")
        e.target.style.borderBottom = "1px solid red";
      else
      e.target.style.border = "1px solid red";

   }
   else
   {
      
    if(e.target.type!="textarea")
    e.target.style.borderBottom = "0.5px solid #98a7b3";
  else
  e.target.style.border = "0.5px solid #98a7b3";
    
   }
  
}

const showErrorFormMessage = () =>
{
  errorFormMessage.classList.add("visible");
}

const openBackdropFormSubmitted = () =>
{
  backdropFormSubmitted.classList.toggle("visible");
  showSuccesfullMessageModal();
}

const showSuccesfullMessageModal = () =>
{
  succesfullMessageModal.classList.toggle("visible");
  gsap.to(".succesfullMessageModal",{y:200,opacity:1,duration:0.5,ease: "power3.out"});

}

const emptyInputFields = (name,email,message) =>
{
 
  const input = [name,email,message];

   input.forEach(element =>{
     
    element.value = "";
   });

}




// ANIMATION

const moveUp = {
  y:200,
  ease:Power1.easeOut
 
 };
 
// EVENTS



menuIconBtn.addEventListener("click",openMenu);
closeBackdropMenuBtn.addEventListener("click",closeBackdropMenu);
boxInput.addEventListener("focusin",focusUserInput);
boxInput.addEventListener("focusout",focusOutUserInput);
submitBtn.addEventListener("click",submitContactForm);
backdropFormSubmitted.addEventListener("click",openBackdropFormSubmitted);