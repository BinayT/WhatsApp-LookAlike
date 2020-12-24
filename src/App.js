import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='app'>
      <div className='app__body'>
        <Sidebar />
        <Switch>
          <Route path='/rooms/:roomId'>
            <Chat />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
