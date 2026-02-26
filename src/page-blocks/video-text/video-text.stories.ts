import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './video-text.njk';

export type VideoTextArgs = {
    background?: string
    hasBottomPadding?: boolean
    isVerticallyCentred?: boolean
    imagePosition?: 'right' | 'left'
};

const meta: Meta<VideoTextArgs> = {
    title: 'Page blocks/Video and text',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        hasBottomPadding: true,
        imagePosition: 'right'
    },
    argTypes: {
        background: {
            description: 'Background colour',
            options: ['none','ds_pb--background-secondary', 'ds_pb--background-tertiary', 'ds_pb__theme--background-secondary'],
            control: { type: 'select' },
            type: 'string'
        },
        isVerticallyCentred: SGDSArgTypes.boolean(),
        imagePosition: {
            description: 'Background colour',
            options: ['right','left'],
            control: { type: 'select' },
            type: 'string'
        },
    },
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;
type Story = StoryObj<VideoTextArgs>;

export const Default: Story = {};