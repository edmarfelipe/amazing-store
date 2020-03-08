import React from "react";
import { addDecorator } from "@storybook/react";
import GlobalStyle from "../src/styles/global";
import centered from '@storybook/addon-centered/react';

addDecorator(centered)
addDecorator(storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
));
