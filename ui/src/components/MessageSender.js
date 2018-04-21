import React from 'react';
import { Formik, Form, Field } from 'formik';
import { postMessage } from '../modules/actions';
import './MessageSender.css';

const MessageSender = ({ user, ...props }) =>
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
            postMessage(user, values.message).then(() => {
                setSubmitting(false)
                props.after()
            })
        }}
        render={({ errors, isSubmitting }) =>
            <Form>
                <h2>Say a nice thing to...</h2>
                <div className="ui card centered">
                    {
                        user.photo && <div className="image">
                            <img src={user.photo} />
                        </div>
                    }
                    <div className="content">
                        <div className="header">{user.name}</div>
                    </div>
                </div>
                <div className={`field ${errors.message ? 'error' : ''}`}>
                    <Field name="message" placeholder="Write your message"/>
                </div>
                <div className="field">
                    <button
                        type="submit"
                        className={`ui fluid large red submit button ${isSubmitting ? 'loading' : ''}`}
                        disabled={isSubmitting}
                    >
                        <i className="heart icon" />
                        Submit a compliment
                </button>
                </div>
            </Form>
        }
    />

export default MessageSender;