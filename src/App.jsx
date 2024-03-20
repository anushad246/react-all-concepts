import "./App.css";

// import Card from "./practice-components/Card";
// import MyButton  from './practice-components/MyButton';
// import Header from './practice-components/Header';
// import Footer from './practice-components/Footer'
// import Food from './practice-components/Food';
// import Card from './practice-components/Card';
// import ExternalStyles from "./add-css/ExternalStyles";
// import InternalStyles from "./add-css/InternalStyles";
// import ModuleStyles from "./add-css/ModuleStyles";
// import Student from "./practice-components/Student";
// import UserGreetings from "./practice-components/UserGreetings";
// import List from "./practice-components/List";
import ClickEventButton from "./practice-components/ClickEventButton";

const user = {
  name: "Anusha Dammalapati",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: "90",
};

const employees = [
  {
    id: 1,
    name: "Anusha",
    designation: "UI Developer",
    company: "Aimlytics Pvt Ltd",
  },
  {
    id: 2,
    name: "John",
    designation: "UI Developer",
    company: "Tech Solutions Inc.",
  },
  {
    id: 3,
    name: "Emily",
    designation: "Marketing Specialist",
    company: "Innovative Designs Ltd",
  },
  {
    id: 4,
    name: "Michael",
    designation: "Marketing Specialist",
    company: "Web Dynamics LLC",
  },
  {
    id: 5,
    name: "Sophia",
    designation: "UI Developer",
    company: "Creative Minds Ltd",
  },
  {
    id: 6,
    name: "Jacob",
    designation: "Backend Developer",
    company: "Tech Innovations Inc.",
  },
  {
    id: 7,
    name: "Olivia",
    designation: "UI Developer",
    company: "Innovative Designs Ltd",
  },
  {
    id: 8,
    name: "William",
    designation: "Marketing Specialist",
    company: "Aimlytics Pvt Ltd",
  },
  {
    id: 9,
    name: "Emma",
    designation: "Marketing Specialist",
    company: "Tech Solutions Inc.",
  },
  {
    id: 10,
    name: "Liam",
    designation: "UI Developer",
    company: "Creative Minds Ltd",
  },
  {
    id: 11,
    name: "Ava",
    designation: "UI Developer",
    company: "Innovative Designs Ltd",
  },
  {
    id: 12,
    name: "Noah",
    designation: "Backend Developer",
    company: "Web Dynamics LLC",
  },
  {
    id: 13,
    name: "Isabella",
    designation: "Marketing Specialist",
    company: "Aimlytics Pvt Ltd",
  },
  {
    id: 14,
    name: "James",
    designation: "UI Developer",
    company: "Creative Minds Ltd",
  },
  {
    id: 15,
    name: "Ethan",
    designation: "Backend Developer",
    company: "Tech Innovations Inc.",
  },
];

const uiDeveloprs = employees.filter(
  (uiDev) => uiDev.designation === "UI Developer"
);
const BackendDeveloper = employees.filter(
  (uiDev) => uiDev.designation === "Backend Developer"
);
const marketingSpecialist = employees.filter(
  (uiDev) => uiDev.designation === "Marketing Specialist"
);

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
      {/* <ExternalStyles/>
      <InternalStyles/>
      <ModuleStyles/> */}
      {/* <Student name="Sumanth" age={27} isStudent={true}/>
      <Student name="Balakrishna" age={45} isStudent={false}/>
      <Student name="Vaishnavi" age={26} isStudent={true}/>
      <Student name="Rohan" age={36} isStudent={false}/>
      <Student></Student>
      <Student isStudent={true} age={18}></Student> */}
      {/* <UserGreetings islogedIn={true} name="Anusha Dammalapati"></UserGreetings> */}

      {/* <div> */}
      {/* <List techData={uiDeveloprs} category="UI Team"></List>
      <List techData={BackendDeveloper} category="Backend Team"></List>
      <List
        techData={marketingSpecialist}
        category="Marketing Specialist"
      ></List> */}
      {/* </div> */}

      <ClickEventButton/>
    </div>
  );
}

export default App;
