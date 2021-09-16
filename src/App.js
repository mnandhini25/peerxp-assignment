import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import LayoutContainer from './containers/layout/layout-container';
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div>
    <Provider store={store}>
    <Router>
      <LayoutContainer/>
      </Router>
    </Provider>
    
    </div>
  );
}

export default App;
