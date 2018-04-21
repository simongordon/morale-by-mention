import React from 'react';
import { Formik, Form } from 'formik';
import { getRandomUser } from '../modules/actions';

const RandomUserGetter = (props) =>
  <Formik
    onSubmit={(_values, { setSubmitting }) => {
      getRandomUser().then((result) => {
        setSubmitting(false);
        props.after(result);
      })
    }}
    render={({ isSubmitting }) =>
      <Form>
        <div className="field">
          {
            isSubmitting && <p>Here's your spiner, Elliott!</p>
          }
          <button type="submit" className="ui fluid large teal submit button"
            disabled={isSubmitting}>Spin</button>
        </div>
      </Form>
    }
  />



export default RandomUserGetter;