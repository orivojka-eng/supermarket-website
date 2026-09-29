/* 
  =============================================================================
  🌟 UDHËZUESI JAVASCRIPT PËR FILLISTARË / BEGINNER JAVASCRIPT GUIDE:
  JavaScript është "truri dhe muskujt" e uebsajtit. HTML ndërton kutitë, 
  CSS i ngjyros ato, kurse JavaScript bën që butonat të funksionojnë, 
  produktet të filtrohen dhe shporta të llogarisë çmimin total!
  =============================================================================
*/

/* 
  1. TË DHËNAT E PRODUKTEVE (PRODUCTS DATA):
  Një ARRAY (e shënuar me kllapa katrore []) është një listë.
  Brenda saj kemi OBJEKTE (të shënuara me kllapa gjarpëruese {}) ku çdo objekt 
  përfaqëson një ushqim me: id, name, category, price, oldPrice, unit dhe image.
*/
const products = [
  // --- Kategoria: Fruits & Veggies ---
  {
    id: 1,
    name: "Fresh Red Apples",
    category: "fruits",
    price: 2.49,
    oldPrice: 3.19,
    unit: "1 kg (approx. 5-6 pcs)",
    badge: "Organic",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&q=80"
  },
  {
    id: 2,
    name: "Organic Ripe Bananas",
    category: "fruits",
    price: 1.29,
    oldPrice: 1.79,
    unit: "1 bunch (approx. 1 kg)",
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80"
  },
  {
    id: 3,
    name: "Fresh Hass Avocados",
    category: "fruits",
    price: 3.99,
    oldPrice: 4.89,
    unit: "Pack of 3 pcs",
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&q=80"
  },
  {
    id: 4,
    name: "Organic Broccoli Crown",
    category: "fruits",
    price: 1.89,
    oldPrice: null,
    unit: "500g fresh head",
    badge: "Farm Fresh",
    image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=400&q=80"
  },
  {
    id: 5,
    name: "Vine Ripe Cherry Tomatoes",
    category: "fruits",
    price: 2.19,
    oldPrice: 2.79,
    unit: "400g pack",
    badge: "Sweet",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=80"
  },

  // --- Kategoria: Dairy & Eggs ---
  {
    id: 6,
    name: "Farm Fresh Whole Milk",
    category: "dairy",
    price: 3.49,
    oldPrice: null,
    unit: "1 Gallon (3.78L)",
    badge: "Pure",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80"
  },
  {
    id: 7,
    name: "Free-Range Large Brown Eggs",
    category: "dairy",
    price: 4.29,
    oldPrice: 5.19,
    unit: "Carton of 12 eggs",
    badge: "Grade A",
    image: "https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?w=400&q=80"
  },
  {
    id: 8,
    name: "Authentic Greek Yogurt",
    category: "dairy",
    price: 3.89,
    oldPrice: 4.49,
    unit: "500g tub",
    badge: "High Protein",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80"
  },
  {
    id: 9,
    name: "Aged Sharp Cheddar Cheese",
    category: "dairy",
    price: 4.99,
    oldPrice: null,
    unit: "250g block",
    badge: "Aged",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&q=80"
  },

  // --- Kategoria: Bakery ---
  {
    id: 10,
    name: "Artisan French Baguette",
    category: "bakery",
    price: 2.29,
    oldPrice: null,
    unit: "Baked fresh today",
    badge: "Crispy",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80"
  },
  {
    id: 11,
    name: "Butter Croissants (4-Pack)",
    category: "bakery",
    price: 3.99,
    oldPrice: 4.79,
    unit: "Box of 4 croissants",
    badge: "Breakfast",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80"
  },
  {
    id: 12,
    name: "Whole Grain Sourdough Loaf",
    category: "bakery",
    price: 4.49,
    oldPrice: null,
    unit: "650g artisanal loaf",
    badge: "No Preservatives",
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=400&q=80"
  },

  // --- Kategoria: Meat & Poultry ---
  {
    id: 13,
    name: "Boneless Chicken Breast",
    category: "meat",
    price: 7.99,
    oldPrice: 9.49,
    unit: "800g fresh tray",
    badge: "Lean Protein",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&q=80"
  },
  {
    id: 14,
    name: "Fresh Atlantic Salmon Fillet",
    category: "meat",
    price: 11.99,
    oldPrice: 13.99,
    unit: "500g wild caught",
    badge: "Omega-3",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80"
  },

  // --- Kategoria: Drinks ---
  {
    id: 15,
    name: "100% Pure Squeezed Orange Juice",
    category: "drinks",
    price: 3.79,
    oldPrice: 4.29,
    unit: "1 Litre bottle",
    badge: "No Added Sugar",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&q=80"
  },
  {
    id: 16,
    name: "Italian Sparkling Mineral Water",
    category: "drinks",
    price: 1.69,
    oldPrice: null,
    unit: "750ml glass bottle",
    badge: "Refreshing",
    image: "https://images.unsplash.com/photo-1559839914-ba2ae647c050?w=400&q=80"
  }
];

/* 
  2. GJENDJA E SHPORTËS (CART STATE):
  Kjo listë ruan produktet që përdoruesi ka shtuar në shportë.
  Çdo element do të ketë: { ...produkti, quantity: 1 }
*/
let cart = [];

// Variabla që mban mend kategorinë aktive (fillon me "all")
let currentCategory = "all";

// Variabla që mban tekstin e kërkimit
let searchQuery = "";

/* 
  3. KAPJA E ELEMENTEVE NGA HTML (DOM SELECTION):
  Me document.getElementById(...) gjejmë elementet në faqe që t'i komandojmë.
*/
const productsGrid = document.getElementById("productsGrid");
const itemsCountDisplay = document.getElementById("itemsCountDisplay");
const noResultsMessage = document.getElementById("noResultsMessage");
const searchInput = document.getElementById("searchInput");
const categoryFilterBar = document.getElementById("categoryFilterBar");

// Elementet e shportës
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartOverlay = document.getElementById("cartOverlay");
const cartSidebar = document.getElementById("cartSidebar");
const cartCountBadge = document.getElementById("cartCount");
const cartHeaderCount = document.getElementById("cartHeaderCount");
const cartItemsList = document.getElementById("cartItemsList");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartTax = document.getElementById("cartTax");
const cartTotal = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");

// Elementet e modalit të suksesit
const successModal = document.getElementById("successModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalOrderSummary = document.getElementById("modalOrderSummary");

/* 
  =============================================================================
  4. FUNKSIONI PËR TË VIZUALIZUAR PRODUKTET (RENDER PRODUCTS):
  Ky funksion merr listën e ushqimeve, krijon kod HTML për secilin prej tyre 
  dhe e vendos brenda <div id="productsGrid">.
  =============================================================================
*/
function renderProducts() {
  // 1. Filtrojmë produktet sipas kategorisë dhe kërkimit
  const filtered = products.filter(product => {
    const matchesCategory = currentCategory === "all" || product.category === currentCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // 2. Përditësojmë numëruesin lart (p.sh. "16 items available")
  itemsCountDisplay.textContent = `${filtered.length} item${filtered.length === 1 ? '' : 's'} available`;

  // 3. Nëse nuk u gjet asnjë produkt, shfaqim mesazhin "No products found"
  if (filtered.length === 0) {
    productsGrid.innerHTML = "";
    noResultsMessage.style.display = "block";
    return;
  } else {
    noResultsMessage.style.display = "none";
  }

  // 4. Gjenerojmë kartat HTML për çdo produkt me metodën .map()
  productsGrid.innerHTML = filtered.map(product => {
    return `
      <article class="product-card">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        
        <div class="product-img-wrapper">
          <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy" />
        </div>

        <div class="product-details">
          <span class="product-category-tag">${product.category}</span>
          <h4 class="product-name">${product.name}</h4>
          <span class="product-unit">${product.unit}</span>

          <div class="product-footer">
            <div class="price-box">
              <span class="current-price">$${product.price.toFixed(2)}</span>
              ${product.oldPrice ? `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>` : ''}
            </div>

            <!-- 
              Butoni Add to Cart:
              onclick="addToCart(${product.id})" thërret funksionin për të shtuar artikullin në shportë.
            -->
            <button class="add-btn" onclick="addToCart(${product.id})">
              <span>+</span> Add
            </button>
          </div>
        </div>
      </article>
    `;
  }).join(""); // .join("") i bashkon të gjitha kartat në një tekst të vetëm HTML
}

/* 
  =============================================================================
  5. LOGJIKA E SHPORTËS (CART FUNCTIONS):
  Këtu shtojmë ushqime, rrisim sasinë (+), e zvogëlojmë (-) ose e heqim fare.
  =============================================================================
*/

// Shton një produkt në shportë me ID-në e tij
window.addToCart = function(productId) {
  // Gjejmë ushqimin nga lista kryesore
  const product = products.find(p => p.id === productId);
  if (!product) return;

  // Kontrollojmë nëse ky ushqim ndodhet tashmë brenda shportës
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    // Nëse ekziston, thjesht i shtojmë sasinë me 1
    existingItem.quantity += 1;
  } else {
    // Nëse është hera e parë, e fusim në listë me sasi 1
    cart.push({ ...product, quantity: 1 });
  }

  // Përditësojmë pamjen e shportës
  updateCartUI();

  // Hapim shportën automatikisht që përdoruesi ta shohë produktin e shtuar
  openCart();
};

// Rrit sasinë e një artikulli (+)
window.increaseQuantity = function(productId) {
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity += 1;
    updateCartUI();
  }
};

// Zvogëlon sasinë e një artikulli (-)
window.decreaseQuantity = function(productId) {
  const item = cart.find(i => i.id === productId);
  if (item) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      // Nëse sasia bëhet 0, e heqim fare nga shporta
      removeFromCart(productId);
      return;
    }
    updateCartUI();
  }
};

// Heq një artikull nga shporta
window.removeFromCart = function(productId) {
  // .filter() mban vetëm artikujt që nuk kanë këtë ID
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
};

// Përditëson të gjithë numrat dhe pamjen e shportës
function updateCartUI() {
  // 1. Llogarisim numrin total të artikujve (p.sh. 2 mollë + 1 qumësht = 3 artikuj)
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountBadge.textContent = totalCount;
  cartHeaderCount.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;

  // 2. Nëse shporta është bosh:
  if (cart.length === 0) {
    cartItemsList.innerHTML = `
      <div class="empty-cart-view">
        <span class="empty-cart-icon">🛒</span>
        <p>Your grocery basket is empty.</p>
        <span class="empty-hint">Add fresh items from the market!</span>
      </div>
    `;
    cartSubtotal.textContent = "$0.00";
    cartTax.textContent = "$0.00";
    cartTotal.textContent = "$0.00";
    return;
  }

  // 3. Shfaqim artikujt brenda shportës
  cartItemsList.innerHTML = cart.map(item => {
    const itemTotal = (item.price * item.quantity).toFixed(2);
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
        
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">$${itemTotal}</div>
        </div>

        <!-- Butonat e sasisë: Minus, Numri, Plus -->
        <div class="cart-qty-controls">
          <button class="qty-btn" onclick="decreaseQuantity(${item.id})">-</button>
          <span class="qty-number">${item.quantity}</span>
          <button class="qty-btn" onclick="increaseQuantity(${item.id})">+</button>
        </div>

        <!-- Butoni i koshit për fshirje -->
        <button class="remove-item-btn" onclick="removeFromCart(${item.id})" title="Remove item">
          🗑️
        </button>
      </div>
    `;
  }).join("");

  // 4. Llogaritja e çmimit (Subtotal, TVSH 5%, dhe Totali Përfundimtar)
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.05; // 5% taksë
  const total = subtotal + tax;

  cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  cartTax.textContent = `$${tax.toFixed(2)}`;
  cartTotal.textContent = `$${total.toFixed(2)}`;
}

/* 
  =============================================================================
  6. HAPJA DHE MBYLLJA E SHPORTËS (SLIDE-IN ANIMATION):
  Duke i shtuar klasën .open, CSS e bën shportën të rrëshqasë butë në ekran.
  =============================================================================
*/
function openCart() {
  cartOverlay.classList.add("open");
  cartSidebar.classList.add("open");
}

function closeCart() {
  cartOverlay.classList.remove("open");
  cartSidebar.classList.remove("open");
}

openCartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

/* 
  =============================================================================
  7. KËRKIMI DHE FILTRIMI ME KATEGORI:
  addEventListener dëgjon sa herë përdoruesi shkruan në tastierë ose klikon.
  =============================================================================
*/

// Dëgjuesi i kërkimit: sa herë shkruhet një shkronjë, filtrohen produktet menjëherë!
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value.trim();
  renderProducts();
});

// Dëgjuesi i butonave të kategorive
categoryFilterBar.addEventListener("click", (e) => {
  // Kontrollojmë nëse u klikua një buton
  if (e.target.tagName === "BUTTON") {
    // Heqim klasën .active nga të gjithë butonat
    categoryFilterBar.querySelectorAll(".category-btn").forEach(btn => btn.classList.remove("active"));
    
    // I vendosim klasën .active butonit të klikuar
    e.target.classList.add("active");

    // Marrim emrin e kategorisë nga atributi data-category (p.sh. "fruits")
    currentCategory = e.target.dataset.category;

    // Rifreskojmë produktet në ekran
    renderProducts();
  }
});

/* 
  =============================================================================
  8. PËRFUNDIMI I POROSISË (CHECKOUT FLOW):
  Kur klikon "Proceed to Checkout", shfaqet modali i suksesit me faturën.
  =============================================================================
*/
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your shopping cart is empty! Please add some groceries first.");
    return;
  }

  const total = cartTotal.textContent;
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  modalOrderSummary.innerHTML = `
    Your order of <strong>${itemCount} item${itemCount === 1 ? '' : 's'}</strong> totaling 
    <strong style="color: #059669;">${total}</strong> has been received and confirmed.
  `;

  // Mbyllim shportën dhe hapim modalin e suksesit
  closeCart();
  successModal.classList.add("open");

  // Zbrazim shportën për blerjen e radhës
  cart = [];
  updateCartUI();
});

closeModalBtn.addEventListener("click", () => {
  successModal.classList.remove("open");
});

successModal.addEventListener("click", (e) => {
  if (e.target === successModal) {
    successModal.classList.remove("open");
  }
});

/* 
  =============================================================================
  9. FILLIMI I FAQES (INITIALIZATION):
  Sapo faqja hapet, ky rresht ngarkon menjëherë të gjitha produktet!
  =============================================================================
*/
renderProducts();
