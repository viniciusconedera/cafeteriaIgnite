import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { Cart } from './Cart';
import { PaymentForm } from './PaymentForm';
import { CheckoutContainer } from "./styled";

const registerPaymentSchema = zod.object({
  code: zod.number().min(10000000).max(99999999),
  street: zod.string().min(1, 'Logradouro deve ser informado'),
  number: zod.number().min(1, 'Numero deve ser informado'),
  complement: zod.string(),
  district: zod.string().min(1, 'Bairro deve ser informado'),
  city: zod.string().min(1, 'Cidade deve ser informada'),
  state: zod.string().min(2, 'Estado deve ser informado').max(2, 'Estado deve ter 2 digitos'),
  payment: zod.string()
});

export type paymentFormData = zod.infer<typeof registerPaymentSchema>;

export function Checkout() {
  const checkoutForm = useForm<paymentFormData>({
    resolver: zodResolver(registerPaymentSchema)
  });

  return (
    <CheckoutContainer>
      <FormProvider {...checkoutForm}>
        <PaymentForm />
        <Cart />
      </FormProvider>
    </CheckoutContainer>
  )
}