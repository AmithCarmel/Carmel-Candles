document.addEventListener("DOMContentLoaded", function() {
  const itemsPerPage = 8;
  const items = document.querySelectorAll(".portfolio-flex-item");
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  let currentPage = 1;

  function showPage(page) {
    items.forEach((item, index) => {
      item.style.display = "none";
      if (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) {
        item.style.display = "block";
      }
    });

    document.getElementById("pageIndicator").textContent = `Page ${page} of ${totalPages}`;
    document.getElementById("prevBtn").disabled = page === 1;
    document.getElementById("nextBtn").disabled = page === totalPages;
  }

  document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
  });

  showPage(currentPage);
});
