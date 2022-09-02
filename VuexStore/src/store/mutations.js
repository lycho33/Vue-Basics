export default {
    login(state) {
        state.isLoggedIn = true;
    },
    logout(state) {
        state.isLoggedIn = false;
    },
    addProductToCart(state, payload) {
        console.log('payload', payload)
        // debugger
        const productInCartIdx = state.cart.items.findIndex(ci => ci.productId === payload.id);
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
        console.log(state.cart)
    },
    removeProductFromCart(state, payload) {
        console.log("remove", payload)
        const productInCartIdx = state.cart.items.findIndex(c => c.productId === payload.productId);
        const prodData = state.cart.items[productInCartIdx];
        state.cart.items.splice(productInCartIdx, 1);
        state.cart.qty -= prodData.qty;
        state.cart.total -= prodData.price * prodData.qty;
    }
}

// removeProductFromCart(prodId) {
//     const productInCartIndex = this.cart.items.findIndex(
//       (cartItem) => cartItem.productId === prodId
//     );
//     const prodData = this.cart.items[productInCartIndex];
//     this.cart.items.splice(productInCartIndex, 1);
//     this.cart.qty -= prodData.qty;
//     this.cart.total -= prodData.price * prodData.qty;
//   },


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