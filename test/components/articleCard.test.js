import ArticleCard from '../../components/ArticleCard'

describe('<ArticleCard />', () => {
  it('it renders correctly', () => {
    const article = {
      id: '1',
      title: 'This is my article',
      body: 'This is the body of my article',
      created_at: new Date(Date.UTC(96, 1, 2, 3, 4, 5))
    }

    const component = shallow(
      <ArticleCard article={article} />
    )

    expect(component).toMatchSnapshot()
  })
}) 