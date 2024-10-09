import axios from 'axios';
import { UserContextProvider } from './UserContext.jsx';
import Routes from './Routes.jsx';
const dotenv = require('dotenv');

function App() {
  axios.defaults.baseURL = {`${backend_URL}`};  // Correct backend URL
  axios.defaults.withCredentials = true;

  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App;
