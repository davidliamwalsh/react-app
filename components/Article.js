import { Component } from 'react'

class Article extends Component {
  render () {
    return <ul class="c-article"> 
      <li class="c-article__title">
        title
      </li>
      <hr class="c-main__head-line" />
      <li class="c-article__body">
        body
      </li>
      <li class="c-article__date">
        Posted on 
      </li>
    </ul>
  }
}

export default Article