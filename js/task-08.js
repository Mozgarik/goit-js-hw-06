const form = document.querySelector(".login-form"); 
 
form.addEventListener("submit", onFormSubmit); 
 
function onFormSubmit(event) { 
  event.preventDefault(); 
 
  const mail = event.target.elements.email.value; 
  const password = event.target.elements.password.value; 
  
  if (!mail || !password) { 
    return alert("All fields must be filled!"); 
  } 
 
  const formData = { 
    mail, 
    password
  }; 
  console.log(formData); 
 
 
  form.reset(); 
}