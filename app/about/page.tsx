import { Button } from "@/components/ui/button";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Our Boutique</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Crafting timeless elegance with curated collections that celebrate
            individuality and style.
          </p>
        </div>

        {/* Brand Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="bg-slate-200 h-96 rounded-lg flex items-center justify-center">
            <span className="text-slate-400">Brand Story Image</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Founded in 2015, our boutique began as a small passion project to
              bring curated fashion to our community. What started with a single
              storefront has grown into a beloved destination for fashion
              enthusiasts.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed">
              We believe in quality over quantity, sustainability, and
              supporting emerging designers. Every piece in our collection is
              carefully selected to meet our high standards of craftsmanship and
              style.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Today, we're proud to serve thousands of customers who share our
              passion for beautiful, well-made clothing and accessories that
              celebrate individuality.
            </p>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "Our Mission",
              description:
                "To make high-quality, sustainable fashion accessible to everyone while celebrating individual style.",
            },
            {
              title: "Quality Promise",
              description:
                "We meticulously curate every item, ensuring exceptional craftsmanship and timeless design.",
            },
            {
              title: "Sustainability",
              description:
                "We partner with ethical brands and support eco-friendly practices in fashion production.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="text-center">
                <div className="w-32 h-32 bg-slate-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-lg mb-1">Team Member</h3>
                <p className="text-slate-600 mb-2">Position Title</p>
                <p className="text-slate-600 text-sm">
                  Brief bio about team member and their role
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 bg-slate-50 rounded-lg p-12 mb-16">
          {[
            { stat: "10K+", label: "Happy Customers" },
            { stat: "500+", label: "Products" },
            { stat: "50+", label: "Designers" },
            { stat: "9+", label: "Years" },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl font-bold text-blue-600 mb-2">
                {item.stat}
              </p>
              <p className="text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest collections, exclusive
            offers, and style inspiration.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              Subscribe Now
            </Button>
            <Button variant="outline" className="px-8">
              Shop Collection
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
