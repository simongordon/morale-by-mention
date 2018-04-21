import React from 'react';
import { Formik, Form } from 'formik';
import { getRandomUser } from '../modules/actions';

const RandomUserGetter = (props) =>
  <Formik
    onSubmit={(_values, { setSubmitting }) => {
      getRandomUser().then((result) => {
        console.log(result);
        setSubmitting(false);
        props.after(result);
      })
    }}
    render={({ isSubmitting }) =>
      <Form>
        <div className="field">
          <button type="submit" className={`ui fluid large teal submit button ${isSubmitting ? 'loading' : ''}`}
            disabled={isSubmitting}>Spin</button>
        </div>
      </Form>
    }
  />


export default RandomUserGetter;