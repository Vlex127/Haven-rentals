"use client";

import { motion } from "framer-motion";
import { MessageSquare, ShieldCheck, Wallet, Zap, Eye, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "No Brokerage Fees",
        description: "Eliminate hefty referral and brokerage fees. Direct landlord-tenant connection means more money stays in your pocket.",
        icon: Wallet,
        color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/20 dark:text-emerald-400"
    },
    {
        title: "Direct Messaging",
        description: "Instant, real-time communication between both parties. No intermediaries, no delays, total clarity.",
        icon: MessageSquare,
        color: "bg-blue-50 text-blue-600 dark:bg-blue-950/20 dark:text-blue-400"
    },
    {
        title: "Verified Profiles",
        description: "Extensive background checks for both landlords and tenants. High-trust community with reliable ratings and reviews.",
        icon: ShieldCheck,
        color: "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/20 dark:text-indigo-400"
    },
    {
        title: "Instant Scheduling",
        description: "Easily book viewings with a shared calendar system. No back-and-forth phone tag, just click and confirm.",
        icon: Calendar,
        color: "bg-amber-50 text-amber-600 dark:bg-amber-950/20 dark:text-amber-400"
    },
    {
        title: "Digital Paperwork",
        description: "Seamlessly sign rental agreements and manage deposits within the platform. Secure, legal, and fast.",
        icon: Zap,
        color: "bg-purple-50 text-purple-600 dark:bg-purple-950/20 dark:text-purple-400"
    },
    {
        title: "Transparency First",
        description: "Clear listing history, open amenity checklists, and genuine photos verified by our screening process.",
        icon: Eye,
        color: "bg-rose-50 text-rose-600 dark:bg-rose-950/20 dark:text-rose-400"
    }
];

export default function Features() {
    return (
        <section className="bg-transparent py-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="text-center max-w-3xl mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-4"
                    >
                        Why Haven?
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-sans font-bold text-zinc-900 dark:text-white mb-6 tracking-tight"
                    >
                        Direct connection, better experience.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-600 dark:text-zinc-400"
                    >
                        Built for a modern rental market where speed, transparency, and trust are at the core.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * idx }}
                            className="group p-8 bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/10 rounded-[2.5rem] hover:bg-white dark:hover:bg-indigo-600/10 hover:shadow-2xl hover:shadow-indigo-100 dark:hover:shadow-none hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform", feature.color)}>
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 tracking-tight">
                                {feature.title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
