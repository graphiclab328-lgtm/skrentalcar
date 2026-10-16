/**
 * SK Rental Cars - Master Interactive JavaScript Suite
 * Luxury Fleet Database, SK Concierge AI Agent, Live Currency Converter,
 * Interactive Engine Sound Synthesizer, Specs Inspector, Car Comparison,
 * Digital Rental Voucher Generator, and WhatsApp Integration.
 */

// ==========================================
// 1. CAR FLEET DATA (High-Definition Luxury Database)
// ==========================================
const CARS_DATA = [
  {
    id: "suzuki-alto",
    name: "Suzuki Alto 660cc",
    brand: "Suzuki",
    year: "2024",
    category: "Economy",
    seats: 4,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 3500,
    withDriver: true,
    rating: 4.8,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    tagline: "Eco-idle city hatchback with unmatched fuel economy",
    engine: "660cc R06A Eco",
    horsepower: "54 HP",
    acceleration: "0-100 in 14.5s",
    topSpeed: "140 km/h",
    luggage: "2 Bags",
    soundFreq: 110
  },
  {
    id: "suzuki-cultus",
    name: "Suzuki Cultus VXL",
    brand: "Suzuki",
    year: "2024",
    category: "Economy",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 4500,
    withDriver: true,
    rating: 4.7,
    reviews: 38,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    tagline: "Spacious modern hatchback with AGS transmission",
    engine: "1000cc K10B",
    horsepower: "67 HP",
    acceleration: "0-100 in 12.8s",
    topSpeed: "160 km/h",
    luggage: "3 Bags",
    soundFreq: 125
  },
  {
    id: "toyota-yaris",
    name: "Toyota Yaris ATIV",
    brand: "Toyota",
    year: "2024",
    category: "Sedan",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 6500,
    withDriver: true,
    rating: 4.9,
    reviews: 54,
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    tagline: "Comfortable executive sedan with 7-speed CVT transmission",
    engine: "1300cc Dual VVT-i",
    horsepower: "98 HP",
    acceleration: "0-100 in 11.2s",
    topSpeed: "180 km/h",
    luggage: "4 Bags",
    soundFreq: 140
  },
  {
    id: "honda-city",
    name: "Honda City 1.5 Aspire",
    brand: "Honda",
    year: "2024",
    category: "Sedan",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 7000,
    withDriver: true,
    rating: 4.8,
    reviews: 61,
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    tagline: "Refined family sedan with plush leather interior",
    engine: "1500cc i-VTEC",
    horsepower: "118 HP",
    acceleration: "0-100 in 10.1s",
    topSpeed: "190 km/h",
    luggage: "4 Bags",
    soundFreq: 155
  },
  {
    id: "toyota-corolla",
    name: "Toyota Corolla Altis Grande",
    brand: "Toyota",
    year: "2024",
    category: "Sedan",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 8000,
    withDriver: true,
    rating: 5.0,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    tagline: "Pakistan's undisputed benchmark for endurance and ride comfort",
    engine: "1800cc Dual VVT-i",
    horsepower: "138 HP",
    acceleration: "0-100 in 9.8s",
    topSpeed: "205 km/h",
    luggage: "5 Bags",
    soundFreq: 165
  },
  {
    id: "honda-civic",
    name: "Honda Civic RS Turbo",
    brand: "Honda",
    year: "2024",
    category: "Sedan",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 11500,
    withDriver: true,
    rating: 4.9,
    reviews: 82,
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    tagline: "Aggressive styling with 1.5L turbocharged punch",
    engine: "1500cc VTEC Turbo",
    horsepower: "176 HP",
    acceleration: "0-100 in 7.8s",
    topSpeed: "220 km/h",
    luggage: "4 Bags",
    soundFreq: 180
  },
  {
    id: "kia-sportage",
    name: "KIA Sportage AWD",
    brand: "KIA",
    year: "2024",
    category: "SUV",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 14000,
    withDriver: true,
    rating: 4.9,
    reviews: 73,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    tagline: "Panoramic glass roof, all-wheel grip & imposing posture",
    engine: "2000cc MPI All-Wheel Drive",
    horsepower: "155 HP",
    acceleration: "0-100 in 9.5s",
    topSpeed: "195 km/h",
    luggage: "5 Bags",
    soundFreq: 170
  },
  {
    id: "hyundai-tucson",
    name: "Hyundai Tucson AWD",
    brand: "Hyundai",
    year: "2024",
    category: "SUV",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 15000,
    withDriver: true,
    rating: 4.8,
    reviews: 49,
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    tagline: "Futuristic parametric crossover with premium cabin insulation",
    engine: "2000cc DOHC HTRAC",
    horsepower: "155 HP",
    acceleration: "0-100 in 9.4s",
    topSpeed: "198 km/h",
    luggage: "5 Bags",
    soundFreq: 175
  },
  {
    id: "toyota-fortuner",
    name: "Toyota Fortuner Legender 4x4",
    brand: "Toyota",
    year: "2024",
    category: "SUV",
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    pricePerDay: 22000,
    withDriver: true,
    rating: 5.0,
    reviews: 110,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    tagline: "Commanding 7-seater beast engineered for high-altitude & VIP protocols",
    engine: "2800cc 1GD-FTV Turbo Diesel",
    horsepower: "201 HP (500 Nm)",
    acceleration: "0-100 in 8.9s",
    topSpeed: "190 km/h",
    luggage: "6 Bags",
    soundFreq: 130
  },
  {
    id: "toyota-prado",
    name: "Toyota Land Cruiser Prado TX/VX",
    brand: "Toyota",
    year: "2024",
    category: "SUV",
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    pricePerDay: 35000,
    withDriver: true,
    rating: 5.0,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    tagline: "The gold standard of executive 4x4 diplomacy & mountain luxury",
    engine: "2800cc Turbo Intercooled 4WD",
    horsepower: "204 HP",
    acceleration: "0-100 in 9.2s",
    topSpeed: "185 km/h",
    luggage: "7 Bags",
    soundFreq: 120
  },
  {
    id: "mercedes-e-class",
    name: "Mercedes-Benz E-Class AMG Line",
    brand: "Mercedes",
    year: "2024",
    category: "Luxury",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 50000,
    withDriver: true,
    rating: 5.0,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    tagline: "Unrivaled German prestige, whisper-quiet cabin & VIP chauffeur status",
    engine: "2000cc EQ Boost Twin-Scroll",
    horsepower: "255 HP",
    acceleration: "0-100 in 6.2s",
    topSpeed: "250 km/h",
    luggage: "4 Bags",
    soundFreq: 210
  },
  {
    id: "mercedes-s-class",
    name: "Mercedes-Benz S-Class Maybach VIP",
    brand: "Mercedes",
    year: "2024",
    category: "Luxury",
    seats: 4,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 85000,
    withDriver: true,
    rating: 5.0,
    reviews: 29,
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    tagline: "The world's ultimate executive flagship with first-class reclining seats",
    engine: "3000cc BiTurbo Inline-6 Mild Hybrid",
    horsepower: "429 HP",
    acceleration: "0-100 in 4.9s",
    topSpeed: "250 km/h",
    luggage: "4 Bags",
    soundFreq: 240
  },
  {
    id: "audi-a6",
    name: "Audi A6 Matrix LED",
    brand: "Audi",
    year: "2024",
    category: "Luxury",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 45000,
    withDriver: true,
    rating: 4.9,
    reviews: 35,
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    tagline: "Dual touchscreen MMI, Quattro AWD and executive aerodynamics",
    engine: "2000cc TFSI Quattro",
    horsepower: "248 HP",
    acceleration: "0-100 in 6.4s",
    topSpeed: "250 km/h",
    luggage: "4 Bags",
    soundFreq: 195
  },
  {
    id: "range-rover-vogue",
    name: "Range Rover Autobiography",
    brand: "Land Rover",
    year: "2024",
    category: "Luxury",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 95000,
    withDriver: true,
    rating: 5.0,
    reviews: 24,
    image: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    tagline: "Royal aristocracy on wheels with active electronic air suspension",
    engine: "3000cc Supercharged V6",
    horsepower: "395 HP",
    acceleration: "0-100 in 5.8s",
    topSpeed: "242 km/h",
    luggage: "6 Bags",
    soundFreq: 220
  },
  {
    id: "toyota-hiace",
    name: "Toyota Hiace Grand Cabin VIP",
    brand: "Toyota",
    year: "2024",
    category: "Van",
    seats: 12,
    transmission: "Automatic",
    fuel: "Diesel",
    pricePerDay: 16000,
    withDriver: true,
    rating: 4.8,
    reviews: 58,
    image: "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    tagline: "High-roof 12-passenger luxury tourer for corporate & tourism delegates",
    engine: "3000cc Turbo Diesel",
    horsepower: "140 HP",
    acceleration: "0-100 in 15.0s",
    topSpeed: "165 km/h",
    luggage: "12 Bags",
    soundFreq: 125
  }
];

// ==========================================
// 2. LIVE CURRENCY CONVERSION ENGINE
// ==========================================
const CURRENCIES = {
  PKR: { symbol: "PKR", label: "PKR (₨)", rate: 1.0 },
  USD: { symbol: "$", label: "USD ($)", rate: 0.0036 },
  AED: { symbol: "AED", label: "AED (د.إ)", rate: 0.013 },
  GBP: { symbol: "£", label: "GBP (£)", rate: 0.0028 },
  SAR: { symbol: "SAR", label: "SAR (﷼)", rate: 0.0135 }
};

let currentCurrency = localStorage.getItem("sk_currency") || "PKR";

function formatPrice(amountInPKR) {
  const curr = CURRENCIES[currentCurrency] || CURRENCIES.PKR;
  const converted = Math.round(amountInPKR * curr.rate);
  if (curr.symbol === "$" || curr.symbol === "£") {
    return `${curr.symbol}${converted.toLocaleString()}`;
  }
  return `${curr.symbol} ${converted.toLocaleString()}`;
}

function initCurrencySelector() {
  const selectors = document.querySelectorAll(".currency-select");
  selectors.forEach(sel => {
    sel.value = currentCurrency;
    sel.addEventListener("change", (e) => {
      currentCurrency = e.target.value;
      localStorage.setItem("sk_currency", currentCurrency);
      selectors.forEach(s => s.value = currentCurrency);
      
      // Re-render affected dynamic elements
      renderFeaturedCars();
      if (document.querySelector(".cars-fleet-grid")) {
        const event = new Event("currencyChanged");
        document.dispatchEvent(event);
      }
      if (typeof window.recalcBookingPrice === "function") {
        window.recalcBookingPrice();
      }
    });
  });
}

// ==========================================
// 3. THEME CONTROLLER (Dark / Light Mode)
// ==========================================
function initTheme() {
  const savedTheme = localStorage.getItem("sk_theme") || "dark"; // Default to luxury dark
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  const toggleBtns = document.querySelectorAll(".theme-toggle-btn");
  toggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("sk_theme", newTheme);
      updateThemeIcon(newTheme);
    });
  });
}

function updateThemeIcon(theme) {
  const toggleBtns = document.querySelectorAll(".theme-toggle-btn");
  toggleBtns.forEach(btn => {
    if (theme === "dark") {
      btn.innerHTML = '<i class="fa-solid fa-sun" title="Switch to Light Theme"></i>';
      btn.setAttribute("aria-label", "Switch to Light Theme");
    } else {
      btn.innerHTML = '<i class="fa-solid fa-moon" title="Switch to Dark Luxury Theme"></i>';
      btn.setAttribute("aria-label", "Switch to Dark Luxury Theme");
    }
  });
}

// ==========================================
// 4. NAVIGATION & SCROLL HANDLERS
// ==========================================
function initNavigation() {
  const navbar = document.querySelector(".navbar");
  const backToTopBtn = document.querySelector(".back-to-top");
  const mobileToggle = document.querySelector(".mobile-nav-toggle");
  const mobileDrawer = document.querySelector(".mobile-nav-drawer");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }

    if (backToTopBtn) {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }
  });

  backToTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.contains("open");
      if (isOpen) {
        mobileDrawer.classList.remove("open");
        mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      } else {
        mobileDrawer.classList.add("open");
        mobileToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      }
    });

    document.addEventListener("click", (e) => {
      if (!mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target) && mobileDrawer.classList.contains("open")) {
        mobileDrawer.classList.remove("open");
        mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }
    });
  }

  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const allNavLinks = document.querySelectorAll(".nav-link, .mobile-nav-links a");
  
  allNavLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// ==========================================
// 5. SCROLL REVEAL ANIMATION
// ==========================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal-fade-up:not(.active)");
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => observer.observe(el));
}

// ==========================================
// 6. STATS COUNTER ANIMATION
// ==========================================
function initStatsCounter() {
  const statsContainer = document.querySelector(".stats-section");
  if (!statsContainer) return;

  let started = false;
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      const counters = document.querySelectorAll(".stat-number");
      counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        const suffix = counter.getAttribute("data-suffix") || "";
        let count = 0;
        const speed = target / 50;

        const updateCount = () => {
          count += speed;
          if (count < target) {
            counter.innerText = Math.ceil(count) + suffix;
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = target + suffix;
          }
        };
        updateCount();
      });
    }
  }, { threshold: 0.4 });

  observer.observe(statsContainer);
}

// ==========================================
// 7. TESTIMONIALS SLIDER
// ==========================================
function initTestimonialsSlider() {
  const track = document.querySelector(".testimonial-track");
  const slides = document.querySelectorAll(".testimonial-slide");
  const prevBtn = document.querySelector(".slider-prev-btn");
  const nextBtn = document.querySelector(".slider-next-btn");
  const dotsContainer = document.querySelector(".slider-dots");

  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  let autoplayTimer = null;

  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    slides.forEach((_, idx) => {
      const dot = document.createElement("div");
      dot.className = `slider-dot ${idx === 0 ? "active" : ""}`;
      dot.addEventListener("click", () => goToSlide(idx));
      dotsContainer.appendChild(dot);
    });
  }

  function goToSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    const dots = document.querySelectorAll(".slider-dot");
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === currentIndex);
    });
  }

  function nextSlide() { goToSlide(currentIndex + 1); }
  function prevSlide() { goToSlide(currentIndex - 1); }

  nextBtn?.addEventListener("click", () => { nextSlide(); resetAutoplay(); });
  prevBtn?.addEventListener("click", () => { prevSlide(); resetAutoplay(); });

  function startAutoplay() { autoplayTimer = setInterval(nextSlide, 5500); }
  function resetAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    startAutoplay();
  }

  track.addEventListener("mouseenter", () => { if (autoplayTimer) clearInterval(autoplayTimer); });
  track.addEventListener("mouseleave", startAutoplay);

  startAutoplay();
}

// ==========================================
// 8. CAR CARD GENERATOR & DISPLAY
// ==========================================
function createCarCardHTML(car) {
  const isCompared = comparedCars.includes(car.id);
  return `
    <article class="car-card reveal-fade-up" data-car-id="${car.id}">
      <div class="car-image-box">
        <img src="${car.image}" alt="${car.name}" class="car-img" loading="lazy">
        <span class="car-badge-category">${car.category}</span>
        <span class="car-badge-driver">
          <i class="fa-solid fa-shield-halved"></i> Verified • Chauffeur / Self-Drive
        </span>
      </div>
      <div class="car-card-body">
        <div class="car-title-row">
          <h3 class="car-name">${car.name}</h3>
          <div class="car-rating">
            <i class="fa-solid fa-star"></i>
            <span>${car.rating}</span>
            <small style="color:var(--text-muted);font-weight:400;">(${car.reviews})</small>
          </div>
        </div>
        <div class="car-model-tag">${car.tagline}</div>
        
        <div class="car-specs-grid">
          <div class="spec-item" title="Seating Capacity">
            <i class="fa-solid fa-users"></i>
            <span>${car.seats} Seats</span>
          </div>
          <div class="spec-item" title="Engine Specs">
            <i class="fa-solid fa-gauge-high"></i>
            <span>${car.horsepower}</span>
          </div>
          <div class="spec-item" title="Transmission">
            <i class="fa-solid fa-gear"></i>
            <span>${car.transmission}</span>
          </div>
        </div>

        <div class="car-card-footer">
          <div class="car-price-box">
            <span class="price-unit">Daily Executive Rate</span>
            <span class="price-amount">${formatPrice(car.pricePerDay)} <small>/day</small></span>
          </div>
          <a href="booking.html?car=${encodeURIComponent(car.id)}" class="btn btn-primary btn-sm">
            Book Now <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <!-- Professional Action Row -->
        <div class="car-card-actions-row">
          <button class="btn-card-spec" onclick="openVehicleSpecsModal('${car.id}')" title="Inspect specifications & details">
            <i class="fa-solid fa-sliders"></i> Full Specs
          </button>
          <label class="compare-checkbox-label" title="Add to comparison dock">
            <input type="checkbox" onchange="toggleCarComparison('${car.id}', this)" ${isCompared ? "checked" : ""}>
            <span>Compare</span>
          </label>
        </div>
      </div>
    </article>
  `;
}

// Render Featured Cars on Home Page (top 6 luxury cars or by category)
function renderFeaturedCars(category = "All") {
  const container = document.querySelector(".featured-cars-grid");
  if (!container) return;

  let list = CARS_DATA;
  if (category !== "All") {
    list = CARS_DATA.filter(c => c.category.toLowerCase() === category.toLowerCase());
  } else {
    list = CARS_DATA.filter(c => c.featured).concat(CARS_DATA.filter(c => !c.featured));
  }

  container.innerHTML = list.slice(0, 6).map(createCarCardHTML).join("");
  initScrollReveal();
}

function initHomeFleetFilter() {
  const tabs = document.querySelectorAll(".home-fleet-tabs .filter-pill");
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const category = tab.getAttribute("data-category") || "All";
      renderFeaturedCars(category);
    });
  });
}

// Render Fleet on Cars Page
function initCarsFleetPage() {
  const fleetGrid = document.querySelector(".cars-fleet-grid");
  if (!fleetGrid) return;

  const categoryPills = document.querySelectorAll(".category-pills-row .filter-pill");
  const searchInput = document.querySelector("#carSearchInput");
  const sortSelect = document.querySelector("#priceSortSelect");
  const resultsCounter = document.querySelector("#carsCountText");

  const params = new URLSearchParams(window.location.search);
  let activeCategory = params.get("category") || "All";
  let searchQuery = params.get("search") || "";

  categoryPills.forEach(pill => {
    if (pill.getAttribute("data-category") === activeCategory) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });

  if (searchInput && searchQuery) {
    searchInput.value = searchQuery;
  }

  function applyFiltersAndRender() {
    let filtered = [...CARS_DATA];

    if (activeCategory !== "All") {
      filtered = filtered.filter(car => car.category.toLowerCase() === activeCategory.toLowerCase());
    }

    const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
    if (query) {
      filtered = filtered.filter(car => 
        car.name.toLowerCase().includes(query) ||
        car.brand.toLowerCase().includes(query) ||
        car.category.toLowerCase().includes(query) ||
        car.tagline.toLowerCase().includes(query)
      );
    }

    const sortVal = sortSelect ? sortSelect.value : "default";
    if (sortVal === "low-high") {
      filtered.sort((a, b) => a.pricePerDay - b.pricePerDay);
    } else if (sortVal === "high-low") {
      filtered.sort((a, b) => b.pricePerDay - a.pricePerDay);
    }

    if (resultsCounter) {
      resultsCounter.textContent = `Showing ${filtered.length} of ${CARS_DATA.length} verified cars available`;
    }

    if (filtered.length === 0) {
      fleetGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
          <i class="fa-solid fa-car-burst" style="font-size: 3rem; color: var(--color-accent); margin-bottom: 16px;"></i>
          <h3 style="font-size: 1.4rem; margin-bottom: 8px;">No matching cars found</h3>
          <p style="color: var(--text-secondary); margin-bottom: 20px;">Try adjusting your search criteria or resetting filters.</p>
          <button id="resetFiltersBtn" class="btn btn-primary btn-sm">Reset All Filters</button>
        </div>
      `;
      document.querySelector("#resetFiltersBtn")?.addEventListener("click", () => {
        activeCategory = "All";
        categoryPills.forEach(p => p.classList.toggle("active", p.getAttribute("data-category") === "All"));
        if (searchInput) searchInput.value = "";
        if (sortSelect) sortSelect.value = "default";
        applyFiltersAndRender();
      });
    } else {
      fleetGrid.innerHTML = filtered.map(createCarCardHTML).join("");
    }

    initScrollReveal();
  }

  categoryPills.forEach(pill => {
    pill.addEventListener("click", () => {
      categoryPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategory = pill.getAttribute("data-category");
      applyFiltersAndRender();
    });
  });

  searchInput?.addEventListener("input", applyFiltersAndRender);
  sortSelect?.addEventListener("change", applyFiltersAndRender);

  document.addEventListener("currencyChanged", applyFiltersAndRender);

  applyFiltersAndRender();
}

// Hero Search Form -> Redirects to cars.html
function initHeroQuickSearch() {
  const form = document.querySelector("#heroSearchForm");
  if (!form) return;

  const pickupInput = form.querySelector("#heroPickupDate");
  const returnInput = form.querySelector("#heroReturnDate");

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formatDate = d => d.toISOString().split("T")[0];
  if (pickupInput) {
    pickupInput.min = formatDate(today);
    pickupInput.value = formatDate(today);
  }
  if (returnInput) {
    returnInput.min = formatDate(tomorrow);
    returnInput.value = formatDate(tomorrow);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = form.querySelector("#heroLocation")?.value || "";
    const category = form.querySelector("#heroCategory")?.value || "All";
    const pickupDate = pickupInput?.value || "";
    const returnDate = returnInput?.value || "";

    const queryParams = new URLSearchParams();
    if (category && category !== "All") queryParams.set("category", category);
    if (location) queryParams.set("location", location);
    if (pickupDate) queryParams.set("pickupDate", pickupDate);
    if (returnDate) queryParams.set("returnDate", returnDate);

    window.location.href = `cars.html?${queryParams.toString()}`;
  });
}

// ==========================================
// 9. INTERACTIVE BOOKING ENGINE & CALCULATOR
// ==========================================
function initBookingEngine() {
  const form = document.querySelector("#bookingForm");
  if (!form) return;

  const carSelect = document.querySelector("#bookingCarSelect");
  const pickupDateInput = document.querySelector("#bookingPickupDate");
  const returnDateInput = document.querySelector("#bookingReturnDate");
  const driverRadios = document.querySelectorAll("input[name='driverOption']");

  // Summary Elements
  const summaryThumb = document.querySelector("#summaryThumb");
  const summaryCarName = document.querySelector("#summaryCarName");
  const summaryCategory = document.querySelector("#summaryCategory");
  const summaryDailyRate = document.querySelector("#summaryDailyRate");
  const summaryDays = document.querySelector("#summaryDays");
  const summaryCarSubtotal = document.querySelector("#summaryCarSubtotal");
  const summaryDriverTotal = document.querySelector("#summaryDriverTotal");
  const summaryGrandTotal = document.querySelector("#summaryGrandTotal");

  // Promo code state
  let discountPercentage = 0;
  let discountFixed = 0;

  if (carSelect) {
    carSelect.innerHTML = `<option value="">-- Choose a Car --</option>` +
      CARS_DATA.map(c => `
        <option value="${c.id}" data-price="${c.pricePerDay}">
          ${c.name} (${c.category}) - ${formatPrice(c.pricePerDay)}/day
        </option>
      `).join("");
  }

  const params = new URLSearchParams(window.location.search);
  const requestedCar = params.get("car");
  const requestedLocation = params.get("location") || params.get("pickup");
  const requestedPickupDate = params.get("pickupDate");
  const requestedReturnDate = params.get("returnDate");

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const formatDate = d => d.toISOString().split("T")[0];

  if (pickupDateInput) {
    pickupDateInput.min = formatDate(today);
    pickupDateInput.value = requestedPickupDate || formatDate(today);
  }
  if (returnDateInput) {
    returnDateInput.min = requestedPickupDate || formatDate(tomorrow);
    returnDateInput.value = requestedReturnDate || formatDate(tomorrow);
  }

  if (requestedCar && carSelect) {
    carSelect.value = requestedCar;
  } else if (carSelect && carSelect.options.length > 1) {
    carSelect.selectedIndex = 1;
  }

  if (requestedLocation) {
    const locSelect = document.querySelector("#bookingPickupLocation");
    if (locSelect) locSelect.value = requestedLocation;
  }

  function calculatePricing() {
    const selectedId = carSelect?.value;
    const selectedCar = CARS_DATA.find(c => c.id === selectedId) || CARS_DATA[0];

    const pickDateVal = pickupDateInput?.value ? new Date(pickupDateInput.value) : new Date();
    const retDateVal = returnDateInput?.value ? new Date(returnDateInput.value) : new Date();

    if (pickupDateInput && returnDateInput) {
      returnDateInput.min = pickupDateInput.value;
      if (retDateVal < pickDateVal) {
        returnDateInput.value = pickupDateInput.value;
      }
    }

    const diffTime = Math.max(0, retDateVal.getTime() - pickDateVal.getTime());
    const calculatedDays = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

    const isWithDriver = document.querySelector("input[name='driverOption']:checked")?.value === "yes";
    const driverRatePerDay = 2000;
    const driverTotal = isWithDriver ? (driverRatePerDay * calculatedDays) : 0;

    const carSubtotal = selectedCar.pricePerDay * calculatedDays;
    let baseTotal = carSubtotal + driverTotal;

    let totalDiscount = 0;
    if (discountPercentage > 0) {
      totalDiscount = Math.round(baseTotal * (discountPercentage / 100));
    } else if (discountFixed > 0) {
      totalDiscount = Math.min(baseTotal - 500, discountFixed);
    }
    const grandTotal = Math.max(0, baseTotal - totalDiscount);

    if (summaryThumb) summaryThumb.src = selectedCar.image;
    if (summaryCarName) summaryCarName.textContent = selectedCar.name;
    if (summaryCategory) summaryCategory.textContent = `${selectedCar.category} • ${selectedCar.transmission}`;
    if (summaryDailyRate) summaryDailyRate.textContent = `${formatPrice(selectedCar.pricePerDay)} / day`;
    if (summaryDays) summaryDays.textContent = `${calculatedDays} Day${calculatedDays > 1 ? "s" : ""}`;
    if (summaryCarSubtotal) summaryCarSubtotal.textContent = formatPrice(carSubtotal);
    if (summaryDriverTotal) summaryDriverTotal.textContent = isWithDriver ? formatPrice(driverTotal) : "PKR 0 (Self-Drive)";
    if (summaryGrandTotal) {
      summaryGrandTotal.innerHTML = totalDiscount > 0 
        ? `<span style="text-decoration:line-through;color:var(--text-muted);font-size:0.9rem;margin-right:8px;">${formatPrice(baseTotal)}</span> ${formatPrice(grandTotal)}`
        : formatPrice(grandTotal);
    }

    return {
      car: selectedCar,
      days: calculatedDays,
      isWithDriver,
      driverTotal,
      carSubtotal,
      totalDiscount,
      grandTotal
    };
  }

  window.recalcBookingPrice = calculatePricing;

  carSelect?.addEventListener("change", calculatePricing);
  pickupDateInput?.addEventListener("change", calculatePricing);
  returnDateInput?.addEventListener("change", calculatePricing);
  driverRadios.forEach(r => r.addEventListener("change", calculatePricing));

  // Promo Code Engine
  const promoInput = document.querySelector("#promoCodeInput");
  const promoBtn = document.querySelector("#applyPromoBtn");
  const promoMessage = document.querySelector("#promoMessage");

  promoBtn?.addEventListener("click", () => {
    const code = promoInput?.value.trim().toUpperCase();
    if (!code) return;

    if (code === "SKVIP10") {
      discountPercentage = 10;
      discountFixed = 0;
      if (promoMessage) {
        promoMessage.innerHTML = `<span style="color:#10B981;font-weight:700;"><i class="fa-solid fa-circle-check"></i> Code Applied! 10% VIP Discount unlocked.</span>`;
      }
    } else if (code === "WELCOME5") {
      discountPercentage = 5;
      discountFixed = 0;
      if (promoMessage) {
        promoMessage.innerHTML = `<span style="color:#10B981;font-weight:700;"><i class="fa-solid fa-circle-check"></i> Code Applied! 5% Welcome Discount unlocked.</span>`;
      }
    } else if (code === "SKFIRST") {
      discountFixed = 1500;
      discountPercentage = 0;
      if (promoMessage) {
        promoMessage.innerHTML = `<span style="color:#10B981;font-weight:700;"><i class="fa-solid fa-circle-check"></i> Code Applied! PKR 1,500 Off unlocked.</span>`;
      }
    } else {
      if (promoMessage) {
        promoMessage.innerHTML = `<span style="color:#EF4444;"><i class="fa-solid fa-circle-xmark"></i> Invalid code. Try <strong>SKVIP10</strong> for 10% off.</span>`;
      }
    }
    calculatePricing();
  });

  calculatePricing();

  // Booking Form Submission & Voucher Generation
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;
    form.querySelectorAll(".form-group").forEach(fg => {
      fg.classList.remove("has-error");
      const err = fg.querySelector(".error-message");
      if (err) err.style.display = "none";
    });

    function setError(inputId, message) {
      const input = document.getElementById(inputId);
      if (!input) return;
      const formGroup = input.closest(".form-group");
      if (formGroup) {
        formGroup.classList.add("has-error");
        let errMsg = formGroup.querySelector(".error-message");
        if (!errMsg) {
          errMsg = document.createElement("span");
          errMsg.className = "error-message";
          formGroup.appendChild(errMsg);
        }
        errMsg.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${message}`;
        errMsg.style.display = "flex";
      }
      isValid = false;
    }

    const fullName = document.querySelector("#fullName")?.value.trim();
    const phone = document.querySelector("#phone")?.value.trim();
    const email = document.querySelector("#email")?.value.trim();
    const pickupLocation = document.querySelector("#bookingPickupLocation")?.value;
    const dropoffLocation = document.querySelector("#bookingDropoffLocation")?.value;
    const agreeTerms = document.querySelector("#agreeTerms")?.checked;

    if (!fullName || fullName.length < 3) setError("fullName", "Please enter your full legal name");
    const phoneRegex = /^[0-9+() -]{10,16}$/;
    if (!phone || !phoneRegex.test(phone)) setError("phone", "Please enter a valid phone/WhatsApp number");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) setError("email", "Please provide a valid email address");
    if (!carSelect?.value) setError("bookingCarSelect", "Please select a vehicle");
    if (!pickupLocation) setError("bookingPickupLocation", "Please choose a pick-up location");
    if (!dropoffLocation) setError("bookingDropoffLocation", "Please choose a drop-off location");

    if (!agreeTerms) {
      const termsBox = document.querySelector("#termsCheckboxGroup");
      if (termsBox) {
        let err = termsBox.querySelector(".error-message") || document.createElement("span");
        err.className = "error-message";
        err.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> You must accept the rental terms`;
        err.style.display = "flex";
        termsBox.appendChild(err);
      }
      isValid = false;
    }

    if (!isValid) {
      form.querySelector(".has-error, #termsCheckboxGroup .error-message")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const pricing = calculatePricing();
    const refCode = "SK-" + Math.floor(100000 + Math.random() * 900000);
    const pickupDate = pickupDateInput?.value || "";
    const returnDate = returnDateInput?.value || "";
    const driverText = pricing.isWithDriver ? "Uniformed Executive Chauffeur Included" : "Self-Drive (Without Driver)";

    // Modal elements
    const modalRef = document.querySelector("#modalBookingRef");
    const modalCustomer = document.querySelector("#modalCustomerName");
    const modalPhone = document.querySelector("#modalCustomerPhone");
    const modalCar = document.querySelector("#modalCarName");
    const modalDates = document.querySelector("#modalRentalDates");
    const modalDriver = document.querySelector("#modalDriverOption");
    const modalTotal = document.querySelector("#modalGrandTotal");
    const modalWhatsAppBtn = document.querySelector("#modalWhatsAppBtn");

    if (modalRef) modalRef.textContent = refCode;
    if (modalCustomer) modalCustomer.textContent = fullName;
    if (modalPhone) modalPhone.textContent = phone;
    if (modalCar) modalCar.textContent = pricing.car.name;
    if (modalDates) modalDates.textContent = `${pickupDate} to ${returnDate} (${pricing.days} Days)`;
    if (modalDriver) modalDriver.textContent = driverText;
    if (modalTotal) modalTotal.textContent = formatPrice(pricing.grandTotal);

    // WhatsApp Message
    const whatsappNumber = "923001234567";
    const message = `*SK RENTAL CARS - VIP RESERVATION REQUEST*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `🔖 *Booking Reference:* ${refCode}\n` +
      `👤 *Client Name:* ${fullName}\n` +
      `📞 *Contact Number:* ${phone}\n` +
      `📧 *Email:* ${email}\n` +
      `🚗 *Selected Vehicle:* ${pricing.car.name} (${pricing.car.category})\n` +
      `📅 *Schedule:* ${pickupDate} to ${returnDate} (${pricing.days} Days)\n` +
      `📍 *Pick-up Location:* ${pickupLocation}\n` +
      `📍 *Drop-off Location:* ${dropoffLocation}\n` +
      `👨‍✈️ *Chauffeur:* ${driverText}\n` +
      `💰 *Estimated Total:* ${formatPrice(pricing.grandTotal)}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `Kindly confirm car availability and send official digital confirmation.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    if (modalWhatsAppBtn) {
      modalWhatsAppBtn.setAttribute("href", whatsappUrl);
    }

    // Generate Printable Digital Voucher
    generateRentalVoucherHTML({
      refCode,
      fullName,
      phone,
      car: pricing.car,
      pickupDate,
      returnDate,
      pickupLocation,
      dropoffLocation,
      driverText,
      total: formatPrice(pricing.grandTotal)
    });

    openBookingModal();
  });
}

// Generate Printable Digital Boarding Pass / Rental Voucher
function generateRentalVoucherHTML(data) {
  const voucherContainer = document.querySelector("#voucherReceiptArea");
  if (!voucherContainer) return;

  voucherContainer.innerHTML = `
    <div class="voucher-card" id="printableVoucher">
      <div class="voucher-header">
        <div>
          <div class="voucher-logo"><i class="fa-solid fa-crown" style="color:var(--color-accent);"></i> SK RENTAL CARS</div>
          <small style="color:var(--text-muted);letter-spacing:1px;text-transform:uppercase;">Official Executive Rental Pass</small>
        </div>
        <div class="voucher-code-badge">${data.refCode}</div>
      </div>

      <div style="display:flex;gap:20px;align-items:center;margin-bottom:20px;flex-wrap:wrap;">
        <img src="${data.car.image}" alt="${data.car.name}" style="width:120px;height:75px;object-fit:cover;border-radius:8px;border:1px solid var(--border-gold);">
        <div>
          <h4 style="font-size:1.15rem;font-weight:800;color:var(--text-main);">${data.car.name}</h4>
          <p style="color:var(--color-accent);font-weight:700;font-size:0.9rem;">${data.car.category} • ${data.driverText}</p>
        </div>
        <div style="margin-left:auto;text-align:right;">
          <div style="font-size:0.8rem;color:var(--text-muted);">Confirmed Total</div>
          <div style="font-size:1.4rem;font-weight:900;color:var(--color-accent);">${data.total}</div>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:12px;padding:12px;background:var(--bg-body);border-radius:8px;font-size:0.85rem;">
        <div><strong>Client:</strong> ${data.fullName}</div>
        <div><strong>Phone:</strong> ${data.phone}</div>
        <div><strong>Pick-up:</strong> ${data.pickupDate}</div>
        <div><strong>Return:</strong> ${data.returnDate}</div>
        <div><strong>Pick-up Point:</strong> ${data.pickupLocation}</div>
        <div><strong>Drop-off Point:</strong> ${data.dropoffLocation}</div>
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:16px;">
        <div style="font-size:0.75rem;color:var(--text-muted);">
          <i class="fa-solid fa-shield-halved" style="color:#10B981;"></i> 100% Verified Booking • 24/7 Roadside Assistance
        </div>
        <button onclick="window.print()" class="btn btn-outline btn-sm">
          <i class="fa-solid fa-print"></i> Print / Save Voucher
        </button>
      </div>
    </div>
  `;
}

function openBookingModal() {
  const modal = document.querySelector("#bookingSuccessModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeBookingModal() {
  const modal = document.querySelector("#bookingSuccessModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ==========================================
// 10. SK AI CONCIERGE (Conversational Smart Agent)
// ==========================================
let aiVoiceEnabled = false;
let aiAudioCtx = null;

function playFuturisticChime(freq = 520, type = "sine") {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!aiAudioCtx) aiAudioCtx = new AudioContext();
    if (aiAudioCtx.state === "suspended") aiAudioCtx.resume();

    const osc = aiAudioCtx.createOscillator();
    const gain = aiAudioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, aiAudioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.5, aiAudioCtx.currentTime + 0.12);
    
    gain.gain.setValueAtTime(0.08, aiAudioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, aiAudioCtx.currentTime + 0.25);
    
    osc.connect(gain);
    gain.connect(aiAudioCtx.destination);
    osc.start();
    osc.stop(aiAudioCtx.currentTime + 0.25);
  } catch (e) {}
}

function speakText(text) {
  if (!aiVoiceEnabled || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const clean = text.replace(/[*_#`]/g, "");
  const utterance = new SpeechSynthesisUtterance(clean);
  utterance.rate = 1.05;
  utterance.pitch = 1.0;
  window.speechSynthesis.speak(utterance);
}

function initAiConcierge() {
  // If launcher doesn't exist, inject into DOM
  if (!document.querySelector(".ai-agent-launcher")) {
    const launcherHTML = `
      <div class="ai-agent-launcher" id="aiAgentLauncher">
        <div class="ai-agent-tooltip">24/7 Digital Concierge</div>
        <button class="ai-agent-btn" id="aiAgentBtn" aria-label="Open SK Fleet Concierge">
          <div class="ai-agent-pulse"></div>
          <i class="fa-solid fa-headset"></i>
          <span class="ai-agent-badge">VIP</span>
        </button>
      </div>

      <div class="ai-chat-window" id="aiChatWindow">
        <div class="ai-chat-header">
          <div class="ai-header-info">
            <div class="ai-avatar"><i class="fa-solid fa-headset"></i></div>
            <div>
              <div class="ai-header-title">SK Executive Concierge</div>
              <div class="ai-header-status">
                <span class="ai-status-dot"></span> 24/7 Digital Assistant • Online
              </div>
            </div>
          </div>
          <div class="ai-header-actions">
            <button class="ai-action-btn" id="aiVoiceToggle" title="Toggle Voice Reading">
              <i class="fa-solid fa-volume-xmark"></i>
            </button>
            <button class="ai-action-btn" id="aiChatClose" title="Minimize Chat">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        <div class="ai-chat-body" id="aiChatBody">
          <!-- Initial Welcome Message -->
          <div class="ai-msg ai-msg-bot">
            <div class="ai-bubble">
              👋 <strong>Welcome to SK Rental Cars.</strong>
              <br><br>
              I am your <strong>Executive Fleet Concierge</strong>. How may I assist your travel plans today? You can inquire about vehicle availability, calculate quotes, or request airport pickup in English or Roman Urdu.
              <div class="ai-chips-wrapper">
                <button class="ai-chip" onclick="handleAiChipClick('Best SUV for Northern Areas / Murree')">🏔️ Northern Areas 4x4</button>
                <button class="ai-chip" onclick="handleAiChipClick('Luxury Car for Wedding')">💍 Wedding Mercedes Fleet</button>
                <button class="ai-chip" onclick="handleAiChipClick('Budget car under PKR 5000')">💰 Economy Sedans</button>
                <button class="ai-chip" onclick="handleAiChipClick('Fortuner price for 3 days with driver')">🧮 Calculate Fortuner Quote</button>
                <button class="ai-chip" onclick="handleAiChipClick('Urdu me baat karein')">🌐 Roman Urdu / اردو</button>
              </div>
            </div>
          </div>
        </div>

        <div class="ai-chat-input-box">
          <input type="text" id="aiChatInput" class="ai-input" placeholder="Type message (e.g. Fortuner price for 3 days)...">
          <button id="aiChatSendBtn" class="ai-send-btn" aria-label="Send Message">
            <i class="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", launcherHTML);
  }

  const launcher = document.querySelector("#aiAgentBtn");
  const chatWindow = document.querySelector("#aiChatWindow");
  const closeBtn = document.querySelector("#aiChatClose");
  const voiceBtn = document.querySelector("#aiVoiceToggle");
  const sendBtn = document.querySelector("#aiChatSendBtn");
  const input = document.querySelector("#aiChatInput");

  launcher?.addEventListener("click", () => {
    chatWindow?.classList.toggle("open");
    if (chatWindow?.classList.contains("open")) {
      input?.focus();
      playFuturisticChime(580);
    }
  });

  closeBtn?.addEventListener("click", () => {
    chatWindow?.classList.remove("open");
  });

  voiceBtn?.addEventListener("click", () => {
    aiVoiceEnabled = !aiVoiceEnabled;
    voiceBtn.innerHTML = aiVoiceEnabled ? '<i class="fa-solid fa-volume-high"></i>' : '<i class="fa-solid fa-volume-xmark"></i>';
    if (aiVoiceEnabled) speakText("Voice assistance is enabled.");
  });

  function sendMessage() {
    const text = input?.value.trim();
    if (!text) return;
    input.value = "";
    appendUserMessage(text);
    playFuturisticChime(640);
    processAiQuery(text);
  }

  sendBtn?.addEventListener("click", sendMessage);
  input?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
  });
}

window.handleAiChipClick = function(text) {
  const chatWindow = document.querySelector("#aiChatWindow");
  if (!chatWindow?.classList.contains("open")) chatWindow?.classList.add("open");
  appendUserMessage(text);
  playFuturisticChime(640);
  processAiQuery(text);
};

function appendUserMessage(text) {
  const body = document.querySelector("#aiChatBody");
  if (!body) return;
  const div = document.createElement("div");
  div.className = "ai-msg ai-msg-user";
  div.innerHTML = `<div class="ai-bubble">${text}</div>`;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
}

function appendBotMessage(htmlContent, rawSpeechText = "") {
  const body = document.querySelector("#aiChatBody");
  if (!body) return;
  const div = document.createElement("div");
  div.className = "ai-msg ai-msg-bot";
  div.innerHTML = `<div class="ai-bubble">${htmlContent}</div>`;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
  playFuturisticChime(780);
  if (rawSpeechText) speakText(rawSpeechText);
}

// AI NLP Processing Engine
function processAiQuery(query) {
  const q = query.toLowerCase();

  // Show typing indicator
  const body = document.querySelector("#aiChatBody");
  const typingDiv = document.createElement("div");
  typingDiv.className = "ai-msg ai-msg-bot typing-indicator-msg";
  typingDiv.innerHTML = `<div class="ai-bubble"><i class="fa-solid fa-circle-notch fa-spin"></i> SK AI is thinking...</div>`;
  body?.appendChild(typingDiv);
  body.scrollTop = body.scrollHeight;

  setTimeout(() => {
    typingDiv.remove();

    // 1. Urdu / Language query
    if (q.includes("urdu") || q.includes("roman urdu")) {
      appendBotMessage(
        `Ji bilkul! Aap Roman Urdu me sawal pooch sakte hain. Maslan:
        <br>• <em>"Murree k liye konsi SUV behtareen hai?"</em>
        <br>• <em>"Civic 3 din k liye kitne ki milegi?"</em>
        <br>• <em>"Shadi k liye luxury car konsi hai?"</em>
        <br>Main foran aapko best gari aur rate calculate kr k doonga!`,
        "Ji bilkul! Aap Roman Urdu me sawal pooch sakte hain."
      );
      return;
    }

    // 2. Wedding / Shadi query
    if (q.includes("wedding") || q.includes("shadi") || q.includes("barat") || q.includes("dulha") || q.includes("event")) {
      const merc = CARS_DATA.find(c => c.id === "mercedes-e-class") || CARS_DATA[10];
      const sclass = CARS_DATA.find(c => c.id === "mercedes-s-class") || CARS_DATA[11];
      appendBotMessage(
        `💍 <strong>Ideal Wedding & VIP Convoy Selection:</strong>
        <br>For weddings and special occasions, our top choice is the <strong>${merc.name}</strong> or <strong>${sclass.name}</strong> with uniformed chauffeur and optional floral decor.
        <div class="ai-car-card">
          <img src="${merc.image}" alt="${merc.name}" class="ai-car-thumb">
          <div class="ai-car-details">
            <div class="ai-car-title">${merc.name}</div>
            <div class="ai-car-price">${formatPrice(merc.pricePerDay)} / day</div>
            <a href="booking.html?car=${merc.id}" class="btn btn-primary btn-sm btn-block">
              <i class="fa-solid fa-calendar-check"></i> Book for Wedding
            </a>
          </div>
        </div>`,
        `For weddings, our top choice is the Mercedes-Benz with uniformed chauffeur.`
      );
      return;
    }

    // 3. Northern Areas / Swat / Murree / Family SUV
    if (q.includes("northern") || q.includes("murree") || q.includes("swat") || q.includes("naran") || q.includes("hunza") || q.includes("suv") || q.includes("pahar") || q.includes("family")) {
      const fortuner = CARS_DATA.find(c => c.id === "toyota-fortuner") || CARS_DATA[8];
      appendBotMessage(
        `🏔️ <strong>High-Altitude & Family Travel Recommendation:</strong>
        <br>For Northern areas (Murree, Hunza, Swat) with steep inclines and family luggage, the <strong>${fortuner.name}</strong> (7-Seater 4x4) is undisputed:
        <div class="ai-car-card">
          <img src="${fortuner.image}" alt="${fortuner.name}" class="ai-car-thumb">
          <div class="ai-car-details">
            <div class="ai-car-title">${fortuner.name}</div>
            <div class="ai-car-price">${formatPrice(fortuner.pricePerDay)} / day (7 Seats • 4x4)</div>
            <a href="booking.html?car=${fortuner.id}" class="btn btn-primary btn-sm btn-block">
              <i class="fa-solid fa-calendar-check"></i> Reserve Fortuner
            </a>
          </div>
        </div>`,
        `For Northern Areas and family tours, Toyota Fortuner Legender 4x4 is our highest recommended vehicle.`
      );
      return;
    }

    // 4. Budget / Low price query
    if (q.includes("budget") || q.includes("cheap") || q.includes("sasti") || q.includes("5000") || q.includes("kam rate")) {
      const alto = CARS_DATA.find(c => c.id === "suzuki-alto") || CARS_DATA[0];
      const cultus = CARS_DATA.find(c => c.id === "suzuki-cultus") || CARS_DATA[1];
      appendBotMessage(
        `💰 <strong>Best Economical City Hatchbacks:</strong>
        <br>If you're seeking high fuel efficiency and budget-friendly daily rates:
        <br>1. <strong>${alto.name}</strong> - ${formatPrice(alto.pricePerDay)}/day
        <br>2. <strong>${cultus.name}</strong> - ${formatPrice(cultus.pricePerDay)}/day
        <div class="ai-car-card">
          <img src="${alto.image}" alt="${alto.name}" class="ai-car-thumb">
          <div class="ai-car-details">
            <div class="ai-car-title">${alto.name}</div>
            <div class="ai-car-price">${formatPrice(alto.pricePerDay)} / day</div>
            <a href="booking.html?car=${alto.id}" class="btn btn-primary btn-sm btn-block">
              <i class="fa-solid fa-calendar-check"></i> Book Alto
            </a>
          </div>
        </div>`,
        `For budget city driving, Suzuki Alto at ${formatPrice(alto.pricePerDay)} per day is your best option.`
      );
      return;
    }

    // 5. Specific Car Rate / Days Calculation (e.g. "fortuner 3 days" or "civic 2 din")
    const matchedCar = CARS_DATA.find(c => q.includes(c.id) || q.includes(c.name.toLowerCase().split(" ")[0]) || q.includes(c.name.toLowerCase().split(" ")[1] || ""));
    const daysMatch = q.match(/(\d+)\s*(day|days|din)/);
    const numDays = daysMatch ? parseInt(daysMatch[1]) : null;

    if (matchedCar && numDays) {
      const withDriver = q.includes("driver") || q.includes("chauffeur");
      const driverSurcharge = withDriver ? (2000 * numDays) : 0;
      const baseCost = matchedCar.pricePerDay * numDays;
      const total = baseCost + driverSurcharge;

      appendBotMessage(
        `🧮 <strong>Instant Rental Cost Breakdown:</strong>
        <br>• Vehicle: <strong>${matchedCar.name}</strong>
        <br>• Duration: <strong>${numDays} Days</strong>
        <br>• Base Rent: ${formatPrice(baseCost)} (${formatPrice(matchedCar.pricePerDay)}/day)
        <br>• Driver: ${withDriver ? formatPrice(driverSurcharge) + " (Included)" : "Self-Drive (PKR 0)"}
        <br>• <strong>Total Estimated: ${formatPrice(total)}</strong>
        <div style="margin-top:10px;">
          <a href="booking.html?car=${matchedCar.id}" class="btn btn-primary btn-sm btn-block">
            <i class="fa-solid fa-key"></i> Proceed with this Booking
          </a>
        </div>`,
        `The total estimated cost for ${matchedCar.name} for ${numDays} days is ${formatPrice(total)}.`
      );
      return;
    }

    // 6. Generic intelligent response with direct WhatsApp support
    appendBotMessage(
      `Thank you for your message! At <strong>SK Rental Cars</strong>, all vehicles come 100% sanitized with full insurance, 24/7 roadside assistance, and instant booking confirmation.
      <br><br>
      Would you like to browse our <a href="cars.html" style="color:var(--color-accent);text-decoration:underline;">Full Fleet Catalog</a> or speak directly with our senior reservation desk on WhatsApp?
      <div style="margin-top:12px;">
        <a href="https://wa.me/923001234567?text=Hello%20SK%20Rental%20Cars!%20I%20am%20chatting%20with%20your%20AI%20Concierge%20and%20would%20like%20to%20rent%20a%20car." target="_blank" class="btn btn-whatsapp btn-sm btn-block">
          <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp with SK Agent
        </a>
      </div>`,
      "Thank you for contacting SK Rental Cars. Feel free to browse our fleet or book on WhatsApp."
    );
  }, 450);
}

// ==========================================
// 11. IN-PAGE AI SMART FLEET MATCHER
// ==========================================
function initAiSmartMatcher() {
  const form = document.querySelector("#aiMatcherForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector(".ai-matcher-input")?.value.trim();
    if (!input) return;

    // Open Concierge with this query
    const chatWindow = document.querySelector("#aiChatWindow");
    chatWindow?.classList.add("open");
    appendUserMessage(input);
    processAiQuery(input);
  });
}

// ==========================================
// 12. VEHICLE TECHNICAL SPECS MODAL & ENGINE AUDIO REV
// ==========================================
let engineAudioCtx = null;

window.openVehicleSpecsModal = function(carId) {
  const car = CARS_DATA.find(c => c.id === carId);
  if (!car) return;

  let modal = document.querySelector("#specModal");
  if (!modal) {
    const modalHTML = `
      <div class="modal-overlay" id="specModal" role="dialog" aria-modal="true">
        <div class="spec-modal-card">
          <div class="spec-modal-hero">
            <img src="" id="specHeroImg" class="spec-modal-img" alt="Car Specification">
            <button class="modal-close-btn" onclick="closeVehicleSpecsModal()" style="position:absolute;top:16px;right:16px;z-index:10;background:rgba(0,0,0,0.6);color:#fff;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;">
              <i class="fa-solid fa-xmark"></i>
            </button>
            <div class="spec-modal-overlay">
              <div>
                <span class="badge-tag" id="specCategoryBadge" style="margin-bottom:6px;"></span>
                <h2 id="specCarTitle" style="font-size:1.8rem;font-weight:900;"></h2>
              </div>
              <div style="text-align:right;">
                <div style="font-size:0.8rem;color:#A0AEC0;">Daily Rent</div>
                <div id="specDailyPrice" style="font-size:1.4rem;font-weight:900;color:var(--color-accent);"></div>
              </div>
            </div>
          </div>

          <!-- Technical Specs Grid -->
          <div class="spec-grid-layout">
            <div class="spec-detail-box">
              <i class="fa-solid fa-engine"></i>
              <div class="spec-detail-label">Displacement</div>
              <div class="spec-detail-val" id="specEngine"></div>
            </div>
            <div class="spec-detail-box">
              <i class="fa-solid fa-gauge-high"></i>
              <div class="spec-detail-label">Horsepower</div>
              <div class="spec-detail-val" id="specHP"></div>
            </div>
            <div class="spec-detail-box">
              <i class="fa-solid fa-stopwatch"></i>
              <div class="spec-detail-label">Acceleration</div>
              <div class="spec-detail-val" id="specAccel"></div>
            </div>
            <div class="spec-detail-box">
              <i class="fa-solid fa-tachometer-alt"></i>
              <div class="spec-detail-label">Top Speed</div>
              <div class="spec-detail-val" id="specTopSpeed"></div>
            </div>
            <div class="spec-detail-box">
              <i class="fa-solid fa-suitcase-rolling"></i>
              <div class="spec-detail-label">Luggage Space</div>
              <div class="spec-detail-val" id="specLuggage"></div>
            </div>
            <div class="spec-detail-box">
              <i class="fa-solid fa-gas-pump"></i>
              <div class="spec-detail-label">Fuel Type</div>
              <div class="spec-detail-val" id="specFuel"></div>
            </div>
          </div>

          <!-- Vehicle Rental Features & Assurance -->
          <div class="spec-inclusions-bar" style="margin-top:20px;padding:16px 20px;background:var(--bg-subtle);border-radius:var(--radius-md);border:1px solid var(--border-color);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px;">
            <div style="display:flex;flex-wrap:wrap;gap:14px;font-size:0.84rem;color:var(--text-secondary);">
              <span><i class="fa-solid fa-circle-check" style="color:#10B981;margin-right:5px;"></i> 25-Point Mechanical Certified</span>
              <span><i class="fa-solid fa-circle-check" style="color:#10B981;margin-right:5px;"></i> Sanitized &amp; Chilled A/C</span>
              <span><i class="fa-solid fa-circle-check" style="color:#10B981;margin-right:5px;"></i> Comprehensive Insurance</span>
            </div>
            <a href="" id="specBookBtn" class="btn btn-primary btn-sm">
              <i class="fa-solid fa-key"></i> Reserve This Vehicle
            </a>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);
    modal = document.querySelector("#specModal");
  }

  document.querySelector("#specHeroImg").src = car.image;
  document.querySelector("#specCarTitle").textContent = car.name;
  document.querySelector("#specCategoryBadge").textContent = `${car.category} • ${car.year}`;
  document.querySelector("#specDailyPrice").textContent = formatPrice(car.pricePerDay);
  document.querySelector("#specEngine").textContent = car.engine || "Standard Engine";
  document.querySelector("#specHP").textContent = car.horsepower || "140 HP";
  document.querySelector("#specAccel").textContent = car.acceleration || "0-100 in 9.5s";
  document.querySelector("#specTopSpeed").textContent = car.topSpeed || "200 km/h";
  document.querySelector("#specLuggage").textContent = car.luggage || "4 Bags";
  document.querySelector("#specFuel").textContent = car.fuel;
  document.querySelector("#specBookBtn").href = `booking.html?car=${car.id}`;

  window.activeSpecCar = car;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closeVehicleSpecsModal = function() {
  const modal = document.querySelector("#specModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
};

// Web Audio API Realistic Engine Revving Synthesizer
window.playEngineRevSound = function() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!engineAudioCtx) engineAudioCtx = new AudioContext();
    if (engineAudioCtx.state === "suspended") engineAudioCtx.resume();

    const vis = document.querySelector("#soundVisualizer");
    vis?.classList.add("playing");

    const baseFreq = window.activeSpecCar?.soundFreq || 140;
    const now = engineAudioCtx.currentTime;

    // 1. Primary Low Rumble Oscillator (Sawtooth)
    const osc1 = engineAudioCtx.createOscillator();
    const gain1 = engineAudioCtx.createGain();
    osc1.type = "sawtooth";
    osc1.frequency.setValueAtTime(baseFreq * 0.7, now);
    osc1.frequency.linearRampToValueAtTime(baseFreq * 0.9, now + 0.3); // ignition
    osc1.frequency.exponentialRampToValueAtTime(baseFreq * 2.8, now + 0.9); // throttle rev
    osc1.frequency.exponentialRampToValueAtTime(baseFreq * 0.8, now + 1.8); // idle down

    gain1.gain.setValueAtTime(0.01, now);
    gain1.gain.linearRampToValueAtTime(0.12, now + 0.2);
    gain1.gain.linearRampToValueAtTime(0.25, now + 0.9);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 2.0);

    // 2. Harmonic Throttle Roar (Square wave filtered)
    const osc2 = engineAudioCtx.createOscillator();
    const filter = engineAudioCtx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(450, now);
    filter.frequency.exponentialRampToValueAtTime(1400, now + 0.9);
    filter.frequency.exponentialRampToValueAtTime(350, now + 2.0);

    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(baseFreq * 1.5, now);
    osc2.frequency.exponentialRampToValueAtTime(baseFreq * 4.2, now + 0.9);
    osc2.frequency.exponentialRampToValueAtTime(baseFreq * 1.4, now + 2.0);

    const gain2 = engineAudioCtx.createGain();
    gain2.gain.setValueAtTime(0.01, now);
    gain2.gain.linearRampToValueAtTime(0.15, now + 0.9);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 2.0);

    osc1.connect(gain1);
    gain1.connect(engineAudioCtx.destination);

    osc2.connect(filter);
    filter.connect(gain2);
    gain2.connect(engineAudioCtx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 2.1);
    osc2.stop(now + 2.1);

    setTimeout(() => {
      vis?.classList.remove("playing");
    }, 2100);

  } catch (err) {}
};

// ==========================================
// 13. CAR COMPARISON ENGINE
// ==========================================
let comparedCars = [];

window.toggleCarComparison = function(carId, checkbox) {
  if (checkbox.checked) {
    if (comparedCars.length >= 3) {
      alert("You can compare up to 3 cars at a time.");
      checkbox.checked = false;
      return;
    }
    if (!comparedCars.includes(carId)) comparedCars.push(carId);
  } else {
    comparedCars = comparedCars.filter(id => id !== carId);
  }
  updateComparisonDock();
};

function updateComparisonDock() {
  let dock = document.querySelector("#compareDock");
  if (!dock) {
    const dockHTML = `
      <div class="compare-dock" id="compareDock">
        <i class="fa-solid fa-code-compare" style="color:var(--color-accent);font-size:1.2rem;"></i>
        <div>
          <span class="compare-dock-count" id="compareCount">0 Cars</span> Selected to Compare
        </div>
        <button class="btn btn-primary btn-sm" onclick="openComparisonModal()">
          <i class="fa-solid fa-table-columns"></i> Compare Now
        </button>
        <button class="btn btn-outline-white btn-sm" onclick="clearComparison()">
          Clear
        </button>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", dockHTML);
    dock = document.querySelector("#compareDock");
  }

  const countSpan = document.querySelector("#compareCount");
  if (countSpan) countSpan.textContent = `${comparedCars.length} Car${comparedCars.length > 1 ? "s" : ""}`;

  if (comparedCars.length > 0) {
    dock.classList.add("visible");
  } else {
    dock.classList.remove("visible");
  }
}

window.clearComparison = function() {
  comparedCars = [];
  document.querySelectorAll(".compare-checkbox-label input").forEach(cb => cb.checked = false);
  updateComparisonDock();
};

window.openComparisonModal = function() {
  if (comparedCars.length === 0) return;
  const cars = comparedCars.map(id => CARS_DATA.find(c => c.id === id)).filter(Boolean);

  let modal = document.querySelector("#comparisonModal");
  if (!modal) {
    const modalHTML = `
      <div class="modal-overlay" id="comparisonModal" role="dialog" aria-modal="true">
        <div class="modal-card" style="max-width:900px;width:95%;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
            <h2 style="font-size:1.6rem;font-weight:800;color:var(--text-main);">
              <i class="fa-solid fa-code-compare" style="color:var(--color-accent);"></i> Side-by-Side Fleet Comparison
            </h2>
            <button class="modal-close-btn" onclick="closeComparisonModal()">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div id="comparisonTableWrapper" style="overflow-x:auto;"></div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);
    modal = document.querySelector("#comparisonModal");
  }

  const wrapper = document.querySelector("#comparisonTableWrapper");
  if (wrapper) {
    wrapper.innerHTML = `
      <table style="width:100%;border-collapse:collapse;font-size:0.9rem;text-align:left;">
        <thead>
          <tr style="border-bottom:2px solid var(--border-gold);">
            <th style="padding:12px;background:var(--bg-subtle);">Feature</th>
            ${cars.map(c => `
              <th style="padding:12px;text-align:center;">
                <img src="${c.image}" alt="${c.name}" style="width:140px;height:90px;object-fit:cover;border-radius:8px;margin:0 auto 8px;">
                <div style="font-weight:800;font-size:1rem;color:var(--text-main);">${c.name}</div>
                <div style="color:var(--color-accent);font-weight:800;">${formatPrice(c.pricePerDay)}/day</div>
              </th>
            `).join("")}
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid var(--border-color);">
            <td style="padding:10px;font-weight:700;">Category</td>
            ${cars.map(c => `<td style="padding:10px;text-align:center;">${c.category}</td>`).join("")}
          </tr>
          <tr style="border-bottom:1px solid var(--border-color);">
            <td style="padding:10px;font-weight:700;">Engine Specs</td>
            ${cars.map(c => `<td style="padding:10px;text-align:center;">${c.engine} (${c.horsepower})</td>`).join("")}
          </tr>
          <tr style="border-bottom:1px solid var(--border-color);">
            <td style="padding:10px;font-weight:700;">Seating</td>
            ${cars.map(c => `<td style="padding:10px;text-align:center;">${c.seats} Persons</td>`).join("")}
          </tr>
          <tr style="border-bottom:1px solid var(--border-color);">
            <td style="padding:10px;font-weight:700;">Transmission</td>
            ${cars.map(c => `<td style="padding:10px;text-align:center;">${c.transmission}</td>`).join("")}
          </tr>
          <tr style="border-bottom:1px solid var(--border-color);">
            <td style="padding:10px;font-weight:700;">0-100 km/h</td>
            ${cars.map(c => `<td style="padding:10px;text-align:center;">${c.acceleration}</td>`).join("")}
          </tr>
          <tr style="border-bottom:1px solid var(--border-color);">
            <td style="padding:10px;font-weight:700;">Luggage Capacity</td>
            ${cars.map(c => `<td style="padding:10px;text-align:center;">${c.luggage}</td>`).join("")}
          </tr>
          <tr>
            <td style="padding:12px;font-weight:700;">Direct Action</td>
            ${cars.map(c => `
              <td style="padding:12px;text-align:center;">
                <a href="booking.html?car=${c.id}" class="btn btn-primary btn-sm btn-block">
                  Book This
                </a>
              </td>
            `).join("")}
          </tr>
        </tbody>
      </table>
    `;
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closeComparisonModal = function() {
  const modal = document.querySelector("#comparisonModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
};

// ==========================================
// 14. CONTACT FORM & FAQ ACCORDION
// ==========================================
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    questionBtn?.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove("active");
      });
      item.classList.toggle("active", !isActive);
    });
  });
}

function initContactForm() {
  const contactForm = document.querySelector("#contactForm");
  const alertBox = document.querySelector("#contactSuccessAlert");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = contactForm.querySelector("#contactName")?.value.trim();
    const email = contactForm.querySelector("#contactEmail")?.value.trim();
    const message = contactForm.querySelector("#contactMessage")?.value.trim();

    if (!name || name.length < 3) {
      alert("Please enter your name.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!message || message.length < 10) {
      alert("Please enter a message of at least 10 characters.");
      return;
    }

    if (alertBox) {
      alertBox.style.display = "block";
      alertBox.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    contactForm.reset();
  });
}

// ==========================================
// 15. MASTER INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initCurrencySelector();
  initNavigation();
  initScrollReveal();
  initStatsCounter();
  initTestimonialsSlider();
  renderFeaturedCars();
  initHomeFleetFilter();
  initCarsFleetPage();
  initHeroQuickSearch();
  initBookingEngine();
  initAiConcierge();
  initAiSmartMatcher();
  initFaqAccordion();
  initContactForm();

  document.querySelectorAll(".modal-close-trigger").forEach(btn => {
    btn.addEventListener("click", closeBookingModal);
  });
});
