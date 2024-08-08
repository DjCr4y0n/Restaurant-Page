export function menuPage()
{
    const content = document.getElementById('content');

    const menuPage = document.createElement('div');
    menuPage.classList.add('menu');

    const menuHeadline = document.createElement('h1');
    menuHeadline.textContent = "MENU";
    menuPage.appendChild(menuHeadline);


    const numberOfDishes = 8;
    for (let index = 0; index < numberOfDishes; index++) {
        const position = document.createElement('div');
        menuPage.appendChild(position);


    }

    content.appendChild(menuPage);

}