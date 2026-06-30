// Client-side sort / meal-type filter / search for the /recipes/ page.
// Operates entirely on the data-* attributes rendered by _includes/recipe_card.liquid,
// so it works on the static GitHub Pages site with no backend.
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var grid = document.getElementById("recipe-grid");
    if (!grid) return;

    var searchInput = document.getElementById("recipe-search");
    var sortSelect = document.getElementById("recipe-sort");
    var filters = document.getElementById("recipe-filters");
    var emptyMsg = document.getElementById("recipe-empty");
    var cards = Array.prototype.slice.call(grid.querySelectorAll(".recipe-col"));

    var activeMeal = "all";
    var query = "";

    function num(el, attr) {
      return parseFloat(el.getAttribute(attr)) || 0;
    }
    function str(el, attr) {
      return el.getAttribute(attr) || "";
    }

    function applySort() {
      var mode = sortSelect ? sortSelect.value : "date-desc";
      var sorted = cards.slice().sort(function (a, b) {
        switch (mode) {
          case "rating-desc":
            return num(b, "data-rating") - num(a, "data-rating");
          case "taste-desc":
            return num(b, "data-taste") - num(a, "data-taste");
          case "effort-asc":
            return num(a, "data-effort") - num(b, "data-effort");
          case "title-asc":
            return str(a, "data-title").localeCompare(str(b, "data-title"));
          case "date-desc":
          default:
            return str(b, "data-date").localeCompare(str(a, "data-date"));
        }
      });
      sorted.forEach(function (card) {
        grid.appendChild(card);
      });
    }

    function applyFilter() {
      var visible = 0;
      cards.forEach(function (card) {
        var mealOk = activeMeal === "all" || str(card, "data-meal") === activeMeal;
        var searchOk = query === "" || str(card, "data-search").indexOf(query) !== -1;
        var show = mealOk && searchOk;
        card.style.display = show ? "" : "none";
        if (show) visible++;
      });
      if (emptyMsg) emptyMsg.style.display = visible === 0 ? "block" : "none";
    }

    if (sortSelect) {
      sortSelect.addEventListener("change", applySort);
    }
    if (searchInput) {
      searchInput.addEventListener("input", function () {
        query = searchInput.value.trim().toLowerCase();
        applyFilter();
      });
    }
    if (filters) {
      filters.addEventListener("click", function (e) {
        var btn = e.target.closest(".filter-btn");
        if (!btn) return;
        activeMeal = btn.getAttribute("data-meal");
        var btns = filters.querySelectorAll(".filter-btn");
        Array.prototype.forEach.call(btns, function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");
        applyFilter();
      });
    }

    applySort();
    applyFilter();
  });
})();
