function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function sendMessage(event) {
    event.preventDefault();
    alert("Message sent successfully!");
}

/* SECTION ANIMATION ON CLICK */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        // Remove active from all
        navLinks.forEach(l => l.classList.remove("active"));
        sections.forEach(sec => sec.classList.remove("active"));

        // Add active to clicked link
        this.classList.add("active");

        // Get target section
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        // Animate section
        setTimeout(() => {
            targetSection.classList.add("active");
        }, 200);
    });
});

/* SHOW FIRST SECTION ON LOAD */
window.addEventListener("load", () => {
    document.querySelector("#home").classList.add("active");
});
