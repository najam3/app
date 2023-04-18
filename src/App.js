import './App.css';
import Footer from './Components/Footer/Footer';
import Routing from './Components/router/Routing';
import Store from './Components/store/Store';
import WebNavigation from './Components/WebNavigation';

function App() {
  return (
    <Store>
       <WebNavigation />
          <div>
         <Routing />
         </div>
         <Footer />
    </Store>
  );
}

export default App;
