// app/about/page.tsx
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div>
      <Navbar />
      <div 
        className="bg-cover bg-center min-h-screen" 
        style={{ backgroundImage: "url('/your-background-image-about.jpg')" }} // Update with your image
      >
        <div className="bg-black bg-opacity-50 min-h-screen text-white p-8">
          <h1 className="text-5xl font-bold mb-6 text-center">About the Digital Art Gallery</h1>

          {/* Information Section */}
          <p className="text-lg mb-4">
            Welcome to the Digital Art Gallery, where creativity meets technology. Our platform showcases the finest digital artwork, spanning multiple genres and styles. 
          </p>
          <p className="text-lg mb-4">
            Each piece in the gallery represents a unique artistic vision, offering viewers an immersive visual experience. From conceptual art to surreal digital landscapes, we have it all.
          </p>
          <p className="text-lg mb-4">
            Our mission is to provide digital artists with a platform where they can showcase their creativity to a broader audience. We believe in promoting innovation in the world of art through the digital medium.
          </p>
          <p className="text-lg mb-4">
            This gallery regularly updates its collection, ensuring there’s always something new to explore. Dive into the world of digital art and experience the future of creativity.
          </p>

          {/* Gallery Section */}
          <h2 className="text-3xl font-bold mt-8 mb-4">Featured Artworks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img src="/path-to-your-image1.jpg" alt="Artwork 1" className="w-full h-auto rounded-lg shadow-lg" />
            <img src="/path-to-your-image2.jpg" alt="Artwork 2" className="w-full h-auto rounded-lg shadow-lg" />
            <img src="/path-to-your-image3.jpg" alt="Artwork 3" className="w-full h-auto rounded-lg shadow-lg" />
            <img src="/path-to-your-image4.jpg" alt="Artwork 4" className="w-full h-auto rounded-lg shadow-lg" />
            <img src="/path-to-your-image5.jpg" alt="Artwork 5" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
