import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './headings.njk';

export type HeadingsArgs = {
    content: string
};

const meta: Meta<HeadingsArgs> = {
    title: 'Base/Core/Headings',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {

    },
    argTypes: {
        content: SGDSArgTypes.hidden()
    }
};

export default meta;
type Story = StoryObj<HeadingsArgs>;

export const Default: Story = {
    args: {
        content: `<h1>Heading level one</h1>
<h2>Heading level two</h2>
<h3>Heading level three</h3>
<h4>Heading level four</h4>
<h5>Heading level five</h5>`
    }
};

export const ClassOverrides: Story = {
    name: 'Class overrides',
    args: {
        content: `<div class="ds_h1">Heading level one</div>
<div class="ds_h2">Heading level two</div>
<div class="ds_h3">Heading level three</div>
<div class="ds_h4">Heading level four</div>
<div class="ds_h5">Heading level five</div>`
    }
}
