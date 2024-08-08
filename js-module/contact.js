export function contactPage()
{
    const content = document.getElementById('content');
    const contactPage = document.createElement('div');

    const locationContainer = document.createElement('div');
    const contactContainer = document.createElement('div');
    const hoursContainer = document.createElement('div');

    contactPage.appendChild(locationContainer);
    contactPage.appendChild(contactContainer);
    contactPage.appendChild(hoursContainer);

    const locationHeadline = document.createElement('h2');
    locationHeadline.textContent = "Where we at?"
    const location = document.createElement('p');
    location.innerHTML = "Miejska Dżungla 69<br>05-400 Otwock";
    locationContainer.appendChild(locationHeadline);
    locationContainer.appendChild(location);

    const contactHeadline = document.createElement('h2');
    contactHeadline.textContent = "Call us!";
    const contact = document.createElement('p');
    contact.textContent = "112 997 991";
    contactContainer.appendChild(contactHeadline);
    contactContainer.appendChild(contact);

    const hoursHeadline = document.createElement('h2');
    hoursHeadline.textContent = "Opening hours";
    const hours = document.createElement('p');
    hours.innerHTML = "Monday: 12:00-21:00<br>Tuesday: 12:00-21:00<br>Wensday: 12:00-21:00<br>Thursday: 12:00-21:00<br>Friday: 12:00-21:00<br>Saturday 08:00-22:00";

    hoursContainer.appendChild(hoursHeadline);
    hoursContainer.appendChild(hours);

    content.appendChild(contactPage);

}