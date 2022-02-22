import AuthLayout from './pages/AuthLayout'

function App() {
  return (
    <div className="App">
      <AuthLayout
        paddingRight={[ '0rem' , '5rem' ,'7rem' , '10rem', '20rem']}
        justifyContent={['center','flex-end', 'flex-end', 'flex-end' ,'flex-end']}
      />
    </div>
  );
}

export default App;
