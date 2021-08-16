import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./create.module.scss";
import Input from "../input/input";
import { IFormValues } from "../../interfaces/input";

export default function CreateCoin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

      <Input label="coinName" register={register} inputClassName={styles.coinName}/>
      <Input label="abriviation" register={register} />
      <Input label="contract" register={register} />
      <Input label="network" register={register} />
      <Input label="coinWebsite" register={register} />
      <Input label="linkdin" register={register} />

      <input type="submit" className={styles.button} />
    </form>
  );
}
