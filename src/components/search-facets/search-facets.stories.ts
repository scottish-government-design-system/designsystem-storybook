import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './search-facets.njk';

export type SearchFacetsArgs = {

};

const meta: Meta<SearchFacetsArgs> = {
    title: 'Components/Search results/Facets',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {

    },
    argTypes: {

    }
};

export default meta;
type Story = StoryObj<SearchFacetsArgs>;

export const Default: Story = {

};
