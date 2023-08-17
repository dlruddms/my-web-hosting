const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

const HIDDEN_CLASSNAME = "hidden";
const USERID_KEY = "username";
const USERPW_KEY = "password"

loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    localStorage.setItem(USERID_KEY, username);
    localStorage.setItem(USERPW_KEY, password);
    const savedUserName = localStorage.getItem(USERID_KEY);
    const savedUserPw = localStorage.getItem(USERPW_KEY);
   
    if (savedUserName === "dlruddms" && savedUserPw === "2642") 
    {
      loginForm.classList.add(HIDDEN_CLASSNAME);
      image.classList.remove(HIDDEN_CLASSNAME);
      clock.classList.remove(HIDDEN_CLASSNAME);  
    } 
  else {
     alert("check your Id or PW");
  }
});