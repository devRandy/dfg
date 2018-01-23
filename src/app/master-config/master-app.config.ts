import { SectionConfig, ActionConfig } from '../models/dynamic-app.model';

// export const masterAppConfig = {
//     section : [
//         {
//             sectionName: "Dashboard",
//             sectionPath: "dashboard",
//             load
//         }
//     ]
// }

export const masterAppConfig: SectionConfig[] = [
    {
        sectionName: 'Tax Dashboard',
        sectionDescription : 'Loads Tax Dashboard',
        sectionController: 'dashboard',
        sectionPermission: ['tax-dashboard'],
        loadConfig: {
            actionName: 'load',
            permission:  ['tax-dashboard']
        }
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
