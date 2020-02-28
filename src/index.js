import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import ButtonList from './ButtonList';
import './index.css';

class Container extends Component {
  constructor(props) {
    super(props);

    this.buttonLists = this.props.buttonLists;

    this.match = [];

    this.target = [];

    this.state = {
      countClick: 0,
      hit: 0
    };
  }

  handleClick = (e) => {
    const target = e.target;
    
    this.match.push(target.getAttribute('match'));

    this.target.push(target);
    
    this.setState((state, props) => {
      return {
        countClick: state.countClick + 1
      }
    });
  }

  comparison() {
    const [first, second] = this.match;

    if (first === second) {
      this.addMatching();
      // this.removeFromList();

      this.setState({
        hit: this.state.hit + 1,
        countClick: 0
      });

    } else {
      this.setState({
        countClick: 0
      });
    }
    
    this.match.length = 0;
    this.target.length = 0;
  }

  addMatching() {
    const [firstButton, secondButton] = this.target;
    const result = document.querySelector('.result');
    const div = document.createElement('div');

    firstButton.classList.remove('inList');
    secondButton.classList.remove('inList');

    div.appendChild(firstButton);
    div.appendChild(secondButton);

    result.insertBefore(div, result.firstChild);
  }

  // removeFromList() {
  //   const [firstButton, secondButton] = this.target;
  //   const firstParent = firstButton.parentNode;
  //   const secondParent = secondButton.parentNode;

  //   firstParent.parentNode.removeChild(firstParent);
  //   secondParent.parentNode.removeChild(secondParent);
  // }

  render() {
    console.log(this);

    if (this.state.hit === 5) {
      console.log('GAME OVER');
    }

    if (this.state.countClick === 2) {
      this.comparison();
    }
    
    return (
      <section className="container">
        <h1 className="title">{ this.buttonLists.title }</h1>
        <ButtonList listButtons={ this.buttonLists.leftButtons } onAction={ this.handleClick } />
        <ButtonList listButtons={ this.buttonLists.rightButtons } onAction={ this.handleClick }/>
        <div className="result"></div>
      </section>
    );
  }
}

Container.propTypes = {
  buttonLists: PropTypes.object
};

const testFiles = {
  title: 'Learning is fun',
  leftButtons: [
    {
      id: 'left-1',
      value: 'dog',
      site: 'left',
      match: 'dog'
    },
    {
      id: 'left-2',
      value: 'cat',
      site: 'left',
      match: 'cat'
    },
    {
      id: 'left-3',
      value: 'pig',
      site: 'left',
      match: 'pig'
    },
    {
      id: 'left-4',
      value: 'octopus',
      site: 'left',
      match: 'octopus'
    },
    {
      id: 'left-5',
      value: 'elephant',
      site: 'left',
      match: 'elephant'
    }
  ],

  rightButtons: [
    {
      id: 'right-1',
      value: 'curly tail',
      site: 'right',
      match: 'pig'
    },
    {
      id: 'right-2',
      value: 'delicious',
      site: 'right',
      match: 'octopus'
    },
    {
      id: 'right-3',
      value: 'trunk',
      site: 'right',
      match: 'elephant'
    },
    {
      id: 'right-4',
      value: 'poopy',
      site: 'right',
      match: 'dog'
    },
    {
      id: 'right-5',
      value: 'mew',
      site: 'right',
      match: 'cat'
    }
  ]
}

render(<Container buttonLists={ testFiles }/>, document.querySelector('#root'));
