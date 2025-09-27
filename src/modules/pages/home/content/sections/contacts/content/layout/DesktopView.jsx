import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function DesktopView() {
  return (
    <>
      <div className="hidden lg:flex  items-center mt-17 flex-col">
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
