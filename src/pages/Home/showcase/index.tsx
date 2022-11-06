import { useContext, useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import cafe1 from '../../../assets/coffee1.png';
import { CheckoutContext } from '../../../contexts/CheckoutContext';
import { productType } from '../../../products';
import { priceFormatter } from '../../../utils/formatter';
import { CardActions, ProductsList, ShowcaseContainer } from './styles';

interface QuantitiesProps {
  productId: number;
  quantity: number;
}

export function Showcase() {
  const {products, addProductsToCart} = useContext(CheckoutContext);
  const [quantity, setQuantity] = useState<Array<QuantitiesProps>>([]);

  useEffect(() => {
    const ajustQuantities = products.map((prod) => {
      return {productId: prod.id, quantity: 1}
    });
    setQuantity(ajustQuantities);
  }, [])

  function handleIncreaseQuantity(productId: number) {
    const ajustQuantities = quantity.map((quant) => {
      if (quant.productId === productId && quant.quantity < 9) {
        return {productId: quant.productId, quantity: quant.quantity + 1}
      }
      return {productId: quant.productId, quantity: quant.quantity}
    });
    setQuantity(ajustQuantities);
  }

  function handleDecreaseQuantity(productId: number) {
    const ajustQuantities = quantity.map((quant) => {
      if (quant.productId === productId && quant.quantity > 1) {
        return {productId: quant.productId, quantity: quant.quantity - 1}
      }
      return {productId: quant.productId, quantity: quant.quantity}
    });
    setQuantity(ajustQuantities);
  }

  function handleAddProductsToCart(product: productType) {
    const prodQuantity = quantity.find((quant) => quant.productId === product.id)?.quantity;
    if (prodQuantity) {
      addProductsToCart(product, prodQuantity);
    }    
  }

  return (
    <ShowcaseContainer>
      <h1>Nossos cafés</h1>
      <ProductsList>
        {products.map(prod => (
          <li key={prod.id}>
            <img src={cafe1} />
            <div>
              {prod.type.map(tp => (
                <span key={tp}>{tp}</span>
              ))}
            </div>            
            <h2>{prod.title}</h2>
            <p>{prod.description}</p>
            <CardActions>
            <h3><span>{priceFormatter.format(prod.price)}</span></h3>
              <div>
                <button onClick={() => handleDecreaseQuantity(prod.id)}>-</button>
                <span>{quantity.find((quant) => quant.productId === prod.id)?.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(prod.id)}>+</button>
              </div>
              <button onClick={() => handleAddProductsToCart(prod)}>
                <FaShoppingCart size={18}/>
              </button>
            </CardActions>
          </li>
        ))}
      </ProductsList>
    </ShowcaseContainer>
  )
}