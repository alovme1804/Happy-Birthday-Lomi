function triggerConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    confettiContainer.style.display = 'block';

    // Buat dan tambahkan elemen confetti secara dinamis
    for (let i = 0; i < 300; i++) { // Tambah lebih banyak elemen confetti
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        // Posisi horizontal acak
        const leftPosition = Math.random() * 100;
        confetti.style.left = `${leftPosition}%`;
        // Delay animasi acak
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => {
        confettiContainer.style.display = 'none';
        confettiContainer.innerHTML = '';
        window.location.href = 'happy-birthday.html'; // Pindah halaman setelah animasi selesai
    }, 3000);
}
