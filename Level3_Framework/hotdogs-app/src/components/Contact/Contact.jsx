import React from "react";
import styles from "./Contact.module.scss";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  comment: Yup.string().required("Required")
});
function Contact() {
  return (
    <section className={styles.contact}>
      <Formik
        initialValues={{ email: "", name: "", comment: "" }}
        validationSchema={ContactSchema}
        onSubmit={(
          values,
          { setSubmitting, resetForm, setErrors, initialValues }
        ) => {
          fetch("https://formula-test-api.herokuapp.com/contact", {
            method: "post",
            body: JSON.stringify(values, null, 2)
          })
            .then(data => {
              setSubmitting(false);
              resetForm(initialValues);
            })
            .catch(ex => setErrors({ submit: ex.message }));
        }}
      >
        {({
          isValid,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit} className={styles.contact_form}>
            <ErrorMessage
              render={msg => <div className={styles.error}>{msg}</div>}
              name="general"
            />
            <div className={styles.contact_form_wrapper}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <Field
                placeholder="name"
                name="name"
                id="name"
                className={styles.name}
              />
              <ErrorMessage
                render={msg => <div className={styles.error}>{msg}</div>}
                name="name"
              />
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <Field
                id="email"
                placeholder="email"
                className={styles.email}
                type="email"
                name="email"
              />
              <ErrorMessage
                render={msg => <div className={styles.error}>{msg}</div>}
                name="email"
              />
              <label htmlFor="comment" className={styles.label}>
                Comment
              </label>
              <textarea
                id="comment"
                placeholder="comment"
                className={styles.comment}
                name="comment"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.comment}
              />
              <ErrorMessage
                render={msg => <div className={styles.error}>{msg}</div>}
                name="comment"
              />
            </div>
            {isSubmitting}
            <button
              type="submit"
              disabled={isSubmitting || !isValid}
              className={styles.btn}
            >
              Send
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
}
/**
 * 
 * На странице Contact должны быть два 'input' "Name" и "Email",  'textarea' "Comment" и кнопка, при клике на которую данные формы отправляются на сервер. Дизайн на усмотрение разработчика.
Данные отправлять POST-запросом на URL https://formula-test-api.herokuapp.com/contact в json-формате:
```
{
  "name": "name",
  "email": "email",
  "comment": "comment",
}
```
 * 
*/
export default Contact;
