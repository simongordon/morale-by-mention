import React from 'react';
import { Formik, Form, Field } from 'formik';
import { postMessage } from '../modules/actions';
import './MessageSender.css';
import ErrorMessage from './ErrorMessage';

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
        onSubmit={(values, { setSubmitting, setStatus }) => {
            postMessage(user, values.message).then(() => {
                setSubmitting(false)
                props.after()
                setStatus({ state: "Success" });
            }, err => {
                setSubmitting(false);
                setStatus({ state: "Error" });
            })
        }}
        render={({ errors, isSubmitting, status }) =>
            <Form>
                <h2>Say something nice to...</h2>
                <div className="ui card centered">
                    {
                        user.photo && <div className="image">
                            <img src={user.photo} />
                        </div>
                    }
                    <div className="content">
                        <div className="header">{user.name}</div>
                        {
                            user.departments && <div className="meta">
                                <span className="date">{user.departments.join(", ")}</span>
                            </div>
                        }
                    </div>
                </div>
                <div className={`field ${errors.message ? 'error' : ''}`}>
                    <Field name="message" placeholder="Write your message" />
                </div>
                <div className="field">
                    <button
                        type="submit"
                        className={`ui fluid large red submit button ${isSubmitting ? 'loading' : ''}`}
                        disabled={isSubmitting}
                    >
                        <i className="heart icon" />
                        Send a positive message
                </button>
                </div>
                {
                    status && status.state && status.state === "Error" && <ErrorMessage message="Please try again later." />
                }
            </Form>
        }
    />

export default MessageSender;