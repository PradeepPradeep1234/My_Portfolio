 const typewriterTexts = [
      "Python Backend Developer",
      "Loves Problem Solving",
      "Aspiring Software Developer"
    ];

    let i = 0;
    let j = 0;
    let currentText = "";
    let isDeleting = false;
    const speed = 120; // typing speed
    const target = document.getElementById("typewriter");

    function typeWriterEffect() {
      currentText = typewriterTexts[i];
      if (!isDeleting) {
        target.textContent = currentText.slice(0, j++);
      } else {
        target.textContent = currentText.slice(0, j--);
      }

      if (j === currentText.length + 1) {
        isDeleting = true;
        setTimeout(typeWriterEffect, 1000);
        return;
      }

      if (j === 0 && isDeleting) {
        isDeleting = false;
        i = (i + 1) % typewriterTexts.length;
      }

      setTimeout(typeWriterEffect, isDeleting ? speed / 2 : speed);
    }

    typeWriterEffect();
    function filterProjects(category) {
  let cards = document.querySelectorAll(".project-card");
  let tabs = document.querySelectorAll(".tab-btn");

  // Reset active tab
  tabs.forEach(tab => tab.classList.remove("active"));
  event.target.classList.add("active");

  cards.forEach(card => {
    if (category === "all" || card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}