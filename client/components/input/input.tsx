import { Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "../../interfaces/input";
import styles from "./input.module.scss";

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required?: boolean;
  inputClassName?:  string;
  labelClassName?: string;
};

const Input = ({
  label,
  register,
  required = false,
  inputClassName,
  labelClassName,
}: InputProps) => (
  <>
    <label className={`${styles.label} ${labelClassName ?? ""}`}>{label}</label>
    <input
      className={`${styles.input} ${inputClassName ?? ""}`}
      {...register(label, { required })}
    />
  </>
);

export default Input;
