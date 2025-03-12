import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

export default function Header() {
    return (
        <div className="relative min-h-screen flex items-center">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80"
                    alt="Gourmet Meal"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};