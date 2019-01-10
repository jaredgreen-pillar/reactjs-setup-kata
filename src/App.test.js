import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has a button', () => {
  const appComponent = mount(<App />);

  const button = appComponent.find('button');

  expect(button.text()).toEqual('Submit');
});

it('has a button', () => {
  const appComponent = mount(<App />);
  const textarea = appComponent.find('textarea');
  expect(textarea.text()).toEqual("");
});
