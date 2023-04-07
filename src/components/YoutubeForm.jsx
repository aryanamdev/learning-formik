import React, { useState } from "react";
import { Formik, Field, ErrorMessage, Form, FieldArray } from "formik";
import * as Yup from "yup";

const YoutubeForm = () => {
  const [formValues, setFormValues] = useState(null);

  const initialValues = {
    name: "",
    email: "",
    channel: "",
    comments: "",
    social: {
      facebook: "",
      twitter: "",
    },
    phoneNumbers: ["", ""],
  };

  const savedValues = {
    name: "Aryan Namdev",
    email: "aryanamdev08@gmail.com",
    channel: "Mr Beast",
    comments: "ofjajdf;lajd",
    social: {
      facebook: "a;dlkjflakjd",
      twitter: "akjdf;lfj;",
    },
    phoneNumbers: ["akldflk", "ja;lsdfj"],
  };

  const onSubmit = (values, onSubmitProps) => {
    console.log("Form submit values", values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  // Schema Validations with yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email format").required("Required"),
    channel: Yup.string().required("Required"),
    comments: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(formik) => {
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" id="name" />
              <ErrorMessage className="error" name="name" />
            </div>

            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" id="email" />
              <ErrorMessage className="error" name="email" />
            </div>

            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field type="text" name="channel" id="channel" />
              <ErrorMessage className="error" name="channel" />
            </div>

            <div className="form-control">
              <label htmlFor="comments">Comments</label>
              <Field as="textarea" type="text" name="comments" id="comments" />
              <ErrorMessage className="error" name="comments" />
            </div>

            <div className="form-control">
              <label htmlFor="facebook">Facebook Profile</label>
              <Field type="text" name="social.facebook" id="facebook" />
              <ErrorMessage className="error" name="facebook" />
            </div>

            <div className="form-control">
              <label htmlFor="twitter">Twitter Profile</label>
              <Field type="text" name="social.twitter" id="twitter" />
              <ErrorMessage className="error" name="twitter" />
            </div>

            <div className="form-control">
              <label htmlFor="primaryPh">Primary Phone Number</label>
              <Field type="text" name="phoneNumbers[0]" id="primaryPh" />
              <ErrorMessage className="error" name="twitter" />
            </div>

            <div className="form-control">
              <label htmlFor="secondaryPh">Secondary Phone Number</label>
              <Field type="text" name="phoneNumbers[1]" id="secondaryPh" />
              <ErrorMessage className="error" name="twitter" />
            </div>

            <button type="reset">Reset</button>

            <button
              onClick={() => {
                setFormValues(savedValues);
              }}
              type="button"
            >
              Load saved Data
            </button>

            <button
              name="submit"
              type="submit"
              disabled={!formik.isValid && formik.isSubmitting}
            >
              submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default YoutubeForm;
