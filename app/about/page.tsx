import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Hekayah</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Your trusted partner in premium advertising gifts and supplies since 2010
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Company Story */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Founded in 2010, Hekayah has grown from a small printing shop to a comprehensive advertising solutions
            provider. We specialize in creating memorable brand experiences through high-quality promotional products,
            custom signage, and innovative marketing materials.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our commitment to excellence, attention to detail, and customer-first approach has made us the preferred
            choice for businesses of all sizes across the region.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">Q</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Quality</h3>
            <p className="text-gray-600">
              We use only premium materials and state-of-the-art equipment to ensure every product meets the highest
              standards.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">I</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-gray-600">
              We continuously invest in new technologies and creative solutions to bring your vision to life in unique
              ways.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-orange-600">S</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Service</h3>
            <p className="text-gray-600">
              Our dedicated team provides personalized service and support throughout every step of your project.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">14+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Team</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Meet the dedicated professionals who bring creativity, expertise, and passion to every project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Image
                src="/images/team-ceo.png"
                alt="Ahmed Al-Rashid"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Ahmed Al-Rashid</h3>
              <p className="text-gray-600 mb-2">Chief Executive Officer</p>
              <p className="text-sm text-gray-500">15+ years in advertising and brand management</p>
            </div>

            <div className="text-center">
              <Image
                src="/images/team-creative-director.png"
                alt="Sarah Williams"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Sarah Williams</h3>
              <p className="text-gray-600 mb-2">Creative Director</p>
              <p className="text-sm text-gray-500">Award-winning designer with international experience</p>
            </div>

            <div className="text-center">
              <Image
                src="/images/team-production-manager.png"
                alt="Mohammed Hassan"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Mohammed Hassan</h3>
              <p className="text-gray-600 mb-2">Production Manager</p>
              <p className="text-sm text-gray-500">Expert in quality control and project management</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-blue-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your brand vision to life with our comprehensive advertising and
            promotional solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
