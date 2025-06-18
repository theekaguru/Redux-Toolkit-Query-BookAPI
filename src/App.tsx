import { Book } from './components/Book'
import'./App.scss'
import { Provider } from 'react-redux'
import { store } from './app/store'


function App() {
  
  return (
    <>
    <Provider store={store}>
      
        <Book/>
      
    </Provider>

    </>
  )
}

export default App
