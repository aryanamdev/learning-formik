import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const YoutubeForm = () => {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
  };

  const onSubmit = (values) => {
    console.log("Form submit values", values);
  };

  const validate = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i).test(values.email)
    ) {
      errors.email = "Please Enter a valid email address";
    }
    if (!values.channel) {
      errors.channel = "Required";
    }
    return errors;
  };

  // Schema Validations with yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email format").required("Required"),
    channel: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    //validate
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          onChange={formik.handleChange}
          value={formik.values.name}
          type="text"
          name="name"
          id="name"
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        ) : null}

        <label htmlFor="email">Email</label>
        <input
          onChange={formik.handleChange}
          value={formik.values.email}
          type="email"
          name="email"
          id="email"
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}

        <label htmlFor="channel">Channel</label>
        <input
          onChange={formik.handleChange}
          value={formik.values.channel}
          type="text"
          name="channel"
          id="channel"
          onBlur={formik.handleBlur}
        />
        {formik.touched.channel && formik.errors.channel ? (
          <div style={{ color: "red" }}>{formik.errors.channel}</div>
        ) : null}

        <button name="submit" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default YoutubeForm;
