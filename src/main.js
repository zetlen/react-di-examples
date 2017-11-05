import React from 'react';
import ReactDOM from 'react-dom';

import { Horse, Bird, Cookie } from './widgets';

import {
  StaticDep,
  makeFactoryDep,
  ConfigurableDep,
  PropDep,
  ChildrenDep
} from './di-examples';

// the component class FactoryDep is created once, at setup time
const FactoryDep = makeFactoryDep(Bird);

function App () {
  return <div className="wrapper">
    
    <h3>React Component Dependency Injection Examples</h3>
    
    <div className="examples">
      
      <StaticDep />
    
      <ConfigurableDep containsA="muffin" />
    
      <FactoryDep />
    
      <PropDep containsA={Horse} />
      <PropDep containsThisParticular={<Cookie blue={true} />} />
    
      <ChildrenDep>
        <Horse.Reverse />
        <Bird />
        <Cookie />
      </ChildrenDep>
      
    </div>
    
  </div>
}

ReactDOM.render(<App />, document.getElementById('root'));