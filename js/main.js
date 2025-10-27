//TAREA DE SONIA NSENG 27-10-2025
/* 1º CREAR VARIABLES */

/* capturar elementos DOM */
const imagenBanner = document.querySelector('#bienvenidos img');

/* Acceder al elemento del DOM para crear los artículos de viajes */
const articulosViajes = document.querySelector('#recomendados div');

/* Acceder al elemento del DOM para crear los options */

const eligeDestino = document.querySelector('#seleccionadestino');
const fragmento = document.createDocumentFragment();

// Crear los arrays con las imagenes y descripciones

const arrayBanners = [
    {
        id: 1,
        src: 'assets/banner/1.jpg',
        alt: 'Mar y puesta de sol'
    },
    {
        id: 2,
        src: 'assets/banner/2.jpg',
        alt: 'Globos en el cielo'
    },
    {
        id: 3,
        src: 'assets/banner/3.jpg',
        alt: 'cielo y amanecer'
    },
    {
        id: 4,
        src: 'assets/banner/4.jpg',
        alt: 'globos en el campo'
    },
    {
        id: 5,
        src: 'assets/banner/5.jpg',
        alt: 'Luna y cielo por la noche'
    },
    {
        id: 6,
        src: 'assets/banner/6.jpg',
        alt: 'Montañas nevadas'
    },
    {
        id: 7,
        src: 'assets/banner/7.jpg',
        alt: 'Pajaros volando al atardecer'
    },
    {
        id: 8,
        src: 'assets/banner/8.jpg',
        alt: 'flores blancas'
    },
]

const arrayViajes = [
    {
        id: 1,
        src: 'assets/viajes/viajes-1.jpg',
        alt: 'Persona en amahaca en la playa',
        h3: 'Viaje 1',
        p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        id: 2,
        src: 'assets/viajes/viajes-2.jpg',
        alt: 'pasarela de madera en el mar',
        h3: 'Viaje 2',
        p: 'Consequuntur maxime libero aspernatur sequi quidem deserunt illum praesentium, itaque voluptatibus.',
    },
    {
        id: 3,
        src: 'assets/viajes/viajes-3.jpg',
        alt: 'flechas de madera',
        h3: 'Viaje 3',
        p: 'A autem libero tempora, ipsam perferendis quo labore consequuntur.',
    },
    {
        id: 4,
        src: 'assets/viajes/viajes-4.jpg',
        alt: 'plaza de ciudad',
        h3: 'Viaje 4',
        p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        id: 5,
        src: 'assets/viajes/viajes-5.jpg',
        alt: 'plaza de ciudad',
        h3: 'Viaje 5',
        p: 'A autem libero tempora, ipsam perferendis quo labore consequuntur.',
    },
    {
        id: 6,
        src: 'assets/viajes/viajes-6.jpg',
        alt: 'acantilado',
        h3: 'Viaje 6',
        p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        id: 7,
        src: 'assets/viajes/viajes-7.jpg',
        alt: 'castillo',
        h3: 'Viaje 7',
        p: 'A autem libero tempora, ipsam perferendis quo labore consequuntur.',
    },
]

// he creado un array porque solo hay un valor: el nombre de la ciudad

const arrayDestinos = [
    "Burgos",
    "Valencia",
    "Madrid",
    "Sevilla",
    "Bilbao",
    "Mallorca",
    "Paris",
    "Roma",
    "Oporto"
];

/* EVENTOS */
/* FUNCIONES */

// Crear una funcion que recorra el array banners y me de una foto aleatoria cada vez que recargo
const aleatorio = () => {
    const indice = Math.floor(Math.random() * arrayBanners.length);
    return indice;
}

const pintarBanner = () => {
    const indice = aleatorio(arrayBanners);
    const elemento = arrayBanners[indice];
    // console.log(elemento.alt)
    // console.log(elemento.src)
    imagenBanner.setAttribute('src', elemento.src);
    imagenBanner.alt = elemento.alt;
    // console.log(imagenBanner)
}

const pintarCards = () => {
    /* recorrer los elementos del array */
    arrayViajes.forEach((element) => {
        /* por cada elemento crear:/*
        /* un article */
        const newArticle = document.createElement('article');
        /* un div */
        const newDiv = document.createElement('div');
        /* una imgen asignando sus atributos con set atribute */
        const newFoto = document.createElement('img');
        newFoto.setAttribute('src', element.src);
        newFoto.alt = element.alt;
        /*le doy estilo a la imagen creando una clase en CSS y llamandola con .classList*/
        newFoto.classList.add('imagenes-tarjetas');
        /* un h3 asignar su valor*/
        const titulo = document.createElement('h3');
        titulo.textContent = element.h3;
        /* un p asignar su valor */
        const parrafo = document.createElement('p');
        parrafo.textContent = element.p;
        /* meter la imagen en el div con append*/
        newDiv.append(newFoto);
        /* meter el div en el article */
        newArticle.append(newDiv);
        /* meter el h3 y el p en el article */
        newArticle.append(titulo);
        newArticle.append(parrafo);
        /* añadir el artícle fragmento */
        fragmento.append(newArticle);
        /* dejo de recorrer el array */
    });
    /* añadir el fragmento al div flexContainer */
    articulosViajes.append(fragmento);
}

const pintarDestinos = () => {
    arrayDestinos.forEach((ciudad) => {
        const option = document.createElement('option');
        option.value = ciudad;
        option.textContent = ciudad;
        eligeDestino.append(option);
    });
}

/* INVOCACIÓN A LAS FUNCIONES */
pintarBanner()
pintarCards()
pintarDestinos()