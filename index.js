const categoryBtn = document.querySelector('.category-btn');

const categoryList = document.querySelector('.category-list');
const categoryItems = document.querySelectorAll('.category-item');
const categoryInfo = document.querySelectorAll('.category-info');

// Toggle category list visibility
categoryBtn.addEventListener('click', () => {
  categoryList.classList.toggle('show');
  categoryInfo.forEach(info => info.classList.remove('show'));
});

// Display category info when item is clicked
categoryItems.forEach(item => {
  item.addEventListener('click', () => {
    const category = item.dataset.category;
    categoryInfo.forEach(info => info.classList.remove('show'));
    document.querySelector(`#${category}-info`).classList.add('show');
    categoryList.classList.remove('show');
  });
});

const buyBtns = document.querySelectorAll(".buy-btn");
buyBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("You have bought this item!");
  });
});

