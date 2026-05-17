function startWeb(){
    const musik = document.getElementById('musik');
    const startScreen = document.getElementById('startScreen');
    const content = document.getElementById('content');

    if (!startScreen || !content || !musik) {
        console.log("Elemen tidak ditemukan!");
        return;
    }

    // pindah tampilan
    startScreen.style.display = "none";
    content.style.display = "block";

    // reset audio biar langsung dari awal
    musik.currentTime = 0;
    musik.volume = 1;

    // mainkan musik
    musik.play().catch(err => {
        console.log("Audio gagal diputar:", err);
    });

    // jalankan love
    setInterval(buatLove, 300);

    setTimeout(() => {
    const typing = document.querySelector(".typing");
    if (typing) typing.classList.add("done");
}, 6000);

}

function buatLove(){
    const love = document.createElement("div");
    love.classList.add("love");
    love.innerHTML = "💖";

    love.style.left = Math.random() * 100 + "vw";
    love.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(love);

    setTimeout(() => {
        love.remove();
    }, 5000);
}
