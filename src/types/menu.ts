export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    is_active: boolean;
    category_id: number | null;
    category_name: string | null;
}

export interface BranchMenu {
    branch_name: string;
    menu: MenuItem[];
}

export interface MenuResponse {
    [branchId: string]: BranchMenu;
}