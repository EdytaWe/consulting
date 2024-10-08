const msgStatus = document.querySelector(".form__status");
console.log(document.location.search);
if(document.location.search === "?mail_status=sent"){
    msgStatus.classList.add('success');
    msgStatus.textContent = "Wiadomość została wysłana";

    setTimeout(() => {
        msgStatus.classList.remove('success');
    }, 4000);
}

if(document.location.search === "?mail_status=error"){
    msgStatus.classList.add('error');
    msgStatus.textContent = "Wystąpił błąd. Spróbuj ponownie po odświeżeniu strony.";

    setTimeout(() => {
        msgStatus.classList.remove('error');
    }, 4000);
}