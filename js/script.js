/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", function () {

        if (mobileMenu.style.display === "flex") {
            mobileMenu.style.display = "none";
        } else {
            mobileMenu.style.display = "flex";
        }

    });


    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.style.display = "none";

        });

    });

}

let stalls = [];


/* =========================================================
   CAROUSEL ELEMENTS
========================================================= */

const track = document.getElementById("jfcTrack");

const prevButton = document.getElementById("jfcPrev");

const nextButton = document.getElementById("jfcNext");

const categoryText = document.getElementById("jfcCategory");

const nameText = document.getElementById("jfcName");

const descriptionText = document.getElementById("jfcText");

const exploreLink = document.getElementById("jfcLink");

const currentNumber = document.getElementById("jfcCurrent");

const totalNumber =
    document.querySelector(".jfc-counter small");


/* =========================================================
   CAROUSEL STATE
========================================================= */

let currentIndex = 0;

function loadStalls() {
    stalls = [
        {
            name: "Shree Datta Bhel",
            category: "FOOD STALL",
            description: "Discover the flavours at Datta."
        },
        {
            name: "Kharda Vadapav",
            category: "FOOD STALL",
            description: "Explore the menu at Kharda."
        },
        {
            name: "Misal Katta",
            category: "FOOD STALL",
            description: "Enjoy a taste of Maharashtra."
        },
        {
            name: "Saiba Amruttullya",
            category: "FOOD STALL",
            description: "Discover something delicious at Saiba."
        },
        {
            name: "Benne Dosa",
            category: "FOOD STALL",
            description: "Menu coming soon."
        },
    ];

    currentIndex = 0;
    createCards();
    updateCarousel();
}


/* =========================================================
   CREATE STALL CARDS
========================================================= */

function createCards() {

    if (!track) {
        return;
    }

    track.innerHTML = "";


    stalls.forEach(function (stall, index) {

        let logoImage = "images/hero.jpg";

        const name =
            (stall.name || "").toLowerCase();


        if (name.includes("datta")) {

            logoImage =
                "images/shree-datta-bhel-logo.jpg";

        }

        else if (
            name.includes("kharada") ||
            name.includes("kharda")
        ) {

            logoImage =
                "images/kharada-vada-pav-logo.jpg";

        }

        else if (name.includes("misal")) {

            logoImage =
                "images/misal-katta-logo.jpg";

        }

        else if (name.includes("saiba")) {

            logoImage =
                "images/saiba-amrutatulaya-logo.jpg";

        }
        else if (name.includes("benne dosa")) {
    logoImage = "images/hero.jpg";
}


        const card =
            document.createElement("div");

        card.className = "jfc-card";


        card.innerHTML = `

            <img
                src="${logoImage}"
                alt="${stall.name}"
                onerror="this.src='images/hero.jpg'"
            >

            <div class="jfc-card-number">
                ${String(index + 1).padStart(2, "0")}
            </div>

            <div class="jfc-card-name">
                ${stall.name}
            </div>

        `;


        track.appendChild(card);

    });

}


/* =========================================================
   UPDATE CAROUSEL
========================================================= */

function updateCarousel() {

    if (!track) {
        return;
    }


    const cards =
        track.querySelectorAll(".jfc-card");


    const total = cards.length;


    if (total === 0) {
        return;
    }


    cards.forEach(function (card, index) {

        let position =
            index - currentIndex;


        if (position > total / 2) {
            position -= total;
        }


        if (position < -total / 2) {
            position += total;
        }


        /* CENTER */

        if (position === 0) {

            card.style.transform =
                "translate(-50%, -50%) scale(1)";

            card.style.opacity = "1";

            card.style.filter = "blur(0px)";

            card.style.zIndex = "10";

            card.style.pointerEvents = "auto";

        }


        /* LEFT */

        else if (position === -1) {

            card.style.transform =
                "translate(-145%, -50%) scale(0.82)";

            card.style.opacity = "0.65";

            card.style.filter = "blur(0px)";

            card.style.zIndex = "5";

            card.style.pointerEvents = "auto";

        }


        /* RIGHT */

        else if (position === 1) {

            card.style.transform =
                "translate(45%, -50%) scale(0.82)";

            card.style.opacity = "0.65";

            card.style.filter = "blur(0px)";

            card.style.zIndex = "5";

            card.style.pointerEvents = "auto";

        }


        /* HIDDEN */

        else {

            card.style.transform =
                "translate(-50%, -50%) scale(0.5)";

            card.style.opacity = "0";

            card.style.filter = "blur(6px)";

            card.style.zIndex = "0";

            card.style.pointerEvents = "none";

        }

    });


    updateInformation();

}


/* =========================================================
   UPDATE STALL INFORMATION
========================================================= */

function updateInformation() {

    const stall =
        stalls[currentIndex];


    if (!stall) {
        return;
    }


    if (categoryText) {

        categoryText.textContent =
            stall.category || "";

    }


    if (nameText) {

        nameText.textContent =
            stall.name || "";

    }


    if (descriptionText) {

        descriptionText.textContent =
            stall.description || "";

    }


    /* =====================================================
       MENU LINK
    ===================================================== */

    if (exploreLink) {

        let stallKey = "";

        const name =
            (stall.name || "").toLowerCase();


        if (name.includes("datta")) {

            stallKey = "datta";

        }

        else if (
            name.includes("kharada") ||
            name.includes("kharda")
        ) {

            stallKey = "kharda";

        }

        else if (name.includes("misal")) {

            stallKey = "misal";

        }

        else if (name.includes("saiba")) {

            stallKey = "saiba";

        }


        if (name.includes("benne dosa")) {
    exploreLink.href = "menu.html?stall=benne-dosa";
} else if (stallKey !== "") {
    exploreLink.href = `menu.html?stall=${stallKey}`;
} else {
    exploreLink.href = "menu.html";
}

    }


    /* CURRENT NUMBER */

    if (currentNumber) {

        currentNumber.textContent =
            String(currentIndex + 1).padStart(2, "0");

    }


    /* TOTAL NUMBER */

    if (totalNumber) {

        totalNumber.textContent =
            String(stalls.length).padStart(2, "0");

    }

}


/* =========================================================
   NEXT BUTTON
========================================================= */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        function () {

            if (stalls.length === 0) {
                return;
            }


            currentIndex++;


            if (currentIndex >= stalls.length) {
                currentIndex = 0;
            }


            updateCarousel();

        }
    );

}


/* =========================================================
   PREVIOUS BUTTON
========================================================= */

if (prevButton) {

    prevButton.addEventListener(
        "click",
        function () {

            if (stalls.length === 0) {
                return;
            }


            currentIndex--;


            if (currentIndex < 0) {

                currentIndex =
                    stalls.length - 1;

            }


            updateCarousel();

        }
    );

}


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (stalls.length === 0) {
            return;
        }


        if (event.key === "ArrowRight") {

            currentIndex++;


            if (currentIndex >= stalls.length) {
                currentIndex = 0;
            }


            updateCarousel();

        }


        if (event.key === "ArrowLeft") {

            currentIndex--;


            if (currentIndex < 0) {

                currentIndex =
                    stalls.length - 1;

            }


            updateCarousel();

        }

    }
);


/* =========================================================
   AUTO CAROUSEL
========================================================= */

let autoSlide;


function startAutoSlide() {

    clearInterval(autoSlide);


    autoSlide = setInterval(
        function () {

            if (stalls.length === 0) {
                return;
            }


            currentIndex++;


            if (currentIndex >= stalls.length) {
                currentIndex = 0;
            }


            updateCarousel();

        },
        5000
    );

}


/* =========================================================
   STOP AUTO-SLIDE ON HOVER
========================================================= */

if (track) {

    track.addEventListener(
        "mouseenter",
        function () {

            clearInterval(autoSlide);

        }
    );


    track.addEventListener(
        "mouseleave",
        function () {

            startAutoSlide();

        }
    );

}


/* =========================================================
   HERO REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".hero-label, .hero h1, .hero-marathi, .hero-description, .hero-actions"
    );


revealElements.forEach(
    function (element, index) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

        element.style.transitionDelay =
            (index * 0.12) + "s";

    }
);


window.addEventListener(
    "load",
    function () {

        revealElements.forEach(
            function (element) {

                element.style.opacity = "1";

                element.style.transform =
                    "translateY(0)";

            }
        );

    }
);


function loadPublicGallery() {
    const gallery = document.getElementById("publicGallery");

    if (!gallery) return;

    const galleryImages = [
        {
            image: "images/hero.jpg",
            title: "Welcome to Jadhav Food Court"
        },
        {
            image: "images/Swamini.jpeg",
            title: "Swamini Pure Veg"
        },
        {
            image: "images/shree-datta-bhel-logo.jpg",
            title: "Shree Datta Bhel"
        },
        {
            image: "images/kharada-vada-pav-logo.jpg",
            title: "Kharda Vada Pav"
        },
        {
            image: "images/misal-katta-logo.jpg",
            title: "Misal Katta"
        },
        {
            image: "images/saiba-amrutatulaya-logo.jpg",
            title: "Saiba Amrutatulaya"
        },
        {
            image: "images/hero.jpg",
            title: "Benne Dosa — Menu Coming Soon"
        }
    ];

    gallery.innerHTML = `
        <div class="journey-gallery">
            <div class="journey-feature">
                <img class="journey-main-image" src="" alt="">
                <div class="journey-image-shade"></div>

                <div class="journey-feature-caption">
                    <span class="journey-eyebrow">A CLOSER LOOK</span>
                    <h3 class="journey-main-title"></h3>
                </div>

                <div class="journey-controls">
                    <span class="journey-counter"></span>

                    <div class="journey-arrows">
                        <button class="journey-prev" type="button"
                            aria-label="Previous photograph">←</button>
                        <button class="journey-next" type="button"
                            aria-label="Next photograph">→</button>
                    </div>
                </div>
            </div>

            <div class="journey-thumbnail-area">
                <div class="journey-thumbnail-heading">
                    <span>EXPLORE OUR SPACE</span>
                    <span class="journey-hint">Select a photograph ↗</span>
                </div>
                <div class="journey-thumbnails"></div>
            </div>
        </div>
    `;

    const mainImage = gallery.querySelector(".journey-main-image");
    const mainTitle = gallery.querySelector(".journey-main-title");
    const counter = gallery.querySelector(".journey-counter");
    const thumbnails = gallery.querySelector(".journey-thumbnails");

    let currentIndex = 0;

    thumbnails.innerHTML = galleryImages.map((item, index) => `
        <button class="journey-thumb"
            type="button"
            data-index="${index}"
            aria-label="View ${item.title}">
            <img src="${item.image}" alt="" loading="lazy">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${item.title}</strong>
        </button>
    `).join("");

    const thumbButtons = thumbnails.querySelectorAll(".journey-thumb");

    function showImage(index) {
        currentIndex =
            (index + galleryImages.length) % galleryImages.length;

        const item = galleryImages[currentIndex];

        mainImage.classList.add("is-changing");

        mainImage.onload = function () {
            mainImage.classList.remove("is-changing");
        };

        mainImage.onerror = function () {
            mainImage.classList.remove("is-changing");
            mainImage.alt = "Image unavailable: " + item.title;
        };

        mainImage.src = item.image;
        mainImage.alt = item.title;
        mainTitle.textContent = item.title;
        counter.textContent =
            String(currentIndex + 1).padStart(2, "0") +
            " / " +
            String(galleryImages.length).padStart(2, "0");

        thumbButtons.forEach((button, buttonIndex) => {
            const active = buttonIndex === currentIndex;
            button.classList.toggle("is-active", active);
            button.setAttribute("aria-pressed", String(active));
        });

       // Keep the selected thumbnail visible without scrolling the page.
const activeThumbnail = thumbButtons[currentIndex];
const thumbnailArea = gallery.querySelector(".journey-thumbnail-area");

if (activeThumbnail && thumbnailArea) {
    const thumbRect = activeThumbnail.getBoundingClientRect();
    const areaRect = thumbnailArea.getBoundingClientRect();

    if (thumbRect.left < areaRect.left) {
        thumbnailArea.scrollLeft -= areaRect.left - thumbRect.left;
    } else if (thumbRect.right > areaRect.right) {
        thumbnailArea.scrollLeft += thumbRect.right - areaRect.right;
    }
}
    }

    thumbButtons.forEach((button) => {
        button.addEventListener("click", () => {
            showImage(Number(button.dataset.index));
        });
    });

    gallery.querySelector(".journey-prev").addEventListener("click", () => {
        showImage(currentIndex - 1);
    });

    gallery.querySelector(".journey-next").addEventListener("click", () => {
        showImage(currentIndex + 1);
    });

    showImage(0);
}

/* =========================================================
   INITIALIZE
========================================================= */

loadStalls();
startAutoSlide();
loadPublicGallery();

/* =========================================
   ACCESSIBLE SCROLL REVEAL ANIMATIONS
   ========================================= */

(() => {
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
        return;
    }

    const sections = document.querySelectorAll(
        ".jfc-experience-intro, " +
        ".jfc-stage, " +
        ".jfc-info, " +
        ".swamini-section, " +
        ".catering-section, " +
        ".gallery-section, " +
        ".visit-content"
    );

    if (!sections.length) return;

    sections.forEach(section => {
        section.classList.add("jfc-reveal");
    });

    document.documentElement.classList.add("jfc-reveal-ready");

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("jfc-visible");
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    });

    sections.forEach(section => observer.observe(section));
})();
