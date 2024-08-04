import logo from '../logo.png';

export function homePage()
{
    const content = document.getElementById('content');
    const homePage = document.createElement('div');

    homePage.classList.add('home', 'page');
    const name = document.createElement('h1');
    name.textContent = 'Pod Murzynem';
    const short = document.createElement('p');
    short.textContent = 'For your own sake, do not translate this';
    const img = document.createElement('img');
    img.src = logo;
    const description = document.createElement('p');
    description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    
    homePage.appendChild(name)
    homePage.appendChild(short);
    homePage.appendChild(img);
    homePage.appendChild(description);

    content.appendChild(homePage);
}