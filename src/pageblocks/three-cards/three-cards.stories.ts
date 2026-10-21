import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';
import { CardArgs } from '../../components/card/card.stories';

// @ts-expect-error no type defs
import ComponentTemplate from './three-cards.njk';

export type ThreeCardsArgs = {
    background?: string
    removeBottomPadding?: boolean
    content: string
    items: CardArgs[]
};

const meta: Meta<ThreeCardsArgs> = {
    title: 'Page blocks/Three cards',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        removeBottomPadding: false,
        background: 'secondary',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet purus quam. Vestibulum in erat non urna vulputate mattis ut vel massa.</p><p>Maecenas ullamcorper pellentesque nisl, id ornare urna scelerisque sit amet. Morbi consequat condimentum quam, eget ultrices ex eleifend vel. Vestibulum sagittis tempor felis eget posuere. Etiam quis ultrices augue, et gravida ex. Pellentesque et ullamcorper turpis, a imperdiet enim. Cras sit amet egestas ante. Nulla sed laoreet lorem. Pellentesque non ante nec nibh placerat auctor in sit amet nibh. Vivamus nec dictum ante. Duis odio velit, luctus in lacinia posuere, pulvinar ac tortor. Cras nulla elit, luctus eget pellentesque at, ornare ac sapien. Phasellus aliquam quis lorem at porta.</p>',
        items: [
            {
                content: 'Access to and protection of the countryside and managing wildlife on your land',
                heading: 'Environment and countryside',
                isNav: true,
                image: 'highland-cow'
            },
            {
                content: 'Find out about Environmental Impact Assessments (EIAs) in your area',
                heading: 'Environmental Impact Assessment (EIA)',
                isNav: true,
                image: 'thistles'
            },
            {
                content: 'Guidance for farming, animal health, agriculture and food businesses in Scotland',
                heading: 'Farming and rural issues',
                isNav: true,
                image: 'highland-cow'
            }
        ]
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
type Story = StoryObj<ThreeCardsArgs>;

export const Default: Story = {};