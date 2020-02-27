import { addDecorator } from '@storybook/react';
import GlobalStyle from '../src/styles/global'

addDecorator(s => <><GlobalStyle />{s()}</>);
