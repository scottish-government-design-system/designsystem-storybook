import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';
import { CategoryItemArgs } from '../../components/category-item/category-item.stories';

// @ts-expect-error no type defs
import ComponentTemplate from './browse.njk';

export type BrowseBlockArgs = {
    background?: string
    removeBottomPadding?: boolean
    contentLayout: string
    items: CategoryItemArgs[]
};

const meta: Meta<BrowseBlockArgs> = {
    title: 'Page blocks/Browse',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        removeBottomPadding: false,
        contentLayout: 'card',
        items: [
            {
                content: 'Access to and protection of the countryside and managing wildlife on your land',
                heading: 'Environment and countryside',
                href: '#foo'
            },
            {
                content: 'Find out about Environmental Impact Assessments (EIAs) in your area',
                heading: 'Environmental Impact Assessment (EIA)',
                href: '#bar'
            },
            {
                content: 'Guidance for farming, animal health, agriculture and food businesses in Scotland',
                heading: 'Farming and rural issues',
                href: '#baz'
            },
            {
                content: 'Find advice and support to help your business become more environmentally aware and efficient',
                heading: 'Waste and energy',
                href: '#qux'
            },
            {
                content: 'Includes information on safety at sea and managing crew',
                heading: 'Marine and fisheries',
                href: '#quux'
            }
        ]
    },
    argTypes: {
        background: SGDSArgTypes.backgroundColour(),
        removeBottomPadding: SGDSArgTypes.boolean(),
        contentLayout: {
            description: 'Show sample content',
            options: ['imagecard', 'card', 'grid', 'list'],
            control: { type: 'select' },
            type: 'string'
        }
    },
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;
type Story = StoryObj<BrowseBlockArgs>;

export const Default: Story = {};
