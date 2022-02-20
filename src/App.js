import AuthLayout from './pages/AuthLayout'
import Form from './Components/form-components/Form';
import H1 from './Components/typography/H1'
import FormControl from './Components/form-components/FormControl';
import Icon from './Components/Icon'


function App() {

  return (
    <div className="App">
      <AuthLayout>
        <Form>
          <H1>Sign Up</H1>
          <FormControl
            m={4}
          >
            <Icon
              fontIcon="fa-solid fa-at"
              fontSize={9}
              
            />
            FormControl
          </FormControl>
        </Form>
      </AuthLayout>  
    </div>
  );
}

export default App;
