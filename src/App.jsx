import './App.css';
import './reset.css';
import {Home} from './pages/Home/Home.jsx';
import {LogIn} from './pages/LogIn/LogIn.jsx';
import {NewStory} from './pages/NewStory/NewStory.jsx';
import {Profile} from './pages/Profile/Profile.jsx';
import {SignIn} from './pages/SignIn/SignIn.jsx';
import {Stories} from './pages/Stories/Stories.jsx';
import {Story} from './pages/Story/Story.jsx';
import {Traveller} from './pages/Traveller/Traveller.jsx';
import {Travellers} from './pages/Travellers/Travellers.jsx';

export const App = () => {
  return (
    <div className='App'>
      <Home/>
      <Stories/>
      <Travellers/>
      <Traveller/>
      <Profile/>
      <NewStory/>
      <Story/>
      <LogIn/>
      <SignIn/>
    </div>
  )
}