---
layout: page
title: recipes
permalink: /recipes/
nav: true
nav_order: 4
description: Recipes I cook for mealprep.
---

<!-- pages/recipes.md -->
<div class="recipes">
  <div class="recipe-controls">
    <div class="recipe-search-wrap">
      <i class="fa-solid fa-magnifying-glass recipe-search-icon" aria-hidden="true"></i>
      <input
        type="search"
        id="recipe-search"
        class="form-control recipe-search"
        placeholder="Search recipes or ingredients…"
        aria-label="Search recipes"
      />
    </div>
    <div class="recipe-filters" id="recipe-filters" role="group" aria-label="Filter by meal type">
      <button type="button" class="filter-btn active" data-meal="all">All</button>
      <button type="button" class="filter-btn" data-meal="breakfast">Breakfast</button>
      <button type="button" class="filter-btn" data-meal="lunch">Lunch</button>
      <button type="button" class="filter-btn" data-meal="dinner">Dinner</button>
      <button type="button" class="filter-btn" data-meal="snack">Snack</button>
    </div>
    <select id="recipe-sort" class="form-control recipe-sort" aria-label="Sort recipes">
      <option value="date-desc">Newest first</option>
      <option value="rating-desc">Top rated</option>
      <option value="taste-desc">Best taste</option>
      <option value="effort-asc">Least effort</option>
      <option value="title-asc">Name (A–Z)</option>
    </select>
  </div>

  {% assign recipes = site.recipes | sort: "date" | reverse %}
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3" id="recipe-grid">
    {% for recipe in recipes %}
      {% include recipe_card.liquid %}
    {% endfor %}
  </div>

  <p class="recipe-empty" id="recipe-empty">No recipes match your search.</p>
</div>

<style>
  .recipe-controls {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.75rem;
  }
  .recipe-search-wrap {
    position: relative;
    flex: 1 1 240px;
    min-width: 180px;
  }
  .recipe-search-icon {
    position: absolute;
    left: 0.9rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.8rem;
    color: var(--global-text-color-light);
    pointer-events: none;
  }
  .recipe-search {
    width: 100%;
    height: auto;
    border: 1px solid var(--global-divider-color);
    border-radius: 999px;
    padding: 0.3rem 1rem 0.3rem 2.1rem;
    font-size: 0.85rem;
    background-color: transparent;
    color: var(--global-text-color);
  }
  .recipe-search::placeholder {
    color: var(--global-text-color-light);
    opacity: 1;
  }
  .recipe-search:focus {
    border-color: var(--global-theme-color);
    background-color: transparent;
    color: var(--global-text-color);
    box-shadow: none;
  }
  .recipe-sort {
    flex: 0 0 auto;
    width: auto;
    height: auto;
    border: 1px solid var(--global-divider-color);
    border-radius: 999px;
    padding: 0.3rem 1.8rem 0.3rem 0.85rem;
    font-size: 0.85rem;
    background-color: transparent;
    color: var(--global-text-color);
  }
  .recipe-sort:focus {
    border-color: var(--global-theme-color);
    background-color: transparent;
    color: var(--global-text-color);
    box-shadow: none;
  }
  .recipe-sort option {
    color: var(--global-text-color);
    background-color: var(--global-bg-color);
  }
  .recipe-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }
  .filter-btn {
    border: 1px solid var(--global-divider-color);
    background: transparent;
    color: var(--global-text-color);
    border-radius: 999px;
    padding: 0.3rem 0.85rem;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
  }
  .filter-btn:hover {
    border-color: var(--global-theme-color);
    color: var(--global-theme-color);
  }
  .filter-btn.active {
    background: var(--global-theme-color);
    border-color: var(--global-theme-color);
    color: #fff;
  }

  .recipe-col {
    margin-bottom: 1.5rem;
  }
  .recipe-card {
    transition: transform 0.15s ease-in-out;
  }
  .recipe-card figure {
    margin-bottom: 0;
  }
  .recipe-card-img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
  .recipe-card-title {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  .recipe-card-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 0.4rem;
  }
  .meal-badge {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-weight: 600;
    color: #fff;
    padding: 0.15rem 0.55rem;
    border-radius: 999px;
  }
  .meal-breakfast { background: #f59e0b; }
  .meal-lunch     { background: #10b981; }
  .meal-dinner    { background: #6366f1; }
  .meal-snack     { background: #ec4899; }
  .meal-badge:not([class*=" meal-"]) { background: var(--global-text-color-light); }

  .card-rating {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--global-text-color);
    white-space: nowrap;
  }
  .card-rating .fa-star {
    color: var(--global-theme-color);
  }
  .card-taste {
    font-size: 0.85rem;
    color: var(--global-text-color-light);
  }
  .card-taste-label {
    margin-right: 0.35rem;
  }
  .card-taste .stars i {
    color: var(--global-theme-color);
  }

  .recipe-empty {
    display: none;
    text-align: center;
    color: var(--global-text-color-light);
    margin-top: 2rem;
  }
</style>

<script src="{{ '/assets/js/recipes.js' | relative_url }}"></script>
