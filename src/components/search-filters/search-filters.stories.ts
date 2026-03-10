import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './search-filters.njk';

export type SearchFiltersArgs = {

};

const meta: Meta<SearchFiltersArgs> = {
    title: 'Components/Search results/Filters',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {

    },
    argTypes: {

    }
};

export default meta;
type Story = StoryObj<SearchFiltersArgs>;

export const Default: Story = {

};
