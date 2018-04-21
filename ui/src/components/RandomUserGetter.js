import React from 'react';
import { Formik, Form, Field } from 'formik';
import { getRandomUser } from '../modules/actions';

class RandomUserGetter extends React.Component {

  render() {
    return <Formik
      onSubmit={(_values, { setSubmitting }) => {
        getRandomUser().then((result) => {
          setSubmitting(false);
          this.props.after(result);
        })
      }}
      render={({isSubmitting}) => 
         <Form>
          <div className="field">
            <button type="submit" className="ui fluid large teal submit button"
              disabled={isSubmitting}>Spin</button>
          </div>
        </Form>
      }
    />
  }
}


export default RandomUserGetter;