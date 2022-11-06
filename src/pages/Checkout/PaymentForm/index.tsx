import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { BsCurrencyDollar } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import { AdressForm, PaymentFormContainer, PaymentOptions } from './styles';

export function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const {register, formState: {errors: err}, setValue} = useFormContext();
  setValue('payment', paymentMethod);
  
  return (
    <PaymentFormContainer>
      <h2>Complete seu pedido</h2>
      <AdressForm>
        <main>
          <header id='header'>
            <MdLocationPin  size={30}/>
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>          
          </header>
          <input id='code' type="number" title='Deve possuir 8 digitos'
          placeholder='CEP' {...register('code', {valueAsNumber: true})} />
          <input id='street' placeholder='Logradouro'
          title={err.street ? err.street.message as string : 'necessário'}
          {...register('street')} />
          <input id='number' placeholder='Número' type='number'
          title={'necessário e deve ser numérico'}
          {...register('number', {valueAsNumber: true})} />
          <input id='complement' placeholder='Complemento'
          {...register('complement')} />
          <input id='district' placeholder='Bairro'
          title={err.district ? err.district.message as string : 'necessário'}
          {...register('district')} />
          <input id='city' placeholder='Cidade'
          title={err.city ? err.city.message as string : 'necessário'}
          {...register('city')} />
          <input id='state' placeholder='UF'
          title={err.state ? err.state.message as string : 'necessário'}
          {...register('state')} />
        </main>        
        <PaymentOptions>
          <header id='header'>
            <BsCurrencyDollar size={30}/>
            <div>
              <h3>Pagamento</h3>
              <p>O pagamento é feito na entrega</p>
            </div>          
          </header>
          <div onClick={() => setValue('payment', paymentMethod)}>
            <span onClick={() => setPaymentMethod('CARTÃO DE CREDITO')}
              className={paymentMethod === 'CARTÃO DE CREDITO' ? 'active' : ''}>
              <BsCurrencyDollar size={16}/> CARTÃO DE CREDITO</span>
            <span onClick={() => setPaymentMethod('CARTÃO DE DÉBITO')}
              className={paymentMethod === 'CARTÃO DE DÉBITO' ? 'active' : ''}>
              <BsCurrencyDollar size={16}/> CARTÃO DE DÉBITO</span>
            <span onClick={() => setPaymentMethod('DINHEIRO')}
              className={paymentMethod === 'DINHEIRO' ? 'active' : ''}>
              <BsCurrencyDollar size={16}/> DINHEIRO</span>
          </div>
        </PaymentOptions>
      </AdressForm>
    </PaymentFormContainer>
  )
}