function toggleGallery(title) {
  const grid = title.nextElementSibling;
  grid.style.display = grid.style.display === "grid" ? "none" : "grid";
}
