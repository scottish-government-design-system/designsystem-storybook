import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './image-text.njk';

export type ImageTextBlockArgs = {
    background?: string
    removeBottomPadding?: boolean
    content: string
    image?: 'none' | 'normal' | 'square' | 'svg'
    isVerticalCentred?: boolean
    contentPosition?: 'left' | 'right'
};

const meta: Meta<ImageTextBlockArgs> = {
    title: 'Page blocks/Image text',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        removeBottomPadding: false,
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet purus quam. Vestibulum in erat non urna vulputate mattis ut vel massa.</p><p>Maecenas ullamcorper pellentesque nisl, id ornare urna scelerisque sit amet. Morbi consequat condimentum quam, eget ultrices ex eleifend vel. Vestibulum sagittis tempor felis eget posuere. Etiam quis ultrices augue, et gravida ex. Pellentesque et ullamcorper turpis, a imperdiet enim. Cras sit amet egestas ante. Nulla sed laoreet lorem. Pellentesque non ante nec nibh placerat auctor in sit amet nibh. Vivamus nec dictum ante. Duis odio velit, luctus in lacinia posuere, pulvinar ac tortor. Cras nulla elit, luctus eget pellentesque at, ornare ac sapien. Phasellus aliquam quis lorem at porta.</p>',
        image: 'normal',
        isVerticalCentred: false,
        contentPosition: 'left'
    },
    argTypes: {
        background: SGDSArgTypes.backgroundColour(),
        removeBottomPadding: SGDSArgTypes.boolean(),
        image: SGDSArgTypes.select({
            options: ['none', 'normal', 'square', 'svg']
        }),
        isVerticalCentred: SGDSArgTypes.boolean(),
        contentPosition: SGDSArgTypes.select({
            options: ['left', 'right']
        })
    },
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;
type Story = StoryObj<ImageTextBlockArgs>;

export const Default: Story = {};

export const ContentOnRight: Story = {
    args: {
        contentPosition: 'right'
    }
};