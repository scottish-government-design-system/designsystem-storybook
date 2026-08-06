import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './details.njk';

export type DetailsArgs = {
    content: string
    hasFormContent?: boolean
    summary: string
};

const meta: Meta<DetailsArgs> = {
    title: 'Components/Details',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        content: ` <p>Contact the design system team if you cannot sign in.</p>
        <p>Email <a href="mailto:designsystem@gov.scot" data-navigation="details-link" data-section="I cannot sign in">designsystem@gov.scot</a>.</p>
        <p>Or phone 0000 123 4567<br>
        Monday to Friday, 9am to 5pm</p>`,
        summary: 'I cannot sign in'
    },
    argTypes: {
        hasFormContent: SGDSArgTypes.boolean()
    },
    play: () => {
        window.DS.initAll();
    }
};

export default meta;
type Story = StoryObj<DetailsArgs>;

export const Default: Story = {
    parameters: {
        docs: {
            story: { autoplay: true },
        }
    }
};

export const WithFormContent: Story = {
    name: 'With form content',
    args: {
        hasFormContent: true,
        summary: 'Some form elements'
    }
};

export const DeprecatedNonNativeDetails: Story = {
    render: (args) => (
        `<div class="ds_details" data-module="ds-details">
            <div class="ds_details__summary">
                ${args.summary}
            </div>

            <div class="ds_details__text">
                ${args.content}
            </div>
        </div>`
    )
};

export const DeprecatedToggleDetails: Story = {
    render: (args) => (
        `<div class="ds_details" data-module="ds-details">
            <input id="filters-toggle" type="checkbox" class="ds_details__toggle  visually-hidden">

            <label for="filters-toggle" class="ds_details__summary">
                ${args.summary}
            </label>

            <div class="ds_details__text">
                ${args.content}
            </div>
        </div>`
    )
};
