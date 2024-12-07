const submitButton = document.getElementById('submit-button');
const contactPage = document.getElementById('contact-page');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    contactPage.innerHTML = '';
    const thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = 'Thank you for your message';
    thankYouMessage.style.fontSize = '24px';
    thankYouMessage.style.textAlign = 'center';
    thankYouMessage.style.marginTop = '50px';

    contactPage.appendChild(thankYouMessage); 
});
