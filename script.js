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
  
  