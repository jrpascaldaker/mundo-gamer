const juegos = {
  "Dota 2": {
    img: "imagenes/dota_2.png",
    descripcion: "Bienvenido a la experiencia definitiva de Dota 2, donde la estrategia, la habilidad y el trabajo en equipo se combinan en épicas batallas multijugador. Descubre héroes legendarios, domina el campo de batalla y únete a millones de jugadores en uno de los eSports más emocionantes y competitivos del mundo. Prepárate para desafiar tus límites y vivir la acción sin igual que solo Dota 2 puede ofrecer."
  },
  "Starcraft 2": {
    img: "imagenes/starcraft_2.png",
    descripcion: "Sumérgete en el universo de StarCraft 2, el clásico juego de estrategia en tiempo real que ha definido el género durante años. Controla poderosas razas, despliega tácticas maestras y lidera a tus tropas hacia la victoria en intensas batallas intergalácticas. Ya seas un comandante veterano o un novato hambriento de acción, StarCraft 2 te ofrece una experiencia estratégica profunda y llena de emoción. ¡Prepárate para conquistar el espacio y dominar la galaxia!."
  },
  "Assassin’s Creed": {
    img: "imagenes/Assassin’s_Creed.png",
    descripcion: "Adéntrate en la saga de Assassin’s Creed, una épica aventura que mezcla historia, acción y sigilo. Explora mundos vibrantes, descubre secretos ancestrales y conviértete en un maestro asesino en la lucha por la libertad contra poderosas órdenes ocultas. Vive una experiencia única donde cada salto, cada misión y cada historia te transportan a épocas inolvidables. ¡Únete a la Hermandad y escribe tu propia leyenda!."
  },
  "Fortnite": {
    img: "imagenes/fornite.png",
    descripcion: "Bienvenido a Fortnite, el fenómeno global que combina acción rápida, construcción creativa y diversión sin límites. Entra en la batalla, construye tu camino hacia la victoria y desafía a jugadores de todo el mundo en emocionantes partidas llenas de estrategia y adrenalina. Con actualizaciones constantes, eventos especiales y un mundo en constante evolución, Fortnite te invita a ser parte de la experiencia que está revolucionando los videojuegos."
  },
  "Minecraft": {
    img: "imagenes/minecraft.png",
    descripcion: "Bienvenido a Minecraft, el juego que ha revolucionado la creatividad y la aventura en mundos infinitos hechos de bloques. Explora, construye y sobrevive en un universo donde solo tu imaginación pone límites. Desde épicas construcciones hasta emocionantes desafíos, Minecraft ofrece una experiencia única para jugadores de todas las edades. ¡Únete a millones de aventureros y crea tu propia historia en este mundo pixelado!."
  }
};

const juegosElementos = document.querySelectorAll('.juego');
const detalleJuego = document.getElementById('detalle-juego');
const imagenDetalle = document.getElementById('imagen-detalle');
const descripcionDetalle = document.getElementById('descripcion-detalle');
const cerrarDetalle = document.getElementById('cerrar-detalle');

juegosElementos.forEach(juego => {
  juego.addEventListener('click', () => {
    const nombre = juego.querySelector('h3').textContent;
    if (juegos[nombre]) {
      imagenDetalle.src = juegos[nombre].img;
      imagenDetalle.alt = nombre;
      descripcionDetalle.textContent = juegos[nombre].descripcion;
      detalleJuego.classList.remove('oculto');
    }
  });
});

cerrarDetalle.addEventListener('click', () => {
  detalleJuego.classList.add('oculto');
});

detalleJuego.addEventListener('click', (e) => {
  if (e.target === detalleJuego) {
    detalleJuego.classList.add('oculto');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const noticias = [
 
    { titulo: "Torneo de eSports", contenido: "Se anuncia un torneo internacional de Dota 2 con premios millonarios.", fecha: "2025-05-10" },
    { titulo: "Actualización de Minecraft", contenido: "Minecraft lanza una actualización que añade nuevas criaturas y biomas.", fecha: "2025-05-15" },
    { titulo: "Nueva expansión de Starcraft 2", contenido: "Blizzard anuncia una expansión que introduce nuevas campañas y unidades.", fecha: "2025-05-20" },
    { titulo: "Evento especial en Fortnite", contenido: "Fortnite celebrará un evento especial con recompensas exclusivas.", fecha: "2025-05-25" },
    { titulo: "Descuento en juegos indie", contenido: "Varios juegos independientes estarán en oferta durante esta semana.", fecha: "2025-06-01" },
    { titulo: "Streaming benéfico de videojuegos", contenido: "Diversos gamers famosos realizarán un streaming benéfico para recaudar fondos.", fecha: "2025-06-05" },
  ];

  const contenedorNoticias = document.querySelector('.noticias');
  
  const inicialMostrar = 4;
  
  noticias.forEach((noticia, index) => {
    const div = document.createElement('div');
    div.classList.add('noticia');
    if(index >= inicialMostrar) div.style.display = 'none';
    div.innerHTML = `
      <h3>${noticia.titulo}</h3>
      <p><em>${new Date(noticia.fecha).toLocaleDateString()}</em></p>
      <p>${noticia.contenido}</p>
    `;
    contenedorNoticias.appendChild(div);
  });

  const botonVerMas = document.createElement('button');
  botonVerMas.textContent = "Ver más";
  botonVerMas.style.marginTop = "15px";
  botonVerMas.style.padding = "10px 20px";
  botonVerMas.style.backgroundColor = "#00bfff";
  botonVerMas.style.color = "#000";
  botonVerMas.style.border = "none";
  botonVerMas.style.borderRadius = "5px";
  botonVerMas.style.cursor = "pointer";
  contenedorNoticias.after(botonVerMas);

  botonVerMas.addEventListener('click', () => {
    const noticiasOcultas = contenedorNoticias.querySelectorAll('.noticia[style*="display: none"]');
    if (noticiasOcultas.length > 0) {
      noticiasOcultas.forEach(n => n.style.display = 'block');
      botonVerMas.textContent = "Ver menos";
    } else {

      noticias.forEach((_, index) => {
        if (index >= inicialMostrar) {
          contenedorNoticias.children[index].style.display = 'none';
        }
      });
      botonVerMas.textContent = "Ver más";

      window.scrollTo({ top: contenedorNoticias.offsetTop, behavior: 'smooth' });
    }
  });
});

document.getElementById('formulario-contacto').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('mensaje-enviado').style.display = 'block';
  this.reset();
});