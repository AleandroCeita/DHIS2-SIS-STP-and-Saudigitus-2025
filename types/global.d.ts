import 'react'

declare module 'react' {
    interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
        jsx?: boolean
        global?: boolean
    }
}

declare module "@dhis2/d2-i18n"
declare module "@dhis2/ui"
declare module "*.module.css"
declare module "*.png"
declare module "*.jpg"
declare module "*.css"
declare module "*.js"
declare module "*"