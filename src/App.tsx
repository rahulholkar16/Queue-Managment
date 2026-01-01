import { useState } from "react";
import QueueForm from "./components/QueueForm";
import type { NewCustomer, QueueItem } from "./types/Queue";

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
            </main>
        </div>
    );
}

export default App;