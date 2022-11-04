import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import Skills from './components/Skills';
import Github from './components/Github';
import Stat from './components/Stat';
import Contact from './components/Contacts';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Section />
      <Skills />
      <Project/>
      <Github />
      <Stat />
      <Contact/>
    </div>
  );
}

export default App;
