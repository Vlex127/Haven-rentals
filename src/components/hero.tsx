"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Hero() {
    return (
        <BackgroundBeamsWithCollision className="min-h-[90vh] md:min-h-[90vh] pt-24 pb-16 px-6">
            <div className="relative z-20 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
                <div className="flex flex-col items-start gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="px-4 py-1.5 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-bold tracking-widest uppercase border border-indigo-100 dark:border-indigo-900"
                    >
                        Direct & Transparent Renting
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl lg:text-7xl font-sans font-bold leading-[1.1] tracking-tight text-zinc-900 dark:text-white"
                    >
                        Connect <span className="text-indigo-600">Landlords</span> & <span className="text-indigo-600">Tenants</span> directly.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg"
                    >
                        Cut the middleman. Find your perfect home or list your property with zero brokerage fees, built-in trust scores, and instant direct messaging.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="w-full max-w-2xl bg-white dark:bg-zinc-900 p-3 rounded-2xl md:rounded-full shadow-2xl shadow-indigo-100 dark:shadow-none border border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row items-center gap-2"
                    >
                        <div className="flex-1 flex items-center gap-4 px-4 w-full h-12 md:h-14">
                            <Search className="w-5 h-5 text-indigo-500" />
                            <input
                                type="text"
                                placeholder="Where would you like to live?"
                                className="bg-transparent border-none focus:ring-0 w-full font-medium text-zinc-900 dark:text-white placeholder:text-zinc-400"
                            />
                        </div>

                        <div className="hidden md:flex h-8 w-px bg-zinc-200 dark:bg-zinc-700 mx-2" />

                        <div className="hidden md:flex flex-none items-center gap-3 px-4 h-14 w-40">
                            <MapPin className="w-5 h-5 text-zinc-400" />
                            <span className="text-zinc-500 font-medium">Any city</span>
                        </div>

                        <button className="w-full md:w-auto px-8 h-12 md:h-14 bg-indigo-600 text-white font-bold rounded-2xl md:rounded-full hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 group">
                            Search
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="flex items-center gap-6 mt-4"
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-200 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full border-2 border-white dark:border-zinc-900 bg-indigo-600 flex items-center justify-center text-[10px] text-white font-bold">
                                10k+
                            </div>
                        </div>
                        <p className="text-sm font-medium text-zinc-500">
                            Trusted by 10,000+ landlords & tenants
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:flex aspect-[4/5] lg:aspect-[1/1] w-full max-w-[500px] ml-auto"
                >
                    {/* Abstract graphic or image placeholder */}
                    <div className="absolute inset-0 bg-indigo-100 dark:bg-indigo-900/10 rounded-[4rem] rounded-tl-[10rem] rotate-3 -z-10" />
                    <div className="absolute inset-4 bg-white dark:bg-zinc-800 rounded-[3rem] shadow-2xl overflow-hidden border border-zinc-100 dark:border-zinc-700">
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent" />
                        <img
                            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000"
                            className="w-full h-full object-cover"
                            alt="Premium Home"
                        />

                        {/* Floating Card */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-10 -left-10 bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-800 flex items-center gap-4"
                        >
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                <Users className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Direct Match</p>
                                <p className="text-sm font-bold text-zinc-900 dark:text-white">Tenant verified</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 -right-10 bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-800 flex flex-col gap-2"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                                <p className="text-sm font-bold text-zinc-900 dark:text-white">New direct listing</p>
                            </div>
                            <p className="text-xs text-zinc-500 font-medium">London SE1, Luxury Studio</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </BackgroundBeamsWithCollision>
    );
}
