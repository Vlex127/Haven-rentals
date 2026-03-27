"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Home, UserCheck } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
    return (
        <section className="bg-transparent py-32 px-6">
            <div className="max-w-7xl mx-auto rounded-[4rem] bg-indigo-600 p-12 md:p-24 overflow-hidden relative shadow-2xl shadow-indigo-200 dark:shadow-none">
                {/* Background blobs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-[100px] opacity-50 translate-x-1/2 -translate-y-1/2 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-700 rounded-full blur-[80px] opacity-40 -translate-x-1/4 translate-y-1/4" />

                <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col gap-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center text-white"
                        >
                            <Sparkles className="w-8 h-8" />
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-sans font-bold text-white leading-[1.1] tracking-tight"
                        >
                            Join the direct rental revolution.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-indigo-100/80 leading-relaxed font-medium"
                        >
                            Sign up today and experience the future of renting. Faster matches, lower costs, and zero middleman stress.
                        </motion.p>
                    </div>

                    <div className="flex flex-col gap-6">

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="p-8 bg-indigo-500/30 backdrop-blur-md rounded-[2.5rem] border border-indigo-400 group hover:bg-white hover:border-white transition-all duration-500 cursor-pointer"
                        >
                            <Link href="/signup?role=tenant" className="flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                        <UserCheck className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-indigo-900 transition-colors">Find a Home</h3>
                                        <p className="text-indigo-100 group-hover:text-zinc-600 transition-colors font-medium mt-1">Free for tenants, always.</p>
                                    </div>
                                </div>
                                <ArrowRight className="w-8 h-8 text-white group-hover:text-indigo-900 transition-colors group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="p-8 bg-indigo-500/30 backdrop-blur-md rounded-[2.5rem] border border-indigo-400 group hover:bg-white hover:border-white transition-all duration-500 cursor-pointer"
                        >
                            <Link href="/signup?role=landlord" className="flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                        <Home className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-indigo-900 transition-colors">List your Property</h3>
                                        <p className="text-indigo-100 group-hover:text-zinc-600 transition-colors font-medium mt-1">Reach verified tenants directly.</p>
                                    </div>
                                </div>
                                <ArrowRight className="w-8 h-8 text-white group-hover:text-indigo-900 transition-colors group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
