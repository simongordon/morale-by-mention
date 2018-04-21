import React from 'react';
import { Formik, Form } from 'formik';
import { getRandomUser } from '../modules/actions';

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
          status && status.state && status.state === "Error" && <div className="ui form error">
            <div className="ui error message">
              <div className="header">An error has occurred</div>
              <p>Please try again later.</p>
            </div>
          </div>
        }
      </Form>
    }
  />


export default RandomUserGetter;