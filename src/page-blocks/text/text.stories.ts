import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './text.njk';

export type TextArgs = {
    background?: string
    hasBottomPadding?: boolean
    position: 'left' | 'cemter' | 'right'
};

const meta: Meta<TextArgs> = {
    title: 'Page blocks/Text',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        hasBottomPadding: true
    },
    argTypes: {
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
type Story = StoryObj<TextArgs>;

export const Default: Story = {};