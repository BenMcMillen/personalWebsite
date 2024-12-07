import { BrowserRouter } from 'react-router-dom';
import Router from './router'

// App code which wraps around the wrapper
function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App