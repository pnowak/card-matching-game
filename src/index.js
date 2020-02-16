import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import ButtonList from './ButtonList';
import './index.css';

const Container = ({ buttonLists }) => (
  <section className="container">
    <h1 className="title">{ buttonLists.title }</h1>
    <ButtonList listButtons={ buttonLists.leftButtons }/>
    <ButtonList listButtons={ buttonLists.rightButtons }/>
  </section>
);

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
