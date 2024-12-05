import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl font-bold">Hair Salon</div>
          <Navigation />
        </div>
      </div>
    </header>
  );
}