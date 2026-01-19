import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';
import type { SearchResultArgs } from '../../components/search-result/search-result.stories';

// @ts-expect-error no type defs
import ComponentTemplate from './search-results-page.njk';

export type SearchResultPageArgs = {
    hasCount?: boolean
    hasFacets?: boolean
    hasFilters?: boolean
    hasPromoted?: boolean
    hasSort?: boolean
    hasSuggestions?: boolean
};

const meta: Meta<SearchResultPageArgs> = {
    title: 'Patterns/Search results page',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
    },
    argTypes: {
        hasCount: SGDSArgTypes.boolean(),
        hasFacets: SGDSArgTypes.boolean(),
        hasFilters: SGDSArgTypes.boolean(),
        hasPromoted: SGDSArgTypes.boolean(),
        hasSort: SGDSArgTypes.boolean(),
        hasSuggestions: SGDSArgTypes.boolean()
    }
};

export default meta;
type Story = StoryObj<SearchResultPageArgs>;

export const Default: Story = {};

export const Filters: Story = {
    name: 'Filters',
    args: {
        hasFilters: true
    }
};

export const FiltersAndFacets: Story = {
    name: 'Filters and facets',
    args: {
        hasFacets: true,
        hasFilters: true
    }
};

export const Sort: Story = {
    name: 'Sort',
    args: {
        hasSort: true
    }
};

export const SortFilters: Story = {
    name: 'Sort and filters',
    args: {
        hasFilters: true,
        hasSort: true
    }
};

export const SortFiltersFacets: Story = {
    name: 'Sort, filters and facets',
    args: {
        hasFacets: true,
        hasFilters: true,
        hasSort: true
    }
};

export const SortFiltersFacetsSuggestions: Story = {
    name: 'Sort, filters facets and suggestions',
    args: {
        hasFacets: true,
        hasFilters: true,
        hasSort: true,
        hasSuggestions: true
    }
};
