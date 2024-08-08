export function menuPage()
{
    const content = document.getElementById('content');

    const menuPage = document.createElement('div');
    menuPage.classList.add('menu');

    const menuHeadline = document.createElement('h1');
    menuHeadline.textContent = "MENU";
    const dishes = document.createElement('div');
    dishes.classList.add('dishes')
    menuPage.appendChild(menuHeadline);
    menuPage.appendChild(dishes);


    const numberOfDishes = 8;
    for (let index = 0; index < numberOfDishes; index++) {
        const position = document.createElement('div');
        position.textContent = "BAGNO";
        position.style.color = "red";
        dishes.appendChild(position);


    }

    content.appendChild(menuPage);

}