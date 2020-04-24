class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
        document.body.style.overflow = 'hidden';
    }

    render(arr) {
        const html = `
            <div class="header-container">
                <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                    🛒 ${arr}
                </div>
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();

headerPage.render(productsStore.length);