class Product {
  title = 'default';
  imageUrl;
  description;
  price;
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

const productList = {
  product: [
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
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.product) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
      <div>
      <img src="${prod.imageUrl}" alt="${prod.title}">
      <div class="product-item__content">
      <h2>${prod.title}</h2>
      <h3>\$${prod.price}</h3>
      <p>${prod.description}</p>
      <button>ADD TO CART</button>
      </div>
      </div
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
