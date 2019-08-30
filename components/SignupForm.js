import { Component } from 'react'

class SignupForm extends Component {
  render () {
    return <div className="c-header__signup">
      <form action="https://facebook.us20.list-manage.com/subscribe/post?u=add0242531d662945b111ce32&amp;id=fed1dcab66" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate c-header__signup__form" target="_blank" novalidate>
        <div className="mc-field-group c-header__signup__form--field">
          <label for="mce-EMAIL" className="c-header__signup__form--field-label">
            Sign Up
          </label>
          <input type="email" value="" name="EMAIL" className="email c-header__signup__form--field-input" id="mce-EMAIL" placeholder="Your email...." required />
        </div>
        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="o-submit__btn" />
      </form>
    </div>
  }
}

export default SignupForm