// Getting all elements By queryselector for Validation.
let visibleIcon = document.querySelectorAll("#show-password");
let hidePassword = document.querySelectorAll("#hide-password");
let password = document.querySelectorAll("#password");
//login page.
let validation_mail = document.querySelector('.validation-mail');
let validation_pw = document.querySelector('.validation-pw')
let email = document.querySelector('.Email');


//sign up page.
let firstname = document.querySelector('.first-name');
let secondname = document.querySelector('.second-name');
let sign_up_btn = document.querySelector('.signup-btn');
let sign_up_mail = document.querySelector('.signup-mail');
let address = document.querySelector("#address");
let sign_up_password = document.querySelector('.signup-password');
let sign_up_confirmpw = document.querySelector('.Confirm-password')
let validation_mail_signup = document.querySelector('.validation-mail-signup');
let validation_pw_signup = document.querySelector('.validation-pw-signup');
let validation_confirmpw_signup = document.querySelector('.validation-confirmpw-signup');
let validation_firstname = document.querySelector('.validation-mail-firstname');
let validation_secondname = document.querySelector('.validation-mail-secondname');
let validation_address = document.querySelector('.validation-mail-address');
let allinputs = document.querySelector('input');



// For hide and visible password logics.
for (let i = 0; i < hidePassword.length; i++) {
  hidePassword[i].addEventListener("click", () => {
    password[i].type = "text";
    visibleIcon[i].style.display = "block";
    hidePassword[i].style.display = "none";
  })
}
for (let i = 0; i < visibleIcon.length; i++) {
  visibleIcon[i].addEventListener("click", () => {
    password[i].type = "password";
    visibleIcon[i].style.display = "none";
    hidePassword[i].style.display = "block";
  })
}


// Getting the datas from the user.
sign_up_btn.addEventListener('click', () => {
  let pass = sign_up_password.value;
  let Confirmpw_value = sign_up_confirmpw.value;
  let sign_mail = sign_up_mail.value;
  // console.log(firstname.value)

  if (firstname.value == "" && secondname.value == '' && sign_mail == "" && pass == "" && Confirmpw_value == "" && address.value == "") {
     validation_firstname.classList.add("show");
     validation_secondname.classList.add("show");
     validation_address.classList.add("show");
     validation_mail_signup.classList.add("show");
     validation_pw_signup.classList.add("add");
     validation_confirmpw_signup.classList.add("add");
  }
  else{
  if (firstname.value !== "") {
    validation_firstname.classList.remove("show");
    if (secondname.value !== "") {
      validation_secondname.classList.remove('show');
    }
    else {
      validation_secondname.classList.add('show');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(sign_mail)) {
      validation_mail_signup.classList.remove('animation')
      if (pass.length > 8 && pass.match("@", "_", "-", "#") && !pass.charAt(0).match("@", "_", "-", "#")) {
        validation_pw_signup.classList.remove('add')
        if (pass == Confirmpw_value) {
          validation_confirmpw_signup.classList.remove('add');
          fetch('http://localhost:3000/users', {
            method: 'POST',
            body: JSON.stringify({
              "first_name": firstname.value,
              "last_name": secondname.value,
              "email": sign_up_mail.value,
              "address": address.value,
              "password": pass,
            }),
            headers: {
              'content-type': 'application/json; chatset=UTF-8'
            },
          })
            .then((response) => response.json())
            .then((json) => {
              window.location.reload()
            })
            .catch(err => console.log(err))
        }
        else {
          validation_confirmpw_signup.classList.add('add')
        }
      }
      else {
        validation_pw_signup.classList.add('add');
      }
    }
    else {
      validation_mail_signup.classList.add('animation');
    }
  }
  else {
    validation_firstname.classList.add('show')
  }
  }
})

allinputs.addEventListener("keyup",()=>{
  validation_firstname.classList.remove("show");
  validation_secondname.classList.remove("show");
  validation_address.classList.remove("show");
  validation_mail_signup.classList.remove("show");
  validation_pw_signup.classList.remove("add");
  validation_confirmpw_signup.classList.remove("add");
})
