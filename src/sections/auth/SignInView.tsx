
import './styles/sign-in.scss';
import { useEffect, useMemo, useState } from 'react';
import FormSignInPhone from './FormSignInPhone';
import FormVerifyOTP from './FormVerifyOTP'
import FormSignInEmail from './FormSignInEmail';
import { type AuthType } from '../../types/auth'
import { useSearchParams } from "react-router-dom";
import FormSignIn from './FormSignIn';
import { type TYPE_SEND_OTP } from '../../services/userService';

const SignInView = () => {
  const [data, setData] = useState<AuthType>({
    phone: '',
    email: ''
  });
  const [typeForm, setTypeForm] = useState<TYPE_SEND_OTP | null>(null)

  const [step, setStep] = useState(1);
  const [searchParams] = useSearchParams();

  const onChangeEmail = (email: string) => {
    setData({
      ...data,
      email
    })
  }

  const onNextVerifyEmail = () => {
    setStep(step + 1)
  }

  const onNextVerifyPhone = () => {
    setStep(step + 1)
  }

  const onBackStep = () => {
    const prevStep = step - 1;
    if (prevStep < 1) setTypeForm(null)

    setStep(prevStep < 1 ? 1 : prevStep)
  }


  useEffect(() => {
    const type = searchParams.get('type')

    if (type === 'phone' || type === 'email') {
      setTypeForm(type);
    }
  }, []);

  const FormContent = useMemo(() => {
    if (step === 1) {
      switch (typeForm) {
        case 'phone':
          return <FormSignInPhone
            phone={data.phone}
            onChangePhone={(value: string) => onChangePhone(value)}
            onSubmit={onNextVerifyPhone}
            onBack={onBackStep}
          />
          break;
        case 'email':
          return <FormSignInEmail
            email={data.email}
            onChangeEmail={(email: string) => onChangeEmail(email)}
            onNext={onNextVerifyEmail}
            onBack={onBackStep}
          />
          break;
        default:
          return <FormSignIn
            sinIn={(type: TYPE_SEND_OTP) => setTypeForm(type)}
          />
          break;
      }
    }
    else return typeForm ? <FormVerifyOTP
      type={typeForm}
      account={typeForm === 'email' ? data.email : data.phone}
      onBack={onBackStep}
    /> : null

  }, [step, data, typeForm]);

  const onChangePhone = (phone: string) => {
    setData({
      ...data,
      phone
    })
  }


  return <section className="sign-in w-full">
    <div className="sign-in__container m-auto">
      {FormContent}
    </div>
  </section>
}

export default SignInView;