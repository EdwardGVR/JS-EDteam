'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Al hacer click en una imagen se abra su version grande

// Obtener la galeria de imagenes
var getImages = function getImages(container) {
	return [].concat(_toConsumableArray(container.querySelectorAll('img')));
};

// Obtener un array de las rutas de las imagenes grandes
var getLargeImages = function getLargeImages(gallery) {
	return gallery.map(function (el) {
		return el.src;
	}).map(function (el) {
		return el.replace('thumb', 'large');
	});
};
// Obtener las descripciones de las imagenes
var getDescriptions = function getDescriptions(gallery) {
	return gallery.map(function (el) {
		return el.alt;
	});
};

// Capturar el evento click en la galeria para abrir el lightbox
var openLightBoxEvent = function openLightBoxEvent(container, gallery, larges, descriptions) {
	container.addEventListener('click', function (e) {
		// el -> elemento donde se ejecuta el clicl
		var el = e.target,

		// i -> el indice del elemento dentro del arreglo
		i = gallery.indexOf(el);

		if (el.tagName === 'IMG') {
			openLightbox(gallery, i, larges, descriptions);
		}
	});
};

// Imprimir overlay del lightbox en el body
var openLightbox = function openLightbox(gallery, i, larges, descriptions) {
	// Abrir lightbox al pulsar el parametro image
	var lightboxElement = document.createElement('div');
	lightboxElement.innerHTML = '\n\t\t<div class="lightbox-overlay">\n\t\t\t<figure class="lightbox-container">\n\t\t\t\t<img src="' + larges[i] + '" class="lightboxImage">\n\t\t\t\t<figcaption>\n\t\t\t\t\t<p class="lightbox-description">' + descriptions[i] + '</p>\n\t\t\t\t\t<nav class="lightbox-navigation">\n\t\t\t\t\t\t<a href="#" class="lightbox-navigation__button prev"></a>\n\t\t\t\t\t\t<span class="lightbox-navigation__counter">Imagen ' + (i + 1) + ' de ' + gallery.length + '</span>\n\t\t\t\t\t\t<a href="#" class="lightbox-navigation__button next"></a>\n\t\t\t\t\t</nav>\n\t\t\t\t</figcaption>\n\t\t\t</figure>\n\t\t</div>\n\t';

	lightboxElement.id = 'lightbox';
	document.body.appendChild(lightboxElement);
};

var lightbox = function lightbox(container) {
	var images = getImages(container),
	    larges = getLargeImages(images),
	    descriptions = getDescriptions(images);

	openLightBoxEvent(container, images, larges, descriptions);
};

lightbox(document.getElementById('gallery-container'));