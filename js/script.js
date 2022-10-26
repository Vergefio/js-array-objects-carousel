// **Consegna:**
// Riprendiamo l’esercizio carosello e rifacciamolo, questa volta usando un array di oggetti.
// Ogni elemento deve avere un titolo, una descrizione e il riferimento ad una immagine.

//array di oggetti
const slider = document.querySelector('.slider');
const thumb = document.querySelector('.thumb');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const carousel = [
  {
    titolo: 'lorem',
    descrizione: 'lorem',
    img: "http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg"
  },
  {
    img: "https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg"
  },
  {
    img: "https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c"
  },
  {
    img: "https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg"
  },
  {
    img: "https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop"
  },
]

carousel.forEach((carouselImg) => {
  slider.innerHTML += `
  <div class="slide hidden">
    <img class="item active"
    src="${carouselImg.img}"
    alt=""> 
    <h3>${carouselImg.titolo}</h3>
    <p>${carouselImg.descrizione}></p>
    </div>
  `
}

);

// indice della slide attiva
let activeIndex = 0;
// ci prendiamo l'array di elementi con classe slide presente nell'html
const slideItems = document.getElementsByClassName('slide');

// togliamo la classe hidden al primo elemento e gli aggiungiamo la classe active
slideItems[activeIndex].classList.remove('hidden')
slideItems[activeIndex].classList.remove('active')

// quando clicchi sul bottone "indietro" diminuisci di uno activeIndex > aggiungi una classe di visibilita' all'elemento del DOM attivo e toglila a quello precedente

//al click di next
next.addEventListener('click', function () {
  //aggiungiamo la classe hidden all'elemento corrente
  slideItems[activeIndex].classList.remove('active')
  slideItems[activeIndex].classList.add('hidden')
  //avanziamo di un elemento
  activeIndex++;
  //e rendiamo visibile il nuovo elemento
  slideItems[activeIndex].classList.remove('hidden')
  slideItems[activeIndex].classList.add('active')

})