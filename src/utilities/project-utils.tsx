import projectIcons from '@/utilities/project-icons.json';

export const parseCategoryIcon = function (categoryKey: string) {
    let icon = "";
    
    let icons = Object.create(projectIcons);

    if (Object.hasOwn(projectIcons, categoryKey)) {
        icon = icons[categoryKey];
    }
    
    return icon;
};