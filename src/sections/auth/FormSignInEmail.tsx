import BaseCard, { type BaseCardProp } from "../../components/BaseCard"
import BaseInput from "../../components/BaseInput"

type FormSignInEmailType = {
  email: string;
  onChangeEmail(email: string): void;
} & BaseCardProp

const FormSignInEmail = ({ email, onBack, onChangeEmail }: FormSignInEmailType) => {
  const onChangeValue = (email: string) => {
    onChangeEmail(email);
  }

  return <BaseCard
    onBack={() => onBack()}
    title="Phone verification"
    desc="Please enter your code that send<br />to your phone"
  >
    <form className="form-sign-in-email">
      <BaseInput
        type="email"
        value={email}
        placeholder="Enter Your Code"
        onChange={(email: string) => onChangeValue(email)}
      />
    </form>
  </BaseCard>
}

export default FormSignInEmail;
