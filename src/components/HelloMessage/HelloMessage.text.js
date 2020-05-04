import React from 'react';
import {HelloMessage} from '.';
import {render} from '@testing-library/react';

descride('HelloMessage tests', () => {
  it('should render give message', () => {
    const {getByText, debug} = render(<HelloMessage message="World" />);
    getByText(/World/i);
    debug();
  });
})
