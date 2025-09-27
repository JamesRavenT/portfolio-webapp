import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function MobileView() {
  return (
    <>
      <div className="lg:hidden mt-8 flex flex-col">
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
