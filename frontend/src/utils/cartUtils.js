export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
}

export const updateCart = (state) => {
     // calculate items price
     state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0))

     // calculate shipping price(if order is greater than 100 then free, else $10 shipping)
     state.shippingPrice =addDecimals(state.itemsPrice > 100 ? 0 : 10)

     // calculate tax price(15%tax)
     state.taxPrice = addDecimals(Number((state.itemsPrice * 0.15).toFixed(2)))

     // calculate total price
     state.toalPrice = (
         Number(state.itemsPrice) +
         Number(state.shippingPrice) +
         Number(state.taxPrice)
     ).toFixed(2)

     localStorage.setItem('cart', JSON.stringify(state) )
     
     return state
}