import axios from 'axios';
import { UserContextProvider } from './UserContext.jsx';
import Routes from './Routes.jsx';

function App() {
  axios.defaults.baseURL = 'https://chatapp-e8vb.onrender.com';  // Correct backend URL This sets the base URL for all Axios requests to http://localhost:4000. This is the URL of the backend server where the API endpoints are located.
  axios.defaults.withCredentials = true;

  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App;
