import type { Meta, StoryObj } from '@storybook/html';
import argTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './tabs.njk';

type TabArgs = {
    content: string
    id: string
    title: string
}

type ComponentArgs = {
    title?: string
    headingLevel?: string
    isBorderless?: boolean
    isCurrentPage?: boolean
    isManual?: boolean
    items: TabArgs[]
};

const meta: Meta<ComponentArgs> = {
    title: 'Components/Tabs',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        title: "Contents",
        items: [
            {
                content: "<p>Content for Tab 1. <a href=\"#\">Lorem ipsum</a> dolor sit amet, consectetur adipiscing elit. Quisque semper neque a odio porta, eu auctor sem auctor. Mauris euismod massa nibh, at ullamcorper sem tincidunt sed. In condimentum ligula nec velit efficitur accumsan. Vivamus fringilla volutpat ligula, nec commodo leo consequat vitae. Quisque a diam nunc.</p>",
                id: "tab1",
                title: "Tab 1"
            },
            {
                content: "<p>Content for Tab 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper neque a odio porta, eu auctor sem auctor. Mauris euismod massa nibh, at ullamcorper sem tincidunt sed. In condimentum ligula nec velit efficitur accumsan. Vivamus fringilla volutpat ligula, nec commodo leo consequat vitae. Quisque a diam nunc.</p>",
                id: "tab2",
                title: "Tab 2"
            },
            {
                content: "<p>Content for Tab 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper neque a odio porta, eu auctor sem auctor. Mauris euismod massa nibh, at ullamcorper sem tincidunt sed. In condimentum ligula nec velit efficitur accumsan. Vivamus fringilla volutpat ligula, nec commodo leo consequat vitae. Quisque a diam nunc.</p>",
                id: "tab3",
                title: "Tab 3"
            },
            {
                content: "<p>Content for Tab 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper neque a odio porta, eu auctor sem auctor. Mauris euismod massa nibh, at ullamcorper sem tincidunt sed. In condimentum ligula nec velit efficitur accumsan. Vivamus fringilla volutpat ligula, nec commodo leo consequat vitae. Quisque a diam nunc.</p>",
                id: "tab4",
                title: "Tab 4"
            }
        ]
    },
    argTypes: {
        headingLevel: argTypes.headingLevel({
            description: 'Heading level to use for the tab container\'s title',
        }),
        isBorderless: {
            description: 'Whether to give each tab a border',
            control: 'boolean'
        },
        isManual: {
            control: 'boolean',
            description: 'Whether to require manual tab activation',
            type: 'boolean'
        },
        title: {
            description: 'The title of the tab list',
            type: 'string'
        },
    },
    play: () => {
        window.DS.initAll();
    }
};

export default meta;
type Story = StoryObj<ComponentArgs>;

export const Default: Story = {
    parameters: {
        docs: {
            story: { autoplay: true },
        }
    }
};

export const ManualActivation: Story = {
    args: {
        isManual: true
    }
};

export const WithoutBorder: Story = {
    args: {
        isBorderless: true
    }
};

export const DifferentHeadingLevel: Story = {
    args: {
        headingLevel: 'h3'
    }
};
