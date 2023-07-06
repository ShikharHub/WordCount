import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="Travel" about="About Us" />
    <div className='container my-4'>    
      <TextForm heading="Enter Text"/>
    </div>
    </>
  );
}

export default App;
