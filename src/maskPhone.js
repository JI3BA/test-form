import IMask from "imask";

let phoneInput = document.querySelector(".phone");

const phoneMask = new IMask(phoneInput, {
    mask: "+{375} (00) 000-00-00",
});
