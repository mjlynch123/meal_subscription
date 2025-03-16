import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

const steps = [
    { id: 1, title: "Personal Info" },
    { id: 2, title: "Account Details" },
    { id: 3, title: "Confirm & Submit" }
];

export default function MultiStepSignup() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        plan: "Basic"
    });

    const nextStep = () => setStep((prev) => (prev < steps.length ? prev + 1 : prev));
    const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        alert("Signup Complete! 🎉");
        console.log("Submitted Data:", formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <motion.div
                key={step}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md p-8 rounded-lg bg-gray-800 shadow-xl"
            >
                {/* Progress Indicator */}
                <div className="flex justify-between mb-6">
                    {steps.map((s) => (
                        <div key={s.id} className={`text-sm font-semibold ${s.id === step ? "text-yellow-400" : "text-gray-400"}`}>
                            {s.title}
                        </div>
                    ))}
                </div>

                {/* Step Content */}
                {step === 1 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Enter Your Info</h2>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 mb-4 bg-gray-700 rounded-lg text-white"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 mb-4 bg-gray-700 rounded-lg text-white"
                        />
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Set Up Your Account</h2>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-3 mb-4 bg-gray-700 rounded-lg text-white"
                        />
                        <select
                            name="plan"
                            value={formData.plan}
                            onChange={handleChange}
                            className="w-full p-3 bg-gray-700 rounded-lg text-white"
                        >
                            <option value="Basic">Basic Plan</option>
                            <option value="Premium">Premium Plan</option>
                            <option value="Elite">Elite Plan</option>
                        </select>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Confirm Your Details</h2>
                        <p><strong>Name:</strong> {formData.name}</p>
                        <p><strong>Email:</strong> {formData.email}</p>
                        <p><strong>Plan:</strong> {formData.plan}</p>
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6">
                    {step > 1 && (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={prevStep}
                            className="px-6 py-3 bg-white/10 text-white font-semibold rounded-full flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back
                        </motion.button>
                    )}

                    {step < steps.length ? (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={nextStep}
                            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-full flex items-center gap-2 hover:shadow-lg transition-all duration-300"
                        >
                            Next
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    ) : (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleSubmit}
                            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all duration-300"
                        >
                            Submit
                        </motion.button>
                    )}
                </div>
            </motion.div>
        </div>
    );
}