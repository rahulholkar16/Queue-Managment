import { useState } from "react";
import QueueForm from "./components/QueueForm";
import type { NewCustomer, QueueItem } from "./types/Queue";
import QueueDisplay from "./components/QueueDisplay";

function App() {
    const [queue, setQueue] = useState<QueueItem[]>([]);

    const addToQueue = (customer: NewCustomer) => {
        setQueue((prev) => [
            ...prev, 
            {
                ...customer, 
                id: Date.now(), 
                status: "waiting"
            }
        ]);
    };

    const updateQueue = (id: number, newStatus: QueueItem["status"]) => {
        setQueue((prev) => prev.map(customer =>
            customer.id === id ? { ...customer, status: newStatus } : customer
        ))
    };

    const removeQueue = (id: number) => {
        setQueue((prev) => prev.filter(customer => customer.id !== id))
    };
    return (
        <div className="min-h-screen bg-[#1a1a1a] m-auto text-center p-8 text-white">
            <div className="m-8 text-center">
                <h1 className="text-[#646cff] text-3xl font-bold">
                    Queue Managment System
                </h1>
                <p className="text-[#888888] mt-2">
                    Manage your customers efficently
                </p>
            </div>
            <main className="grid gap-8 grid-cols-[350px_1fr]">
                <QueueForm onAdd={addToQueue} />
                <QueueDisplay queue={queue} onUpdateStatus={updateQueue} onRemove={removeQueue}/>
            </main>
        </div>
    );
}

export default App;