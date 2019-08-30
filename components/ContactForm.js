import { Component } from 'react'

class ContactForm extends Component {
  render () {
    return <div className="c-contact__form--container">
      <div className="f-contact-form">
        <label for="message_name">Name</label>
        <input className="f-contact-form__input" placeholder="Your Name" type="text" name="message[name]" id="message_name" />
        <label for="message_email">Email</label>
        <input className="f-contact-form__input" placeholder="Your e-mail address" type="text" name="message[email]" id="message_email" />
        <label for="message_body">Body</label>
        <textarea rows="10" className="f-contact-form__input" placeholder="Please type your message" name="message[body]" id="message_body"></textarea>
      </div>
      <input type="submit" name="commit" value="Send" className="o-submit__btn" data-disable-with="Send" />
    </div>
  }
}

export default ContactForm