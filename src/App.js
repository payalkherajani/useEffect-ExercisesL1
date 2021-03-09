import './App.css';
import Counter from './components/practice/Counter';
import LocalStorage from './components/practice/LocalStorage';
import Wishlist from './components/practice/Wishlist';

function App() {
  return (
    <div className="App">
      <h1>Use effect exercises</h1>
      <h3>Counter</h3>
      <Counter />
      <h3>Local Storage</h3>
      <LocalStorage />
      <h3>My WishList</h3>
      <Wishlist />
    </div>
  );
}

export default App;
