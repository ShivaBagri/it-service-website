function scrollToContact() {
    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth"
    });
}

function sendMessage(event) {
    event.preventDefault();
    alert("Message sent successfully!");
}

/* NAV CLICK SMOOTH + ACTIVE */
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

/* SCROLL ANIMATION */
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < trigger) {
            section.classList.add("show");
        }
    });
});

/* SHOW HOME FIRST */
window.addEventListener("load", () => {
    document.querySelector("#home").classList.add("show");
});
