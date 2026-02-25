import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './contact-details.njk';

export type ContactDetailsListSubItem = {
    content: string
    icon?: string
    isSocialItem?: boolean
    ignoreTranslate?: boolean
}

export type ContactDetailsListItem = {
    hideLabel?: boolean
    label?: string
    subitems?: ContactDetailsListSubItem[]
}

export type ContactDetailsList = {
    items: ContactDetailsListItem[]
    prefix?: string
    suffix?: string
}

export type ContactDetailsArgs = {
    heading?: string,
	layout?: string,
	lists: ContactDetailsList[]
};

const meta: Meta<ContactDetailsArgs> = {
    title: 'Components/Contact details',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        heading: "Contact",
        lists: [
            {
                items: [
                    {
                        label: "Address",
                        subitems: [
                            {
                                content: "<address>Scottish Government<br>St. Andrew's House<br>Regent Road<br>Edinburgh<br>EH1 3DG</address>",
                                "ignoreTranslate": true
                            }
                        ]
                    },
                    {
                        label: "Email",
                        subitems: [
                            {
                                content: "<a href=\"mailto:#\">email@gov.scot</a>"
                            }
                        ]
                    },
                    {
                        label: "Phone",
                        subitems: [
                            {
                                content: "0123 456 7000<br>Main line is open 8am-5pm<br><a href=\"https://www.gov.uk/call-charges\">Find out about call charges</a>"
                            }
                        ]
                    },
                    {
                        label: "Out of hours",
                        subitems: [
                            {
                                content: "0123 456 7001"
                            }
                        ]
                    },
                    {
                        label: "Fax",
                        subitems: [
                            {
                                content: "0123 456 7002"
                            }
                        ]
                    },
                    {
                        label: "Follow",
                        subitems: [
                            {
                                content: "<a class=\"ds_contact-details__social-link\" href=\"#\">Facebook</a>",
                                isSocialItem: true,
                                icon: "/images/social/facebook.svg"
                            },
                            {
                                content: "<a class=\"ds_contact-details__social-link\" href=\"#\">YouTube</a>",
                                isSocialItem: true,
                                icon: "/images/social/youtube.svg"
                            },
                            {
                                content: "<a class=\"ds_contact-details__social-link\" href=\"#\">Twitter one</a>",
                                isSocialItem: true,
                                icon: "/images/social/twitter.svg"
                            },
                            {
                                content: "<a class=\"ds_contact-details__social-link\" href=\"#\">Twitter two</a>",
                                isSocialItem: true,
                                // icon: "/images/social/twitter.svg"
                            },
                            {
                                content: "<a class=\"ds_contact-details__social-link\" href=\"#\">Instagram</a>",
                                isSocialItem: true,
                                icon: "/images/social/instagram.svg"
                            },
                            {
                                content: "<a class=\"ds_contact-details__social-link\" href=\"#\">LinkedIn</a>",
                                isSocialItem: true,
                                icon: "/images/social/linkedin.svg"
                            },
                            {
                                content: "<a class=\"ds_contact-details__social-link\" href=\"#\">Flickr</a>",
                                isSocialItem: true,
                                icon: "/images/social/flickr.svg"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    argTypes: {

    }
};

export default meta;
type Story = StoryObj<ContactDetailsArgs>;

export const Default: Story = {};

export const AddressOnList: Story = {
    name: 'Address on list',
    args: {
        lists: [
            {
                prefix: "<address>",
                suffix: "</address>",
                items: [
                    {
                        label: "Address",
                        subitems: [
                            {
                                "content": "Scottish Government<br>St. Andrew's House<br>Regent Road<br>Edinburgh<br>EH1 3DG",
                                "ignoreTranslate": true
                            }
                        ]
                    },
                    {
                        label: "Email",
                        subitems: [
                            {
                                "content": "<a href=\"mailto:#\">email@gov.scot</a>"
                            }
                        ]
                    },
                    {
                        label: "Phone",
                        subitems: [
                            {
                                "content": "0123 456 7000<br>Main line is open 8am-5pm<br><a href=\"https://www.gov.uk/call-charges\">Find out about call charges</a>"
                            }
                        ]
                    },
                    {
                        label: "Out of hours",
                        subitems: [
                            {
                                "content": "0123 456 7001"
                            }
                        ]
                    },
                    {
                        label: "Fax",
                        subitems: [
                            {
                                "content": "0123 456 7002"
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

export const TwoColumns: Story = {
    name: 'Two columns',
    args: {
        layout: "ds_contact-details-grid",
        lists: [
            {
                items: meta.args.lists[0].items.slice(0, 5)
            },
            {
                items: meta.args.lists[0].items.slice(5, 6)
            }
        ]
    }
};
