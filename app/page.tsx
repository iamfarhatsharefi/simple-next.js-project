import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/images/home-bg.jpg')" }}>
      <Navbar />
      <div className="container mx-auto text-center text-white p-8">
        <h1 className="text-5xl font-bold">Welcome to the Digital Art Gallery</h1>
        <p className="mt-4 text-xl">Explore our collection of unique digital art pieces from various artists.</p>
      </div>
    </div>
  );
}
