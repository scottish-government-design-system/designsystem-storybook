// Accordion.stories.ts
import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './article-aside.njk';

type ComponentArgs = {
    heading: string,
    items: object[]
};

const meta: Meta<ComponentArgs> = {
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
type Story = StoryObj<ComponentArgs>;

export const Default: Story = {};
