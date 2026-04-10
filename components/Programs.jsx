
import { BicepsFlexed, HeartPulse, Scale, Trophy } from 'lucide-react';

export default function Programs() {
    const programs = [
        {
            title: "Hardcore Strength",
            description: "For the gym freaks. Heavy lifting, powerlifting zones, and advanced machinery for maximum hypertrophy.",
            icon: <BicepsFlexed className="w-12 h-12 text-primary mb-4" />,
            features: ["Olympic Lifting Platforms", "Heavy Dumbbells (up to 50kg)", "Squat Racks & Smith Machines"]
        },
        {
            title: "Weight Loss Journey",
            description: "Scientifically designed cardio and HIIT programs to shed fat and boost metabolism in a supportive environment.",
            icon: <Scale className="w-12 h-12 text-primary mb-4" />,
            features: ["Treadmills & Ellipticals", "HIIT Zones", "Personalized Diet Plans"]
        },
        {
            title: "Functional Training",
            description: "Build real-world strength and agility with kettlebells, battle ropes, and plyometric equipment.",
            icon: <HeartPulse className="w-12 h-12 text-primary mb-4" />,
            features: ["Battle Ropes", "Box Jumps", "TRX Suspension"]
        },
        {
            title: "Personal Training",
            description: "Get 1-on-1 guidance from our certified trainers to reach your specific goals faster and safely.",
            icon: <Trophy className="w-12 h-12 text-primary mb-4" />,
            features: ["Customized Workouts", "Form Correction", "Progress Tracking"]
        }
    ];

    return (
        <section id="programs" className="py-16 md:py-24 bg-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">
                        Choose Your <span className="text-primary">Path</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        We cater to everyone from competitive bodybuilders to first-time gym goers.
                        Find the program that fits your goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {programs.map((program, index) => (
                        <div key={index} className="bg-card p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-all hover:transform hover:-translate-y-2 group">
                            <div className="bg-black/50 p-4 rounded-full inline-block mb-4 group-hover:scale-110 transition-transform">
                                {program.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                {program.description}
                            </p>
                            <ul className="space-y-2">
                                {program.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-xs text-gray-500">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
