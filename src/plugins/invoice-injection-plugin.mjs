import config from '../config'

/** @type {import('unified').Plugin<[Options?], Root>} */
export function invoiceInjectionPlugin() {
    return function(tree, file) {
        // Add the invoice layout to all pages
        file.data.astro.frontmatter.layout = '@layouts/Invoice.astro'

        // Add our company metadata to all pages
        file.data.astro.frontmatter.sender = config.sender
        
        // Add the appropriate recipient company metadata to all pages
        config.recipients.forEach(function(company) {
            if (file.history.at(-1).includes(`src/pages/invoices/${company.slug}`)) {
                file.data.astro.frontmatter.recipient = company
            }
        })
    }
}