class Shopping {
    handleClear() {
        ROOT_SHOPPING.innerHTML = '';
        document.body.style.overflow = 'visible'
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = "";
        let sumCatalog = 0;

        CATALOG.forEach(({ id, name, price, img }) => {
            if(productsStore.includes(id)) {
                htmlCatalog+= `
                    <tr>
                        <td><img src="${img}" class="shopping-element__img"></td>
                        <td class="shopping-element__name">${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} USD</td>
                    </tr>
                `;
                sumCatalog += Number(price);
            }
        });
        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handleClear();"></div>
                <table>
                   ${htmlCatalog} 
                   <tr>
                        <td class="shopping-element__sum">Сумма:</td>
                        <td></td>
                        <td class="shopping-element__total">${sumCatalog.toLocaleString()} USD</td>
                   </tr>
                </table>
            </div>
        `;

        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();
