
/* =========================================================
   JADHAV FOOD COURT
   STATIC MENU JAVASCRIPT — NO BACKEND REQUIRED
========================================================= */

/* STALL DATA */
const stalls = [
    {
        name: " Shree Datta Bhel",
        category: "FOOD STALL",
        description: "Discover the flavours at Datta.",
        available: true
    },
    {
        name: "Kharda Vadapav",
        category: "FOOD STALL",
        description: "Explore the menu at Kharda.",
        available: true
    },
    {
        name: "Misal Katta",
        category: "FOOD STALL",
        description: "Enjoy a taste of Maharashtra.",
        available: true
    },
    {
        name: "Saiba Amruttulya",
        category: "FOOD STALL",
        description: "Discover something delicious at Saiba.",
        available: true
    },
    {
    name: "Benne Dosa",
    category: "FOOD STALL",
    description: "Explore south-Indian menu at our stall",
    available: true
}
];


const menuItems = [
    // DATTA
    { stall: "Datta", name: "Bhel", price:50, image: "images/datta/bhel.jpg" },
    { stall: "Datta", name: "Special Bhel",price:50, image: "images/datta/special_Bhel.jpg" },
    { stall: "Datta", name: "Dahi Bhel",price:50, image: "images/datta/dahibhel.jpg" },
    { stall: "Datta", name: "Shev Puri", price:50,image: "images/datta/shevpuri.jpg" },
    { stall: "Datta", name: "Pani Puri", price:50,image: "images/datta/panipuri.jpg" },
    { stall: "Datta", name: "Masala Puri",price:50, image: "images/datta/masala.jpg" },
    { stall: "Datta", name: "Papdi", price:50,image: "images/datta/papdi.jpg" },
    { stall: "Datta", name: "Farsana", image: "images/datta/farsana.jpg" },
    { stall: "Datta", name: "Katori Chat", image: "images/datta/katorichat.jpg" },
    { stall: "Datta", name: "Bhel Special", image: "images/datta/bhel2.jpg" },

    // KHARDA
    { stall: "kharda Vadapav", name: "Vada Pav", image: "images/kharda/vadapav1.jpg" },
    { stall: "kharda Vadapav", name: "Bhaji", image: "images/kharda/bhaji.jpg" },
    { stall: "kharda Vadapav", name: "Special Bhaji", image: "images/kharda/bhaji2.jpg" },
    { stall: "kharda Vadapav", name: "Khichadi", image: "images/kharda/khichadi.jpg" },
    { stall: "kharda Vadapav", name: "Samosa", image: "images/kharda/Samosa.jpg" },
    { stall: "kharda Vadapav", name: "Patties", image: "images/kharda/patties.jpg" },
    { stall: "kharda Vadapav", name: "Vada", image: "images/kharda/vada.jpg" },

    // MISAL KATTA
    { stall: "Misal Katta", name: "Misal", image: "images/misal/misal.jpg" },
    { stall: "Misal Katta", name: "Special Misal", image: "images/misal/specialmisal.jpg" },
    { stall: "Misal Katta", name: "Puri Misal", image: "images/misal/puri misal.jpg" },
    { stall: "Misal Katta", name: "Pav Bhaji", image: "images/misal/pavbhaji.jpg" },
    { stall: "Misal Katta", name: "French Fries", image: "images/misal/frenchfries.jpg" },
    { stall: "Misal Katta", name: "Chole", image: "images/misal/chole.jpg" },
    { stall: "Misal Katta", name: "Kadhi Vada", image: "images/misal/kadhivada.jpg" },

    // SAIBA
    { stall: "Saiba", name: "Black Tea", image: "images/saiba/blacktea.jpg" },
    { stall: "Saiba", name: "Green Tea", image: "images/saiba/greentea.jpg" },
    { stall: "Saiba", name: "Lemon Tea", image: "images/saiba/lemontea.jpg" },
    { stall: "Saiba", name: "Hot Coffee", image: "images/saiba/hotcoffee.jpg" },
    { stall: "Saiba", name: "Cold Coffee", image: "images/saiba/coldcoffee.jpg" },
    { stall: "Saiba", name: "Cream Roll", image: "images/saiba/creamroll.jpg" },
    { stall: "Saiba", name: "Cake", image: "images/saiba/cake.jpg" },
    { stall: "Saiba", name: "Taak", image: "images/saiba/taak.jpg" },

    { stall: "Benne Dosa", name: "Thatte Idli", price:60, image: "images/Benne/thatte_idli.jpg" },
    { stall: "Benne Dosa", name: "Mysore Dosa", price:180,image: "images/Benne/mysore.jpg." },
    { stall: "Benne Dosa", name: "Medu Vada", price:55,image: "images/Benne/medu-vada.jpg" },
    { stall: "Benne Dosa", name: "Cut Dosa",price:160, image: "images/Benne/cut_dosa.jpg" },
    { stall: "Benne Dosa", name: "Benne Masala Dosa",price:150, image: "images/Benne/Masala_Dosa.jpg" },
    { stall: "Benne Dosa", name: "Plain Dosa",price:105, image: "images/Benne/plain_dosa.jpg" },
    { stall: "Benne Dosa", name: "Filter Coffee", price:40,image: "images/Benne/filtercoffee.jpg" },
    { stall: "Benne Dosa", name: "Plain Masala Dosa",price:100, image: "images/Benne/Benne_plainDosa.jpg" },
    { stall: "Benne Dosa", name: "Paneer Masala Dosa",price:160, image: "images/Benne/paneer_masala_dosa.jpg" },
    { stall: "Benne Dosa", name: "Idli", price:60,image: "images/Benne/idli.jpg" },
    { stall: "Benne Dosa", name: "Benne Palak Dosa", price:154,image: "images/Benne/palak_dosa.jpg" },    
    { stall: "Benne Dosa", name: "Ghee pudi Thatte Idli", price:75,image: "images/Benne/masala idli.jpg"},
    { stall: "Benne Dosa", name: "Ghee pudi Masala Dosa", price:75,image: "images/Benne/Ghee_pudi.jpg"},

];


let selectedStall = null;

/* PAGE ELEMENTS */
const stallButtons = document.getElementById("stallButtons");
const stallName = document.getElementById("stallName");
const stallCategory = document.getElementById("stallCategory");
const stallDescription = document.getElementById("stallDescription");
const stallNumber = document.getElementById("stallNumber");
const menuGrid = document.getElementById("menuGrid");

/* IDENTIFY STALL */
function getStallKey(name) {
    const value = (name || "").toLowerCase().trim();

    if (value.includes("datta")) return "datta";

    if (value.includes("kharada") || value.includes("kharda")) {
    return "kharda";
}

    if (value.includes("misal")) return "misal";

    if (value.includes("saiba")) return "saiba";
    if (value.includes("benne dosa")) return "benne-dosa";
    return null;
}

/* READ STALL FROM URL */
const urlParams = new URLSearchParams(window.location.search);
const urlStall = urlParams.get("stall");

function createStallButtons() {
    if (!stallButtons) return;

    stallButtons.innerHTML = "";

    stalls.forEach((stall) => {
        const key = getStallKey(stall.name);
        if (!key) return;

        const button = document.createElement("button");
        button.className = "stall-button";
        button.dataset.stall = key;
        button.textContent = stall.name;

        if (key === selectedStall) {
            button.classList.add("active");
        }

        button.addEventListener("click", () => selectStall(key));
        stallButtons.appendChild(button);
    });

    displayStall(selectedStall);
}

function selectStall(stallKey) {
    const stall = stalls.find(item => getStallKey(item.name) === stallKey);
    if (!stall) return;

    selectedStall = stallKey;

    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set("stall", stallKey);
    window.history.replaceState({}, "", newUrl);

    document.querySelectorAll(".stall-button").forEach(button => {
        button.classList.toggle("active", button.dataset.stall === stallKey);
    });

    displayStall(stallKey);

    document.getElementById("selectedStall")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function displayStall(stallKey) {
    const stall = stalls.find(item => getStallKey(item.name) === stallKey);
    if (!stall) return;

    if (stallName) stallName.textContent = stall.name;
    if (stallCategory) stallCategory.textContent = stall.category;
    if (stallDescription) stallDescription.textContent = stall.description;

    const index = stalls.findIndex(item => getStallKey(item.name) === stallKey);
    if (stallNumber) stallNumber.textContent = String(index + 1).padStart(2, "0");

    const items = menuItems.filter(item => getStallKey(item.stall) === stallKey);
    renderMenuItems(items);
}

function renderMenuItems(items) {
    if (!menuGrid) return;

    menuGrid.innerHTML = "";

    if (!items.length) {
        menuGrid.innerHTML = `
            <div class="menu-empty">
                <h3>Menu coming soon</h3>
                <p>We're preparing something delicious. Please ask at the counter for today's menu.</p>
            </div>
        `;
        return;
    }

    items.forEach((item, index) => {
        const card = document.createElement("article");
        card.className = "menu-item";
        card.style.animationDelay = `${index * 0.08}s`;

        const image = item.image || "images/hero.jpg";

        card.innerHTML = `
            <div class="menu-item-image">
                <img src="${image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                ${item.description ? `<p class="menu-item-description">${item.description}</p>` : ""}
                <div class="menu-item-bottom">
                    <span class="menu-price">${item.price != null ? `₹${item.price}` : "Ask at counter"}</span>
                    <span class="menu-item-number">${String(index + 1).padStart(2, "0")}</span>
                </div>
            </div>
        `;

        const img = card.querySelector("img");
        img.addEventListener("error", () => {
            img.src = "images/hero.jpg";
        }, { once: true });

        menuGrid.appendChild(card);
    });
}

/* START PAGE */
function initializeMenu() {
    if (!stallButtons || !menuGrid) {
        console.warn("Menu page elements were not found.");
        return;
    }

    const requestedStall = stalls.find(
        stall => getStallKey(stall.name) === urlStall
    );

    selectedStall = requestedStall
        ? getStallKey(requestedStall.name)
        : getStallKey(stalls[0].name);

    createStallButtons();
}

initializeMenu();
