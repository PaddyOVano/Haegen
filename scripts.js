// Targetta contact-placeholder class
const contactPlaceholders = document.querySelectorAll(".contact-placeholder");

if (contactPlaceholders.length > 0) {

    const isInsidePagesAndForms = window.location.pathname.includes("/PagesAndForms/");

    const contactFile = isInsidePagesAndForms ? "contact.html" : "PagesAndForms/contact.html";

    fetch(contactFile)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Non riesco a trovare " + contactFile);
            }

            return response.text();
        })
        .then((html) => {
            contactPlaceholders.forEach((placeholder) => {
                placeholder.innerHTML = html;
            });
        })
        .catch((error) => {
            console.error(error);
            contactPlaceholders.forEach((placeholder) => {
                placeholder.textContent = "Modulo contatti non disponibile.";
            });
        });
}