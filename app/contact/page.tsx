import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2 text-center">Contact Us</h1>
        <p className="text-center text-slate-600 mb-12">
          We'd love to hear from you. Send us a message and we'll respond as
          soon as possible.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          {[
            {
              icon: Mail,
              title: "Email",
              value: "support@boutique.com",
              desc: "We'll respond within 24 hours",
            },
            {
              icon: Phone,
              title: "Phone",
              value: "+1 (555) 123-4567",
              desc: "Mon-Fri 9AM-6PM EST",
            },
            {
              icon: MapPin,
              title: "Visit Us",
              value: "NYC Store",
              desc: "123 Fashion Ave, New York, NY",
            },
          ].map((contact, idx) => (
            <div key={idx} className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <contact.icon className="text-blue-600" size={32} />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-1">{contact.title}</h3>
              <p className="text-xl font-semibold mb-1">{contact.value}</p>
              <p className="text-slate-600 text-sm">{contact.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select a category</option>
                <option>General Inquiry</option>
                <option>Order Issue</option>
                <option>Product Question</option>
                <option>Feedback</option>
              </select>

              <textarea
                placeholder="Your message"
                rows={5}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 py-2.5">
                <Send size={18} />
                Send Message
              </Button>
            </form>
          </div>

          {/* Store Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Store Information</h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-lg mb-2">New York Store</h3>
                <p className="text-slate-600 mb-2">123 Fashion Ave</p>
                <p className="text-slate-600 mb-4">New York, NY 10001</p>
                <p className="text-slate-600 mb-1">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p className="text-slate-600">
                  <strong>Email:</strong> ny@boutique.com
                </p>
                <div className="mt-3 space-y-1 text-sm text-slate-600">
                  <p>
                    <strong>Hours:</strong>
                  </p>
                  <p>Mon-Fri: 10AM - 8PM</p>
                  <p>Sat-Sun: 11AM - 7PM</p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Los Angeles Store</h3>
                <p className="text-slate-600 mb-2">456 Trend Street</p>
                <p className="text-slate-600 mb-4">Los Angeles, CA 90001</p>
                <p className="text-slate-600 mb-1">
                  <strong>Phone:</strong> +1 (555) 987-6543
                </p>
                <p className="text-slate-600">
                  <strong>Email:</strong> la@boutique.com
                </p>
                <div className="mt-3 space-y-1 text-sm text-slate-600">
                  <p>
                    <strong>Hours:</strong>
                  </p>
                  <p>Mon-Fri: 10AM - 8PM</p>
                  <p>Sat-Sun: 11AM - 7PM</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">Response Times</h3>
                <ul className="text-slate-700 space-y-2">
                  <li>✓ Email: 24 hours</li>
                  <li>✓ Live Chat: Real-time</li>
                  <li>✓ Phone: Same business day</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
