import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './category-page.njk';

export type CategoryPageArgs = {
    hasBreadcrumbs?: boolean
};

const meta: Meta<CategoryPageArgs> = {
    title: 'Patterns/Category page',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
    },
    argTypes: {
        hasBreadcrumbs: SGDSArgTypes.boolean()
    },
    parameters: {
        layout: 'fullscreen'
    },
    play: () => {
        window.DS.initAll();
    }
};

export default meta;
type Story = StoryObj<CategoryPageArgs>;

export const Default: Story = {};

export const WithBreadcrumbs: Story = {
    name: 'With breadcrumbs',
    args: {
        hasBreadcrumbs: true
    }
};
