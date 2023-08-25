"use client";

import Link from "next/link";
import styles from "./LoginForm.module.css";
import { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from 'yup';


export default function LoginForm() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const validationSchema = Yup.object().shape({
    
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(3, 'Password to short!')
    .max(30, 'Password to long!')
    .required('Required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
  };


  return (
    <div className={styles.main}>

    <Formik
      initialValues={values}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
     
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      
      }) => (
        <form onSubmit={handleSubmit} className={styles.login}>
          <label htmlFor="">Correo</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && <p className="text-red-600 text-xs">{errors.email}</p>}
          <label htmlFor="">Contraseña</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && <p className="text-red-600 text-xs">{errors.password}</p>}
          <button type="submit" disabled={isSubmitting} className={styles.submit}>
            Iniciar Sesion
          </button>
        </form>
      )}
    </Formik>
    </div>

  );
};
