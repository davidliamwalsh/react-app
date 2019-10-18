import { Component } from 'react'

class CV extends Component {
  render () {
    return <div className="c-about__cv">
      <ul className="c-about__cv--item">
        <li className="c-about__cv--item-company">
          ProCoders
        </li>
        <li className="c-about__cv--item-title">
          Web Developer
        </li>
        <li className="c-about__cv--item-description">
        Creating gaming apps powered by JavaScript<br />
        Ruby App - http basic auth login admin panel; API setup with Mailchimp, Postmark, GraphQL and Auth0; Capybara test suite; PostgreSQL<br />
        Front-end – React, NextJS, NodeJS, JSON, Jest and Enzyme 
        </li>
      </ul>

      <ul className="c-about__cv--item">
        <li className="c-about__cv--item-company">
          Audio Images
        </li>
        <li className="c-about__cv--item-title">
          Junior Front-end Developer
        </li>
        <li className="c-about__cv--item-description">
        Creating and editing website content through Magento 1.9. HTML5, CSS3, basic JavaScript, Adobe Photoshop CS6, Final Cut Pro.<br />
        Zoho CRM and Books: Deluge Script, data integration, web hooks, workflow rules, CRM wire framing. Integrating Magento 1.9 database > Zoho database CRM.
        </li>
      </ul>

      <ul className="c-about__cv--item">
        <li className="c-about__cv--item-company">
          LDC Decorating Contractors
        </li>
        <li className="c-about__cv--item-title">
          Front-end Developer
        </li>
        <li className="c-about__cv--item-description">
          Creating a new bespoke website editing old and new images in Photoshop for better UX. HTML5, CSS3, JavaScript/jQuery, Bootstrap plugins, FTP.
        </li>
      </ul>
    </div>
  }
}

export default CV