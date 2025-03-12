import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

export default function Header() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};