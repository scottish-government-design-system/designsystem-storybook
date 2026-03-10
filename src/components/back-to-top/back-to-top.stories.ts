import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './back-to-top.njk';

export type BackToTopArgs = {
    hasContent?: boolean
    hasFooter?: boolean
    label: string
};

const meta: Meta<BackToTopArgs> = {
    title: 'Components/Back to top',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        hasContent: true,
        label: 'Back to top'
    },
    argTypes: {
        hasContent: SGDSArgTypes.hidden()
    },
    play: () => {
        window.DS.initAll();
    },
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;
type Story = StoryObj<BackToTopArgs>;

export const Default: Story = {};

export const WithFooter: Story = {
    name: 'With footer',
    args: {
        hasFooter: true
    }
};
