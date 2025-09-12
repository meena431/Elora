export const initialCartState = {
    cartItems: []
};

export const CartReducer = (state,action) => {
    switch (action.type) {
        case "Add_To_Cart": {
            const item = action.payload;
            const exists = state.cartItems.find(i => i.id === item.id);
            if(exists) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(i => 
                        i.id === item.id ? { ...i, quantity: i.quantity + (item.quantity || 1) } :i
                    )
                }
            };
            return {
                ...state,
                cartItems: [...state.cartItems, { ...item, quantity: item.quantity || 1 }]
            };
        }

        case "Update_Qty": {
            const { id, quantity } = action.payload;
            return {
                ...state,
                cartItems: state.cartItems.map(i => 
                    i.id === id ? {...i, quantity} :i
                ) 
            };
        }

        case "Remove_From_Cart" :
            return {
                ...state,
                cartItems: state.cartItems.filter(i => i.id !== action.payload)
            };

        case "Clear_Cart": 
            return { ...state, cartItems: [] };

        default: 
            return state;
    }
}