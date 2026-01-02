import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import type { QueueFormProp } from "../types/Queue";

function QueueForm({ onAdd }: QueueFormProp) {
    const [name, setName] = useState("");
    const [service, setService] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !service.trim()) return;
        onAdd({ name, service });
        setName("");
        setService("");
    };

    return (
        <form
            className="bg-[#2d2d2d] p-6 rounded-lg h-fit"
            onSubmit={handleSubmit}
        >
            <h2 className="text-[#646cff] text-2xl font-bold mt-0 mb-6">
                Add to Queue
            </h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Customer name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border-[#888888] rounded-sm bg-[#1a1a1a] text-base box-border h-11.25 focus:outline-none focus:border-[#646cff]"
                />
            </div>
            <div className="mb-4 relative">
                <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full appearance-none p-3 border-[#888888] rounded-sm bg-[#1a1a1a] text-base box-border h-11.25 focus:outline-none focus:border-[#646cff]"
                >
                    <option value="">Select Service</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Payment">Payment</option>
                    <option value="Support">Support</option>
                </select>

                <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white">
                    ▼
                </span>
            </div>

            <button
                type="submit"
                className="w-full p-3 transition-all duration-300 bg-[#646cff] text-[#ffffff] border-none rounded-sm cursor-pointer hover:opacity-80 flex items-center justify-center gap-2 text-base h-11.25"
            >
                <FaUserPlus />
                Add Customer
            </button>
        </form>
    );
}

export default QueueForm;
