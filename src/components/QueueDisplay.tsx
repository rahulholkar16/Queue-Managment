import type { QueueDisplayProps } from "../types/Queue";

function QueueDisplay({ queue, onUpdateStatus, onRemove }: QueueDisplayProps) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case "waiting":
                return "#ff9800";
            case "serving":
                return "#4caf50";
            case "completed":
                return "#2196f3";
            default:
                return "#ffffff";
        }
    };

    return (
        <div className="bg-[#2d2d2d] p-6 rounded-lg">
            <h2 className="text-[#646cff] text-2xl font-bold mt-0 mb-6">
                Current Queue
            </h2>
            {queue.length === 0 ? (
                <p className="text-[#888888] mt-2 text-center">
                    No Customer data
                </p>
            ) : (
                <div className="grid gap-4">
                    {queue.map((customer) => (
                        <div
                            className="bg-[#1a1a1a] p-4 transition-all duration-300 rounded-sm flex justify-between items-center"
                            key={customer.id}
                        >
                            <div className="text-start">
                                <h3 className="m-0 text-[#ffffff]">
                                    {customer.name}
                                </h3>
                                <p className="my-2 mx-0 text-[#888888]">
                                    {customer.service}
                                </p>
                                <span
                                    className="font-medium text-sm"
                                    style={{
                                        color: getStatusColor(customer.status),
                                    }}
                                >
                                    {customer.status}
                                </span>
                            </div>
                            <div className="flex gap-2">
                                {customer.status === "waiting" && (
                                    <button
                                        className="w-auto py-2 transition-all duration-300 hover:bg-green-800 rounded-sm px-4 bg-[#4caf50] cursor-pointer"
                                        onClick={() =>
                                            onUpdateStatus(
                                                customer.id,
                                                "serving"
                                            )
                                        }
                                    >
                                        Serve
                                    </button>
                                )}
                                {customer.status === "serving" && (
                                    <button
                                        className="w-auto transition-all duration-300 hover:bg-sky-800 rounded-sm py-2 px-4 bg-[#2196f3] cursor-pointer"
                                        onClick={() =>
                                            onUpdateStatus(
                                                customer.id,
                                                "completed"
                                            )
                                        }
                                    >
                                        completed
                                    </button>
                                )}
                                <button
                                    className="w-auto transition-all duration-300 hover:bg-red-800 rounded-sm py-2 px-4 bg-[#f44336] cursor-pointer"
                                    onClick={() => onRemove(customer.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default QueueDisplay;
