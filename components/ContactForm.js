import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import FlashMessage from 'react-flash-message'

class ContactForm extends Component {
  constructor (props) {
    super(props)
    this.contactForm = this.contactForm.bind(this)

    this.state = {
      formSubmitted: false,
      formFailed: false
    }
  }

  async contactForm (event) {
    this.setState({
      formSubmitted: false,
      formFailed: false
    })

    event.preventDefault()
    const form = event.target
    const formData = {
      From: 'coding@davidwalsh.co.uk',
      To: 'coding@davidwalsh.co.uk',
      ReplyTo: form.email.value,
      HtmlBody: form.body.value,
      Name: form.name.value
    }

    const response = await fetch('/contact-me',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

    if (response.status === 200) {
      this.setState({ formSubmitted: true })
      form.reset()
    } else {
      this.setState({ formFailed: true })
    }
  }

  render () {
    return <div className="c-contact__form--container">
      { this.state.formSubmitted
        ? <FlashMessage duration={3000}>
          {<div className='c-contact-page__submitted'>Thanks for your message, I'll get back to you soon</div> }
        </FlashMessage> : ''}
      { this.state.formFailed
        ? <FlashMessage duration={3000}>
          {<div className='c-contact-page__failed'>Whoops... something went wrong, please try again</div> }
        </FlashMessage> : '' }
      <form onSubmit={this.contactForm}>
        <div className="c-contact__form">
          <label className="c-contact__form__name--label" htmlFor="message_name">Name</label>
          <input className="c-contact__form__name--input" placeholder="Your Name" type="text" name="name" id="message_name" />
          <label className="c-contact__form__email--label" htmlFor="message_email">Email</label>
          <input className="c-contact__form__email--input" placeholder="Your e-mail address" type="text" name="email" id="message_email" />
          <label className="c-contact__form__body--label" htmlFor="message_body">Body</label>
          <textarea rows="10" className="c-contact__form__body--input" placeholder="Please type your message" name="body" id="message_body"></textarea>
        </div>
        <input type="submit" className="o-submit__btn c-contact__form__submit" />
      </form>
    </div>
  }
}

export default ContactForm