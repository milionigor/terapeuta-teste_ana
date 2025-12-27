document.addEventListener("DOMContentLoaded", function () {
  // --- 1. INICIALIZAÇÃO DAS ANIMAÇÕES (AOS) ---
  AOS.init({ duration: 1000, once: true });

  // --- 2. LÓGICA DO MENU MOBILE ---
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const icon = menuToggle.querySelector("i");

      // Troca o ícone de Barras para X
      if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  }

  // Fecha o menu ao clicar em um link
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      if (menuToggle) {
        const icon = menuToggle.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  });

  // --- 3. LÓGICA DO CARROSSEL DE DEPOIMENTOS (NOVO) ---
  const track = document.querySelector(".testimonial-track");

  // Verifica se o carrossel existe na página antes de rodar o código
  if (track) {
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".next-btn");
    const prevButton = document.querySelector(".prev-btn");
    const dots = document.querySelectorAll(".dot");

    let currentSlideIndex = 0;

    // Função que move o slide
    function updateCarousel(index) {
      // Calcula a largura do slide para saber quanto mover
      const slideWidth = slides[0].getBoundingClientRect().width;
      const amountToMove = slideWidth * index;

      // Move a faixa (track)
      track.style.transform = "translateX(-" + amountToMove + "px)";

      // Atualiza as bolinhas (dots)
      dots.forEach((dot) => dot.classList.remove("active"));
      if (dots[index]) {
        dots[index].classList.add("active");
      }

      currentSlideIndex = index;
    }

    // Botão Próximo
    if (nextButton) {
      nextButton.addEventListener("click", () => {
        let newIndex = currentSlideIndex + 1;
        if (newIndex >= slides.length) newIndex = 0; // Volta para o começo
        updateCarousel(newIndex);
      });
    }

    // Botão Anterior
    if (prevButton) {
      prevButton.addEventListener("click", () => {
        let newIndex = currentSlideIndex - 1;
        if (newIndex < 0) newIndex = slides.length - 1; // Vai para o final
        updateCarousel(newIndex);
      });
    }

    // Clique nas Bolinhas
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        updateCarousel(index);
      });
    });

    // Auto-Play (Muda sozinho a cada 5 segundos)
    setInterval(() => {
      let newIndex = currentSlideIndex + 1;
      if (newIndex >= slides.length) newIndex = 0;
      updateCarousel(newIndex);
    }, 5000);

    // Ajusta o carrossel se a pessoa redimensionar a tela
    window.addEventListener("resize", () => {
      updateCarousel(currentSlideIndex);
    });
  }

  console.log("Site carregado: Menu + Carrossel ativos!");
});
