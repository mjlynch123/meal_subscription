import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            {/* CTA Section */}
            <div className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-black mb-6">
                            Ready to Transform Your Meals?
                        </h2>
                        <p className="text-gray-800 mb-8 text-lg max-w-2xl mx-auto">
                            Join thousands of satisfied customers enjoying chef-prepared meals
                            delivered to their doorstep.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-black text-white font-semibold rounded-full flex items-center gap-2 mx-auto hover:bg-gray-900 transition-colors duration-300"
                        >
                            Get Started Now
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* Footer Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">Culinary Cloud</h3>
                        <p className="text-gray-400 mb-4">
                            Delivering chef-prepared, nutritious meals right to your doorstep.
                            Making healthy eating effortless and delicious.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    How It Works
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li className="text-gray-400">support@culinarycloud.com</li>
                            <li className="text-gray-400">1-800-CULINARY</li>
                            <li className="text-gray-400">
                                123 Gourmet Street
                                <br />
                                Foodie City, FC 12345
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} Culinary Cloud. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}