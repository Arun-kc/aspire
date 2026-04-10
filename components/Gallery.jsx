import Image from 'next/image';

export default function Gallery() {
    const images = [
        { src: "/gallery-1.jpg", alt: "Gym Weight Area" },
        { src: "/gallery-2.jpg", alt: "Gym Cardio Section" },
        { src: "/gallery-3.jpg", alt: "Gym Functional Training" },
        { src: "/hero-real.jpg", alt: "Gym Interior" }, // Reusing the hero image as part of gallery
    ];

    return (
        <section id="gallery" className="py-16 md:py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">
                        Inside <span className="text-primary">The Club</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Take a look at our world-class facilities designed to help you reach your peak potential.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {images.map((img, index) => (
                        <div key={index} className={`relative overflow-hidden rounded-xl group h-64 md:h-80 ${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}>
                            <Image 
                                src={img.src} 
                                alt={img.alt} 
                                fill 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" 
                                className="object-cover object-center transition-transform duration-700 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
