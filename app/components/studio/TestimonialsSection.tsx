import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const testimonials = [
  {
    quote: "The best haircut I've ever had. The attention to detail is unmatched.",
    name: "John Doe",
    image: "/path/to/customer1.jpg", // Replace with actual image path
  },
  {
    quote: "A truly professional and relaxing experience. Highly recommended!",
    name: "Jane Smith",
    image: "/path/to/customer2.jpg", // Replace with actual image path
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-deep-900">
      <div className="container mx-auto px-4">
        <SectionHeading title="What Our Clients Say" subtitle="Testimonials from our valued customers" />
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-deep-800 p-8 rounded-lg border border-deep-700">
              <p className="text-xl italic text-gray-300">"{testimonial.quote}"</p>
              <div className="flex items-center mt-6">
                {/* <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" /> */}
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
