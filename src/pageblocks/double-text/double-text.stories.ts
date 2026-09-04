import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './double-text.njk';

export type DoubleTextBlockArgs = {
    background?: string
    removeBottomPadding?: boolean
    content: string
    additionalContent?: string
};

const meta: Meta<DoubleTextBlockArgs> = {
    title: 'Page blocks/Double text',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        removeBottomPadding: false,
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet purus quam. Vestibulum in erat non urna vulputate mattis ut vel massa.</p><p>Maecenas ullamcorper pellentesque nisl, id ornare urna scelerisque sit amet. Morbi consequat condimentum quam, eget ultrices ex eleifend vel. Vestibulum sagittis tempor felis eget posuere. Etiam quis ultrices augue, et gravida ex. Pellentesque et ullamcorper turpis, a imperdiet enim. Cras sit amet egestas ante. Nulla sed laoreet lorem. Pellentesque non ante nec nibh placerat auctor in sit amet nibh. Vivamus nec dictum ante. Duis odio velit, luctus in lacinia posuere, pulvinar ac tortor. Cras nulla elit, luctus eget pellentesque at, ornare ac sapien. Phasellus aliquam quis lorem at porta.</p>',
        additionalContent: '<p>Sed volutpat congue nisi, in consequat orci condimentum at.</p><ul><li>Vivamus urna magna, ullamcorper nec posuere venenatis, ornare ut quam.</li><li>Suspendisse at quam nec risus sollicitudin varius sit amet hendrerit metus.</li></ul><p>Suspendisse massa ipsum, dapibus quis massa at, sollicitudin euismod orci. In purus nibh, maximus eget malesuada a, suscipit et libero. Maecenas non nisi ut erat placerat finibus non aliquet sem. </p>'
    },
    argTypes: {
        background: SGDSArgTypes.backgroundColour(),
        removeBottomPadding: SGDSArgTypes.boolean()
    },
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;
type Story = StoryObj<DoubleTextBlockArgs>;

export const Default: Story = {};
