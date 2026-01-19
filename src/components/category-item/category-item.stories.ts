import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './category-item.njk';

export type CategoryItemArgs = {
    heading: string
    headingLevel?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	href: string
	content?: string
    tagName?: 'div' | 'li'
};

const meta: Meta<CategoryItemArgs> = {
    title: 'Components/Category item',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        content: "Access to and protection of the countryside and managing wildlife on your land",
        heading: "Environment and countryside",
        href: '#foo'
    },
    argTypes: {
        headingLevel: SGDSArgTypes.headingLevel(),
        tagName: {
            control: { type: 'select' },
            options: ['div', 'li'],
            description: 'HTML tag to use for the component wrapper'
        }
    }
};

export default meta;
type Story = StoryObj<CategoryItemArgs>;

export const Default: Story = {};

export const NoContent: Story = {
    name: 'No content',
    args: {
        content: undefined
    }
};
