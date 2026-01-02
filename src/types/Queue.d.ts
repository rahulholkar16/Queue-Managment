interface NewCustomer {
    name: string;
    service: string;
};

interface QueueItem extends NewCustomer {
    id: number;
    status: "waiting" | "serving" | "completed";
};

export type QueueFormProp = {
    onAdd: (customer: NewCustomer) => void;
};

export type QueueDisplayProps = {
    queue: QueueItem[];
    onUpdateStatus: (
        id: number,
        newStatus: "waiting" | "serving" | "completed"
    ) => void;
    onRemove: (id: number) => void;
}