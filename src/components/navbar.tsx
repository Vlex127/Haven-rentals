"use client";

import Link from "next/link";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                isScrolled
                    ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm border-b border-zinc-200 dark:border-zinc-800 py-2"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:bg-indigo-700 transition-colors">
                        H
                    </div>
                    <span className="text-xl font-bold font-sans tracking-tight">Haven</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/browse" className="text-sm font-medium hover:text-indigo-600 transition-colors">Browse</Link>
                    <Link href="/list" className="text-sm font-medium hover:text-indigo-600 transition-colors">List your property</Link>
                    <Link href="/how-it-works" className="text-sm font-medium hover:text-indigo-600 transition-colors">How it works</Link>
                    <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800 mx-2" />
                    <Link href="/login" className="text-sm font-medium">Log in</Link>
                    <Link
                        href="/signup"
                        className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-indigo-200 dark:shadow-none"
                    >
                        Join Haven
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden p-2 text-zinc-900 dark:text-zinc-100"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800 p-6 flex flex-col gap-6 md:hidden shadow-xl"
                    >
                        <Link href="/browse" className="text-lg font-medium">Browse</Link>
                        <Link href="/list" className="text-lg font-medium">List property</Link>
                        <Link href="/how-it-works" className="text-lg font-medium">How it works</Link>
                        <div className="h-px w-full bg-zinc-100 dark:bg-zinc-900" />
                        <div className="flex flex-col gap-4">
                            <Link href="/login" className="text-lg font-medium text-center py-2">Log in</Link>
                            <Link href="/signup" className="w-full bg-indigo-600 text-white text-center py-3 rounded-xl font-bold">Join Haven</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
