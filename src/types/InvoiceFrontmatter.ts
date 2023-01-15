import type { CompanyFrontmatter } from "./CompanyFrontmatter"

export interface InvoiceFrontmatterItem {
    description: string
    rate?: number
    quantity?: number
    amount?: number // Rate multiplied by quantity if undefined
}

export interface InvoiceFrontmatter {
    sender: CompanyFrontmatter // This value will be injected during build
    recipient: CompanyFrontmatter // This value will be injected during build
    invoiceNumber: string
    issueDate: string
    dueDate?: string
    currency?: string
    items: InvoiceFrontmatterItem[]
    total?: number // The sum of the item amounts if undefined
}
