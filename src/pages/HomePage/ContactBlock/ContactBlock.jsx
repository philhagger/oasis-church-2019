import React from 'react';

import Input from '../../../components/Input/Input';

import './ContactBlock.scss';

const ContactBlock = () => (
  <section className="contact">
    <div className="row">
      <div className="book">
        <div className="book__form">
          <form action="#" className="form">
            <div className="u-margin-bottom-medium">
              <h3 className="heading-secondary">Get in touch</h3>
            </div>
            <Input type="text" id="name" label="Full Name" required />
            <Input type="email" id="email" label="Email Address" required />
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default ContactBlock;
