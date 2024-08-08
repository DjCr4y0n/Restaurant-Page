export function menuPage()
{
    const content = document.getElementById('content');
    
    const menuHeadline = document.createElement('h1');
    menuHeadline.textContent = "Our Menu:";
    content.appendChild(menuHeadline);

    const menuPage = document.createElement('div');

    const numberOfDishes = 8;
    for (let index = 0; index < numberOfDishes; index++) {
        const position = document.createElement('div');
        menuPage.appendChild(position);


    }

    content.appendChild(menuPage);

}