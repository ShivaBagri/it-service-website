document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    /* SMOOTH NAVIGATION CLICK */
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

            // ACTIVE LINK
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    /* SCROLL ANIMATION */
    function revealSections() {
        const trigger = window.innerHeight * 0.85;

        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;

            if (top < trigger) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // run on load

});
