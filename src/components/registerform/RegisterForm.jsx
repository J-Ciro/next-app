"use client";

import Link from "next/link";
import styles from "./RegisterForm.module.css";
import { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

export default function RegisterForm() {
  const [values, setValues] = useState({
    firstName:"",
    lastName:"",
    email: "",
    password: "",
  });

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password:Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
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
          <form onSubmit={handleSubmit} className={styles.register}>
            <label htmlFor="">Nombres</label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            {errors.firstName && touched.firstName && (
              <p className="text-red-600 text-xs">{errors.firstName}</p>
            )}
             <label htmlFor="">Apellidos</label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            {errors.lastName && touched.lastName && (
              <p className="text-red-600 text-xs">{errors.lastName}</p>
            )}
            <label htmlFor="">Correo Electronico</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && (
              <p className="text-red-600 text-xs">{errors.email}</p>
            )}
            <label htmlFor="">Contraseña</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && (
              <p className="text-red-600 text-xs">{errors.password}</p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submit}
            >
              Registrarse
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
