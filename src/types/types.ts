export interface Product {
    _id: string,
    name: string;
    description: string;
    stock: number;
    oem: string;
    price: string;
    models: Array<string>;
    part: string;
    isActive: boolean;
    categories: Array<string>;
    images: Array<string>;
}