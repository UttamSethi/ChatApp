import axios from 'axios';
import { UserContextProvider } from './UserContext.jsx';
import Routes from './Routes.jsx';

function App() {
  axios.defaults.baseURL = 'http://localhost:4000';  // Correct backend URL
  axios.defaults.withCredentials = true;

  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App;
