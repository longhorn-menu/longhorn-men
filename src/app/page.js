import Link from 'next/link';

const menuItems = [
  {
    name: 'Renegade Sirloin',
    price: '$15.99',
    description: 'Lean and flavorful center-cut sirloin.',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Outlaw Ribeye',
    price: '$24.99',
    description: 'Bone-in, well-marbled, fire-grilled steak.',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Flo’s Filet',
    price: '$21.99',
    description: 'Tender center-cut filet with buttery texture.',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'LongHorn Salmon',
    price: '$19.49',
    description: 'Hand-cut, fire-grilled salmon with bourbon marinade.',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
  },
];


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Header */}
      <header className="bg-red-800 text-white shadow-lg">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-3xl font-bold">LongHorn Steakhouse</h1>
          <nav>
            <Link href="/" className="text-lg hover:underline">
              Home
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-cover bg-center h-64" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1604908553729-403cf6db93b7')` }}>
        <div className="bg-black bg-opacity-60 h-full flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold">Savor the Flavor of LongHorn</h2>
        </div>
      </section>

      {/* Menu Section */}
      <main className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-center text-red-800">Popular Menu Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold text-red-800 mb-1">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <span className="text-lg font-semibold">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t py-6">
        <div className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} LongHorn Steakhouse Menu. Visit our official menu at{' '}
          <a
            href="https://longhorn-menu.us"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-700 font-semibold underline"
          >
            longhorn-menu.us
          </a>
        </div>
      </footer>
    </div>
  );
}
