/* =========================================
   AMBIL ELEMENT
========================================= */

const music =
    document.getElementById("birthdayMusic");

const musicButton =
    document.getElementById("musicButton");

const opening =
    document.getElementById("opening");

const mainContent =
    document.getElementById("mainContent");


/* =========================================
   STATUS MUSIK
========================================= */

let musicPlaying = false;


/* =========================================
   BUKA SURPRISE
========================================= */

function openSurprise() {

    console.log("Tombol Buka Surprise ditekan");


    /* -------------------------------------
       PUTAR MUSIK
    -------------------------------------- */

    music.volume = 1.0;

    const playPromise =
        music.play();


    if (playPromise !== undefined) {

        playPromise
            .then(() => {

                console.log(
                    "Musik berhasil diputar!"
                );

                musicPlaying = true;

                musicButton.innerHTML = "🔊";

            })

            .catch((error) => {

                console.error(
                    "Musik gagal diputar:",
                    error
                );

                musicPlaying = false;

                musicButton.innerHTML = "🔇";

                alert(
                    "Musik tidak dapat diputar. " +
                    "Pastikan file birthday.mp3 ada di folder music."
                );

            });

    }


    /* -------------------------------------
       ANIMASI HALAMAN PEMBUKA
    -------------------------------------- */

    opening.style.opacity = "0";


    setTimeout(() => {

        opening.style.display = "none";

        mainContent.style.display = "block";


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });


    }, 700);


    /* -------------------------------------
       CONFETTI
    -------------------------------------- */

    createConfetti();

}


/* =========================================
   TOMBOL MUSIK
========================================= */

function toggleMusic() {

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        musicButton.innerHTML = "🔇";

        console.log(
            "Musik dihentikan"
        );

    }

    else {

        music.volume = 1.0;


        music.play()

            .then(() => {

                musicPlaying = true;

                musicButton.innerHTML = "🔊";

                console.log(
                    "Musik dimainkan"
                );

            })

            .catch((error) => {

                console.error(
                    "Musik gagal:",
                    error
                );

                alert(
                    "Musik tidak dapat diputar. " +
                    "Periksa file birthday.mp3."
                );

            });

    }

}


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const container =
        document.getElementById(
            "confetti-container"
        );


    const symbols = [

        "🎉",
        "🎊",
        "❤️",
        "💖",
        "💕",
        "✨",
        "🌸",
        "⭐"

    ];


    for (
        let i = 0;
        i < 80;
        i++
    ) {

        const confetti =
            document.createElement("div");


        confetti.classList.add(
            "confetti"
        );


        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.fontSize =
            (
                Math.random() * 15 + 12
            ) + "px";


        confetti.style.animationDuration =
            (
                Math.random() * 3 + 2
            ) + "s";


        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";


        container.appendChild(
            confetti
        );


        setTimeout(() => {

            confetti.remove();

        }, 6500);

    }

}


/* =========================================
   MAKE A WISH
========================================= */

function makeWish() {

    const result =
        document.getElementById(
            "wishResult"
        );


    result.innerHTML =
        "✨ Semoga semua harapanmu menjadi kenyataan! ❤️";


    createConfetti();

}


/* =========================================
   ANIMASI SAAT SCROLL
========================================= */

const animatedElements =
    document.querySelectorAll(
        ".photo-card, .message-card"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                }
            );

        },

        {

            threshold: 0.15

        }

    );


animatedElements.forEach(
    (element) => {

        observer.observe(element);

    }
);


/* =========================================
   CEK FILE MUSIK
========================================= */

music.addEventListener(
    "error",
    () => {

        console.error(
            "================================"
        );

        console.error(
            "FILE MUSIK TIDAK DITEMUKAN!"
        );

        console.error(
            "Pastikan:"
        );

        console.error(
            "music/birthday.mp3"
        );

        console.error(
            "================================"
        );

    }
);


/* =========================================
   MUSIK SELESAI DIMUAT
========================================= */

music.addEventListener(
    "canplaythrough",
    () => {

        console.log(
            "File musik berhasil ditemukan."
        );

    }
);