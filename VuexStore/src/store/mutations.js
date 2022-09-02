export default {
    login(state) {
        state.isLoggedIn = true;
    },
    logout(state) {
        state.isLoggedIn = false;
    },
    addProductToCart(state, payload) {
        const productInCartIdx = state.cart.items.findIndex(ci => ci.productId === state.payload.id);
        console.log(productInCartIdx)

        if (productInCartIdx >= 0) {
            state.cart.items[productInCartIdx].qty++;
        } else {
            const newItem = {
                productId: payload.id,
                title: payload.title,
                image: payload.image,
                price: payload.price,
                qty: 1,
            };
            state.cart.items.push(newItem);
        }
        state.cart.qty++;
        state.cart.total += payload.price;
    }

}


// addProductToCart(productData) {
//     const productInCartIndex = this.cart.items.findIndex(
//       (ci) => ci.productId === productData.id
//     );

//     if (productInCartIndex >= 0) {
//       this.cart.items[productInCartIndex].qty++;
//     } else {
//       const newItem = {
//         productId: productData.id,
//         title: productData.title,
//         image: productData.image,
//         price: productData.price,
//         qty: 1,
//       };
//       this.cart.items.push(newItem);
//     }
//     this.cart.qty++;
//     this.cart.total += productData.price;
//   },