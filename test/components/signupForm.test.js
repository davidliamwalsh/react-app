import SignupForm from '../../components/SignupForm'

describe('<SignupForm />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <SignupForm />
    )

    expect(component).toMatchSnapshot()
  })
}) 