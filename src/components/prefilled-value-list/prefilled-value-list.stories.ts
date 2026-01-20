import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './prefilled-value-list.njk';

type PrefilledValueListItemArgs = {
    hasEditLink?: boolean
    label: string
    value?: string
}

export type PrefilledValueListArgs = {
    items: PrefilledValueListItemArgs[]
    label: string
};

const meta: Meta<PrefilledValueListArgs> = {
    title: 'Components/Prefilled value list',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        items: [
            {
                hasEditLink: false,
                label: 'Postcode',
                value: 'EH6 6QQ'
            }
        ],
        label: 'Your current answers'
    }
};

export default meta;
type Story = StoryObj<PrefilledValueListArgs>;

export const Default: Story = {};

export const MultipleValues: Story = {
    name: 'Multiple values',
    args: {
        items: [
            {
                hasEditLink: true,
                label: 'Postcode',
                value: 'EH6 6QQ'
            },
            {
                hasEditLink: true,
                label: 'City',
                value: 'Edinburgh'
            },
            {
                hasEditLink: true,
                label: 'Country',
                value: 'United Kingdom'
            }
        ]
    }
}
