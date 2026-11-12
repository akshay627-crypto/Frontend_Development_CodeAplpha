const photos = [
  { title: 'Where the water holds the sky', place: 'Dolomites, Italy', category: 'landscape', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1100&q=85', alt: 'Still alpine lake reflecting a mountain range at dusk' },
  { title: 'A quieter geometry', place: 'Copenhagen, Denmark', category: 'architecture', image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1100&q=85', alt: 'Sculptural modern architecture seen from below' },
  { title: 'Soft focus, clear mind', place: 'London, England', category: 'portrait', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1100&q=85', alt: 'Close portrait in soft natural light' },
  { title: 'The last light', place: 'Big Sur, California', category: 'landscape', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=85', alt: 'Sunlit open landscape beneath a wide sky' },
  { title: 'Lines into the blue', place: 'Oslo, Norway', category: 'architecture', image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1100&q=85', alt: 'Angular contemporary building against a clear sky' },
  { title: 'A face in the afternoon', place: 'Lisbon, Portugal', category: 'portrait', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1100&q=85', alt: 'Natural-light portrait of a person outdoors' },
  { title: 'An open distance', place: 'Patagonia, Chile', category: 'landscape', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1100&q=85', alt: 'Expansive mountain landscape beneath shifting clouds' },
  { title: 'A little more sky', place: 'Rotterdam, Netherlands', category: 'architecture', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1100&q=85', alt: 'Minimal white architecture framed against the sky' },
  { title: 'Between the moments', place: 'New York, USA', category: 'portrait', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1100&q=85', alt: 'Portrait of a woman in warm evening light' }
];

const grid = document.querySelector('#gallery-grid');
const dialog = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
let activePhotos = [...photos];
let activeIndex = 0;

function markImageFallback(image) {
  image.closest('.image-frame')?.classList.add('is-fallback');
}

function renderCards() {
  grid.replaceChildren(...photos.map((photo, index) => {
    const card = document.createElement('article');
    card.className = 'gallery-card';
    card.dataset.category = photo.category;
    card.dataset.index = String(index);
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Open ${photo.title}, ${photo.place}`);
    card.innerHTML = `<div class="image-frame"><img src="${photo.image}" alt="${photo.alt}" loading="lazy" decoding="async"><span class="image-fallback" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span></div><div class="card-info"><h3 class="card-title">${photo.title}</h3><span class="card-category">${photo.category}</span></div>`;
    card.querySelector('img').addEventListener('error', event => markImageFallback(event.currentTarget), { once: true });
    card.addEventListener('click', () => openPhoto(photo));
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openPhoto(photo); }
    });
    return card;
  }));
  updateCount();
}

function updateCount() {
  const count = [...grid.children].filter(card => !card.hidden).length;
  document.querySelector('#visible-count').textContent = String(count).padStart(2, '0');
}

function openPhoto(photo) {
  activePhotos = [...grid.children].filter(card => !card.hidden).map(card => photos[Number(card.dataset.index)]);
  activeIndex = activePhotos.indexOf(photo);
  showPhoto();
  dialog.showModal();
}

function showPhoto() {
  const photo = activePhotos[activeIndex];
  lightboxImage.classList.remove('is-fallback-image');
  lightboxImage.src = photo.image;
  lightboxImage.alt = photo.alt;
  lightboxImage.closest('.image-frame').classList.remove('is-fallback');
  lightboxImage.onerror = () => markImageFallback(lightboxImage);
  document.querySelector('#lightbox-title').textContent = photo.title;
  document.querySelector('#lightbox-meta').textContent = `${photo.place} · ${photo.category}`;
}

function movePhoto(direction) {
  activeIndex = (activeIndex + direction + activePhotos.length) % activePhotos.length;
  showPhoto();
}

document.querySelectorAll('.filter-button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-button').forEach(item => {
      const selected = item === button;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    grid.querySelectorAll('.gallery-card').forEach(card => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
    });
    updateCount();
  });
});

document.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
document.querySelector('.lightbox-previous').addEventListener('click', () => movePhoto(-1));
document.querySelector('.lightbox-next').addEventListener('click', () => movePhoto(1));
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') movePhoto(-1);
  if (event.key === 'ArrowRight') movePhoto(1);
});

renderCards();
