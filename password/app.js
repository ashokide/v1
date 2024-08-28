document.getElementById('gen-btn').addEventListener('click', () => {
  let pass = '';
  const length = document.getElementById('pass-input').value;
  const upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerChar = 'abcdefghijklmnopqrstuvwxyz'
  const numChar = '1234567890'
  const specialChar = '!@#$%^&*'

  const upper = document.getElementById('upper').checked
  const lower = document.getElementById('lower').checked
  const num = document.getElementById('num').checked
  const special = document.getElementById('special').checked

  let char ='';

  if(upper){
    char += upperChar
  }
  if(lower){
    char += lowerChar
  }
  if(num){
    char += numChar
  }
  if(special){
    char += specialChar
  }

  for (let i = 1; i <= length; i++) {
    const value = Math.random() * char.length;
    pass += char.charAt(value);
  }

  if (pass !== '') {
    document.getElementById(
      'password'
    ).innerHTML = `<h4>Your Password is : </h4> <span>${pass}</span>`;
    document.getElementById('password').style.color = 'green';
    document.getElementById('password').style.fontSize = '14px';
  }
  if (length > 16) {
    document.getElementById('password').innerHTML =
      'Password Length should be less than 16 !!!';
    document.getElementById('password').style.color = 'red';
    document.getElementById('password').style.fontSize = '12px';
  } 
  if (length <= 0) {
    document.getElementById('password').innerHTML =
      'Password Length should be greater than 0 !!!';
    document.getElementById('password').style.color = 'red';
    document.getElementById('password').style.fontSize = '12px';
  }
  if(!(upper || lower || num || special)){
    document.getElementById('password').innerHTML =
      'Atleast One Password Char Should Be Choosed';
      document.getElementById('password').style.color = 'red';
  }
});
