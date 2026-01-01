interface NewCustomer {
    name: string;
    service: string;
};

interface QueueItem extends NewCustomer {
    id: number;
    status: "waiting" | "served" | "completed";
};

export type QueueFormProp = {
    onAdd: (customer: NewCustomer) => void;
};