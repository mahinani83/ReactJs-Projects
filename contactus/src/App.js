
import './App.css';
import Nav from './navigation/Nav'
import ContHeader from './contactheader/ContHeader';

import Contactform from './ContactdForm/Contactfom';
function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <ContHeader />
        <Contactform />
      </main>
      
    </div>
  );
}

export default App;
