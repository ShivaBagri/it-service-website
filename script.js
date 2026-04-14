function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function sendMessage(event) {
    event.preventDefault();
    alert("Message sent successfully!");
}
