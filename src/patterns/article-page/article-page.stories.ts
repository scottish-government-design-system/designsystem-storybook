import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './article-page.njk';

export type ArticlePageArgs = {

};

const meta: Meta<ArticlePageArgs> = {
    title: 'Patterns/Article page',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {

    }
};

export default meta;
type Story = StoryObj<ArticlePageArgs>;

export const Default: Story = {};
