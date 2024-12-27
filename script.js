function showDetails(id) {
    const detailElement = document.getElementById(id);
    if (detailElement.style.display === 'none' || detailElement.style.display === '') {
        detailElement.style.display = 'block';
    } else {
        detailElement.style.display = 'none';
    }
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Pesan berhasil dikirim. Terima kasih!');
    this.reset();
});
