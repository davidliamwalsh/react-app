import { Component } from 'react'

import ContactForm from '../components/ContactForm'
import Layout from '../components/Layout'

class Contact extends Component {
  render () {
    return <Layout>
      <div className="c-container">
        <div className="c-contact">
          <h2 className="c-main__head">Contact Me</h2>
          <hr className="c-main__head-line" />
      
          <div className="c-contact__intro">
            Whether you're interested in working with me or just want to say hello, I'd love to hear from you!
            <hr className="c-main__page_divide" />
          </div>

          <ContactForm />
        </div>
      </div>
    </Layout>
  }
}

export default Contact