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
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Input
          label="coinName"
          register={register}
          inputClassName={styles.input}
        />
        <Input
          label="abriviation"
          register={register}
          inputClassName={styles.input}
        />
        <Input
          label="description"
          register={register}
          inputClassName={styles.input}
        />
        <Input
          label="contract"
          register={register}
          inputClassName={styles.input}
        />
        <Input
          label="network"
          register={register}
          inputClassName={styles.input}
        />
        <Input
          label="coinWebsite"
          register={register}
          inputClassName={styles.input}
        />
        <Input
          label="linkdin"
          register={register}
          inputClassName={styles.input}
        />
        <Input
          label="twitter"
          register={register}
          inputClassName={styles.input}
        />
        <Input
        label="thumbnail"
        register={register}
        inputClassName={styles.input}
        />
        <input type="submit" className={styles.button} />
      </form>
      <div className={styles.infoContainer}>
        Maybe preview coin you are entering here
      </div>
    </div>
  );
}
