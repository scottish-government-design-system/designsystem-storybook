import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './search-facets.group.njk';

export type SearchFacetsGroupArgs = {
    joinContent?: string
    title: string
};

const meta: Meta<SearchFacetsGroupArgs> = {
    title: 'Components/Search results/Facets/Group',
    decorators: [
        (Story) => `<div class="ds_facets">\n${Story()}\n</div>`
    ],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        title: 'Content type'
    },
    argTypes: {
        joinContent: {
            description: 'Text that separates each facet, default is \'or\'',
            type: 'string'
        }
    }
};

export default meta;
type Story = StoryObj<SearchFacetsGroupArgs>;

export const Default: Story = {};

export const CustomJoinContent: Story = {
    name: 'Custom join content',
    args: {
        joinContent: 'and'
    }
};
