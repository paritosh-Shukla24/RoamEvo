import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#F4F6F0] py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* International Trips */}
              <div>
                <h3 className="text-xl font-serif mb-6 text-gray-800">International Trips</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Europe
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Bali
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Vietnam
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Turkey
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Thailand
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Azerbaijan
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Singapore
                    </Link>
                  </li>
                </ul>
              </div>

              {/* India Trips */}
              <div>
                <h3 className="text-xl font-serif mb-6 text-gray-800">India Trips</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Ladakh
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Spiti Valley
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Kashmir
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Andaman
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Kerala
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Rajasthan
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Trekking */}
              <div>
                <h3 className="text-xl font-serif mb-6 text-gray-800">Trekking</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Kalsubai Peak
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Raigad Fort
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Harihar Fort
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Kalavanti Durg Fort
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-serif mb-6 text-gray-800">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Payments
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Us */}
              <div>
                <h3 className="text-xl font-serif mb-6 text-gray-800">Contact Us</h3>
                <address className="not-italic text-gray-600 space-y-3">
                  <p>One Apple Park Way, Cupertino, CA</p>
                  <p>95014, United States</p>
                  <p>+91 93257 37063</p>
                  <p>contact-us@vaaigo.com</p>
                </address>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-gray-600">© RoamEvo Pvt. Ltd., All rights reserved.</p>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:col-span-4">
            <div className="h-full w-full relative">
              <Image
                src="/images/beach.png"
                alt="Beach with palm trees and hammock"
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
