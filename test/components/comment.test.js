import Comment from '../../components/Comment'

describe('<Comment />', () => {
  it('it renders correctly', () => {
    const comment = {
      id: '1',
      name: 'David Walsh',
      body: 'This is the comment body',
      created_at: new Date(Date.UTC(97, 1, 2, 3, 4, 5))
    }

    const component = shallow(
      <Comment comment={comment} />
    )

    expect(component).toMatchSnapshot()
  })
}) 