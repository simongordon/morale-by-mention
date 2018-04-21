import React from 'react';
import { Formik, Form, Field } from 'formik';
import { postMessage } from '../modules/actions';
import './MessageSender.css';

const MessageSender = ({ message }) =>
  <div className="ui form error">
    <div className="ui error message">
      <div className="header">An error has occurred</div>
      <p>{message}</p>
    </div>
  </div>

export default MessageSender;