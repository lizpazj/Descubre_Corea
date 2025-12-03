/* ========= MENÚ DESPLEGABLE ========= */
document.querySelectorAll(".has-submenu").forEach(item => {
  const submenu = item.querySelector(".submenu");

  item.addEventListener("mouseover", () => {
    submenu.style.display = "block";
  });

  item.addEventListener("mouseout", () => {
    submenu.style.display = "none";
  });
});


/* ========= SLIDER ========= */
const imgs = [
  "images/seul.jpg",
  "images/busan.jpg",
  "images/jeju.jpg",
  "images/gyeongju.jpg"
];

let i = 0;

function cambiarImg(num) {
  const slide = document.getElementById("slide");
  if (!slide) return;

  i = (i + num + imgs.length) % imgs.length;
  slide.src = imgs[i];
}

setInterval(() => {
  const slide = document.getElementById("slide");
  if (slide) cambiarImg(1);
}, 3000);

const nextBtn = document.getElementById("next");
if (nextBtn) nextBtn.onclick = () => cambiarImg(1);

const prevBtn = document.getElementById("prev");
if (prevBtn) prevBtn.onclick = () => cambiarImg(-1);


/* ========= MENSAJE PERSONALIZADO ========= */
function mensajeBienvenida() {
  const idiomaSelect = document.getElementById("idioma");
  const mensaje = document.getElementById("mensaje-bienvenida");

  if (!idiomaSelect || !mensaje) return;

  const idioma = idiomaSelect.value;
  const hora = new Date().getHours();
  let texto = "";

  const saludos = {
    es: ["Buenos días", "Buenas tardes", "Buenas noches"],
    en: ["Good morning", "Good afternoon", "Good evening"],
    kr: ["좋은 아침입니다", "안녕하세요", "안녕히 주무세요"]
  };

  if (hora < 12) texto = saludos[idioma][0];
  else if (hora < 18) texto = saludos[idioma][1];
  else texto = saludos[idioma][2];

  mensaje.textContent = texto;
}

const idiomaSelect = document.getElementById("idioma");
if (idiomaSelect) idiomaSelect.addEventListener("change", mensajeBienvenida);

mensajeBienvenida();
