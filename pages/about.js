import { Component } from 'react'

import CV from '../components/CV'
import SkillsBar from '../components/SkillsBar'
import Layout from '../components/Layout'
import Link from 'next/link'

class About extends Component {
  render () {
    return <Layout>
      <div className="c-container">
      <SkillsBar />
        <div className="c-about">
          <h2 className="c-main__head">About Me</h2>
          <hr className="c-main__head-line" />
      
          <div className="c-about__hero">
            <img src="/static/profile.png" className="c-about__hero--image" />
            <hr />
          </div>

          <div className="c-about__intro">
            Hi, my name is David Walsh! I am from Leeds (UK), and I have a passion for Web Development, focussing on creating clean, responsive web designs! I am confident hand coding HTML5, CSS3, JavaScript, and Ruby on Rails. My most recent project has been to create a RoR blogger application. I also have experience using Version Control (GIT), Foundation, Bootstrap, and Photoshop. More recently I am working on React projects.<br />
            Click<Link href=""><a>here</a></Link>for an up to date copy of my CV, or you can view a brief overview below
          </div>

          <CV />
         
        </div>
      </div>
    </Layout>
  }
}

export default About