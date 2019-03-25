import { Warehouse } from './warehouse.enum';

export interface Article {
    details?: string;
    isAvailable: boolean;
    name: string;
    picture_path?: string;
    warehouse_id: Warehouse; // TODO - Can be change to an enum.
    id?: string; // TODO - Remove optional.
}
