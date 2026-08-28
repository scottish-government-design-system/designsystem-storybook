import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './text.njk';

export type TextBlockArgs = {
    background?: string
    removeBottomPadding?: boolean
    content: string
    position?: 'left' | 'center' | 'right'
    additionalContent?: string
};

const meta: Meta<TextBlockArgs> = {
    title: 'Page blocks/Text',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        removeBottomPadding: false,
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet purus quam. Vestibulum in erat non urna vulputate mattis ut vel massa.</p><p>Maecenas ullamcorper pellentesque nisl, id ornare urna scelerisque sit amet. Morbi consequat condimentum quam, eget ultrices ex eleifend vel. Vestibulum sagittis tempor felis eget posuere. Etiam quis ultrices augue, et gravida ex. Pellentesque et ullamcorper turpis, a imperdiet enim. Cras sit amet egestas ante. Nulla sed laoreet lorem. Pellentesque non ante nec nibh placerat auctor in sit amet nibh. Vivamus nec dictum ante. Duis odio velit, luctus in lacinia posuere, pulvinar ac tortor. Cras nulla elit, luctus eget pellentesque at, ornare ac sapien. Phasellus aliquam quis lorem at porta.</p>',
    },
    argTypes: {
        background: SGDSArgTypes.backgroundColour(),
        removeBottomPadding: SGDSArgTypes.boolean(),
        position: SGDSArgTypes.select({
            options: ['left', 'center', 'right']
        })

    },
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;
type Story = StoryObj<TextBlockArgs>;

export const Default: Story = {};
