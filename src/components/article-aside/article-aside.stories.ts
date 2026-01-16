import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './article-aside.njk';

export type ArticleAsideArgs = {
    heading: string,
    items: object[]
};

const meta: Meta<ArticleAsideArgs> = {
    title: 'Components/Article aside',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        heading: 'Related content',
        items: [
            {
                "label": "Help with benefits",
                "link": "#"
            },
            {
                "label": "Self-Isolation Support Grant (&pound;500)",
                "link": "#"
            }
        ]
    }
};

export default meta;
type Story = StoryObj<ArticleAsideArgs>;

export const Default: Story = {};
