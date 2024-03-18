
import './App.css';
// import MyButton  from './practice-components/MyButton';

const user = {
  name: 'Anusha Dammalapati',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: '90'
}



function App() {
  return (
    <div className="App">
      <h1>Welcome to my app</h1>
      <h3>name: {user.name}</h3>
      <img className='avatar ' src={user.imageUrl} style={{height: user.imageSize, width:user.imageSize}} alt={'image of' + user.name}/>
      {/* <MyButton/> */}
    </div>
  );
}

export default App;
