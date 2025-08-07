
const products = [
    { id: "fc-1888", name: "Mountain Tent", averagerating: 4.5 },
    { id: "fc-2050", name: "Sleeping Bag", averagerating: 4.7 },
    { id: "fs-1987", name: "Camp Stove", averagerating: 3.5 },
    { id: "ac-2000", name: "Trekking Poles", averagerating: 3.9 },
    { id: "jj-1969", name: "Backpack", averagerating: 5.0 }
  ];
  
  // DOM ready
  document.addEventListener("DOMContentLoaded", () => {
    const productDropdown = document.getElementById("product");
  
    // Populate product dropdown if it exists
    if (productDropdown) {
      const placeholder = document.createElement("option");
      placeholder.textContent = "Select a Product ...";
      placeholder.disabled = true;
      placeholder.selected = true;
      placeholder.value = "";
      productDropdown.appendChild(placeholder);
  
      products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; // value is ID
        option.textContent = product.name; // display is name
        productDropdown.appendChild(option);
      });
    }
  
    // Handle review form submission
    const form = document.getElementById("reviewForm");
    if (form) {
      form.addEventListener("submit", () => {
        let count = localStorage.getItem("reviewCount");
        count = count ? parseInt(count) + 1 : 1;
        localStorage.setItem("reviewCount", count);
      });
    }
  
    // Display total review count if element exists (for review.html)
    const reviewCountEl = document.getElementById("reviewCount");
    if (reviewCountEl) {
      const reviewCount = localStorage.getItem("reviewCount") || 0;
      reviewCountEl.textContent = reviewCount;
    }
  
    // Display last modified date
    const lastModifiedEl = document.getElementById("lastModified");
    if (lastModifiedEl) {
      lastModifiedEl.textContent = `Last Modified: ${document.lastModified}`;
    }
  
    // Display current time
    const timeEl = document.getElementById("currentTime");
    if (timeEl) {
      const now = new Date();
      timeEl.textContent = `Current Time: ${now.toLocaleTimeString()}`;
    }
  
    // Get user country via IP API
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
  