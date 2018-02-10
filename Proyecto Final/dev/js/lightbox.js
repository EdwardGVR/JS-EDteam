// Al hacer click en una imagen se abra su version grande

// Obtener la galeria de imagenes
const getImages = container => [...container.querySelectorAll('img')];

// Obtener un array de las rutas de las imagenes grandes
const getLargeImages = gallery => gallery
								  .map( el => el.src )
								  .map( el => el.replace('thumb', 'large'));
// Obtener las descripciones de las imagenes
const getDescriptions = gallery => gallery.map( el => el.alt );

// Capturar el evento click en la galeria para abrir el lightbox
const openLightBoxEvent = (container, gallery, larges, descriptions) => {
	container.addEventListener('click', e => {
		// el -> elemento donde se ejecuta el clicl
		let el = e.target,
			// i -> el indice del elemento dentro del arreglo
			i = gallery.indexOf(el);

		if (el.tagName === 'IMG') {
			openLightbox(gallery, i, larges, descriptions);
		}
	});
};

// Imprimir overlay del lightbox en el body
const openLightbox = (gallery, i, larges, descriptions) => {
	// Abrir lightbox al pulsar el parametro image
	let lightboxElement = document.createElement('div');
	lightboxElement.innerHTML = `
		<div class="lightbox-overlay">
			<figure class="lightbox-container">
				<img src="${larges[i]}" class="lightboxImage">
				<figcaption>
					<p class="lightbox-description">${descriptions[i]}</p>
					<nav class="lightbox-navigation">
						<a href="#" class="lightbox-navigation__button prev"></a>
						<span class="lightbox-navigation__counter">Imagen ${i + 1} de ${gallery.length}</span>
						<a href="#" class="lightbox-navigation__button next"></a>
					</nav>
				</figcaption>
			</figure>
		</div>
	`;

	lightboxElement.id = 'lightbox';
	document.body.appendChild(lightboxElement);
};

const lightbox = container => {
	let images = getImages(container),
		larges = getLargeImages(images),
		descriptions = getDescriptions(images);

	openLightBoxEvent(container, images, larges, descriptions);
};

lightbox(document.getElementById('gallery-container'));