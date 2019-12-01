import ContactForm from '../../components/ContactForm'

describe('<ContactForm />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <ContactForm />
    )

    expect(component).toMatchSnapshot()
  })
}) 