import React from 'react';
import { ReCaptcha } from 'react-recaptcha-google';

import Input from '../../../components/Input/Input';
import TextArea from '../../../components/TextArea/TextArea';
import { GreenButton } from '../../../components/Button/Button';

import './ContactBlock.scss';

class ContactBlock extends React.Component {
  componentDidMount() {}
  onLoadCallback = () => {};
  verifyCallback = recaptchaToken => console.log('recaptcha', recaptchaToken);
  render() {
    return (
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

                <ReCaptcha
                  rel={el => {
                    this.contactCaptcha = el;
                  }}
                  size="normal"
                  render="explicit"
                  sitekey="6Lfk3oUUAAAAAOxRML-Tcg5Y79Nyeeidj6OJ3Ha7"
                  onLoadCallback={this.onLoadCallback}
                  verifyCallback={this.verifyCallback}
                />

                <div className="btn-group u-margin-top-medium">
                  <GreenButton>Send message &rarr;</GreenButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

// const ContactBlock = () => (
//   <section className="contact" id="contact">
//     <div className="row">
//       <div className="book">
//         <div className="book__form">
//           <form action="#" className="form">
//             <div className="u-margin-bottom-medium">
//               <h3 className="heading-secondary">Get in touch</h3>
//             </div>

//             <Input type="text" id="name" label="Full Name" required />

//             <Input type="email" id="email" label="Email Address" required />

//             <TextArea id="message" label="Message" required />

//             <div className="btn-group u-margin-top-medium">
//               <GreenButton>Send message &rarr;</GreenButton>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   </section>
// );

export default ContactBlock;
