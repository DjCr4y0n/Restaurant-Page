import { homePage } from "../js-module/home";
import { contactPage } from "../js-module/contact";

document.addEventListener("DOMContentLoaded", () => {
    homePage();

    const contentDiv = document.getElementById('content'); 
    const homeBtn = document.querySelector(".home-btn");
    const contactBtn = document.querySelector(".contact-btn");

    homeBtn.addEventListener("click", () => {
        
            contentDiv.innerHTML = '';
            document.body.id = "home";
            homePage();
        
    });

    contactBtn.addEventListener("click", () => {
        
            contentDiv.innerHTML = '';
            document.body.id = "contact";
            contactPage();
    });
});