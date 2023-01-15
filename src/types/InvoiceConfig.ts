import type { CompanyFrontmatter } from "./CompanyFrontmatter"

export interface InvoiceConfig {
    currency: string
    sender: CompanyFrontmatter
    recipients: CompanyFrontmatter[]
}
