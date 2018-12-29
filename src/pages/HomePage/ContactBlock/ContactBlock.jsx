import React from 'react';

import Input from '../../../components/Input/Input';
import TextArea from '../../../components/TextArea/TextArea';
import { GreenButton } from '../../../components/Button/Button';

import './ContactBlock.scss';

const ContactBlock = () => (
  <section className="contact" id="contact">
    <div className="row">
      <div className="book">
        <div className="book__form">
          <form action="#" className="form">
            <div className="u-margin-bottom-medium">
              <h3 className="heading-secondary">Get in touch</h3>
            </div>

            <Input type="text" id="name" label="Full Name" required />

            <Input type="email" id="email" label="Email Address" required />

            <TextArea id="message" label="Message" required />

            <div className="btn-group u-margin-top-medium">
              <GreenButton>Send message &rarr;</GreenButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default ContactBlock;
