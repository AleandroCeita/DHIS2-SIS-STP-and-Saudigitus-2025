declare module "@dhis2/d2-i18n"
declare module "@dhis2/ui"
declare module "*.module.css"
declare module "*.png"
declare module "*.jpg"
declare module "*.css"
declare module "*.js"
declare module "*"

declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
  }