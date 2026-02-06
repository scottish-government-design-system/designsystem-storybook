import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './card-grid.njk';
import { CardArgs } from '../../components/card/card.stories';

export type CardGridArgs = {
   items: CardArgs[]
   hasBackground?: boolean
   isMediumTwoColumns?: boolean
};

const meta: Meta<CardGridArgs> = {
    title: 'Patterns/Card grid',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        hasBackground: true,
        items: [
            {
                content: 'Access to and protection of the countryside and managing wildlife on your land',
                hasMetadata: true,
                heading: 'Environment and countryside',
                isNav: true
            },
            {
                content: 'Find out about Environmental Impact Assessments (EIAs) in your area',
                hasMetadata: true,
                heading: 'Environmental Impact Assessment (EIA)',
                isNav: true
            },
            {
                content: 'Guidance for farming, animal health, agriculture and food businesses in Scotland',
                hasMetadata: true,
                heading: 'Farming and rural issues',
                isNav: true
            },
            {
                content: 'Find advice and support to help your business become more environmentally aware and efficient',
                hasMetadata: true,
                heading: 'Waste and energy',
                isNav: true
            },
            {
                content: 'Includes information on safety at sea and managing crew',
                hasMetadata: true,
                heading: 'Marine and fisheries',
                isNav: true
            }
        ]
    },
    argTypes: {
        isMediumTwoColumns: SGDSArgTypes.boolean()
    },
    parameters: {
        layout: 'fullscreen'
    },
    play: () => {
        window.DS.initAll();
    }
};

export default meta;
type Story = StoryObj<CardGridArgs>;

export const Default: Story = {};

export const NoBackground: Story = {
    name: 'No background',
    args: {
        hasBackground: false
    }
};

export const MediumTwoCols: Story = {
    name: 'Two column grid at medium size',
    args: {
        isMediumTwoColumns: true
    }
};
