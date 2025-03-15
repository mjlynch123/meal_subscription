import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: 'Can I cancel my subscription anytime?',
        answer: 'Yes! You can cancel, pause, or modify your subscription at any time through your account dashboard with no cancellation fees.'
    },
    {
        question: 'Are the meals fresh or frozen?',
        answer: 'All our meals are prepared fresh and delivered chilled (not frozen) to maintain optimal taste and nutritional value.'
    },
    {
        question: 'How long do the meals last?',
        answer: 'Our meals stay fresh for up to 5 days when stored properly in the refrigerator. Each meal container is clearly marked with a "best by" date.'
    },
    {
        question: 'Do you accommodate dietary restrictions?',
        answer: 'Yes, we offer various meal options for different dietary preferences including vegetarian, vegan, gluten-free, and keto-friendly options.'
    },
    {
        question: 'What areas do you deliver to?',
        answer: 'We currently deliver to most major metropolitan areas in the United States. Enter your zip code during signup to check if we deliver to your area.'
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section className="py-20 bg-white" id="faq">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about our meal subscription service.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="mb-4"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                            >
                                <span className="font-semibold text-left">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 bg-gray-50 rounded-b-lg">
                                            <p className="text-gray-600">{faq.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;