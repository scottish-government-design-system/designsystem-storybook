import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './header.njk';

export type HeaderArgs = {
    background?: string
    hasBottomPadding?: boolean
    heading: string
    headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    position: 'left' | 'cemter' | 'right'
};

const meta: Meta<HeaderArgs> = {
    title: 'Page blocks/Header',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        hasBottomPadding: true,
        heading: 'Header'
    },
    argTypes: {
        headingLevel: SGDSArgTypes.headingLevel(),
        background: {
            description: 'Background colour',
            options: ['none','ds_pb--background-secondary', 'ds_pb--background-tertiary', 'ds_pb__theme--background-secondary'],
            control: { type: 'select' },
            type: 'string'
        },
        position: {
            description: 'Position of text',
            options: ['left', 'center', 'right'],
            control: { type: 'select' },
            type: 'string'
        }
    },
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;
type Story = StoryObj<HeaderArgs>;

export const Default: Story = {};