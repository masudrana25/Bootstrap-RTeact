import './App.css';
import Header from './compopnents/Button/Button';
import Header2 from './compopnents/Header2/Header2';
import News from './compopnents/News/News';
import TopHeadline from './compopnents/TopHeadline/TopHeadline';



function App() {
  return (
    <div className='container'>
      <h1> Bootstrap used in React</h1>
      <Header></Header>
      <Header2></Header2>
      <TopHeadline></TopHeadline>
      <News></News>
    </div>
  );
}

export default App;
