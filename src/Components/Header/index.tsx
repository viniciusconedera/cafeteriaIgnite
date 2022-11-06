import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import LogoImg from '../../assets/logo.svg';
import { CheckoutContext } from '../../contexts/CheckoutContext';
import { Actions, CartNumber, HeaderContainer } from "./styles";

export function Header() {
  const {cart} = useContext(CheckoutContext);

  const productOnCart = cart.reduce((acc, prod) => {
    return acc += prod.amount;
  }, 0) || 0;

  return (
    <HeaderContainer>
      <NavLink to="/" title='Home'>
        <img src={LogoImg} />
      </NavLink>      
      <Actions>
        <span><MdLocationPin size={18}/>Porto Alegre, RS</span>
        <NavLink to="checkout" title='Cart'>
          {productOnCart>0  && <CartNumber>{productOnCart}</CartNumber>}
          <FaShoppingCart size={18}/>          
        </NavLink>
      </Actions>
    </HeaderContainer>
  )
}