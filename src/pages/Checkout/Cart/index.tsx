import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { FaRegTrashAlt } from 'react-icons/fa';
import cafe1 from '../../../assets/coffee1.png';
import { CheckoutContext } from '../../../contexts/CheckoutContext';
import { priceFormatter } from '../../../utils/formatter';
import { CartContainer, ProductCheck, Summary, ValuesCheck } from './styles';

export function Cart() {
  const {handleSubmit} = useFormContext();
  const {cart, increaseQuantity, decreaseQuantity,
    removeProductFromCart, registerOrder} = useContext(CheckoutContext);
  
  const subTotal = cart.reduce((acc, prod) => {
    const sum = acc +  prod.price;
    return sum;
  }, 0)
  
  function handleRegisterPayment(data: any) {
    registerOrder(data);
  }

  return (
    <CartContainer>
      <h2>Cafés selecionados</h2>
      <Summary>
        <ul>
          {cart.map(prod => (
            <ProductCheck key={prod.id}>
              <img src={cafe1} />
              <div>              
                <section><span>{prod.title}</span><span>{priceFormatter.format(prod.price)}</span></section>
                <footer>
                  <div>
                  <span onClick={() => decreaseQuantity(prod.id)}>-</span>
                  <span>{prod.amount}</span>
                  <span onClick={() => increaseQuantity(prod.id)}>+</span>
                  </div>                
                  <span onClick={() => removeProductFromCart(prod.id)}><FaRegTrashAlt />Remover</span>
                </footer>
              </div>
            </ProductCheck>
          ))}          
        </ul>
        <ValuesCheck>
          <div><span>Total de itens</span><span>{priceFormatter.format(subTotal)}</span></div>
          <div><span>Entrega</span><span>{priceFormatter.format(3.50)}</span></div>
          <div><span>Tota</span><span>{priceFormatter.format(subTotal + 3.5)}</span></div>
        </ValuesCheck>
        <div>
          <button onClick={handleSubmit(handleRegisterPayment)} >
            Confirmar pedido
          </button>
        </div>        
      </Summary>      
    </CartContainer>    
  )
}