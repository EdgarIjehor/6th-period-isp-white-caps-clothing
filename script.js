document.addEventListener("DOMContentLoaded", () => {
    const colors = document.querySelectorAll(".color");
    const sizes = document.querySelectorAll(".size");
    const mainImage = document.getElementById("main-image");
  
    // Change image when a color is clicked
    colors.forEach(color => {
      color.addEventListener("click", () => {
        const image = color.getAttribute("data-image");
        mainImage.src = image;
  
        // Highlight the selected color
        colors.forEach(c => c.style.borderColor = "transparent");
        color.style.borderColor = "black";
      });
    });
  
    // Select size
    sizes.forEach(size => {
      size.addEventListener("click", () => {
        sizes.forEach(s => s.classList.remove("selected"));
        size.classList.add("selected");
      });
    });
  });
  
function addToCart(item, price) {
  const cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
  cart.push({ item, price });
  localStorage.setItem('shoppingCart', JSON.stringify(cart));
  alert(`${item} added to cart.`);
}
const pages = {
  "Apple": "apple.html",
  "Shirts": "shirts.html",
  "Sweaters": "sweaters.html",
  "Caps": "caps-catalog.html",
  "Hoodies": "hoodies.html",
  "Sweatpants" : "sweatpants-catalog.html"
};

function openSearch() {
  document.getElementById('searchOverlay').style.display = 'flex';
  document.getElementById('searchInput').focus();
}

function closeSearch() {
  document.getElementById('searchOverlay').style.display = 'none';
  document.getElementById('suggestions').style.display = 'none';
}

function searchItems() {
  let input = document.getElementById('searchInput').value.toLowerCase();
  let suggestions = document.getElementById('suggestions');
  suggestions.innerHTML = '';

  if (input === '') {
      suggestions.style.display = 'none';
      return;
  }

  let matches = Object.keys(pages).filter(item => item.toLowerCase().includes(input));

  if (matches.length === 0) {
      suggestions.style.display = 'none';
      return;
  }

  matches.forEach(item => {
      let li = document.createElement('li');
      li.textContent = item;
      li.onclick = () => {
          window.location.href = pages[item];
      };
      suggestions.appendChild(li);
  });

  suggestions.style.display = 'block';
}