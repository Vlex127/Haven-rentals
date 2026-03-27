"use client";

import Link from "next/link";
import { Github, X, Instagram, Linkedin, ArrowRight, Heart } from "lucide-react";
import { motion } from "framer-motion";
export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-white pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                <div className="flex flex-col gap-6">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                            H
                        </div>
                        <span className="text-2xl font-bold tracking-tight">Haven</span>
                    </Link>
                    <p className="text-zinc-400 text-lg leading-relaxed max-w-sm">
                        Empowering the rental market through direct transparency and verified trust. Built for landlords and tenants, not brokers.
                    </p>
                    <div className="flex items-center gap-4">
                        {[X, Instagram, Linkedin, Github].map((Icon, i) => (
                            <Link
                                key={i}
                                href="#"
                                className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:scale-110 transition-all border border-zinc-800"
                            >
                                <Icon className="w-5 h-5" />
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-8">Quick Links</h4>
                    <ul className="flex flex-col gap-4">
                        {["Browse Homes", "Find Tenants", "How it works", "Security & Trust"].map((link, i) => (
                            <li key={i}>
                                <Link href="#" className="text-zinc-400 hover:text-white hover:translate-x-2 transition-all inline-block">
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-8">For Landlords</h4>
                    <ul className="flex flex-col gap-4">
                        {["List Property", "Pricing Plans", "Listing Policy", "Support Center"].map((link, i) => (
                            <li key={i}>
                                <Link href="#" className="text-zinc-400 hover:text-white hover:translate-x-2 transition-all inline-block">
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-8">Newsletter</h4>
                    <p className="text-zinc-400 mb-6 font-medium">Get the latest market insights and exclusive property listings.</p>
                    <div className="bg-zinc-900 p-2 rounded-2xl flex border border-zinc-800 focus-within:border-indigo-600/50 transition-colors">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-transparent border-none focus:ring-0 flex-1 px-4 text-sm font-medium"
                        />
                        <button className="bg-white text-black font-bold px-6 py-2 rounded-xl hover:bg-zinc-200 transition-colors">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-zinc-900 pt-12 gap-8">
                <p className="text-zinc-500 text-sm font-medium">
                    © 2026 Haven Rental Network. All rights reserved.
                </p>
                <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
                    Made with <Heart className="w-4 h-4 text-rose-600 fill-rose-600" /> by the Haven Team.
                </div>
                <div className="flex items-center gap-8">
                    <Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                    <Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
