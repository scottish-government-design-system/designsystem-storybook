import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';
import type { SearchResultArgs } from '../../components/search-result/search-result.stories';

// @ts-expect-error no type defs
import ComponentTemplate from './search-results.njk';

export type SearchResultsArgs = {
    hasControls?: boolean
    hasPagination?: boolean
    hasPromoted?: boolean
    hasRelated?: boolean
    hasSuggestions?: boolean
};

const meta: Meta<SearchResultsArgs> = {
    title: 'Patterns/Search results',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
    },
    argTypes: {
        hasControls: SGDSArgTypes.boolean(),
        hasPagination: SGDSArgTypes.boolean(),
        hasPromoted: SGDSArgTypes.boolean(),
        hasRelated: SGDSArgTypes.boolean(),
        hasSuggestions: SGDSArgTypes.boolean(),
    }
};

export default meta;
type Story = StoryObj<SearchResultsArgs>;

export const Default: Story = {};

export const Suggestions: Story = {
    name: 'Suggestions',
    args: {
        hasSuggestions: true
    }
};
export const PromotedResults: Story = {
    name: 'PromotedResults',
    args: {
        hasPromoted: true
    }
};
export const RelatedSearches: Story = {
    name: 'Related searches',
    args: {
        hasRelated: true
    }
};
export const Pagination: Story = {
    name: 'Pagination',
    args: {
        hasPagination: true
    }
};
export const PaginationWithRelated: Story = {
    name: 'Pagination with related',
    args: {
        hasPagination: true,
        hasRelated: true
    }
};
export const SearchControls: Story = {
    name: 'Search controls',
    args: {
        hasControls: true
    }
};
