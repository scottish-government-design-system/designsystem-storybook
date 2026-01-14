import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './site-branding.njk';

type ComponentArgs = {
    hasLogo?: boolean
    siteTitle?: string
};

const meta: Meta<ComponentArgs> = {
    title: 'Components/Site branding',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        hasLogo: true,
        siteTitle: 'Design System'
    }
};

export default meta;
type Story = StoryObj<ComponentArgs>;

export const Default: Story = {};

export const TwoLineTitle: Story = {
    args: {
        siteTitle: 'Scottish Government<br>Design System'
    }
};
