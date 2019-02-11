import React, { useState } from 'react';
import ReCaptcha from 'react-google-recaptcha';

import Input from '../../../components/Input/Input';
import TextArea from '../../../components/TextArea/TextArea';
import { GreenButton } from '../../../components/Button/Button';

import './ContactBlock.scss';

const ContactBlock = () => {
  const [disabled, setDisabled] = useState(true);
  const [recaptcha, setRecaptcha] = useState(null);

  const handleChange = value => {
    setRecaptcha(value);
    setDisabled(false);
  };

  const handleExpired = () => {
    setRecaptcha(null);
    setDisabled(true);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log('Recaptcha', recaptcha);

    const data = {
      email: 'philip.hagger@gmail.com',
      name: 'Phil Hagger',
      message: 'This is a test message'
    };

    const response = await fetch('https://theoasis.church/email.php', {
      method: 'POST',
      mode: 'no-cors',
      body: 'email=philip.hagger@gmail.com&name=Phil Hagger&message=This is a test message'
    });

    if (response.ok) {
      const email = await response.json();
      console.log(email);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="#" className="form" onSubmit={handleSubmit}>
              <div className="u-margin-bottom-medium">
                <h3 className="heading-secondary">Get in touch</h3>
              </div>

              <Input type="text" id="name" name="name" label="Full Name" required />

              <Input type="email" id="email" name="email" label="Email Address" required />

              <TextArea id="message" name="message" label="Message" required />

              <ReCaptcha sitekey="6Lfk3oUUAAAAAOxRML-Tcg5Y79Nyeeidj6OJ3Ha7" name="recaptcha" onExpired={handleExpired} onChange={handleChange} />

              <div type="submit" className="btn-group u-margin-top-medium">
                <GreenButton disabled={disabled}>Send message &rarr;</GreenButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// class ContactBlock extends React.Component {
//   state = {
//     value: null,
//     disabled: true
//   };

//   componentDidMount() {}

//   handleChange = value => {
//     console.log('Captcha value:', value);
//     this.setState({ value, disabled: false });
//   };

//   handleExpired = () => {
//     this.setState({ value: null, disabled: true });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     console.log('Recaptcha', this.state.value);
//   };

//   render() {
//     return (
//       <section className="contact" id="contact">
//         <div className="row">
//           <div className="book">
//             <div className="book__form">
//               <form action="#" className="form" onSubmit={this.handleSubmit}>
//                 <div className="u-margin-bottom-medium">
//                   <h3 className="heading-secondary">Get in touch</h3>
//                 </div>

//                 <Input type="text" id="name" name="name" label="Full Name" required />

//                 <Input type="email" id="email" name="email" label="Email Address" required />

//                 <TextArea id="message" name="message" label="Message" required />

//                 <ReCaptcha
//                   sitekey="6Lfk3oUUAAAAAOxRML-Tcg5Y79Nyeeidj6OJ3Ha7"
//                   name="recaptcha"
//                   onExpired={this.handleExpired}
//                   onChange={this.handleChange}
//                   ref={this._reCaptchaRef}
//                 />
//                 <p>{this.state.recaptcha}</p>

//                 <div type="submit" className="btn-group u-margin-top-medium">
//                   <GreenButton disabled={this.state.disabled}>Send message &rarr;</GreenButton>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

export default ContactBlock;
