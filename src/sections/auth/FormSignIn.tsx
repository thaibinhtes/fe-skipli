import { Link } from "react-router-dom";
import BaseCard, { type BaseCardProp } from "../../components/BaseCard"

type FormSignInProps = BaseCardProp & {
  sinIn(type: string): void;
}

const FormSignIn = ({ sinIn }: FormSignInProps) => {

  return <BaseCard
    title="Sign In"
  >
    <div className="form-sign-in-email">

      <button
        className='sign-in__btn mb-0 w-full button --primary'
        onClick={() => sinIn('phone')}
      >
        Sign In with phone
      </button>

      <button
        className='sign-in__btn mt-0 w-full button --primary'
        onClick={() => sinIn('email')}
      >
        Sign In with email
      </button>

      <div className="sign-in__footer">
        <p className="text-desc">
          Don’t having account?
          <Link className='text-link' to="/sign-up"> Sign Up</Link>
        </p>
      </div>
    </div>
  </BaseCard>
}

export default FormSignIn;
