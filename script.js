// MENU MOBILE
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// LICZNIKI
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const update = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const speed = target / 100;

        if(count < target) {
            counter.innerText = Math.ceil(count + speed);
            setTimeout(update, 20);
        } else {
            counter.innerText = target;
        }
    };

    update();
});
