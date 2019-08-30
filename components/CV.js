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
          Learning the process of building apps through theoretical, practical and commercial experience. HTML, CSS, JavaScript, Ruby on Rails - PostgreSQL, Gems, FactoryBot, RSpec, MVC, RESTful APIs
        </li>
      </ul>

      <ul className="c-about__cv--item">
        <li className="c-about__cv--item-company">
          Audio Images
        </li>
        <li className="c-about__cv--item-title">
          Junior Front-end Web Developer
        </li>
        <li className="c-about__cv--item-description">
          Creating and editing website content through Magento2. HTML5, CSS3, basic JavaScript, Adobe Photoshop CS6, Final Cut Pro. Managing website layout through static blocks, fixed attributes, and detailed categories. Creating aesthetically and pleasing design to target a bigger audience.
        </li>
      </ul>

      <ul className="c-about__cv--item">
        <li className="c-about__cv--item-company">
          Uni Tracker/Leodis Financial
        </li>
        <li className="c-about__cv--item-title">
          Content Manager
        </li>
        <li className="c-about__cv--item-description">
          Zoho CRM and Books. Deluge Script, data integration, web hooks, bespoke   workflow rules, wireframe.
          The same set up was executed for Audio Images also, a sister company of Leodis Financial. Magento > Zoho CRM Integration, Magenest.
        </li>
      </ul>

      <ul className="c-about__cv--item">
        <li className="c-about__cv--item-company">
          LDC Decorating Contractors Ltd
        </li>
        <li className="c-about__cv--item-title">
          Front-end Web Developer
        </li>
        <li className="c-about__cv--item-description">
          Creating a new bespoke website editing old and new images in Photoshop for a better user experience. HTML5, CSS3, JavaScript/jQuery, Bootstrap plugins, FTP.
        </li>
      </ul>
    </div>
  }
}

export default CV