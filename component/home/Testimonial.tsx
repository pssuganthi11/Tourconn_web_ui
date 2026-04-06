import Image from "next/image";
import men from "../../public/img/men.png";
import women from "../../public/img/women.png";
import Link from "next/link";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Solo Traveler",
    image: men,
    review:
      "Tourconn completely redefined how I plan my solo trips. The curation is so specific—it felt like they knew exactly what I was looking for before I did.",
  },
  {
    name: "Michael Chen",
    role: "Family Planner",
    image: women,
    review:
      "Booking for a family of 5 is usually a nightmare. Tourconn made it seamless, and the local guides were exceptionally patient with the kids.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl md:text-4xl font-bold">Traveler Stories</h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Real experiences from our global community.
        </p>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm relative"
          >
            {/* Quote Icon */}
            <span className="absolute top-4 right-6 text-purple-200 text-4xl">
              “
            </span>

            {/* User */}
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={item.image}
                alt={item.name}
                width={50}
                height={50}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-sm">{item.name}</h4>
                <p className="text-xs text-gray-500 uppercase">{item.role}</p>
              </div>
            </div>

            {/* Review */}
            <p className="text-sm text-gray-600 leading-relaxed">
              “{item.review}”
            </p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-[#1a706e] to-[#1a706d] rounded-3xl p-8 md:p-12 text-center text-white shadow-lg">
          <h3 className="text-xl md:text-3xl font-bold mb-4">
            Ready for your next adventure?
          </h3>

          <p className="text-sm md:text-base text-white/80 mb-6">
            Join 50,000+ travelers exploring the world with our hand-crafted,
            curated experiences.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/auth/login">
              <button className="bg-white text-[#1a706d] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
                Get Started Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
