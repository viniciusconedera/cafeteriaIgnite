import { createContext, ReactNode, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { paymentFormData } from '../pages/Checkout';
import { products, productType } from '../products';

type CartProducts = productType & {amount: number};

interface Order {
  info: paymentFormData;
  products?: productType[];
  confirmed?: Date;
}

interface CheckoutContextType {
  products: productType[];
  cart: CartProducts[];
  order?: Order;
  addProductsToCart(products: productType, quantity: number): void;
  registerOrder(data: paymentFormData): void;
  increaseQuantity(produtcId: number): void;
  decreaseQuantity(produtcId: number): void;
  removeProductFromCart(produtcId: number): void;
}

export const CheckoutContext = createContext({} as CheckoutContextType);

interface CheckoutContextProviderProps {
  children: ReactNode;
}

export function CheckoutContextProvider({children}: CheckoutContextProviderProps) {
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartProducts[]>([]);
  const [order, setOrder] = useState<Order>({} as Order);

  function addProductsToCart(product: productType, quantity: number) {
    const checkIfExists = cart.find((prod) => prod.id === product.id);
    if (checkIfExists) {
      const cartProducs = cart.map(prod => {
        if (prod.id === product.id) {
          return {...prod, amount: prod.amount + quantity};
        } else {
          return prod;
        }
      });
      setCart(cartProducs);
    } else {
      setCart(state => [...state, {...product, amount: quantity}])
    }    
  }

  function increaseQuantity(produtcId: number) {
    const cartUpdated = cart.map(prod => {
      if (prod.id === produtcId) {
        prod.amount += 1;
      }
      return prod;
    });
    setCart([...cartUpdated]);
  }

  function decreaseQuantity(produtcId: number) {
    const cartUpdated = cart.map(prod => {
      if ((prod.id === produtcId) && prod.amount > 1) {
        prod.amount -= 1;
      }
      return prod;
    });
    setCart([...cartUpdated]);
  }

  function removeProductFromCart(produtcId: number) {
    const cartUpdated = cart.filter(prod => prod.id !== produtcId);
    setCart([...cartUpdated]);
  }

  function registerOrder(data: paymentFormData) {
    setOrder({
      info: data,
      products: cart,
      confirmed: new Date(),
    });
    setCart([]);
    navigate('/success');
  }

  return (
    <CheckoutContext.Provider value={{
      products, addProductsToCart, cart, registerOrder, order,
      increaseQuantity, decreaseQuantity, removeProductFromCart}}>
      {children}
    </CheckoutContext.Provider>
  )  
}