import { Button } from "@/components/ui/button";
import { User, Mail, Phone, MapPin, Edit, LogOut } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">My Account</h1>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="p-6 text-center border-b">
                <div className="w-16 h-16 bg-slate-300 rounded-full mx-auto mb-3"></div>
                <h3 className="font-bold text-lg">John Doe</h3>
                <p className="text-sm text-slate-600">john@example.com</p>
              </div>

              <nav className="p-4 space-y-2">
                {[
                  { icon: User, label: "Profile", active: true },
                  { icon: MapPin, label: "Addresses" },
                  { icon: Mail, label: "Order History" },
                  { icon: Phone, label: "Wishlist" },
                ].map((item) => (
                  <button
                    key={item.label}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                      item.active
                        ? "bg-blue-100 text-blue-700 font-semibold"
                        : "hover:bg-slate-100"
                    }`}
                  >
                    <item.icon size={18} />
                    {item.label}
                  </button>
                ))}
                <button className="w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 text-red-600 hover:bg-red-50">
                  <LogOut size={18} />
                  Logout
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {/* Personal Information */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Personal Information</h2>
                <Button variant="outline" className="flex items-center gap-2">
                  <Edit size={18} />
                  Edit
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-slate-600 block mb-1">
                    First Name
                  </label>
                  <p className="text-lg font-semibold">John</p>
                </div>
                <div>
                  <label className="text-sm text-slate-600 block mb-1">
                    Last Name
                  </label>
                  <p className="text-lg font-semibold">Doe</p>
                </div>
                <div>
                  <label className="text-sm text-slate-600 block mb-1">
                    Email
                  </label>
                  <p className="text-lg font-semibold">john@example.com</p>
                </div>
                <div>
                  <label className="text-sm text-slate-600 block mb-1">
                    Phone
                  </label>
                  <p className="text-lg font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Saved Addresses */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Saved Addresses</h2>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Add New Address
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    type: "Home",
                    address: "123 Main Street, New York, NY 10001",
                  },
                  {
                    type: "Work",
                    address: "456 Business Ave, New York, NY 10002",
                  },
                ].map((addr, idx) => (
                  <div key={idx} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <span className="font-bold text-lg">{addr.type}</span>
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost">
                          <Edit size={16} />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="text-red-600"
                        >
                          ✕
                        </Button>
                      </div>
                    </div>
                    <p className="text-slate-600">{addr.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
