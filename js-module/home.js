
export function homePage()
{
    const content = document.getElementById('content');
    const homePage = document.createElement('div');

    homePage.classList.add('home', 'page');
    const name = document.createElement('h1');
    name.textContent = 'Pod Murzynem';
    
    const description = document.createElement('p');
    description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    
    homePage.appendChild(name)
    homePage.appendChild(description);

    content.appendChild(homePage);
}