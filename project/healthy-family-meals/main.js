// Product array (with objects)
const products = [
    { id: "fc-1888", name: "Grilled Chicken Salad", averagerating: 4.5 },
    { id: "fc-2050", name: "Veggie Pasta Primavera", averagerating: 4.7 },
    { id: "fs-1987", name: "Teriyaki Salmon Bowl", averagerating: 3.5 },
    { id: "ac-2000", name: "Baked Beans", averagerating: 3.9 },
    { id: "jj-1969", name: "Fried Rice and Chicken", averagerating: 5.0 }
  ];
  
  // DOM ready
  document.addEventListener("DOMContentLoaded", () => {
    // ====== Populate Product Dropdown ======
    const productDropdown = document.getElementById("product");
  
    if (productDropdown) {
      const placeholder = document.createElement("option");
      placeholder.textContent = "Select a Product ...";
      placeholder.disabled = true;
      placeholder.selected = true;
      placeholder.value = "";
      productDropdown.appendChild(placeholder);
  
      // Array method: forEach
      products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = `${product.name} (⭐ ${product.averagerating})`;
        productDropdown.appendChild(option);
      });
    }
  
    // ====== Handle Form Submission ======
    const form = document.getElementById("reviewForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        // Conditional branching
        if (!productDropdown.value) {
          alert("Please select a product before submitting.");
          e.preventDefault();
          return;
        }
  
        // localStorage for review count
        let count = localStorage.getItem("reviewCount");
        count = count ? parseInt(count) + 1 : 1;
        localStorage.setItem("reviewCount", count);
      });
    }

    

    // Sample meal plan data
    const mealPlans = {
      1: "Breakfast: Oatmeal with berries<br>Lunch: Grilled chicken salad<br>Dinner: Vegetable stir fry",
      2: "Breakfast: Smoothie with spinach and banana<br>Lunch: Turkey sandwich<br>Dinner: Spaghetti with tomato sauce",
      3: "Breakfast: Yogurt with granola<br>Lunch: Quinoa salad<br>Dinner: Baked salmon with vegetables",
      4: "Breakfast: Whole grain toast with avocado<br>Lunch: Lentil soup<br>Dinner: Chicken and rice"
    };

    // Button click event
    document.querySelectorAll(".day-btn").forEach(button => {
      button.addEventListener("click", function() {
        const day = this.getAttribute("data-day");
        document.getElementById("planDetails").innerHTML = mealPlans[day] || "No plan available.";
      });
    });
  
    // ====== Display Total Reviews (if on review.html) ======
    const reviewCountEl = document.getElementById("reviewCount");
    if (reviewCountEl) {
      const reviewCount = localStorage.getItem("reviewCount") || 0;
      reviewCountEl.textContent = `${reviewCount}`;
    }
  
    // ====== Display Last Modified Date ======
    const lastModifiedEl = document.getElementById("lastModified");
    if (lastModifiedEl) {
      lastModifiedEl.textContent = `Last Modified: ${document.lastModified}`;
    }
  
    // ====== Display Current Year ======
    const yearEl = document.getElementById("year4");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  
    // ====== Display Current Time ======
    const timeEl = document.getElementById("currentTime");
    if (timeEl) {
      const now = new Date();
      timeEl.textContent = `Current Time: ${now.toLocaleTimeString()}`;
    }
  
    // ====== Display User Country via API ======
    const countryEl = document.getElementById("country");
    if (countryEl) {
      fetch("https://ipapi.co/json/")
        .then(response => response.json())
        .then(data => {
          countryEl.textContent = `Country: ${data.country_name}`;
        })
        .catch(() => {
          countryEl.textContent = "Country: Unknown";
        });
    }
  });
  