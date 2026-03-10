import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './confirmation-message.njk';

export type ConfirmationMessageArgs = {
    heading: string,
    headingLevel?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    content: string
};

const meta: Meta<ConfirmationMessageArgs> = {
    title: 'Components/Confirmation message',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        heading: "Tenant added successfully",
        headingLevel: "h3",
        content: "<p>You have added a tenant to the application.</p>"
    },
    argTypes: {
        headingLevel: SGDSArgTypes.headingLevel()
    }
};

export default meta;
type Story = StoryObj<ConfirmationMessageArgs>;

export const Default: Story = {};

export const NoContent: Story = {
    name: 'No content',
    args: {
        content: undefined
    }

};

export const LinksInContent: Story = {
    name: 'Links in content',
    args: {
        content: `<p>You have added a tenant to the <a href="#">application</a>.
        Go to the <a href="#">tenant list</a> to view all tenants.</p>`
    }
};
