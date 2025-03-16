import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';
import MultiStepSignup from './SignupForm'; // Import the Signup form

const plans = [
    {
        name: 'Basic Plan',
        price: '9.99',
        features: [
            '5 meals per week',
            'Standard menu options',
            'Weekly delivery',
            'Basic meal tracking',
            'Email support'
        ],
        popular: false,
        gradient: 'bg-gradient-to-br from-gray-200 to-gray-300',
        scale: 'scale-100',
        padding: 'p-8'
    },
    {
        name: 'Premium Plan',
        price: '19.99',
        features: [
            '7 meals per week',
            'Premium menu selection',
            'Flexible delivery schedule',
            'Nutrition tracking',
            'Priority support',
            'Customization options'
        ],
        popular: true,
        gradient: 'bg-gradient-to-br from-yellow-400 to-yellow-500',
        scale: 'scale-105',
        padding: 'p-10'
    },
    {
        name: 'Elite Plan',
        price: '29.99',
        features: [
            '10 meals per week',
            'Full menu access',
            'Any-time delivery',
            'Advanced nutrition tracking',
            '24/7 concierge support',
            'Full customization',
            'Exclusive recipes'
        ],
        popular: false,
        gradient: 'bg-gradient-to-br from-gray-700 to-gray-800 text-white',
        scale: 'scale-100',
        padding: 'p-8'
    }
];

export default function Pricing() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    // **State to track the selected plan and show the signup form**
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

    return (
        <section className="py-20 bg-white" id="pricing">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Select the perfect meal plan that fits your lifestyle and dietary needs.
                        All plans include fresh, chef-prepared meals delivered to your door.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative rounded-2xl overflow-hidden shadow-xl ${plan.gradient} flex flex-col justify-between ${plan.padding} ${plan.scale} transition-transform`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-yellow-400 text-black px-4 py-1 rounded-bl-lg font-semibold">
                                    Most Popular
                                </div>
                            )}
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold">${plan.price}</span>
                                    <span className="text-lg">/week</span>
                                </div>
                                <ul className="space-y-4">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center gap-2">
                                            <Check className="w-5 h-5 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Updated "Get Started" Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedPlan(plan.name)} // Open signup form with selected plan
                                className="w-full mt-8 py-3 rounded-full font-semibold transition-all duration-300 bg-white text-black hover:bg-gray-100"
                            >
                                Get Started
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Show Signup Form if a Plan is Selected */}

        </section>
    );
}