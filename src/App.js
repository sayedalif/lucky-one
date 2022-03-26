import './App.css';
import Question from './components/Question/Question';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <h1 className="heading">diet store</h1>
      <Shop></Shop>
      <Question></Question>
    </div>
  );
}

export default App;
