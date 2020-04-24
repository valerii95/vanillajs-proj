class Products {
    constructor() {
        this.classNameActive = "products-element__btn_active";
        this.labelAdd = "Добавить в корзину";
        this.labelRemove = "Удалить из корзины";
    }

    handleSetLocalStorage(el, id) {
        const { pushProduct, products } = localStorageUtil.setProducts(id);
        if(pushProduct) {
            el.classList.add(this.classNameActive);
            el.innerText = this.labelRemove;
        } else {
            el.classList.remove(this.classNameActive);
            el.innerText = this.labelAdd;
        }

        headerPage.render(products.length);
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        
        let htmlCatalog = "";
        CATALOG.forEach(({ id, name, price, img }) => {
            let activeClass = '';
            let activeText = '';
            
            if (!productsStore.includes(id)) {
                activeText = this.labelAdd;
            } else {
                activeClass = " "+this.classNameActive;
                activeText = this.labelRemove;
            }

            htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${name}</span>
                    <img class="products-element__img" src="${img}">
                    <span class="products-element__price">🍰 ${price.toLocaleString()} USD</span>
                    <button class="products-element__btn${activeClass}" onclick="productsPage.handleSetLocalStorage(this, '${id}')">${activeText}</button>
                </li>
            `;
        });

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();
