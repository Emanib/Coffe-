// export const reducer = (state, action) =>
// {
//     switch (action.type)
// {
//         case 'CLEAR_CART': return { ...state, cart: [] };
//         case 'REMOVE': return { ...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload) };
//         case 'INCREASE':
//             let tempCart = state.cart.map((cartItem) =>
//             {
//                 if (action.id === action.payload)
//                 {
//                     return { ...cartItem, amount: cartItem.amount + 1 }
//                 }
//                 return cartItem
//             })
//             return { ...state, cart: tempCart };
//         case 'DECREASE':
//             let temp = state.cart.map((cartItem) =>
//             {
//                 if (action.id === action.payload)
//                 {
//                     return { ...cartItem, amount: cartItem.amount - 1 }
//                 }
//                 return cartItem;
//             }).filter((cartItem) => cartItem.amount !== 0)
//             return { ...state, cart: temp };
//         case 'GET_TOTAL':
//             let { total, amount } = state.cart.reduce(
//                 (cartTotal, cartItem) =>
//                 {
//                     const { price, amount } = cartItem;
//                     const itemTotal = price * amount;
//                     cartTotal.total += itemTotal;
//                     cartTotal.amount += amount;
//                     return cartTotal;
//                 },
//                 {
//                     total: 0,
//                     amount: 0
//                 }

//             )
//             total = parseFloat(total.toFixed(2));
//             return { ...state, total, amount };
//         case 'LOADING':
//             return { ...state, loading: true };
//         case 'DISPLAYING_ITEMS': return { ...state, cart: action.payload, loading: false };
//         case 'TOGGLE_AMOUNT':
//             let tmp = state.cart.map((cartItem) =>
//             {
//                 if (cartItem.id === action.payload)
//                 {
//                     if (action.payload.type === "inc")
//                     {
//                         return { ...cartItem, amount: cartItem + 1 }
//                     }
//                     if (action.payload.type === 'dec')
//                     {
//                         return { ...cartItem, amount: cartItem - 1 }
//                     }
//                 }
//                 return cartItem;
                
//             }).filter((cartItem) => cartItem.amount !== 0);
//             return {...state,cart:tmp}
            
//         default: throw new Error(`unkown action ${action.type}`); 
// }

// }