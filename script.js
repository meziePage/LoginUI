const registerLink = document.querySelector(".register-link");
const createLink = document.querySelector(".create-link");
const forgotLink = document.querySelector(".forgot-link");
const register = document.querySelector(".register");
const create = document.querySelector(".create");
const forgot = document.querySelector(".reset");
const cancel = document.querySelector(".cancel");

registerLink.addEventListener("click", () => {
   create.style.display = "none";
register.style.display = "grid";
});

forgotLink.addEventListener("click", () => {
   create.style.display = "none";
   forgot.style.display = "grid";
 });

createLink.addEventListener("click", () => {
   register.style.display = "none";
   create.style.display = "grid";
 });

cancel.addEventListener("click", () => {
   forgot.style.display = "none";
   create.style.display = "grid";
 });

