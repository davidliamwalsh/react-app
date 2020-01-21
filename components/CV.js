import { Component } from 'react'

import ScrollAnimation from 'react-animate-on-scroll';

class CV extends Component {
  render () {
    return <div className="c-about__cv">
      <ScrollAnimation animateOnce={true} animateIn="fadeIn">
        <ul className="c-about__cv--item">
          <li className="c-about__cv--item-company">
            ProCoders
          </li>
          <li className="c-about__cv--item-title">
            Web Developer
          </li>
          <li className="c-about__cv--item-description">
            This was an apprentice program giving me the opportunity to grow as a developer. Working on a stack of React and Ruby I was required to build my own project app, after which I was given the opportunity to gain commercial experience working in an Agile environment.<br />
            RoR, PostgreSQL, GraphQL, Mailchimp, Postmark, API, HTTP, Auth0, Capybara.<br />
            React, Apollo, NextJS, NodeJS, JSON, Jest, Enzyme, HTML, Sass.  
          </li>
        </ul>
      </ScrollAnimation>
        
    
      
      <ScrollAnimation animateOnce={true} animateIn="fadeIn">
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
      </ScrollAnimation>
      
      <ScrollAnimation animateOnce={true} animateIn="fadeIn">
        <ul className="c-about__cv--item">
          <li className="c-about__cv--item-company">
            LDC Decorating Contractors
          </li>
          <li className="c-about__cv--item-title">
            Front-end Developer
          </li>
          <li className="c-about__cv--item-description">
            Creating a new bespoke website editing old and new images in Photoshop for better UX. HTML5, CSS3, JavaScript/jQuery, Bootstrap, FTP.
          </li>
        </ul>
      </ScrollAnimation>
     
      <ScrollAnimation animateOnce={true} animateIn="fadeIn">
        <ul className="c-about__cv--item">
          <li className="c-about__cv--item-company">
            Education
          </li>
          <li className="c-about__cv--item-title">
            Leeds Trinity University
          </li>
          <li className="c-about__cv--item-description">
            Media Single Hons – Digital Communication and Media/Multimedia: 2:1
          </li>
          <li className="c-about__cv--item-title">
            Udemy
          </li>
          <li className="c-about__cv--item-description">
            The Complete JavaScript Course: Build a Real-World Project 
          </li>
          <li className="c-about__cv--item-description">
            The Complete Web Developer Course 2.0
          </li>
        </ul>
      </ScrollAnimation>
    </div>
  }
}

export default CV