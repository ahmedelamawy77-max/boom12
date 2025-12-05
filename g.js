let boomCount = 0;

function button() {
    let i = document.getElementById("inputg").value;
    let msg = document.getElementById("message");
    let anim = document.getElementById("animBox");
    let counter = document.getElementById("counter");

    let winSound = document.getElementById("winSound");
    let loseSound = document.getElementById("loseSound");

    let animationClass = "";

    anim.className = "";
    void anim.offsetWidth;

    if (i < 1 || i > 100) {
        msg.innerText = "Write NOWWWWWW 🤬";
        animationClass = "angry";
    }
    else if ([2, 90, 10, 80, 79, 3, 77, 99, 66, 22, 54, 45, 14, 6, 11, 7, 20, 55, 50, 44].includes(Number(i))) {
        msg.innerText = "Save Save 👌";
        animationClass = "safe";
        safeCount++;
    }
    else {
        msg.innerText = "BUMMMMMMMM 🤣";
        animationClass = "boom";
        boomCount++;
    }

    anim.classList.add(animationClass);

    counter.innerText = `Safe: ${safeCount} | Boom: ${boomCount}`;

    // تحقق من الفوز أو الخسارة
    if (safeCount >= 5) {
        msg.innerText = "YOU WINNNNN 🎉🔥";
        anim.className = "safe";

        // تشغيل صوت الفوز
        winSound.play();

        // إعادة العدّاد
        safeCount = 0;
        boomCount = 0;
        counter.innerText = `Safe: 0 | Boom: 0`;
    }

    if (boomCount >= 5) {
        msg.innerText = "YOU LOSEEE 💀💀💀";
        anim.className = "boom";

        // تشغيل صوت الخسارة
        loseSound.play();

        // إعادة العدّاد
        safeCount = 0;
        boomCount = 0;
        counter.innerText = `Safe: 0 | Boom: 0`;
    }
}