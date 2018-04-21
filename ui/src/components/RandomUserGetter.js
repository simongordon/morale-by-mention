import React from 'react';
import { Formik, Form } from 'formik';
import { getRandomUser } from '../modules/actions';
import ErrorMessage from './ErrorMessage';

const RandomUserGetter = (props) =>
  <Formik
    onSubmit={(_values, { setSubmitting, setStatus }) => {
      getRandomUser().then((result) => {
        setSubmitting(false);
        props.after(result);
        setStatus({ state: "Success" });
      }, err => {
        setSubmitting(false);
        setStatus({ state: "Error" });
      })
    }}
    render={({ isSubmitting, status }) =>
      <Form>
        <div className="field">
          <button type="submit" className={`ui fluid large teal submit button ${isSubmitting ? 'loading' : ''}`}
            disabled={isSubmitting}>Spin</button>
        </div>
        {
          status && status.state && status.state === "Error" && <ErrorMessage message="Please try again later." />
        }
      </Form>
    }
  />


export default RandomUserGetter;