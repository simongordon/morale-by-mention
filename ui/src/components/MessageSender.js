import React from 'react';
import { Formik, Form, Field } from 'formik';
import { postMessage } from '../modules/actions';

class MessageSender extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Formik
                initialValues={{
                    message: ""
                }}
                validate={(values) => {
                    const errors = {};
                    if (!values.message) {
                        errors.message = "Required";
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    postMessage(this.props.to.id, values.message).then(() => {
                        setSubmitting(false)
                    })
                }}
                render={({ errors, isSubmitting }) =>
                    <Form>
                        <div>
                            <p>ID: {this.props.to.id}</p>
                            <p>Name: {this.props.to.name}</p>
                            <Field name="message" />
                            {
                                errors.message && <p>({errors.message})</p>
                            }
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                }
            />
        )
    }
}

export default MessageSender;