import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import viteConfig from '../vite.config';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  viteFinal(config) {
    return mergeConfig(config, viteConfig);
  },
};
export default config;