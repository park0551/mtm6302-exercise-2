const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const clickedImage = document.getElementById('clickedImage');
const popupCaption = document.getElementById('popup__caption');
const clickedIndex = null;

const images = [
  { name: 'pexels-ahmed-1.jpg', caption: 'Photo by Ahmed on Pexels' },
  { name: 'pexels-ahmed-2.jpg', caption: 'Photo by Ahmed on Pexels' },
  { name: 'pexels-ahmed-3.jpg', caption: 'Photo by Ahmed on Pexels' },
  { name: 'pexels-ahmed-4.jpg', caption: 'Photo by Ahmed on Pexels' },
  { name: 'pexels-ahmed-5.jpg', caption: 'Photo by Ahmed on Pexels' },
  { name: 'pexels-ahmed-6.jpg', caption: 'Photo by Ahmed on Pexels' },
  { name: 'pexels-ahmed-7.jpg', caption: 'Photo by Ahmed on Pexels' },
  { name: 'pexels-ahmed-8.jpg', caption: 'Photo by Ahmed on Pexels' },
  { name: 'pexels-ahmed-9.jpg', caption: 'Photo by Ahmed on Pexels' },
  { name: 'pexels-ahmed-10.jpg', caption: 'Photo by Ahmed on Pexels' },
  { name: 'pexels-ahmed-11.jpg', caption: 'Photo by Ahmed on Pexels' },
  { name: 'pexels-ahmed-12.jpg', caption: 'Photo by Ahmed on Pexels' },
];

for (let i = 0; i < images.length; i++) {
  // data attribute
  const html = `<img class="thumbs" src="/images/thumbs/${images[i].name}" alt="ALT" data-index="${i}">`;

  gallery.innerHTML = gallery.innerHTML + html;
}

// event delegation
gallery.addEventListener('click', function (e) {
  if (e.target.classList.contains('thumbs')) {
    const imgToOpen = e.target.dataset.index;
    clickedImage.src = ''
    clickedImage.src = `/images/${images[imgToOpen].name}`;
    popupCaption.innerHTML = images[imgToOpen].caption;
    popup.style.transform = `translateY(0)`;
    // classList.add
    popup.classList.add("show");
  }
});



popup.addEventListener('click', () => {
  popup.style.transform = `translateY(-200%)`;
  popup.classList.toggle("show");
});
