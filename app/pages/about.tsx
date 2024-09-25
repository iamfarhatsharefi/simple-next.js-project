// app/about/page.tsx
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white">
      <div className="container mx-auto p-8">
        <h1 className="text-5xl font-bold mb-6 text-center">About the Digital Art Gallery</h1>
        <p className="text-lg mb-4">
          Welcome to the Digital Art Gallery, a vibrant platform dedicated to showcasing extraordinary digital artworks from talented artists around the world.
        </p>
        <p className="text-lg mb-4">
          Our gallery features a diverse range of styles and mediums, including:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Digital Paintings</li>
          <li>3D Models</li>
          <li>Graphic Design</li>
          <li>Animated Art</li>
          <li>Virtual Reality Experiences</li>
        </ul>
        <p className="text-lg mb-4">
          Each piece in our gallery is a unique expression of the artist’s vision and creativity. We believe in the power of digital art to inspire, provoke thought, and connect individuals across cultures.
        </p>
        <p className="text-lg mb-4">
          Our mission is to promote digital artists by providing them with a space to showcase their work and reach a wider audience. Whether you're an artist, a collector, or simply an art enthusiast, our gallery has something for everyone.
        </p>
        <p className="text-lg mb-4">
          We host regular exhibitions and events, both online and offline, where you can engage with the artists and learn more about their creative processes. Stay tuned for updates on upcoming events!
        </p>
        <p className="text-lg mb-4">
          Thank you for visiting our gallery! We invite you to explore the artworks and find inspiration in the creativity that surrounds us.
        </p>
        <Link href="/">
          <span className="text-blue-300 underline hover:text-blue-100 transition">Go back to homepage</span>
        </Link>
      </div>
    </div>
  );
}
