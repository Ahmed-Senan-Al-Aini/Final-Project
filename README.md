# E-Marketing Final Project

## Overview

This repository contains a complete web project for an **"E-Marketing"** website, developed as a final or capstone project using fundamental web technologies: HTML, CSS, and JavaScript. The project aims to simulate an e-commerce platform that displays a variety of products, allowing users to browse, search, and add items to a simulated shopping cart.

**Key Features:**

*   **Responsive User Interface:** Simple and attractive design.
*   **Product Display:** Products are categorized into four main groups (Phones, Laptops, Furniture, Weapons).
*   **Interactive Functionality:** A mock login/registration system and a shopping cart that utilizes the browser's Local Storage.
*   **Information Pages:** Dedicated pages for project information, developer details, and contact information.

## Project Structure

The project follows a clear organizational structure for easy navigation:

| Folder/File | Description |
| :--- | :--- |
| `index.html` | The main landing page, featuring a project summary, a brief product showcase, and a quick contact form. |
| `pages/` | Contains all secondary web pages. |
| `pages/product.html` | The main product display page with search, filter, and shopping cart functionality. |
| `pages/about.html` | The "About Us" page, providing information about the project and the developer. |
| `pages/contact.html` | The "Contact Us" page for inquiries and suggestions. |
| `css/` | Contains all Cascading Style Sheets (CSS) files. |
| `css/style.css` | The general stylesheet for the entire website. |
| `css/product.css` | Specific styles for the product display page. |
| `css/fontawesome.min.css` | Font Awesome library for icons. |
| `js/` | Contains JavaScript files responsible for interactivity and functionality. |
| `js/login_pop.js` | Manages the login/registration modal and the mock authentication functions. |
| `js/product.js` | Manages product data, display, search/filter functionality, and the shopping cart using `localStorage`. |
| `image/` | Contains all graphical assets and images used in the site, categorized by product type. |

## Key Components and Code Explanation

This section provides a non-deep explanation of the core code logic across HTML, CSS, and JavaScript files.

### 1. HTML Structure (`index.html` & `pages/product.html`)

The HTML files define the content and structure. A key feature is the use of semantic tags and linking external resources.

#### A. Responsive Design Setup

This meta tag ensures the page scales correctly on all devices, which is crucial for responsive design.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

#### B. Login Modal Trigger

The button on the home page triggers the login modal defined later in the HTML.

```html
<button id="login-page">
    <span class="spans">Login Now</span>
</button>
```

### 2. CSS Styling (`css/style.css` & `css/product.css`)

The CSS files control the visual presentation, layout, and responsiveness of the site.

#### A. Fixed Header and Variables (`css/style.css`)

The header is fixed at the top of the viewport, and CSS variables are used for easy color management.

```css
:root {
  --colors: #0C89DA; /* Primary color */
  --color: #045487
}

header {
  position: fixed; /* Keeps the header visible when scrolling */
  z-index: 100;
  width: 100%;
}
```

#### B. Media Queries for Responsiveness (`css/style.css`)

Media queries are used to adjust the layout for smaller screens (e.g., mobile devices).

```css
@media screen and (max-width:600px) {
  .about {
    width: 100%; /* Full width on small screens */
  }
  
  .about-product {
    width: 100%;
  }
  /* ... other mobile-specific styles */
}
```

#### C. Product Card Layout (`css/product.css`)

Flexbox is used in `product.css` to arrange the product cards dynamically on the product page.

```css
.products-1 {
  display: flex;
  flex-wrap: wrap; /* Allows cards to wrap to the next line */
  justify-content: space-evenly; /* Distributes space evenly between cards */
  margin: 30px;
}

.products-1 article {
  width: calc(100%/3); /* Each card takes up roughly one-third of the container width */
}
```

### 3. JavaScript Functionality (`js/login_pop.js` & `js/product.js`)

The JavaScript files provide the interactivity, data management, and dynamic content loading.

#### A. Mock Authentication (`js/login_pop.js`)

These functions simulate the login and registration process without a backend. They simply check if the fields are filled and then redirect the user.

```javascript
function f_login(event) {
  event.preventDefault();
  const username = document.getElementById('userss').value;
  const password = document.getElementById('passwords').value;
  
  if (username && password) {
    alert(`🫱 Welcome, ${username} Registered Successful. 🫲`);
    window.location.href = 'pages/product.html'; // Redirect on success
    document.querySelector('form').reset();
  }
}
```

#### B. Product Data and Cart Initialization (`js/product.js`)

The product data is stored locally in a JavaScript array. The cart is initialized by checking the browser's `localStorage`.

```javascript
const products = [
  { id: 1, name: "Galaxy s24", price: 300, category: "phone", /* ... */ },
  // ...
];

let cart = [];

if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart")); // Load cart from previous session
}
```

#### C. Adding to Cart and Persistence (`js/product.js`)

The `addToCart` function finds the product, adds it to the `cart` array, and then saves the updated array to `localStorage` for persistence.

```javascript
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  saveCart(); // Saves the cart array to localStorage
  updateCart(); // Updates the visual display of the cart
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
```

#### D. Search and Filter Logic (`js/product.js`)

Event listeners are attached to the search input and the category filter dropdown to dynamically update the displayed products.

```javascript
// Search functionality
document.getElementById("search").addEventListener("input", function() {
  const keyword = this.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
  displayProducts(filtered); // Re-renders the product list with filtered items
});

// Filter functionality
document.getElementById("filter").addEventListener("change", function() {
  const category = this.value;
  // ... logic to filter products based on category and call displayProducts(filtered)
});
```

---
## How to Run

To run the project locally, follow these steps:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/Ahmed-Senan-Al-Aini/Final-Project.git
    ```
2.  **Navigate to the Directory:**
    ```bash
    cd Final-Project
    ```
3.  **Open the File:** Open the `index.html` file directly in your web browser.

## Developer

This project was developed as part of academic requirements at Sana'a University.

**Developer:** Ahmed Senan Al-Aini
**Email:** `25160091@su.edu.ye` (As listed in the header)

---
**Note:** Given the nature of the project as a prototype or academic assignment, the login/registration and shopping cart functionalities are **Client-Side Only** and do not involve interaction with a real server or database.
