import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import BookingForm from '../components/booking/BookingForm';
import Calendar from '../components/booking/Calendar';

export default function BookingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-6">Book an Appointment</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Calendar />
            <BookingForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}