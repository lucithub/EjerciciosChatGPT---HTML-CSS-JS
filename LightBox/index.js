let thumbnails = document.querySelectorAll('.thumbnail');
let lightbox = document.getElementById('lightbox');
let lightboxImage = document.getElementById('lightboxImage');
let closeBtn = document.getElementById('close');

thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
        lightboxImage.src = this.src;
        lightbox.classList.remove('hidden');
    });
});

closeBtn.addEventListener('click', function() {
    lightbox.classList.add('hidden');
});
