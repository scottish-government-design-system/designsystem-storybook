import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './autocomplete.njk';

type ComponentArgs = {
    heading: string,
    items: object[]
};

const meta: Meta<ComponentArgs> = {
    title: 'Components/Autocomplete',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {

    }
};

export default meta;
type Story = StoryObj<ComponentArgs>;

export const Default: Story = {};
