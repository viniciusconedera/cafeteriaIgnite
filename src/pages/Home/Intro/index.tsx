import { BiPackage } from 'react-icons/bi';
import { FaClock, FaCoffee, FaShoppingCart } from 'react-icons/fa';
import IntroImg from '../../../assets/banner.png';
import { CircularIcon } from '../../../Components/CircularIcon';
import { IconsGroup, IntroContainer } from './styles';

export function Intro() {
  return (
    <IntroContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        <IconsGroup>
          <div>
            <CircularIcon backGroundColor='orange' Icon={FaShoppingCart} />
            <span>Compra simples e segura</span>
          </div>
          <div>
            <CircularIcon backGroundColor='gray' Icon={BiPackage} />
            <span>Embalagem mantém o café intacto</span>
          </div>
          <div>
            <CircularIcon backGroundColor='yellow' Icon={FaClock} />
            <span>Entrega rápida e rastreada</span>
          </div>
          <div>
            <CircularIcon backGroundColor='purple' Icon={FaCoffee} />
            <span>O café chega fresquinho até você</span>
          </div>
        </IconsGroup>
      </div>      
      <img src={IntroImg}/>
    </IntroContainer>
  )
}