// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navlinks = document.getElementById("nav-links");
menuToggle-addEvemtListener("click", () => {
    navlinks.classList.toggle("show");
});

// simple contact from validation
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit",(e) => {
    e.preventDefault();

    const name = document.getElementById("name").Value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name && email && message){
        formStatus.textContent = " message sent succesfully!";
        formStatus.style.color = "green";
        contactForm.reset();
    } else {
        formStatus.textContent = "please fill in all fields.";
        formStatus.style.color = "red";
    }
});

