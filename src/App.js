import logo from './logo.svg';
import './App.css';
import Joke from './components/joke';
function App() {
  return (
    
    <div className="App">
      <Joke 
        detail="What did the Buddhist say to the hot dog vendor? Make me one with everything." 
        number={1}
        array= {["Fun1", "Fun2", "Fun3", "Fun4"]}
        />
      <Joke 
        title="First" 
        detail="What did the Buddhist say to the hot dog vendor? Make me one with everything." 
        number={2}/>
      <Joke title="Second" detail="What do you call a fake noodle? An impasta." number={3}/>
      <Joke title="Third" detail="Why can't you explain puns to kleptomaniacs? Because they always take things literally."number={4}/>
      <Joke title="Fourth" detail="Why did the hipster burn his mouth? He drank the coffee before it was cool."number={5}/>
      <Joke title="Fifth" detail="Why did the nurse need a red pen? In case she needed to draw blood."number={6}/>
    </div>
  );
}

export default App;
