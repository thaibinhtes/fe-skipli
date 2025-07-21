import { Link } from "react-router-dom";
import BaseCard, { type BaseCardProp } from "../../components/BaseCard"
import BaseInput from "../../components/BaseInput"
import { useState } from "react";
import useAuthStore from "../../store/auth";
import BaseLoading from "../../components/BaseLoading";

type FormSignInEmailType = {
  email: string;
  onChangeEmail(email: string): void;
  onNext(): void;
} & BaseCardProp

const FormSignInEmail = ({ email, onBack, onChangeEmail, onNext }: FormSignInEmailType) => {
  const [loading, setLoading] = useState(false)
  const { getOTP } = useAuthStore()

  const onChangeValue = (email: string) => {
    onChangeEmail(email);
  }

  const onNextVerfiyEmail = async (email: string) => {
    try {
      setLoading(true)
      const res = await getOTP(email, 'email')
      const { success } = res

      setLoading(false)

      if (success)
        onNext()
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }
  return <div className="relative form-sign-email min-h-[300px]">
    <BaseCard
      onBack={onBack}
      title="Sign In"
      desc="Please enter your email to sign in"
    >
      {loading ? <BaseLoading /> : null}

      <div className="form-sign-in-email">
        <BaseInput
          type="email"
          value={email}
          placeholder="Your Email Address"
          change={(email: string) => onChangeValue(email)}
        />

        <button
          className='sign-in__btn w-full button --primary'
          onClick={() => onNextVerfiyEmail(email)}
        >
          Next
        </button>

        <p className="sign-in__note-txt text-desc text-center">
          passwordless authentication methods.
        </p>


        <div className="sign-in__footer">
          <p className="text-desc">
            Don’t having account?
            <Link className='text-link' to="/sign-up"> Sign Up</Link>
          </p>
        </div>
      </div>

    </BaseCard>
  </div>

}

export default FormSignInEmail;
