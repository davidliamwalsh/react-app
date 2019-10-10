import FullArticle from '../../components/FullArticle'

describe('<FullArticle />', () => {
  it('it renders correctly', () => {
    const article = {
      slug: '1',
      title: 'Article Title',
      body: 'Article body',
      created_at: new Date(Date.UTC(97, 1, 2, 3, 4, 5))
    }
    const component = shallow(
      <FullArticle article={article} />
    )

    expect(component).toMatchSnapshot()
  })
}) 