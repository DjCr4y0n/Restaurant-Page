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
    location.textContent = "Miejska Dżungla 69 \n 05-400 Otwock";
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
    hours.textContent = "Monday: 12:00-21:00 \n Saturday 08:00-22:00";

    hoursContainer.appendChild(hoursHeadline);
    hoursContainer.appendChild(hours);

    content.appendChild(contactPage);

}