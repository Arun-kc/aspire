
import { Star } from 'lucide-react';

export default function Testimonials() {
    const reviews = [
        {
            name: "Arun Kumar",
            role: "Member since 2023",
            content: "Best gym in Muvattupuzha! The equipment is top-notch and the trainers are incredibly supportive. Lost 10kg in 3 months!",
            rating: 5
        },
        {
            name: "Sneha P.",
            role: "Weight Loss Program",
            content: "I was intimidated at first, but the atmosphere here is so welcoming. It's not just for bodybuilders; it's for everyone.",
            rating: 5
        },
        {
            name: "Rahul J.",
            role: "Strength Training",
            content: "Perfect specifically for heavy lifters. Good plates, sturdy racks, and great music. Valid 'gym freak' haven.",
            rating: 5
        }
    ];

    return (
        <section id="success-stories" className="py-16 md:py-24 bg-black relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">
                            Success <span className="text-primary">Stories</span>
                        </h2>
                        <p className="mt-4 text-gray-400">
                            Join a community of winners. Rated <strong>4.9 Stars</strong> on Google by over 100 happy members.
                        </p>
                    </div>
                    <div className="mt-6 md:mt-0 flex gap-2">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 text-primary fill-primary" />
                            ))}
                        </div>
                        <span className="text-white font-bold ml-2">4.9/5.0</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-card p-8 rounded-none border-l-4 border-primary relative">
                            <div className="absolute -top-4 -right-4 text-8xl text-white/5 font-serif">"</div>
                            <p className="text-gray-300 italic mb-6 relative z-10">
                                "{review.content}"
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">
                                    {review.name[0]}
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-white font-bold">{review.name}</h4>
                                    <p className="text-primary text-xs uppercase tracking-wide">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
