export interface RouteInterface {
    title: string
    href: string
    items: Array<{title: string, href: string, disabled?: boolean}>
}