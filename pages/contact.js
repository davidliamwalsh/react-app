import { Component } from 'react'

import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import Layout from '../components/Layout'

import '../scss/application.scss'

class Contact extends Component {
  render () {
    return <div>
    { this.props.children }
    <Navbar />
    <div className="c-container">
      <div className="c-contact">
        <h2 className="c-main__head">Contact Me</h2>
        <hr className="c-main__head-line" />
    
        <div className="c-contact__intro">
          Whether you're interested in working with me or just want to say hello, I'd love to hear from you!
          <hr />
        </div>

        <ContactForm />
      </div>
    </div>
    <Layout />
  </div>
  }
}

export default Contact