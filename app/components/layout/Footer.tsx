export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>123 Hair Salon Street</p>
            <p>City, Country</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Hours</h3>
            <p>Monday - Friday: 9am - 8pm</p>
            <p>Saturday: 9am - 6pm</p>
            <p>Sunday: Closed</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Social media links will be added later */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}