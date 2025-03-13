const sections = document.querySelectorAll('[class^="section-"]');

sections.forEach(section => {
    section.addEventListener("click", () => {
        sections.forEach(sec => sec.classList.remove("active"));
        section.classList.add("active");
    });
});