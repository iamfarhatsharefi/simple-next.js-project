import Navbar from '../../components/Navbar';

export default function Contact() {
  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}>
      <Navbar />
      <div className="container mx-auto text-center text-white p-8">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg">
          Got any questions or want to know more about our digital art? Feel free to get in touch with us through the form below.
        </p>
        <form className="mt-8 flex flex-col gap-4 max-w-md mx-auto">
          <input type="text" placeholder="Your Name" className="p-2 rounded-md" />
          <input type="email" placeholder="Your Email" className="p-2 rounded-md" />
          <textarea placeholder="Your Message" className="p-2 rounded-md h-32"></textarea>
          <button className="bg-blue-500 text-white py-2 rounded-md">Send Message</button>
        </form>
      </div>
    </div>
  );
}
