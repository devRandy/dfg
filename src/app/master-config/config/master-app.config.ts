/*
*   This config is of type SectionConfig[]
*/
// export const masterAppConfig: SectionConfig[]  = [
export const masterAppConfig = [
    {
        sectionName: 'Tax Dashboard',
        sectionDescription : 'Loads Tax Dashboard',
        sectionController: 'dashboard',
        sectionPermission: ['tax-dashboard'],
        loadConfig: {
            actionName: 'load',
            permission:  ['tax-dashboard']
        },
    },
    {
        sectionName: 'Tax Validation',
        sectionDescription : 'Loads Tax Validation',
        sectionController: 'validation',
        sectionPermission: ['tax-validation'],
        loadConfig: {
            actionName: 'load',
            permission:  ['tax-validation']
        }
    }
];
