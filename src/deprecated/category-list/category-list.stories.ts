import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './category-list.njk';

export type CategoryListArgs = {

};

const meta: Meta<CategoryListArgs> = {
    title: 'Deprecated/Category list',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {

    }
};

export default meta;
type Story = StoryObj<CategoryListArgs>;

export const Default: Story = {};
