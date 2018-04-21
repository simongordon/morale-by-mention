import React from 'react';
import { Formik, Form, Field } from 'formik';
import { postMessage } from '../modules/actions';

const MessageSender = (props) =>
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
            postMessage(props.to.id, values.message).then(() => {
                setSubmitting(false)
                props.after()
            })
        }}
        render={({ errors, isSubmitting }) =>
            <Form>
                <div>
                    <p>ID: {props.to.id}</p>
                    <p>Name: {props.to.name}</p>
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

export default MessageSender;