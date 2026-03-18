import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './leader.njk';

export type LeaderArgs = {
    content: string
};

const meta: Meta<LeaderArgs> = {
    title: 'Components/Leader',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        content: `<p class="ds_leader">Different organisations can help your business to export. Who can help depends on what you're trying to do.</p>`
    },
    argTypes: {

    }
};

export default meta;
type Story = StoryObj<LeaderArgs>;

export const Default: Story = {};

export const FirstParagraph: Story = {
    name: 'First paragraph',
    args: {
        content: `<div class="ds_leader-first-paragraph">
    <p>If you run a business that exports products or services, your buyers will usually have a longer period of time to pay their invoices.</p>
    <p>You can borrow money to release cash for your business before these invoices are paid. This is called 'export finance' or 'trade finance'.</p>
    <p>Export finance can be:</p>
    <ul>
        <li>an overdraft</li>
        <li>a type of 'invoice finance' (using unpaid invoices to raise cash)</li>
        <li>a loan</li>
    </ul>
</div>`
    }
};
