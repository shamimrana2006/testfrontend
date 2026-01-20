import { Button } from "@/components/ui/button";
import { Eye, Download } from "lucide-react";

export default function OrderHistory() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Order History</h1>

        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((order) => (
            <div key={order} className="border rounded-lg p-6">
              <div className="grid md:grid-cols-4 gap-4 items-center">
                <div>
                  <p className="text-sm text-slate-600">Order Number</p>
                  <p className="text-lg font-bold">#ORD-2024-00{order}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Date</p>
                  <p className="text-lg font-bold">Jan {20 - order}, 2024</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Total</p>
                  <p className="text-lg font-bold">
                    ${(189 * order).toFixed(2)}
                  </p>
                </div>
                <div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      order === 1
                        ? "bg-blue-100 text-blue-800"
                        : order === 2
                          ? "bg-orange-100 text-orange-800"
                          : "bg-green-100 text-green-800"
                    }`}
                  >
                    {order === 1
                      ? "Pending"
                      : order === 2
                        ? "In Transit"
                        : "Delivered"}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Eye size={16} />
                  View Details
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Download size={16} />
                  Download Invoice
                </Button>
                {order === 1 && (
                  <Button variant="outline" size="sm">
                    Track Order
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
