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


export const taxDashboard = [
    {
        sectionName: 'Tax Form',
        sectionDescription : 'Loads Tax Form',
        sectionController: 'taxForm',
        sectionPermission: ['tax-form'],
        loadConfig: {
            actionName: 'load',
            permission:  ['tax-form']
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