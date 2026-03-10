import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './autocomplete.njk';

export type AutocompleteArgs = {
    heading: string,
    items: object[]
};

const meta: Meta<AutocompleteArgs> = {
    title: 'Components/Autocomplete',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {

    }
};

export default meta;
type Story = StoryObj<AutocompleteArgs>;

export const Default: Story = {};
