export interface Article {
    details?: string;
    isAvailable: boolean;
    name: string;
    picture_path?: string;
    warehouse_id: number; // TODO - Can be change to an enum.
    id?: string; // TODO - Remove optional.
}
