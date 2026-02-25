import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './search-filters.panel.njk';

export type SearchFiltersPanelArgs = {
    activeFilterCount?: number
    hasTextFilters?: boolean
    id: string
    isScrollable?: boolean
    title: string
};

const meta: Meta<SearchFiltersPanelArgs> = {
    title: 'Components/Search results/Filters/Filter panel',
    decorators: [
        (Story) => {return `<div class="ds_accordion  ds_accordion--small">\n${Story()}\n</div>`}
    ],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        id: 'default',
        title: 'Content type'
    },
    argTypes: {
        activeFilterCount: {
            control: 'number',
            table: {
                type: {
                    summary: 'number'
                }
            }
        },
        hasTextFilters: SGDSArgTypes.boolean(),
        id: SGDSArgTypes.hidden(),
        isScrollable: SGDSArgTypes.boolean(),
    },
    play: () => {
        window.DS.initAll();
    }
};

export default meta;
type Story = StoryObj<SearchFiltersPanelArgs>;

export const Default: Story = {

};

export const Scrollable: Story = {
    args: {
        id: 'scrollable',
        isScrollable: true
    }
};

export const WithActiveFilterCount: Story = {
    name: 'With active filter count',
    args: {
        activeFilterCount: 3,
        id: 'activeCount'
    }
};

export const TextFilters: Story = {
    name: 'Text filters',
    args: {
        hasTextFilters: true,
        id: 'text',
        title: 'Updated'
    }
}
