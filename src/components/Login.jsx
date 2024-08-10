import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';

const Login = () => {
  return (
    <div className="container">
      <h2>Login</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values) => {
          try {
            const response = await axios.post('/api/auth/login', values);
            // Handle success
            console.log(response.data);
          } catch (error) {
            // Handle error
            console.error(error);
          }
        }}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" className="form-control" />
            <ErrorMessage name="password" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
