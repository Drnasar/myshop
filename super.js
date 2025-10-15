const buttons = ['all', 'drops', 'tablet', 'Capsule', 'syrup'];

const products = [
  {
    id: 1,
    category: 'drops',
    title: 'Supper power',
    description:
      'പുരുഷന്മാരിൽ ലിംഗത്തിന് ഉദ്ധാരണം ഉണ്ടാകാത്ത (Erectile dysfunction)ഉദ്ധാരണക്കുറവിനും  ശീഘ്രസ്ഖലനം Premature Ejaculation പുരുഷന്മാരിലെയും സ്‌ത്രീകളിലെയും രതിമൂർച്ഛ (Orgasm) ഇല്ലായ്മ ബീജകുറവ് മൂത്രവാർച്ച അറിയാതെ മൂത്രം തുള്ളിയായി പോകുന്ന അവസ്ഥ   ലൈംഗികമായ എല്ലാ പ്രശ്നങ്ങൾക്കും പാർശഫലങ്ങൾ ഒന്നും തന്നെ ഇല്ലാത്ത ഇലക്ട്രോ ഹോമിയോ ഹെർബൽ മെഡിസിൻ Supper power  Drops & Tablets ₹ 399 രൂപ ഇപ്പോൾ തന്നെ ഓർഡർ ചെയ്യൂ ദാമ്പത്യ ജീവിതം മെച്ചപ്പെടുത്തൂ കൂടുതൽ വിവരങ്ങൾക്കും ഓർഡർ ചെയ്യാനും വിളിക്കൂ',
    price: '₹399',
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOQQJgY71c_5tow_RGrTos5U92c1ZJ6MWIMnKKpoGg5PqadsK-FTld1KBffNb6NTU8EjRQ2hvNIs2u_FF_yec_4QUFZTo8_aM9BPRdLDLFJvZ6pUXGgIOksLZW1Zq6PHxWNBsozqBAC2x2_ptUZc50_4vEZO-dWH4CbJGw1yF2gyUHd9iPLDcu66ijY3M/s1600/iphone-phone.png',
  },
  {
    id: 2,
    category: 'drops',
    title: 'Supper power',
    description:
      'Excellent for all sexual diseases Supported by thousands.',
    price: '₹399',
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOQQJgY71c_5tow_RGrTos5U92c1ZJ6MWIMnKKpoGg5PqadsK-FTld1KBffNb6NTU8EjRQ2hvNIs2u_FF_yec_4QUFZTo8_aM9BPRdLDLFJvZ6pUXGgIOksLZW1Zq6PHxWNBsozqBAC2x2_ptUZc50_4vEZO-dWH4CbJGw1yF2gyUHd9iPLDcu66ijY3M/s1600/iphone-phone.png',
  },

  ];

// DOM elements
const filterContainer = document.getElementById('filterContainer');
const productsGrid = document.getElementById('productsGrid');

// Render buttons
const renderButtons = () => {
  filterContainer.innerHTML = buttons
    .map(
      (button, inx) =>
        `
    <button class="filter-btn ${
      inx === 0 && 'active'
    }" data-filter="${button}">${button}</button>
    `
    )
    .join('');
};

// Render products
const renderProducts = (productsToShow) => {
  productsGrid.innerHTML = productsToShow
    .map(
      (product) => `
        <div class="product-card show" data-category="${product.category}">
          <div class="product-image">
            <img src="${product.img}" alt="${product.title}" />
            <button><i class="${
              product.id === 2 ? 'fa-solid' : 'fa-regular'
            } fa-heart"></i></button>
          </div>

          <div class="product-info">
            <span class="category">${product.category}</span>
            <h3 class="title">${product.title}</h3>
            <p class="description">
              ${product.description}
            </p>
            <p class="price">${product.price}</p>
            <div class="actions">

            <a href="https://drnasar.github.io/myshop/">
              <button  class="btn">shop now</button>
              </a>
              <button class="rounded-btn">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
        `
    )
    .join('');
};

// Filter products
const filterProducts = (category) => {
  const productCards = document.querySelectorAll('.product-card');

  // Hide all product cards first
  productCards.forEach((card) => {
    card.classList.add('hidden');
    card.classList.remove('show');
  });

  // Show filtered products
  setTimeout(() => {
    if (category === 'all') {
      renderProducts(products);
    } else {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      renderProducts(filteredProducts);
    }
    heartEventListener();
  }, 500);
};

// Event listener for filter buttons
const filterEventListener = () => {
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Remove active class
      filterButtons.forEach((btn) => btn.classList.remove('active'));

      // Add active class to clicked button
      button.classList.add('active');

      // Filter products
      const filterValue = button.getAttribute('data-filter');
      filterProducts(filterValue);
    });
  });
};

// Event listener for heart buttons
const heartEventListener = () => {
  const heartButtons = document.querySelectorAll('.product-image button');

  heartButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');

      const icon = btn.querySelector('i');

      if (btn.classList.contains('active')) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
      } else {
        icon.classList.add('fa-regular');
        icon.classList.remove('fa-solid');
      }
    });
  });
};

// Initiate the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderButtons();
  renderProducts(products);
  filterEventListener();
  heartEventListener();
});