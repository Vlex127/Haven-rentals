"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Bed, Bath, ArrowRight } from "lucide-react";
import Link from "next/link";

const mockListings = [
    {
        title: "Luxury Penthouse in Canary Wharf",
        location: "London, UK",
        price: "£4,500/mo",
        beds: 3,
        baths: 2,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Modern Loft near Shoreditch",
        location: "London, UK",
        price: "£2,800/mo",
        beds: 1,
        baths: 1,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Charming Victorian Terrace",
        location: "London, UK",
        price: "£3,200/mo",
        beds: 2,
        baths: 2,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800",
    }
];

export default function Listings() {
    return (
        <section className="bg-transparent py-32 px-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="w-full flex justify-between items-end mb-16 px-4">
                    <div className="max-w-2xl">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-4"
                        >
                            Featured Collections
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-sans font-bold text-zinc-900 dark:text-white leading-tight tracking-tight"
                        >
                            Curated homes, direct from <span className="text-zinc-500 italic">owners</span>.
                        </motion.h2>
                    </div>
                    <Link
                        href="/properties"
                        className="hidden md:flex items-center gap-2 font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                        See all listings <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
                    {mockListings.map((listing, idx) => (
                        <Link href={`/properties/${idx + 1}`} key={idx} className="block">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * idx }}
                                className="group cursor-pointer bg-white dark:bg-zinc-900 overflow-hidden rounded-[2.5rem] border border-zinc-100 dark:border-white/5 shadow-lg shadow-zinc-200/20 dark:shadow-none hover:shadow-2xl hover:border-indigo-200 dark:hover:border-indigo-900/50 transition-all duration-500 h-full"
                            >
                                <div className="relative aspect-[4/3] w-full overflow-hidden">
                                    <img
                                        src={listing.image}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                        alt={listing.title}
                                    />
                                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-full text-xs font-bold tracking-widest uppercase">
                                        Verified Direct
                                    </div>
                                    <div className="absolute bottom-6 right-6 p-3 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-2xl flex items-center gap-2">
                                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                        <span className="text-sm font-bold">{listing.rating}</span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 transition-colors leading-tight">
                                            {listing.title}
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-medium mb-6">
                                        <MapPin className="w-4 h-4" />
                                        <span className="text-sm">{listing.location}</span>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-zinc-50 dark:border-white/5 pt-6">
                                        <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400">
                                            <div className="flex items-center gap-2">
                                                <Bed className="w-4 h-4" />
                                                <span className="text-sm font-bold">{listing.beds}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Bath className="w-4 h-4" />
                                                <span className="text-sm font-bold">{listing.baths}</span>
                                            </div>
                                        </div>
                                        <p className="text-xl font-bold font-sans text-zinc-900 dark:text-white">
                                            {listing.price}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <Link href="/properties" className="md:hidden mt-12 w-full py-4 bg-zinc-100 dark:bg-white/5 text-zinc-900 dark:text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-colors">
                    Browse all
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </section>
    );
}
