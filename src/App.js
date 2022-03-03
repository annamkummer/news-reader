import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ArticleView from './components/ArticleView'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Home />}/>
        <Route path="/article/*" element={<ArticleView />}/>
      </Routes>
    </div>
  );
}

export default App;
