import './App.css';
import AddressManagement from './components/homework/AddressManagement';
import Counter from './components/practice/Counter';
import GetAxios from './components/practice/GetAxios';
import LoadDataAxios from './components/practice/LoadDataAxios';
import LocalStorage from './components/practice/LocalStorage';
import PostData from './components/practice/PostData';
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
      <h3>FROM SERVER!</h3>
      <GetAxios />
      <LoadDataAxios />
      <PostData />
      <AddressManagement />
    </div>
  );
}

export default App;
