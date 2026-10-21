import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';
import { CardArgs } from '../../components/card/card.stories';

// @ts-expect-error no type defs
import ComponentTemplate from './text-card.njk';

export type TextCardBlockArgs = {
    background?: string
    removeBottomPadding?: boolean
    content: string
    cardContent: CardArgs
};

const meta: Meta<TextCardBlockArgs> = {
    title: 'Page blocks/Text with card',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        removeBottomPadding: false,
        background: 'secondary',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet purus quam. Vestibulum in erat non urna vulputate mattis ut vel massa.</p><p>Maecenas ullamcorper pellentesque nisl, id ornare urna scelerisque sit amet. Morbi consequat condimentum quam, eget ultrices ex eleifend vel. Vestibulum sagittis tempor felis eget posuere. Etiam quis ultrices augue, et gravida ex. Pellentesque et ullamcorper turpis, a imperdiet enim. Cras sit amet egestas ante. Nulla sed laoreet lorem. Pellentesque non ante nec nibh placerat auctor in sit amet nibh. Vivamus nec dictum ante. Duis odio velit, luctus in lacinia posuere, pulvinar ac tortor. Cras nulla elit, luctus eget pellentesque at, ornare ac sapien. Phasellus aliquam quis lorem at porta.</p>',
        cardContent: {
            content: '<p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>',
            heading: 'About the Design System',
            isNav: true
        }
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
type Story = StoryObj<TextCardBlockArgs>;

export const Default: Story = {};

export const GreyCardOnWhite: Story = {
    args: {
        background: '',
        cardContent: {
            content: '<p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>',
            heading: 'About the Design System',
            isNav: true,
            isGrey: true
        }
    }
};