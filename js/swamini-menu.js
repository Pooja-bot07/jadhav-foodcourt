
const menuRoot = document.querySelector("#swaminiPublicMenu");

if (!menuRoot) {
  console.error("Swamini menu container was not found.");
} else {
  // Add confirmed prices and image paths when they are available.
  const menuData = {
    "Starters": [
    {
    name: "Panner Tikka",
    price: null,
    image: "images/paneer tikka.jpg",
    description: "Comforting dal tempered with aromatic spices."
  },
   {
    name: "Panner ",
    price: null,
    image: "images/Paneer starter.jpg",
    description: "Comforting dal tempered with aromatic spices."
  },
   {
    name: "Panner ",
    price: null,
    image: "images/Starter.jpg",
    description: "Comforting dal tempered with aromatic spices."
  },
    ],
    
"Main Course": {
  "Dals": [
  {
    name: "Dal Fry",
    price: null,
    image: "images/Daal.jpg",
    description: "Comforting dal tempered with aromatic spices."
  },
  {
    name: "Dal Fry",
    price: null,
    image: "images/Daal-tadka.jpg",
    description: "Comforting dal tempered with aromatic spices."
  }
],
"Paneer Curries": [
  {
    name: "Paneer Butter Masala",
    price: null,
    image: "images/paneer-butter-masala.jpg",
    description: "A rich paneer curry in a creamy tomato gravy."
  },
  {
    name: "Paneer Kadhai",
    price: null,
    image: "images/Paneer kadhai.jpg",
    description: "A rich paneer curry in a creamy tomato gravy."
  },
  {
    name: "Malai Paneer",
    price: null,
    image: "images/paneer-curreis.jpg",
    description: "A rich paneer curry in a creamy tomato gravy."
  },
  {
    name: "Special Paneer",
    price: null,
    image: "images/Panner & Naan.jpg",
    description: "A rich paneer curry in a creamy tomato gravy."
  }
],
"Vegetable Sabzis": [
  {
    name: "Mix Veg",
    price: null,
    image: "images/vegetablesabzi.jpg",
    description: "A delicious mix of vegetables cooked with spices."
  }
],
  "Rice": [
    { name: "Veg Biryani", price: null, image: "images/veg biryani.jpg", description: "A flavourful vegetarian rice dish." },
    { name: "Pulav", price: null, image: "images/pulav.jpg", description: "Fragrant rice prepared with vegetables and spices." },
    { name: "Masala Pulav", price: null, image: "images/masala-pulav.jpg", description: "Fragrant rice prepared with vegetables and spices." },
    { name: "Jeera Rice", price: null, image: "images/rice.jpg", description: "Rice tempered with aromatic cumin." },
    { name: "Plain Rice", price: null, image: "images/plain-rice.jpg", description: "Steamed rice." }
  ],
  "Roti & Breads": [
    { name: "Roti / Chapati", price: null,image:"images/chapati.jpg" ,description: "Soft Indian flatbread." },
    { name: "Naan", price: null, image: "images/Naan.jpg", description: "Traditional Indian flatbread." },
    { name: "Butter Roti", price: null, image: "images/butter-roti.jpg", description: "Roti finished with butter." },
    { name: "Wheat Roti", price: null, image: "images/wheat-roti.jpg", description: "Flatbread made with wheat flour." }
  ]
},

    "Desserts": [
         {
    name: "Gulabjam & rasmalai ",
    price: null,
    image: "images/desser.jpg",
    description: "Comforting dal tempered with aromatic spices."
  },
    ],
    "Drinks": []
  };

  const mainCategories = ["Starters", "Main Course", "Desserts", "Drinks"];

  let activeCategory = "Main Course";
  let activeSubcategory = "Rice";
  let activeIndex = 0;

  function getCurrentItems() {
    const category = menuData[activeCategory];

    if (activeCategory === "Main Course") {
      return category[activeSubcategory] || [];
    }

    return category || [];
  }

  function renderMenuShell() {
    menuRoot.innerHTML = `
      <div class="sw-menu-layout">
        <nav class="sw-menu-sidebar" aria-label="Menu categories">
          <p class="sw-menu-overline">EXPLORE OUR MENU</p>
          <div class="sw-menu-category-list">
            ${mainCategories.map(category => `
              <button
                type="button"
                class="sw-menu-category-btn ${category === activeCategory ? "is-active" : ""}"
                data-category="${category}"
                aria-pressed="${category === activeCategory}"
              >
                <span>${category}</span>
                <span aria-hidden="true">↗</span>
              </button>
            `).join("")}
          </div>
        </nav>

        <section class="sw-menu-display" aria-live="polite">
          <div class="sw-menu-display-heading">
            <p class="sw-menu-overline">FRESHLY PREPARED</p>
            <h3 id="swMenuHeading"></h3>
            <p id="swMenuIntro"></p>
          </div>

          <div id="swMenuSubcategories" class="sw-menu-subcategories"></div>
          <div id="swMenuDish"></div>
        </section>
      </div>
    `;

    menuRoot.querySelectorAll("[data-category]").forEach(button => {
      button.addEventListener("click", () => {
        activeCategory = button.dataset.category;
        activeSubcategory = "Rice";
        activeIndex = 0;
        renderMenu();
      });
    });
  }

  function renderMenu() {
    menuRoot.querySelectorAll("[data-category]").forEach(button => {
      const selected = button.dataset.category === activeCategory;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });

    const heading = menuRoot.querySelector("#swMenuHeading");
    const intro = menuRoot.querySelector("#swMenuIntro");
    const subcategories = menuRoot.querySelector("#swMenuSubcategories");
    const dishArea = menuRoot.querySelector("#swMenuDish");

    heading.textContent = activeCategory;
    intro.textContent = activeCategory === "Main Course"
      ? "Comforting favourites, made to be savoured."
      : "Discover something delicious for every appetite.";

    if (activeCategory === "Main Course") {
      const subs = Object.keys(menuData["Main Course"]);

      subcategories.innerHTML = subs.map(sub => `
        <button
          type="button"
          class="sw-menu-subcategory-btn ${sub === activeSubcategory ? "is-active" : ""}"
          data-subcategory="${sub}"
          aria-pressed="${sub === activeSubcategory}"
        >${sub}</button>
      `).join("");

      subcategories.hidden = false;

      subcategories.querySelectorAll("[data-subcategory]").forEach(button => {
        button.addEventListener("click", () => {
          activeSubcategory = button.dataset.subcategory;
          activeIndex = 0;
          renderMenu();
        });
      });
    } else {
      subcategories.innerHTML = "";
      subcategories.hidden = true;
    }

    const items = getCurrentItems();

    if (!items.length) {
      dishArea.innerHTML = `
        <div class="sw-menu-empty">
          <span class="sw-menu-empty-mark" aria-hidden="true">✳</span>
          <h4>Something delicious is coming.</h4>
          <p>Menu items for this category will be added soon.</p>
        </div>
      `;
      return;
    }

    activeIndex = Math.min(activeIndex, items.length - 1);
    const dish = items[activeIndex];
    const number = String(activeIndex + 1).padStart(2, "0");
    const total = String(items.length).padStart(2, "0");

    const imageMarkup = dish.image
      ? `<img class="sw-menu-dish-image" src="${dish.image}" alt="${dish.name}" loading="lazy">`
      : `<div class="sw-menu-image-placeholder" role="img" aria-label="Image coming soon for ${dish.name}">
           <span>SWAMINI</span>
           <p>Dish photograph coming soon</p>
         </div>`;

    dishArea.innerHTML = `
      <article class="sw-menu-dish-card">
        <div class="sw-menu-dish-visual">
          ${imageMarkup}
          <span class="sw-menu-photo-label">A TASTE OF SWAMINI</span>
        </div>

        <div class="sw-menu-dish-details">
          <div class="sw-menu-dish-copy">
            <p class="sw-menu-dish-category">
              ${activeCategory === "Main Course" ? activeSubcategory : activeCategory}
            </p>
            <h4>${dish.name}</h4>
            <p class="sw-menu-dish-description">${dish.description || "A delicious vegetarian favourite from our kitchen."}</p>
          </div>

          <div class="sw-menu-dish-price">
            ${dish.price == null ? "Price to be added" : `₹${dish.price}`}
          </div>
        </div>

        <div class="sw-menu-carousel-controls">
          <span class="sw-menu-counter">${number} <i>/</i> ${total}</span>
          <div class="sw-menu-arrows">
            <button type="button" class="sw-menu-arrow" data-direction="-1" aria-label="Previous dish" ${items.length < 2 ? "disabled" : ""}>←</button>
            <button type="button" class="sw-menu-arrow" data-direction="1" aria-label="Next dish" ${items.length < 2 ? "disabled" : ""}>→</button>
          </div>
        </div>
      </article>
    `;

    dishArea.querySelectorAll("[data-direction]").forEach(button => {
      button.addEventListener("click", () => {
        activeIndex = (activeIndex + Number(button.dataset.direction) + items.length) % items.length;
        renderMenu();
      });
    });
  }

  renderMenuShell();
  renderMenu();
}
