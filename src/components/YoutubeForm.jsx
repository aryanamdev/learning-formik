import React from "react";
import { Formik, Field, ErrorMessage, Form, FieldArray } from "formik";
import * as Yup from "yup";

const YoutubeForm = () => {
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
    phNumbers: [""],
  };

  const onSubmit = (values) => {
    console.log("Form submit values", values);
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

            <div className="form-control">
              <label htmlFor="phNumbers">List of Phone Numbers</label>
              <FieldArray type="text" name="phNumbers" id="secondaryPh">
                {(props) => {
                  const { push, remove, form } = props;
                  const { values } = form;
                  const { phNumbers } = values;

                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => {
                        return (
                          <div key={index}>
                            <Field name={`phNumbers[${phNumber}]`} />
                            {index > 0 && (
                              <button
                                onClick={() => {
                                  remove(index);
                                }}
                                type="button"
                              >
                                -
                              </button>
                            )}
                            <button
                              onClick={() => {
                                push(index);
                              }}
                              type="button"
                            >
                              +
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  );
                }}
              </FieldArray>
              <ErrorMessage className="error" name="twitter" />
            </div>

            <button name="submit" type="submit" disabled={!formik.isValid}>
              submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default YoutubeForm;
