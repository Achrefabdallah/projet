// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Define the initial state
const initialState = {
  items: [],
  count: 0,
  total: 0,
};

// Define the reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { id, price } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      return {
        ...state,
        count: state.count + 1,
        total: state.total + price ,
      };

    case 'REMOVE_FROM_CART':
      const removedItem = state.items.find(item => item.id === action.payload);

      if (removedItem) {
        removedItem.quantity -= 1;
        const updatedItems = state.items.filter(item => item.quantity > 0);
        return {
          ...state,
          items: updatedItems,
          count: state.count - 1,
          total: state.total - removedItem.price,
        };
      } else {
        return state;
      }

    // Add more cases for other actions as needed
    default:
      return state;
  }
};

// Create the context
const CartContext = createContext();

// Create a custom hook for using the cart context
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Create the CartProvider component
const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  // Add a function to clear the cart
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // Other functions for handling the cart state...

  // Memoize the context value to avoid unnecessary re-renders
  const contextValue = React.useMemo(() => {
    return {
      cartState,
      addToCart: item => dispatch({ type: 'ADD_TO_CART', payload: item }),
      removeFromCart: itemId => dispatch({ type: 'REMOVE_FROM_CART', payload: itemId }),
      // Add more functions as needed
      clearCart,
    };
  }, [cartState]);

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider, useCart };
