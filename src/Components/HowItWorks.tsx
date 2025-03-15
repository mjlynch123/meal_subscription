import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Package, Truck, Utensils } from 'lucide-react';

const steps = [
    {
        icon: <Package className="w-12 h-12" />,
        title: 'Choose Your Plan',
        description: 'Select from our curated subscription tiers tailored to your needs'
    },
    {
        icon: <Truck className="w-12 h-12" />,
        title: 'We Cook & Deliver',
        description: 'Our chefs prepare fresh meals and deliver them right to your door'
    },
    {
        icon: <Utensils className="w-12 h-12" />,
        title: 'Enjoy & Repeat',
        description: 'Heat, eat, and enjoy! New menu options available weekly'
    }
];

export default function HowItWorks() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section className="py-20 bg-gray-50" id="how-it-works">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">How It Works</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Getting started with Culinary Cloud is simple. Follow these three easy steps to begin your journey to better meals.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-100 text-yellow-600 mb-6">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};