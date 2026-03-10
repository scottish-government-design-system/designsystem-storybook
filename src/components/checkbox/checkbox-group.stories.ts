import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './checkbox-group.njk';

export type CheckboxGroupArgs = {
    hasExclusive?: boolean
    hasOther?: boolean
    isSmall?: boolean
    name: string
};

const meta: Meta<CheckboxGroupArgs> = {
    title: 'Components/Checkbox/Checkbox group',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    argTypes: {
        hasExclusive: SGDSArgTypes.boolean({
            if: { arg: 'hasOther', truthy: false }
        }),
        hasOther: SGDSArgTypes.boolean({
            if: { arg: 'hasExclusive', truthy: false }
        }),
        isSmall: SGDSArgTypes.boolean()
    },
    play: () => {
        window.DS.initAll();
    }
};

export default meta;
type Story = StoryObj<CheckboxGroupArgs>;

export const Default: Story = {
    args: {
        name: 'default'
    },
    // tags: ['!autodocs']
};

export const SmallCheckboxes: Story = {
    name: 'Small checkboxes',
    args: {
        isSmall: true,
        name: 'small'
    }
};

export const WithExclusiveCheckbox: Story = {
    name: 'With exclusive checkbox',
    args: {
        hasExclusive: true,
        name: 'has-exclusive'
    }
};

export const WithOtherCheckbox: Story = {
    name: 'With other checkbox',
    args: {
        hasOther: true,
    }
};
