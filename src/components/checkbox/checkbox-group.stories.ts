import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './checkbox-group.njk';

export type CheckboxGroupArgs = {
    hasExclusive?: boolean
    isSmall?: boolean
    name: string
};

const meta: Meta<CheckboxGroupArgs> = {
    title: 'Components/Checkbox/Checkbox group',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        name: 'default'
    },
    argTypes: {
        isSmall: SGDSArgTypes.boolean()
    },
    play: () => {
        window.DS.initAll();
    }
};

export default meta;
type Story = StoryObj<CheckboxGroupArgs>;

export const Default: Story = {};

export const SmallCheckboxes: Story = {
    name: 'Small checkboxes',
    args: {
        name: 'small',
        isSmall: true
    }
};

export const WithExclusiveCheckbox: Story = {
    name: 'With exclusive checkbox',
    args: {
        hasExclusive: true
    }
};
