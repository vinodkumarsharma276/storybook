import '@storybook/addon-storysource/register';
import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import '@storybook/addon-events/register';
import '@storybook/addon-notes/register';
import '@storybook/addon-resources/register';
import '@storybook/addon-options/register';
import '@storybook/addon-knobs/register';
import '@storybook/addon-backgrounds/register';
import '@storybook/addon-a11y/register';
import '@storybook/addon-jest/register';
import '@storybook/addon-viewport/register';

import addHeadWarning from './head-warning';

addHeadWarning('Manager head not loaded', 'manager-head-not-loaded');
