import react, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

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

