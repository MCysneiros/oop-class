class Product {
  // title = 'default';
  // imageUrl;
  // description;
  // price;
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = ` <h2> Total:\$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce(
      (prevValue, curItem) => prevValue + curItem.price,
      0
    );
    return sum;
  }
  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
    <h2> Total:\$${0}</h2>
    <button>ORDER NOW</button>`;
    cartEl.className = 'cart';
    this.totalOutput = cartEl.querySelector('h2');
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }
  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
      <div>
      <img src="${this.product.imageUrl}" alt="${this.product.title}">
      <div class="product-item__content">
      <h2>${this.product.title}</h2>
      <h3>\$${this.product.price}</h3>
      <p>${this.product.description}</p>
      <button>ADD TO CART</button>
      </div>
      </div
      `;
    const addCartBtn = prodEl.querySelector('button');
    addCartBtn.addEventListener('click', this.addToCart.bind(this));

    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'A pillow',
      'https://images-americanas.b2w.io/produtos/01/00/img/1299410/4/1299410484_1GG.jpg',
      'A soft pillow',
      19.99
    ),

    new Product(
      'A carpet',
      'https://tapetesnaweb.vteximg.com.br/arquivos/ids/173368-600-600/Tapete-Belga-Geometrico-Des--01-067X105m---Edx-Tapetes1.jpg?v=637261894931370000',
      'A modern carpet',
      89.99
    ),
  ];
  constructor() {}
  render() {
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById('app');

    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();

    renderHook.appendChild(cartEl);
    renderHook.appendChild(prodListEl);
  }
}
class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}
App.init();
