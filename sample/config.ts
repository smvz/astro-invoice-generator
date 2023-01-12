import type { CompanyFrontmatter } from "src/types/CompanyFrontmatter";

export interface InvoiceConfig {
    sender: CompanyFrontmatter
    recipients: CompanyFrontmatter[]
}

const invoiceConfig: InvoiceConfig = {
    sender: {
        slug: "", // The slug is unused for the sender
        name: "Jane Doe",
        address1: "1",
        address2: "Street Road",
        city: "London",
        postcode: "LN1234",
        phone: "020123"
    },
    recipients: [
        {
            slug: 'company', // The slug must match the directory name in src/pages/invoices/
            name: 'A Company',
            address1: "2",
            address2: "Street Road",
            city: "London",
            postcode: "LN1234",
            phone: "020123"
        },
    ]
}

export default invoiceConfig
