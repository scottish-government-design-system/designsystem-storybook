import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './site-search.njk';

export type SiteSearchArgs = {
};

const meta: Meta<SiteSearchArgs> = {
    title: 'Components/Site search',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
    }
};

export default meta;
type Story = StoryObj<SiteSearchArgs>;

export const Default: Story = {};
