// ===========================
// TEMA CLARO / ESCURO
// ===========================

const body = document.body;
const themeButton = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  body.className = savedTheme;
  updateThemeIcon();
} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (prefersDark) {
    body.classList.add("dark");
  } else {
    body.classList.add("light");
  }

  updateThemeIcon();
}

themeButton.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  const currentTheme = body.classList.contains("dark") ? "dark" : "light";

  localStorage.setItem("theme", currentTheme);

  updateThemeIcon();
});

function updateThemeIcon() {
  if (body.classList.contains("dark")) {
    themeButton.textContent = "☀️";
  } else {
    themeButton.textContent = "🌙";
  }
}

// ===========================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ===========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

sections.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

// ===========================
// BOTÃO VOLTAR AO TOPO
// ===========================

const backToTop = document.getElementById("backToTop");

if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// ===========================
// BARRA DE PROGRESSO
// ===========================

const progressBar = document.getElementById("progress-bar");

if (progressBar) {
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / documentHeight) * 100;

    progressBar.style.width = progress + "%";
  });
}

// ===========================
// SCROLL SUAVE
// ===========================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
