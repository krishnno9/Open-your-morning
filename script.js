const startBtn = document.getElementById("startBtn");
const photosBtn = document.getElementById("photosBtn");
const gameBtn = document.getElementById("gameBtn");

const welcomeScreen = document.getElementById("welcomeScreen");
const letterSection = document.getElementById("letterSection");
const photosSection = document.getElementById("photosSection");
const gameSection = document.getElementById("gameSection");
const finalSection = document.getElementById("finalSection");

const gameArea = document.getElementById("gameArea");
const scoreText = document.getElementById("score");

let score = 0;
let gameStarted = false;


// Open Morning Letter
startBtn.addEventListener("click", () => {

    welcomeScreen.classList.add("hidden");
    letterSection.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// Open Photos
photosBtn.addEventListener("click", () => {

    letterSection.classList.add("hidden");
    photosSection.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// Start Game
gameBtn.addEventListener("click", () => {

    photosSection.classList.add("hidden");
    gameSection.classList.remove("hidden");

    score = 0;
    scoreText.textContent = score;

    gameStarted = true;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    createHeart();

});


// Create Heart
function createHeart() {

    if (!gameStarted || score >= 5) {
        return;
    }

    const heart = document.createElement("div");

    heart.classList.add("game-heart");

    heart.textContent = "❤️";

    const maxX = gameArea.clientWidth - 50;
    const maxY = gameArea.clientHeight - 50;

    heart.style.left =
        Math.random() * maxX + "px";

    heart.style.top =
        Math.random() * maxY + "px";


    heart.addEventListener("click", () => {

        score++;

        scoreText.textContent = score;

        heart.remove();

        if (score >= 5) {

            gameStarted = false;

            setTimeout(() => {

                gameSection.classList.add("hidden");

                finalSection.classList.remove("hidden");

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

                createFinalHearts();

            }, 400);

        } else {

            createHeart();

        }

    });


    gameArea.appendChild(heart);


    // Heart disappears if not clicked
    setTimeout(() => {

        if (heart.parentElement && gameStarted) {

            heart.remove();

            createHeart();

        }

    }, 2200);

}


// Final floating hearts
function createFinalHearts() {

    const hearts = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "💓"
    ];

    for (let i = 0; i < 12; i++) {

        const heart = document.createElement("span");

        heart.textContent =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.position = "fixed";
        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-30px";

        heart.style.fontSize =
            (18 + Math.random() * 20) + "px";

        heart.style.zIndex = "999";

        heart.style.pointerEvents = "none";

        heart.style.transition =
            "transform 4s ease-out, opacity 4s ease-out";

        document.body.appendChild(heart);


        setTimeout(() => {

            heart.style.transform =
                "translateY(-100vh)";

            heart.style.opacity = "0";

        }, 50);


        setTimeout(() => {

            heart.remove();

        }, 4200);

    }

}
