const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  
  if (fname.value.trim() === '') {
    alert('Please enter your first name');
    fname.focus();
    return false;
  }
  
  if (lname.value.trim() === '') {
    alert('Please enter your last name');
    lname.focus();
    return false;
  }
  
  if (email.value.trim() === '') {
    alert('Please enter your email address');
    email.focus();
    return false;
  }
  
  if (message.value.trim() === '') {
    alert('Please enter your message');
    message.focus();
    return false;
  }
  
});
