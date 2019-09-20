import Comment from '../../components/Comment'

describe('<Comment />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Comment />
    )

    expect(component).toMatchSnapshot()
  })
}) 