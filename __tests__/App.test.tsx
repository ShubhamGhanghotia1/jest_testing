import 'react-native';
import React from 'react';
import App from '../App';
import { it } from '@jest/globals';
import renderer from 'react-test-renderer';

describe('App Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains a Text element', () => {
    const tree = renderer.create(<App />).toJSON();
    const textElement = tree?.children?.find(
      (node: any) => node.type === 'Text'
    );
    expect(textElement).toBeTruthy();
  });
});
