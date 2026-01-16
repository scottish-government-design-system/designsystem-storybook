import type { Meta, StoryObj } from '@storybook/html';
import argTypes from '../../../.storybook/sgdsArgTypes';
import { OptionArgs } from '../select/select.stories';

// @ts-expect-error no type defs
import ComponentTemplate from './search-sort.njk';

export type SearchSortArgs = {
    id: string,
    label: string,
    options: OptionArgs[]
};

const meta: Meta<SearchSortArgs> = {
    title: 'Components/Search results/Sort',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        id: 'sort-by',
        label: 'Sort by',
        options: [
            {
                content: 'Most relevant',
                value: 'relevance'
            },
            {
                content: 'Updated (newest)',
                value: 'date'
            },
            {
                content: 'Updated (oldest)',
                value: 'adate'
            }
        ]
    },
    argTypes: {
        id: argTypes.id(),
        label: argTypes.label()
    }
};

export default meta;
type Story = StoryObj<SearchSortArgs>;

export const Default: Story = {

};
