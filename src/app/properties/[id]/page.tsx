"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Share, Heart, MapPin, Bed, Bath, Grid, Calendar, ShieldCheck, Mail, ChevronRight, Star } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export default function PropertyDetailsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-black font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <Navbar />

            <main className="flex-1 w-full pt-20 pb-16">

                {/* Header Actions */}
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/properties" className="flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to search
                    </Link>
                    <div className="flex items-center gap-2 border-l border-zinc-200 dark:border-zinc-800 pl-4 ml-4">
                        <button className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-600 dark:text-zinc-300">
                            <Share className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 text-zinc-600 dark:text-zinc-300 hover:text-red-500 transition-colors">
                            <Heart className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Photo Gallery Grid */}
                <div className="max-w-7xl mx-auto px-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[50vh] md:h-[60vh] rounded-[2rem] overflow-hidden"
                    >
                        {/* Main Cover (Takes up half) */}
                        <div className="col-span-1 md:col-span-2 row-span-2 relative group overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600" alt="Main" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>

                        {/* Side Images */}
                        <div className="hidden md:block col-span-1 row-span-1 relative group overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800" alt="Interior 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="hidden md:block col-span-1 row-span-1 relative group overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                            <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800" alt="Interior 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="hidden md:block col-span-1 row-span-1 relative group overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" alt="Interior 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="hidden md:block col-span-1 row-span-1 relative group overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                            <img src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=80&w=800" alt="Interior 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm cursor-pointer">
                                <span className="text-white font-bold flex items-center gap-2"><Grid className="w-5 h-5" /> View all 24 photos</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Detail Section */}
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 relative">

                    {/* Main Content (Left) */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="flex items-start justify-between mb-2">
                                <h1 className="text-3xl md:text-5xl font-bold font-sans text-zinc-900 dark:text-white leading-tight">
                                    Luxury Penthouse in Canary Wharf
                                </h1>
                            </div>

                            <div className="flex items-center gap-2 text-zinc-500 font-medium mb-8 text-lg">
                                <MapPin className="w-5 h-5 text-indigo-500" /> London, E14
                                <span className="mx-2 text-zinc-300 dark:text-zinc-700">&bull;</span>
                                <span className="text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1 rounded-full text-sm">Direct Owner Listing</span>
                            </div>

                            <div className="flex flex-wrap items-center gap-8 py-6 border-y border-zinc-100 dark:border-zinc-800/50 mb-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-500">
                                        <Bed className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-zinc-400">Bedrooms</p>
                                        <p className="text-lg font-bold text-zinc-900 dark:text-white">3 Beds</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-500">
                                        <Bath className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-zinc-400">Bathrooms</p>
                                        <p className="text-lg font-bold text-zinc-900 dark:text-white">2 Baths</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-500">
                                        <Grid className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-zinc-400">Footprint</p>
                                        <p className="text-lg font-bold text-zinc-900 dark:text-white">1,450 sqft</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="prose prose-lg dark:prose-invert prose-indigo max-w-none prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-headings:font-bold prose-headings:text-zinc-900 dark:prose-headings:text-white mb-12"
                        >
                            <h2>About this property</h2>
                            <p>
                                Experience unparalleled luxury living in this stunning 3-bedroom, 2-bathroom penthouse apartment located in the prestigious heart of Canary Wharf. Offering breathtaking panoramic views of the River Thames and the London skyline, this property combines modern elegance with state-of-the-art amenities.
                            </p>
                            <p>
                                The expansive open-plan living and dining area is flooded with natural light through floor-to-ceiling windows, leading out to a private wrap-around terrace perfect for entertaining. The custom-designed chef's kitchen features top-of-the-line appliances and marble countertops.
                            </p>
                            <h3>Key Features:</h3>
                            <ul>
                                <li>24-hour concierge and security service</li>
                                <li>Resident-only private gym, spa, and swimming pool</li>
                                <li>Secure underground parking space included</li>
                                <li>Underfloor heating and central climate control</li>
                                <li>Hyper-fast fiber optic internet pre-installed</li>
                            </ul>
                            <button className="text-indigo-600 dark:text-indigo-400 font-bold no-underline hover:underline hover:text-indigo-700 transition-colors flex items-center gap-1 mt-4">
                                Show more <ChevronRight className="w-4 h-4" />
                            </button>
                        </motion.div>

                        <div className="w-full h-px bg-zinc-100 dark:bg-zinc-800/50 my-12" />

                        {/* Direct Landlord Box (Replacing agent info) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/50 rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-inner"
                        >
                            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Landlord" className="w-24 h-24 rounded-full border-4 border-white dark:border-zinc-900 shadow-xl object-cover" />
                            <div className="text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Eleanor Rigby</h3>
                                    <ShieldCheck className="w-5 h-5 text-indigo-500" />
                                </div>
                                <p className="text-indigo-600 dark:text-indigo-400 font-bold mb-4 flex items-center justify-center md:justify-start gap-1">
                                    <Star className="w-4 h-4 fill-current" /> 5.0 (14 reviews) &bull; Verified Owner
                                </p>
                                <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-sm">
                                    "I've owned properties in Canary Wharf for 8 years. I pride myself on maintaining my apartments perfectly and addressing tenant needs immediately."
                                </p>
                                <div className="flex mt-6 gap-3 flex-wrap justify-center md:justify-start">
                                    <button className="px-6 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full font-bold text-zinc-900 dark:text-white shadow hover:border-indigo-500 hover:text-indigo-600 transition-colors flex items-center gap-2">
                                        <Mail className="w-4 h-4" /> Message
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Booking/Contact Sidebar (Right) */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="sticky top-28 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] shadow-2xl p-8"
                        >
                            <div className="flex items-end justify-between mb-8">
                                <div>
                                    <span className="text-3xl font-bold font-sans text-zinc-900 dark:text-white">£4,500</span>
                                    <span className="text-zinc-500 font-medium">/month</span>
                                </div>
                                <div className="text-sm font-bold text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1 rounded-full">
                                    Available Now
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 mb-8">
                                <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:border-indigo-500 transition-colors group">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-500 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                                            <Calendar className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Move-in Date</p>
                                            <p className="text-sm font-bold text-zinc-900 dark:text-white">Select date</p>
                                        </div>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-zinc-400" />
                                </div>

                                <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:border-indigo-500 transition-colors group">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-500 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                                            <ShieldCheck className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Deposit Scheme</p>
                                            <p className="text-sm font-bold text-zinc-900 dark:text-white">Zero Deposit available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/20 transition-all active:scale-95 mb-4">
                                Send Application
                            </button>
                            <button className="w-full py-4 bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-full font-bold text-lg hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-400 transition-all active:scale-95">
                                Book a Viewing
                            </button>

                            <div className="mt-6 flex items-center justify-center gap-2 text-xs font-bold text-zinc-400">
                                <ShieldCheck className="w-4 h-4" /> Payments processed securely. No hidden fees.
                            </div>
                        </motion.div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
