
import './App.css';
import Heading from './Heading';
import Section from './Section';
import { levelContext, myContext } from './LevelContext';

const myObject = {
  name: 'sam',
  id: '101',
  role: 'developer'
};


function App() {
  return (
    <myContext.Provider>
      <div className="App">
        <Section level={1}>
          <Heading>Heading1</Heading>
          <Heading>Heading1</Heading>
          <Section level={2}>
            <Heading>Heading2</Heading>
            <Heading>Heading2</Heading>
            <Section>
              <Heading>Heading3</Heading>
              <Heading>Heading3</Heading>
              <Section>
                <Heading>Heading4</Heading>
                <Heading>Heading4</Heading>
              </Section>
            </Section>
          </Section>
        </Section>
      </div>
    </myContext.Provider>
  );
}

export default App;
