import React from 'react';

import { Horse, Bird, Cookie } from './widgets';

function Example({ name, comment, children }) {
 return <div className="card">
   <div className="card-divider">{name}</div>
   <div className="card-section example-children">{children}</div>
   <p className="card-section">{comment}</p>
 </div> 
}

export class StaticDep extends React.Component {
  render() {
   const comment = `I always contain a horse, because I 
    have a direct reference to it in my implementation. See?`;
   return <Example name="Static" comment={comment}>
       <Horse />
     </Example>
  }
}

export function makeFactoryDep(Contained) {
  const comment = `I contain whatever you argued to
    the factory function that defined me...and I always will.`;
  return class extends React.Component {
    render() {
      return <Example name="Factory" comment={comment}>
        <Contained />
      </Example>
    }
  };
}

const knownWidgets = {
  'stallion': Horse,
  'sky rat': Bird,
  'muffin': Cookie
};
export class ConfigurableDep extends React.Component {
  render() {
    const comment = `I have a known list of things I can
     contain. I have a name for each one. You asked for a ${this.props.containsA}
     and here's what I think that is.`;
    const Contained = knownWidgets[this.props.containsA];
    if (!Contained) {
      throw new Error(`Not familiar with that one.`);
    }
    return <Example name="Configurable" comment={comment}>
      <Contained />
    </Example>
  }
}

export class PropDep extends React.Component {
  render() {
    let contents;
    let name = "Prop";
    let comment = `I take my dependency as a prop; either a component (class) or an
       element (instance). You gave me `;
    if (React.isValidElement(this.props.containsThisParticular)) {
      contents = this.props.containsThisParticular;
      name += " (Instance)";
      comment += `an element, so I will include this actual instance.`;
    } else {
      const PassedComponent = this.props.containsA;
      contents = <PassedComponent />;
      name += " (Component)";
      comment += `a component, so I will create an instance and include it.`
    }
    return <Example name={name} comment={comment}>
      {contents}
    </Example>
  }
}

export class ChildrenDep extends React.Component {
  omitBirds(element) {
    return element.type === Bird ? null : element;
  }
  render() {
    const comment = `I use React.Children to manipulate
     the opaque 'children' data structure. I'm allergic to birds, so I will
     omit anything containing one.
    `;
    return <Example name="Children" comment={comment}>
      {React.Children.map(this.props.children, this.omitBirds)}
    </Example>
  }
}