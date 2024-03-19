import "./App.css";
// import Card from "./practice-components/Card";
// import MyButton  from './practice-components/MyButton';
// import Header from './practice-components/Header';
// import Footer from './practice-components/Footer'
// import Food from './practice-components/Food';
// import Card from './practice-components/Card';
import ExternalStyles from "./add-css/ExternalStyles";
import InternalStyles from "./add-css/InternalStyles";
import ModuleStyles from "./add-css/ModuleStyles";

const user = {
  name: "Anusha Dammalapati",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: "90",
};

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to my app</h1>
      <h3>name: {user.name}</h3>
      <img className='avatar ' src={user.imageUrl} style={{height: user.imageSize, width:user.imageSize}} alt={'image of' + user.name}/> */}
      {/* <Header/>
      <Food/>
      <Footer/> */}
      {/* <MyButton/> */}
      {/* <Card /> */}
      <ExternalStyles/>
      <InternalStyles/>
      <ModuleStyles/>
    </div>
  );
}

export default App;
