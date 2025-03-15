import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChefHat, Clock, Repeat, Leaf } from 'lucide-react';

const features = [
    {
        icon: <ChefHat className="w-8 h-8" />,
        title: 'Fresh & Chef-Prepared',
        description: 'Every meal is crafted by professional chefs using premium ingredients'
    },
    {
        icon: <Clock className="w-8 h-8" />,
        title: 'Saves Time',
        description: 'Skip grocery shopping and meal prep - we handle everything for you'
    },
    {
        icon: <Repeat className="w-8 h-8" />,
        title: 'Flexible Subscriptions',
        description: 'Easily pause, modify, or cancel your subscription anytime'
    },
    {
        icon: <Leaf className="w-8 h-8" />,
        title: 'Dietary Options',
        description: 'Customizable meal plans for various dietary preferences and restrictions'
    }
]

export default function Features() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section className="py-20 bg-gray-900 text-white" id="features">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Experience the perfect blend of convenience, quality, and flexibility
                        with our meal subscription service.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="p-6 rounded-2xl bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400/10 text-yellow-400 mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}