import { Component } from 'react'
import CV from '../components/CV'
import SkillsBar from '../components/SkillsBar'
import Layout from '../components/Layout'
import Link from 'next/link'

class About extends Component {
  render () {
    return <Layout>
      <div className="c-container">
        <div className="c-about">
          <h2 className="c-main__head">About Me</h2>
          <hr className="c-main__head-line" />
      
          <div className="c-about__hero">
            <img src="/static/profile.png" className="c-about__hero--image" />
            <hr className="c-main__page_divide" />
          </div>

          <div className="c-about__intro">
            Hi, my name is David Walsh! I am from Leeds (UK), and I have a passion for Web Development! I am confident hand coding HTML5, CSS3 (Sass), and JavaScript. I have experience with jQuery, Ruby and RoR, TDD, OOP, using Version Control (GIT), Webpack, Bootstrap, and Photoshop. More recently I am working website security with JWT and Rack middleware.<br />
            Click<Link href="/static/cv.docx"><a>here</a></Link>for an up to date copy of my CV, or you can view a brief overview below
          </div>

          <CV />
          <SkillsBar />
         
        </div>
      </div>
    </Layout>
  }
}

export default About