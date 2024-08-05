export function menuPage()
{
    const content = document.getElementById('content');
    const menuPage = document.createElement('div');

    const menuHeadline = document.createElement('h1');
    menuPage.appendChild(menuHeadline);

    const numberOfDishes = 8;
    for (let index = 0; index < numberOfDishes; index++) {
        const position = document.createElement('div');
        menuPage.appendChild(position);


    }

    content.appendChild(menuPage);

}