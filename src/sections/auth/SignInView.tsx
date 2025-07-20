
import './styles/sign-in.scss';
import { useEffect, useMemo, useState } from 'react';
import FormSignInPhone from './FormSignInPhone';
import FormPhoneVerify from './FormPhoneVerify'
import FormSignInEmail from './FormSignInEmail';
import { AuthType } from '@/types/auth'
import { useSearchParams } from "react-router-dom";

type formTypeLogin = 'phone' | 'email';

const SignInView = () => {
  const [data, setData] = useState<AuthType>({
    phone: '',
    email: ''
  });
  const [typeForm, setTypeForm] = useState<formTypeLogin>('phone')

  const [step, setStep] = useState(1);
  const [searchParams] = useSearchParams();

  const onChangeEmail = (email: string) => {
    setData({
      ...data,
      email
    })
  }

  useEffect(() => {
    const type = searchParams.get('type')
    console.log('====> type', type)

    if (type === 'phone' || type === 'email') {
      setTypeForm(type);
    } else {
      setTypeForm('phone');
    }
  }, []);

  const FormContent = useMemo(() => {
    switch (step) {
      case 1:
        return typeForm == 'phone' ? <FormSignInPhone
          phone={data.phone}
          onChangePhone={(phone: string) => onChangePhone(phone)}
          onSubmit={() => onNextVerifyPhone()}
        />
          : <FormSignInEmail
            email={data.email}
            onChangeEmail={(email: string) => onChangeEmail(email)}
            onBack={() => onBackStep()}
          />;
        break;
      case 2:
        return <FormPhoneVerify onBack={() => onBackStep()} onSubmit={(code: string) => onSubmitVerifyPhone(code)} />
      default:
        return ''
        break;
    }
  }, [step, data, typeForm]);

  const onChangePhone = (phone: string) => {
    setData({
      ...data,
      phone
    })
  }

  const onNextVerifyPhone = () => {
    setStep(step + 1)
  }

  const onBackStep = () => {
    const prevStep = step - 1;
    setStep(prevStep < 1 ? 1 : prevStep)
  }

  const onSubmitVerifyPhone = (code: string) => {

  }

  return <section className="sign-in w-full">
    <div className="sign-in__container m-auto">
      {FormContent}
    </div>
  </section>
}

export default SignInView;