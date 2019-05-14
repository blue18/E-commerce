import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const Account = () => {
  return(
    <Formik
      initialValues={{ firstname: '', lastname: '', email: '', password: '', phonenumber: '' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
      }}
    >
      {(props) => (
        <Form>
          <Field type="text" name="firstname" />
          <ErrorMessage name="firstname" component="div" />
          <Field type="text" name="lastname" />
          <ErrorMessage name="lastname" component="div" />
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <Field type="tel" name="phonenumber" />
          <ErrorMessage name="phonenumber" component="div" />
          <button type="submit" disabled={props.isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
  );

}

export default Account;
