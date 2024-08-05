import { homePage } from "../js-module/home";
import { contactPage } from "../js-module/contact";
import { menuPage } from "../js-module/menu";

document.addEventListener("DOMContentLoaded", () => {
    homePage();

    const contentDiv = document.getElementById('content'); 
    const homeBtn = document.querySelector(".home-btn");
    const contactBtn = document.querySelector(".contact-btn");
    const menuBtn = document.querySelector(".menu-btn");

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

    menuBtn.addEventListener("click", () => 
    {
        contentDiv.innerHTML = '';
            document.body.id = "menu";
            menuPage();
    });
});