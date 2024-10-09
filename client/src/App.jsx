import axios from 'axios';
import { UserContextProvider } from './UserContext.jsx';
import Routes from './Routes.jsx';
const dotenv = require('dotenv');
dotenv.config();

function App() {
  axios.defaults.baseURL = process.env.Backend_URL;  // Correct backend URL
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App;
