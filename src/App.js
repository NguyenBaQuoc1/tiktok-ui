import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import Following from './pages/Following';
import { publicRoutes } from '˜/Routers'

function App() {
  return (
   
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route ,index) => {
            const Pgae = route.component
            return <Route key = {index} path={route.path} element={<Pgae/>} />
          })}

        </Routes>
      </div>
    </Router>
  
  );
}

export default App;
