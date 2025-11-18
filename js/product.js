const navbar = document.getElementById("searches");
const st = navbar.offsetTop;

function mm() {
  if (window.pageYOffset >= st) {
    navbar.classList.add("st")
  } else {
    navbar.classList.remove("st");
  }
}

const products = [
  { id: 1, name: "Galaxy s24", price: 300, category: "phone", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/phone/p-1.jpg" },
  { id: 2, name: "IPhone 14 Ultra", price: 800, category: "phone", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/phone/p-5.jpg" },
  { id: 3, name: "Iphone 10 pro", price: 440, category: "phone", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/phone/p-3.jpg" },
  { id: 4, name: " Galaxy s21 Ultra", price: 430, category: "phone", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/phone/p-4.jpg" },
  { id: 5, name: "Galaxy s22 Ultra", price: 500, category: "phone", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/phone/p-6.jpg" },
  { id: 6, name: "Iphone 14 pro", price: 870, category: "phone", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/phone/p-7.jpg" },
  { id: 7, name: " Galaxy s22 Ultra ", price: 200, category: "phone", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/phone/p-8.jpg" },
  { id: 8, name: "iphone 13 pro ", price: 300, category: "phone", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/phone/p-9.jpg" }, { id: 9, name: "iphone 13 pro", price: 100, category: "phone", about: "Lo:rem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/phone/p-10.jpg" },
  { id: 10, name: "iphone 10", price: 189, category: "phone", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/phone/p-11.jpg" }, { id: 11, name: "iphone 15", price: 600, category: "phone", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/phone/p-12.jpg" },
  { id: 12, name: "Galaxy s24", price: 235, category: "phone", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/phone/p-13.jpg" }, { id: 13, name: "iphone 10 pro", price: 260, category: "phone", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/phone/p-15.jpg" }, { id: 14, name: "iphone 11 pro", price: 260, category: "phone", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/phone/p-16.jpg" },
  { id: 15, name: "iphone 15 pro", price: 340, category: "phone", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/phone/p-17.jpg" },
  { id: 16, name: "iphone 12 pro", price: 320, category: "phone", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/phone/p-18.jpg" }, 
  { id: 4, name: "Lenovo", price: 230, category: "laptop", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/laptop/l-1.jpg" },
  { id: 17, name: "HP extra", price: 1000, category: "laptop", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/laptop/l-2.jpg" },
  { id: 18, name: "Zbook", price: 1550, category: "laptop", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/laptop/l-3.jpg" },
  { id: 19, name: "HUAWEI", price: 590, category: "laptop", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/laptop/l-4.jpg" },
  { id: 20, name: "HP 711", price: 1050, category: "laptop", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/laptop/l-5.jpg" },
  { id: 21, name: "Deel 254", price: 780, category: "laptop", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/laptop/l-6.jpg" },
  { id: 22, name: "HP gold", price: 900, category: "laptop", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/laptop/l-7.jpg" },
  { id: 23, name: "HP pro", price: 400, category: "laptop", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/laptop/l-8.jpg" },
  { id: 24, name: "apple 12", price: 1660, category: "laptop", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/laptop/l-9.jpg" },
  { id: 25, name: "HP black", price: 350, category: "laptop", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/laptop/l-10.jpg" },
  { id: 26, name: "Assoss", price: 1700, category: "laptop", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/laptop/l-11.jpg" },
  { id: 27, name: "Iphone 1001", price: 600, category: "laptop", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/laptop/l-12.jpg" },
  { id: 28, name: "HP KING", price: 600, category: "laptop", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/laptop/l-14.jpg" },
  { id: 29, name: "Apple v15", price: 1940, category: "laptop", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/laptop/l-15.jpg" },
  { id: 30, name: "M7 GOLD", price: 60, category: "weapons", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/Weapons/w-1.jpg" },
  { id: 31, name: "AKM 211", price: 90, category: "weapons", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/Weapons/w-2.jpg" },
  { id: 32, name: "Muffler", price: 100, category: "weapons", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/Weapons/w-3.jpg" },
  { id: 33, name: "Weapon", price: 200, category: "weapons", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/Weapons/w-4.jpg" },
  { id: 34, name: "Weapon equipment", price: 650, category: "weapons", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/Weapons/w-5.jpg" },
  { id: 35, name: "combat equipment", price: 500, category: "weapons", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/Weapons/w-6.jpg" },
  { id: 36, name: "M420", price: 120, category: "weapons", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/Weapons/w-7.jpg" },
  { id: 37, name: "machine guns", price: 500, category: "weapons", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/Weapons/w-8.jpg" },
  { id: 38, name: "Heavy weapons", price: 390, category: "weapons", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/Weapons/w-9.jpg" },
  { id: 39, name: "Gun Kolok", price: 150, category: "weapons", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/Weapons/w-21.jpg" },
  { id: 40, name: "golden gun", price: 600, category: "weapons", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/Weapons/w-11.jpg" },
  { id: 41, name: "guns black", price: 50, category: "weapons", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/Weapons/w-12.jpg" },
  { id: 42, name: "pistol", price: 50, category: "weapons", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/Weapons/w-13.jpg" },
  { id: 43, name: "AKM 211 GOLD ", price: 50, category: "weapons", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/Weapons/w-14.jpg" },
  { id: 44, name: "sniper 712", price: 1500, category: "weapons", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/Weapons/w-15.jpg" },
  { id: 45, name: "Dagger", price: 70, category: "weapons", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/Weapons/w-16.jpg" },
  { id: 46, name: "sniper 467", price: 750, category: "weapons", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/Weapons/w-17.jpg" },
  { id: 47, name: "M1623", price: 200, category: "weapons", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/Weapons/w-18.jpg" },
  { id: 48, name: "M712 ", price: 250, category: "weapons", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/Weapons/w-19.jpg" },
  { id: 49, name: "BKC700", price: 700, category: "weapons", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/Weapons/w-20.jpg" },
  { id: 50, name: "Ek-553", price: 150, category: "weapons", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/Weapons/w-22.jpeg" },
  { id: 51, name: "Weapon", price: 150, category: "weapons", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/Weapons/w-23.jpeg" },
  { id: 52, name: "Weapon", price: 250, category: "weapons", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/Weapons/w-24.jpeg" },
  { id: 53, name: "Sniper", price: 850, category: "weapons", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/Weapons/w-25.jpeg" },
  { id: 54, name: "Weapon", price: 244, category: "weapons", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/Weapons/w-26.jpeg" },
  { id: 55, name: "Gun", price: 260, category: "weapons", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/Weapons/w-10.jpeg" },
  { id: 56, name: "Board", price: 1050, category: "furniture", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/furniture/f-1.jpg" },
  { id: 57, name: "Kitchen", price: 750, category: "furniture", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/furniture/f-2.jpg" },
  { id: 58, name: "Scenery", price: 1550, category: "furniture", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/furniture/f-3.jpg" },
  { id: 59, name: "Bedrooms", price: 850, category: "furniture", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/furniture/f-4.jpg" },
  { id: 60, name: "external council", price: 1450, category: "furniture", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/furniture/f-5.jpg" },
  { id: 61, name: "sofa", price: 450, category: "furniture", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/furniture/f-6.jpg" },
  { id: 62, name: "bureau", price: 550, category: "furniture", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/furniture/f-7.jpg" },
  { id: 63, name: "senate", price: 350, category: "furniture", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/furniture/f-8.jpg" },
  { id: 64, name: "Board", price: 650, category: "furniture", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/furniture/f-9.jpg" },
  { id: 65, name: "Divan", price: 250, category: "furniture", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/furniture/f-10.jpg" },
  { id: 66, name: "mirror", price: 50, category: "furniture", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/furniture/f-11.jpg" },
  { id: 67, name: "night decor", price: 1050, category: "furniture", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/furniture/f-12.jpg" },
  { id: 68, name: "marble kitchen", price: 1750, category: "furniture", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/furniture/f-13.jpg" },
  { id: 69, name: "Durable", price: 600, category: "furniture", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/furniture/f-15.jpg" },
  { id: 70, name: "Big sofa", price: 300, category: "furniture", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/furniture/f-16.jpg" },
  { id: 71, name: "Mattress", price: 140, category: "furniture", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", src: "../image/furniture/f-17.jpg" },
  
  
  
];

let cart = [];


if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
}


function displayProducts(items) {
  const container = document.getElementById("product-list");
  const types = document.getElementById("h3");
  container.innerHTML = "";
  items.forEach(p => {
    container.innerHTML += `
				<article class="packges_box">
					<div class="packges_card">
						<div class="packges_image">
							<img src="${p.src}">
						</div>
						<div class="packges_text">
							<div class="p_head">
								<h2>${p.name}</h2>
							</div>
							<p>
								${p.about}
							</p>
							<span class="price"><span  class="price-1">$${p.price+238}</span>
								$${p.price}
							</span>
							<button onclick="addToCart(${p.id})" class="button-add"> Add cart </button>
						</div>
					</div>
				</article>
        `;
  });
}


function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  saveCart();
  updateCart();
}


function updateCart() {
  const list = document.getElementById("cart-list");
  const total = document.getElementById("total");
  list.innerHTML = "";
  let sum = 0;
  cart.forEach((item, index) => {
    list.innerHTML += `
    <tr>
    <td> ${item.id}</td>
    <td> ${item.name}</td>
    <td>${item.category}</td>
    <td> $${item.price}</td>
    <td><button onclick="removeFromCart(${index})" class="Cansel" >Cansel</button>
    </td>
    <tr>`;
    sum += item.price;
  });
  total.innerText = sum;
}


function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCart();
}


function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}


document.getElementById("search").addEventListener("input", function() {
  const keyword = this.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
  displayProducts(filtered);
});


document.getElementById("filter").addEventListener("change", function() {
  const category = this.value;
  const types = document.getElementById("h3");
  if (category === "all") {
    types.innerHTML = "All products"
    displayProducts(products);
  } else {
    if (category === "phone") {
      types.innerHTML = "Phones"
    }
    if (category === "laptop") {
      types.innerHTML = "Laptops"
    }
    if (category === "furniture") {
      types.innerHTML = "Furnitures"
    }
    if (category === "weapons") {
      types.innerHTML = "Weapons"
    }
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
});


function checkout() {
  if (cart.length === 0) {
    alert("⚠️ The shopping cart is empty, there is no request !");
  } else {
    alert("✅ The request has been sent successfully !");
    cart = [];
    saveCart(); 
    updateCart();
  }
}

displayProducts(products);
updateCart();
