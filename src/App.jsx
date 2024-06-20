import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import HocLikeImage from './components/HocLikeImage';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
        <HocLikeImage/>
        </div>
    </div>
  );
}

export default App;
