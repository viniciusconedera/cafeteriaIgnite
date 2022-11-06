import { useContext, useEffect } from 'react';
import { BsClockHistory, BsCurrencyDollar } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import SuccessImg from '../../assets/success.png';
import { CircularIcon } from '../../Components/CircularIcon';
import { CheckoutContext } from '../../contexts/CheckoutContext';
import { CheckoutDetais, ImageContainer, SuccessContainer } from './styles';

export function Success() {
  const {order} = useContext(CheckoutContext);
  const navigate = useNavigate();  

  useEffect(() => {
    if (!order?.info) {
      navigate('/');
    }      
  }, [])

  return (    
    <SuccessContainer>
      {order?.info && (<>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que ogo o café chegará até você</p>
        <CheckoutDetais>
          <div>
            <CircularIcon backGroundColor='purple' Icon={MdLocationPin} />
            <div>
              <p>Entrega em {order?.info.street}, {order?.info.number}</p>
              <p>{order?.info.district} - {order?.info.city}, {order?.info.state}</p>
            </div>            
          </div>
          <div>
            <CircularIcon backGroundColor='yellow' Icon={BsClockHistory} />
            <div>
              <p>Previsão de entrega</p>
              <p>20 min - 30 min</p>
            </div>            
          </div>
          <div>
            <CircularIcon backGroundColor='orange' Icon={BsCurrencyDollar} />
            <div>
              <p>Pamento na entrega</p>
              <p>{order?.info.payment}</p>
            </div>            
          </div>
        </CheckoutDetais>
      </div>      
      <ImageContainer>
        <img src={SuccessImg} alt=""/>
      </ImageContainer></>)}
    </SuccessContainer>
  )
}