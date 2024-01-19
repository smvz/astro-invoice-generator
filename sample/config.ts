import type { InvoiceConfig } from "src/types/InvoiceConfig"

const invoiceConfig: InvoiceConfig = {
    currency: '£',
    sender: {
        slug: "", // The slug is unused for the sender
        name: "Jane Doe",
        address1: "Company House",
        address2: "1 Street Road",
        city: "London",
        postcode: "LN1234",
        phone: "020123"
    },
    recipients: [
        {
            slug: 'company', // The slug must match the directory name in src/pages/invoices/
            name: 'A Company',
            address1: "Company House",
            address2: "2 Street Road",
            city: "London",
            postcode: "LN1234",
            phone: "020123"
        },
        {
            slug: 'company2',
            name: 'Second Company',
            address1: "Company House",
            address2: "3 Street Road",
            city: "London",
            postcode: "LN1234",
            phone: "020123"
        },
    ]
}

export default invoiceConfig
