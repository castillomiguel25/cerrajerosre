
const postActionsControllers = document.querySelectorAll(
  ".post-actions-controller"
);

postActionsControllers.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const postActionsContent = document.getElementById(targetId);

    if (postActionsContent) {
      const isVisible = postActionsContent.getAttribute("data-visible");

      if (isVisible === "false") {
        postActionsContent.setAttribute("data-visible", "true");
        postActionsContent.setAttribute("aria-hidden", "false");
        btn.setAttribute("aria-expanded", "true");
      } else {
        postActionsContent.setAttribute("data-visible", "false");
        postActionsContent.setAttribute("aria-hidden", "true");
        btn.setAttribute("aria-expanded", "false");
      }
    }
  });
});


function handleClickOutside(event) {
  postActionsControllers.forEach((btn) => {
    const targetId = btn.getAttribute("data-target");
    const postActionsContent = document.getElementById(targetId);

    if (postActionsContent && postActionsContent.getAttribute("data-visible") === "true") {
      if (!postActionsContent.contains(event.target) && event.target !== btn) {
        postActionsContent.setAttribute("data-visible", "false");
        postActionsContent.setAttribute("aria-hidden", "true");
        btn.setAttribute("aria-expanded", "false");
      }
    }
  });
}

document.addEventListener("click", handleClickOutside);

postActionsControllers.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

const likeBtns = document.querySelectorAll(".post-like");

// When the like buttons are clicked, they are colored red or this action is undone

likeBtns.forEach((likeBtn) => {
  likeBtn.addEventListener("click", () => {
    if (likeBtn.classList.contains("active")) {
      likeBtn.classList.remove("active");
    } else {
      likeBtn.classList.add("active");
    }
  });
});

// Swiper

var swiper = new Swiper(".swiper", {
  grabCursor: true,
  mousewheel: {
    invert: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

$(document).ready(function () {
  $('.post-img').click(function () {
    var imgSrc = $(this).attr('src');
    $('#imagenGrande').attr('src', imgSrc);
    $('#imagenModal').modal('show');
  });
});

// Función para abrir el modal al cargar la página
window.onload = function () {
  openModal();
};

function openModal() {
  var modal = document.getElementById("myModal");
  var overlay = document.getElementById("overlayss");
  modal.style.display = "block";
  overlay.style.display = "block";
  setTimeout(function () {
        closeModal();
      }, 5000);
}

function closeModal() {
  var modal = document.getElementById("myModal");
  var overlay = document.getElementById("overlayss");
  modal.style.display = "none";
  overlay.style.display = "none";
}

let miParrafo = document.getElementById('pieFoto');
let texto = miParrafo.textContent;
let textoEnMayusculas = texto.toUpperCase();
miParrafo.textContent = textoEnMayusculas;

let miParrafo2 = document.getElementById('pieFoto2');
let text = miParrafo2.textContent;
let textEnMayusculas = text.toUpperCase();
miParrafo2.textContent = textEnMayusculas;