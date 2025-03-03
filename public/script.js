// JavaScript for scroll-based animations
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section-appear");

    function checkVisibility() {
        sections.forEach(function (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.75) {
                section.classList.add("visible");
            } else {
                section.classList.remove("visible");
            }
        });
    }

    // Check visibility on scroll
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Initial check when the page loads
});

document.addEventListener("DOMContentLoaded", function () {
    const events = document.querySelectorAll(".event");
    const modal = document.getElementById("popup-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");
    const closeBtn = document.querySelector(".close-btn");

    events.forEach(event => {
        event.addEventListener("click", function () {
            const info = this.getAttribute("data-info");
            modalTitle.innerText = "Event Details";
            modalText.innerText = info;
            modal.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
