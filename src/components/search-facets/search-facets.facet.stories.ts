import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './search-facets.facet.njk';

export type SearchFacetArgs = {
    accessibleName?: string
    title: string
};

const meta: Meta<SearchFacetArgs> = {
    title: 'Components/Search results/Facets/Facet',
    decorators: [
        (Story) => `<div class="ds_facets">\n${Story()}\n</div>`
    ],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        title: 'Advice and guidance'
    },
    argTypes: {
        accessibleName: {
            description: 'This text is used by screen readers',
            type: 'string'
        }
    }
};

export default meta;
type Story = StoryObj<SearchFacetArgs>;

export const Default: Story = {};

export const CustomAccessibleText: Story = {
    name: 'Custom accessible text',
    args: {
        title: '31/10/2025',
        accessibleName: 'Updated before 31st October 2025'
    }
};
