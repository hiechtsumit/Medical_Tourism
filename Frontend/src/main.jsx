
import ReactDOM from 'react-dom/client'
import { CookiesProvider } from 'react-cookie';
import {LoginState} from './contextApi/LoginState.jsx';
import App from './App.jsx'
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LoginState>
      <CookiesProvider>
          <App />
      </CookiesProvider>
</LoginState>
)
