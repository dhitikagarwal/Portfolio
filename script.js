/* =====================================================
   DHITIK PORTFOLIO
   ADVANCED JAVASCRIPT
===================================================== */


/* =====================================================
   EMAILJS CONFIGURATION
===================================================== */

/*
   PUT YOUR EMAILJS DETAILS HERE.

   IMPORTANT:
   These are PUBLIC client-side values.
   NEVER put a Gmail password or private API secret here.
*/

const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";


if (
    EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY"
) {

    emailjs.init({
        publicKey: EMAILJS_PUBLIC_KEY
    });

}


/* =====================================================
   LOADER
===================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList.add("hide");

    }, 1500);

});


/* =====================================================
   ELEMENTS
===================================================== */

const body =
    document.body;

const cursorDot =
    document.querySelector(".cursor-dot");

const cursorRing =
    document.querySelector(".cursor-ring");

const cursorGlow =
    document.querySelector(".cursor-glow");

const navMenu =
    document.getElementById("navMenu");

const menuButton =
    document.getElementById("menuButton");


/* =====================================================
   CURSOR
===================================================== */

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;


document.addEventListener(
    "mousemove",
    e => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        if (cursorDot) {

            cursorDot.style.left =
                mouseX + "px";

            cursorDot.style.top =
                mouseY + "px";

        }

        if (cursorGlow) {

            cursorGlow.style.left =
                mouseX + "px";

            cursorGlow.style.top =
                mouseY + "px";

        }

    }
);


function animateCursor() {

    ringX +=
        (mouseX - ringX) * .16;

    ringY +=
        (mouseY - ringY) * .16;

    if (cursorRing) {

        cursorRing.style.left =
            ringX + "px";

        cursorRing.style.top =
            ringY + "px";

    }

    requestAnimationFrame(
        animateCursor
    );

}


animateCursor();


document
    .querySelectorAll("a, button, input, textarea")
    .forEach(element => {

        element.addEventListener(
            "mouseenter",
            () => {

                if (!cursorRing) return;

                cursorRing.style.width =
                    "60px";

                cursorRing.style.height =
                    "60px";

                cursorRing.style.background =
                    "rgba(0,229,255,.08)";

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                if (!cursorRing) return;

                cursorRing.style.width =
                    "35px";

                cursorRing.style.height =
                    "35px";

                cursorRing.style.background =
                    "transparent";

            }
        );

    });


/* =====================================================
   TYPING EFFECT
===================================================== */

const words = [

    "websites.",
    "games.",
    "experiments.",
    "cool interfaces.",
    "crazy ideas.",
    "digital experiences."

];


const typing =
    document.getElementById("typing");

let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

    const word =
        words[wordIndex];


    if (!deleting) {

        typing.textContent =
            word.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            word.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1300
            );

            return;

        }

    }

    else {

        typing.textContent =
            word.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (
            charIndex === 0
        ) {

            deleting = false;

            wordIndex =
                (
                    wordIndex + 1
                ) %
                words.length;

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 45 : 85
    );

}


typeEffect();


/* =====================================================
   TERMINAL TYPING
===================================================== */

const terminalTyping =
    document.getElementById(
        "terminalTyping"
    );


const terminalWords = [

    "build --awesome",
    "create --something-new",
    "debug --everything",
    "learn --more",
    "ship --project"

];


let terminalIndex = 0;

let terminalChar = 0;

let terminalDelete = false;


function terminalEffect() {

    const word =
        terminalWords[
            terminalIndex
        ];


    if (!terminalDelete) {

        terminalTyping.textContent =
            word.substring(
                0,
                terminalChar + 1
            );

        terminalChar++;


        if (
            terminalChar ===
            word.length
        ) {

            terminalDelete = true;

            setTimeout(
                terminalEffect,
                1000
            );

            return;

        }

    }

    else {

        terminalTyping.textContent =
            word.substring(
                0,
                terminalChar - 1
            );

        terminalChar--;


        if (
            terminalChar === 0
        ) {

            terminalDelete = false;

            terminalIndex =
                (
                    terminalIndex + 1
                ) %
                terminalWords.length;

        }

    }


    setTimeout(
        terminalEffect,
        terminalDelete ? 40 : 80
    );

}


terminalEffect();


/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const modeButton =
    document.getElementById(
        "modeButton"
    );


function updateModeIcon() {

    const icon =
        modeButton.querySelector("i");


    if (
        body.classList.contains(
            "light"
        )
    ) {

        icon.className =
            "fa-solid fa-moon";

    }

    else {

        icon.className =
            "fa-solid fa-sun";

    }

}


modeButton.addEventListener(
    "click",
    () => {

        body.classList.toggle(
            "light"
        );

        const theme =
            body.classList.contains(
                "light"
            )
                ? "light"
                : "dark";


        localStorage.setItem(
            "theme",
            theme
        );


        updateModeIcon();

        playClick();

        showToast(
            theme === "light"
                ? "☀️ Light mode activated"
                : "🌙 Dark mode activated"
        );

    }
);


if (
    localStorage.getItem(
        "theme"
    ) === "light"
) {

    body.classList.add(
        "light"
    );

}


updateModeIcon();


/* =====================================================
   COLOR THEMES
===================================================== */

const themeButton =
    document.getElementById(
        "themeButton"
    );


const themes = [

    [
        "#7c3cff",
        "#00e5ff",
        "#ff2bd6"
    ],

    [
        "#ff006e",
        "#00f5d4",
        "#8338ec"
    ],

    [
        "#ff7b00",
        "#00ff87",
        "#00b4d8"
    ],

    [
        "#00bbf9",
        "#9b5de5",
        "#f15bb5"
    ],

    [
        "#ff3131",
        "#ffe600",
        "#00ff66"
    ]

];


let currentTheme =
    Number(
        localStorage.getItem(
            "colorTheme"
        )
    ) || 0;


function applyTheme(index) {

    const theme =
        themes[index];


    document.documentElement
        .style
        .setProperty(
            "--primary",
            theme[0]
        );


    document.documentElement
        .style
        .setProperty(
            "--secondary",
            theme[1]
        );


    document.documentElement
        .style
        .setProperty(
            "--accent",
            theme[2]
        );

}


applyTheme(
    currentTheme
);


themeButton.addEventListener(
    "click",
    () => {

        currentTheme =
            (
                currentTheme + 1
            ) %
            themes.length;


        applyTheme(
            currentTheme
        );


        localStorage.setItem(
            "colorTheme",
            currentTheme
        );


        playClick();

        showToast(
            "🎨 Color theme changed!"
        );

    }
);


/* =====================================================
   SOUND ENGINE
===================================================== */

let soundEnabled =
    localStorage.getItem(
        "sound"
    ) !== "off";


let audioContext;


function getAudioContext() {

    if (!audioContext) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

    }

    if (
        audioContext.state ===
        "suspended"
    ) {

        audioContext.resume();

    }

    return audioContext;

}


function beep(
    frequency = 500,
    duration = .07,
    volume = .035
) {

    if (!soundEnabled) return;


    const ctx =
        getAudioContext();


    const oscillator =
        ctx.createOscillator();


    const gain =
        ctx.createGain();


    oscillator.type =
        "sine";

    oscillator.frequency.value =
        frequency;


    gain.gain.setValueAtTime(
        volume,
        ctx.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        .001,
        ctx.currentTime +
        duration
    );


    oscillator.connect(gain);

    gain.connect(
        ctx.destination
    );


    oscillator.start();

    oscillator.stop(
        ctx.currentTime +
        duration
    );

}


function playClick() {

    beep(
        600,
        .06,
        .03
    );

}


function playSuccess() {

    beep(
        700,
        .08,
        .04
    );

    setTimeout(
        () => beep(
            950,
            .12,
            .04
        ),
        70
    );

}


const soundButton =
    document.getElementById(
        "soundButton"
    );


function updateSoundIcon() {

    const icon =
        soundButton.querySelector(
            "i"
        );


    icon.className =
        soundEnabled
            ? "fa-solid fa-volume-high"
            : "fa-solid fa-volume-xmark";

}


updateSoundIcon();


soundButton.addEventListener(
    "click",
    () => {

        soundEnabled =
            !soundEnabled;


        localStorage.setItem(
            "sound",
            soundEnabled
                ? "on"
                : "off"
        );


        updateSoundIcon();


        if (soundEnabled) {

            beep(
                800,
                .1,
                .04
            );

        }

        else {

            showToast(
                "🔇 Sounds muted"
            );

        }

    }
);


/* =====================================================
   PARTICLES
===================================================== */

const canvas =
    document.getElementById(
        "particles"
    );


const ctx =
    canvas.getContext("2d");


let particles = [];

let particleMouse = {
    x: null,
    y: null
};


function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;


    createParticles();

}


window.addEventListener(
    "resize",
    resizeCanvas
);


document.addEventListener(
    "mousemove",
    e => {

        particleMouse.x =
            e.clientX;

        particleMouse.y =
            e.clientY;

    }
);


class Particle {

    constructor() {

        this.x =
            Math.random() *
            canvas.width;

        this.y =
            Math.random() *
            canvas.height;

        this.vx =
            (
                Math.random() -
                .5
            ) * .45;

        this.vy =
            (
                Math.random() -
                .5
            ) * .45;

        this.radius =
            Math.random() *
            1.7 + .5;

    }


    update() {

        this.x += this.vx;

        this.y += this.vy;


        if (
            this.x < 0 ||
            this.x >
            canvas.width
        ) {

            this.vx *= -1;

        }


        if (
            this.y < 0 ||
            this.y >
            canvas.height
        ) {

            this.vy *= -1;

        }


        if (
            particleMouse.x !== null
        ) {

            const dx =
                this.x -
                particleMouse.x;

            const dy =
                this.y -
                particleMouse.y;

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (
                distance < 100
            ) {

                this.x +=
                    dx / distance *
                    0.7;

                this.y +=
                    dy / distance *
                    0.7;

            }

        }

    }


    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            getComputedStyle(
                document.documentElement
            )
            .getPropertyValue(
                "--secondary"
            );

        ctx.globalAlpha =
            .45;

        ctx.fill();

        ctx.globalAlpha =
            1;

    }

}


function createParticles() {

    particles = [];


    const amount =
        Math.min(
            130,
            Math.floor(
                window.innerWidth /
                9
            )
        );


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        particles.push(
            new Particle()
        );

    }

}


function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(
        particle => {

            particle.update();

            particle.draw();

        }
    );


    /* CONNECT PARTICLES */

    for (
        let i = 0;
        i < particles.length;
        i++
    ) {

        for (
            let j = i + 1;
            j < particles.length;
            j++
        ) {

            const a =
                particles[i];

            const b =
                particles[j];


            const dx =
                a.x - b.x;

            const dy =
                a.y - b.y;

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (
                distance < 120
            ) {

                ctx.beginPath();

                ctx.moveTo(
                    a.x,
                    a.y
                );

                ctx.lineTo(
                    b.x,
                    b.y
                );


                ctx.strokeStyle =
                    getComputedStyle(
                        document.documentElement
                    )
                    .getPropertyValue(
                        "--secondary"
                    );


                ctx.globalAlpha =
                    .08 *
                    (
                        1 -
                        distance / 120
                    );


                ctx.stroke();

                ctx.globalAlpha =
                    1;

            }

        }

    }


    requestAnimationFrame(
        animateParticles
    );

}


resizeCanvas();

animateParticles();


/* =====================================================
   MOBILE MENU
===================================================== */

menuButton.addEventListener(
    "click",
    () => {

        navMenu.classList.toggle(
            "open"
        );


        const icon =
            menuButton.querySelector(
                "i"
            );


        icon.className =
            navMenu.classList.contains(
                "open"
            )
                ? "fa-solid fa-xmark"
                : "fa-solid fa-bars";


        playClick();

    }
);


document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navMenu.classList.remove(
                    "open"
                );


                menuButton
                    .querySelector("i")
                    .className =
                    "fa-solid fa-bars";

            }
        );

    });


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add(
                                "visible"
                            );

                    }

                }
            );

        },
        {
            threshold: .12
        }
    );


revealElements.forEach(
    element =>
        revealObserver.observe(
            element
        )
);


/* =====================================================
   COUNTERS
===================================================== */

const counters =
    document.querySelectorAll(
        "[data-count]"
    );


const counterObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        !entry.isIntersecting
                    ) return;


                    const element =
                        entry.target;


                    const target =
                        Number(
                            element.dataset.count
                        );


                    let current = 0;


                    const step =
                        Math.max(
                            1,
                            Math.ceil(
                                target / 70
                            )
                        );


                    const timer =
                        setInterval(
                            () => {

                                current +=
                                    step;


                                if (
                                    current >=
                                    target
                                ) {

                                    current =
                                        target;

                                    clearInterval(
                                        timer
                                    );

                                }


                                element.textContent =
                                    current;

                            },
                            25
                        );


                    counterObserver.unobserve(
                        element
                    );

                }
            );

        },
        {
            threshold: .7
        }
    );


counters.forEach(
    counter =>
        counterObserver.observe(
            counter
        )
);


/* =====================================================
   PROJECT FILTER
===================================================== */

const filters =
    document.querySelectorAll(
        ".filter"
    );


const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


let activeFilter =
    "all";


function filterProjects() {

    const search =
        document
            .getElementById(
                "projectSearch"
            )
            .value
            .toLowerCase()
            .trim();


    let visible = 0;


    projectCards.forEach(
        card => {

            const category =
                card.dataset.category;

            const title =
                card.dataset.title
                    .toLowerCase();

            const description =
                card.dataset.description
                    .toLowerCase();


            const categoryMatch =
                activeFilter === "all" ||
                category === activeFilter;


            const searchMatch =
                !search ||
                title.includes(search) ||
                description.includes(search);


            if (
                categoryMatch &&
                searchMatch
            ) {

                card.classList.remove(
                    "hidden"
                );

                visible++;

            }

            else {

                card.classList.add(
                    "hidden"
                );

            }

        }
    );


    document.getElementById(
        "noProjects"
    ).style.display =
        visible === 0
            ? "block"
            : "none";

}


filters.forEach(
    filter => {

        filter.addEventListener(
            "click",
            () => {

                filters.forEach(
                    f =>
                        f.classList.remove(
                            "active"
                        )
                );


                filter.classList.add(
                    "active"
                );


                activeFilter =
                    filter.dataset.filter;


                filterProjects();

                playClick();

            }
        );

    }
);


document
    .getElementById(
        "projectSearch"
    )
    .addEventListener(
        "input",
        filterProjects
    );


/* =====================================================
   PROJECT MODAL
===================================================== */

const modal =
    document.getElementById(
        "projectModal"
    );


const closeModal =
    document.getElementById(
        "closeModal"
    );


const modalTitle =
    document.getElementById(
        "modalTitle"
    );


const modalDescription =
    document.getElementById(
        "modalDescription"
    );


const modalType =
    document.getElementById(
        "modalType"
    );


document
    .querySelectorAll(
        ".view-project"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            e => {

                const card =
                    e.target.closest(
                        ".project-card"
                    );


                modalTitle.textContent =
                    card.dataset.title;


                modalDescription.textContent =
                    card.dataset.description;


                modalType.textContent =
                    card.dataset.category
                        .toUpperCase();


                modal.classList.add(
                    "open"
                );


                playClick();

            }
        );

    });


function closeProjectModal() {

    modal.classList.remove(
        "open"
    );

}


closeModal.addEventListener(
    "click",
    closeProjectModal
);


modal.addEventListener(
    "click",
    e => {

        if (
            e.target === modal
        ) {

            closeProjectModal();

        }

    }
);


/* =====================================================
   TILT
===================================================== */

document
    .querySelectorAll(".tilt")
    .forEach(card => {

        card.addEventListener(
            "mousemove",
            e => {

                if (
                    window.innerWidth < 800
                ) return;


                const rect =
                    card.getBoundingClientRect();


                const x =
                    e.clientX -
                    rect.left;


                const y =
                    e.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    (y - centerY) /
                    18;


                const rotateY =
                    (centerX - x) /
                    18;


                card.style.transform =
                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-5px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });


/* =====================================================
   MAGNETIC BUTTONS
===================================================== */

document
    .querySelectorAll(".magnetic")
    .forEach(button => {

        button.addEventListener(
            "mousemove",
            e => {

                if (
                    window.innerWidth < 800
                ) return;


                const rect =
                    button.getBoundingClientRect();


                const x =
                    e.clientX -
                    rect.left -
                    rect.width / 2;


                const y =
                    e.clientY -
                    rect.top -
                    rect.height / 2;


                button.style.transform =
                    `translate(
                        ${x * .1}px,
                        ${y * .1}px
                    )`;

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "";

            }
        );

    });


/* =====================================================
   RIPPLE
===================================================== */

document
    .querySelectorAll(".btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            function(e) {

                const ripple =
                    document.createElement(
                        "span"
                    );


                const rect =
                    this.getBoundingClientRect();


                ripple.style.position =
                    "absolute";

                ripple.style.left =
                    (
                        e.clientX -
                        rect.left
                    ) + "px";

                ripple.style.top =
                    (
                        e.clientY -
                        rect.top
                    ) + "px";

                ripple.style.width =
                    "5px";

                ripple.style.height =
                    "5px";

                ripple.style.borderRadius =
                    "50%";

                ripple.style.background =
                    "rgba(255,255,255,.5)";

                ripple.style.transform =
                    "translate(-50%,-50%)";

                ripple.style.pointerEvents =
                    "none";


                this.appendChild(
                    ripple
                );


                ripple.animate(
                    [
                        {
                            width: "5px",
                            height: "5px",
                            opacity: 1
                        },
                        {
                            width: "500px",
                            height: "500px",
                            opacity: 0
                        }
                    ],
                    {
                        duration: 600,
                        easing: "ease-out"
                    }
                ).onfinish =
                    () =>
                        ripple.remove();

            }
        );

    });


/* =====================================================
   COPY EMAIL
===================================================== */

document
    .getElementById(
        "copyEmail"
    )
    .addEventListener(
        "click",
        async () => {

            try {

                await navigator.clipboard
                    .writeText(
                        "dhitik101@gmail.com"
                    );


                showToast(
                    "📋 Email copied!"
                );


                playSuccess();

            }

            catch {

                showToast(
                    "Copy failed — use the email link."
                );

            }

        }
    );


/* =====================================================
   CHARACTER COUNTER
===================================================== */

const messageInput =
    document.getElementById(
        "message"
    );


const charCount =
    document.getElementById(
        "charCount"
    );


messageInput.addEventListener(
    "input",
    () => {

        charCount.textContent =
            messageInput.value.length;

    }
);


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );


const formStatus =
    document.getElementById(
        "formStatus"
    );


contactForm.addEventListener(
    "submit",
    async e => {

        e.preventDefault();


        /* SPAM CHECK */

        const honeypot =
            contactForm.elements.website;


        if (
            honeypot &&
            honeypot.value
        ) {

            return;

        }


        /* EMAILJS CHECK */

        if (
            EMAILJS_PUBLIC_KEY ===
                "YOUR_PUBLIC_KEY" ||
            EMAILJS_SERVICE_ID ===
                "YOUR_SERVICE_ID" ||
            EMAILJS_TEMPLATE_ID ===
                "YOUR_TEMPLATE_ID"
        ) {

            formStatus.textContent =
                "⚠️ EmailJS is not configured yet.";

            formStatus.className =
                "form-error";

            showToast(
                "⚠️ Add your EmailJS IDs first."
            );

            return;

        }


        const button =
            contactForm.querySelector(
                ".send-button"
            );


        button.classList.add(
            "loading"
        );


        button.disabled = true;


        formStatus.textContent =
            "";


        try {

            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                contactForm
            );


            formStatus.textContent =
                "✓ Message sent successfully! I'll get back to you soon.";

            formStatus.className =
                "form-success";


            showToast(
                "🚀 Message sent!"
            );


            playSuccess();


            contactForm.reset();


            charCount.textContent =
                "0";

        }

        catch (error) {

            console.error(
                "EmailJS error:",
                error
            );


            formStatus.textContent =
                "✕ Something went wrong. Please try again.";

            formStatus.className =
                "form-error";


            showToast(
                "❌ Message could not be sent."
            );

        }

        finally {

            button.classList.remove(
                "loading"
            );

            button.disabled =
                false;

        }

    }
);


/* =====================================================
   ACTIVE NAV
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(
            section => {

                const top =
                    section.offsetTop -
                    180;


                if (
                    window.scrollY >=
                    top
                ) {

                    current =
                        section.id;

                }

            }
        );


        navLinks.forEach(
            link => {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* =====================================================
   SCROLL PROGRESS
===================================================== */

const progress =
    document.getElementById(
        "scrollProgress"
    );


window.addEventListener(
    "scroll",
    () => {

        const scrollTop =
            window.scrollY;


        const height =
            document.documentElement
                .scrollHeight -
            window.innerHeight;


        const percentage =
            (
                scrollTop /
                height
            ) * 100;


        progress.style.width =
            percentage + "%";

    }
);


/* =====================================================
   SCROLL TOP
===================================================== */

const scrollTop =
    document.getElementById(
        "scrollTop"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 600
        ) {

            scrollTop.classList.add(
                "show"
            );

        }

        else {

            scrollTop.classList.remove(
                "show"
            );

        }

    }
);


scrollTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });


        playClick();

    }
);


/* =====================================================
   LOCAL TIME
===================================================== */

const localTime =
    document.getElementById(
        "localTime"
    );


function updateTime() {

    const now =
        new Date();


    localTime.textContent =
        now.toLocaleTimeString(
            [],
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );

}


updateTime();

setInterval(
    updateTime,
    1000
);


/* =====================================================
   COMMAND PALETTE
===================================================== */

const commandPalette =
    document.getElementById(
        "commandPalette"
    );


const commandButton =
    document.getElementById(
        "commandButton"
    );


const commandInput =
    document.getElementById(
        "commandInput"
    );


function openCommandPalette() {

    commandPalette.classList.add(
        "open"
    );

    setTimeout(
        () =>
            commandInput.focus(),
        100
    );

}


function closeCommandPalette() {

    commandPalette.classList.remove(
        "open"
    );

    commandInput.value = "";

}


commandButton.addEventListener(
    "click",
    openCommandPalette
);


commandPalette.addEventListener(
    "click",
    e => {

        if (
            e.target ===
            commandPalette
        ) {

            closeCommandPalette();

        }

    }
);


document
    .querySelectorAll(
        "[data-command]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const command =
                    button.dataset.command;


                closeCommandPalette();


                if (
                    command === "home"
                ) {

                    location.hash =
                        "home";

                }


                if (
                    command === "projects"
                ) {

                    location.hash =
                        "projects";

                }


                if (
                    command === "contact"
                ) {

                    location.hash =
                        "contact";

                }


                if (
                    command === "theme"
                ) {

                    themeButton.click();

                }


                if (
                    command === "sound"
                ) {

                    soundButton.click();

                }

            }
        );

    });


/* =====================================================
   KEYBOARD SHORTCUTS
===================================================== */

document.addEventListener(
    "keydown",
    e => {

        if (
            e.ctrlKey &&
            e.key.toLowerCase() ===
            "k"
        ) {

            e.preventDefault();

            openCommandPalette();

        }


        if (
            e.key === "Escape"
        ) {

            closeCommandPalette();

            closeProjectModal();

        }


        if (
            !e.ctrlKey &&
            !e.altKey &&
            !e.shiftKey
        ) {

            if (
                e.key.toLowerCase() ===
                "h"
            ) {

                location.hash =
                    "home";

            }


            if (
                e.key.toLowerCase() ===
                "p"
            ) {

                location.hash =
                    "projects";

            }


            if (
                e.key.toLowerCase() ===
                "c"
            ) {

                location.hash =
                    "contact";

            }

        }

    }
);


/* =====================================================
   TOAST
===================================================== */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            3000
        );

}


/* =====================================================
   ESC CLOSE MODAL
===================================================== */

document.addEventListener(
    "keydown",
    e => {

        if (
            e.key === "Escape"
        ) {

            document
                .getElementById(
                    "projectModal"
                )
                .classList.remove(
                    "open"
                );

        }

    }
);


/* =====================================================
   WELCOME
===================================================== */

setTimeout(
    () => {

        showToast(
            "⚡ Welcome to Dhitik's portfolio!"
        );

    },
    2200
);

const clickSound = new Audio("music.ogg");

function playClick() {
    clickSound.currentTime = 0;
    clickSound.play();
}