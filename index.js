function render() {
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
}

spinnerPage.render();
let CATALOG = [];

fetch("server/catalog.json")
    .then((res) => res.json())
    .then((data) => {
        CATALOG = data;
        setTimeout(() => {
            spinnerPage.handleClear();
            render();
        }, 1000);
    })
    .catch((err) => {
        console.log(err);
    });
