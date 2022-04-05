import logo from './logo.svg'
import './App.css'
import Greet from './components/Greet'
import { Welcome } from './components/Welcome'
import Hello from './components/Hello'
import HelloWithoutJSX from './components/HelloWithoutJSX'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import FragmentDemo from './components/FragmentDemo'
import Tables from './components/Tables'
import PureComp from './components/PureComp'
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo'

function App() {
  return (
    <div className="App">
      <RefsDemo />
      {/* <ParentComp /> */}
      {/* <Tables /> */}
      {/* <FragmentDemo /> */}
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className = {styles.success}>Success</h1>
      <Stylesheet primary = {true} />
      <Inline /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
    </div>
  );
}

export default App;
