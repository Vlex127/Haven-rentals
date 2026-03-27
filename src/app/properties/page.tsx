"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Bed, Bath, SlidersHorizontal, Map, Home as HomeIcon, Star, Filter } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";

const mockListings = [
    {
        title: "Luxury Penthouse in Canary Wharf",
        location: "London, UK",
        price: "£4,500/mo",
        beds: 3,
        baths: 2,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=800",
        tag: "Verified Direct",
    },
    {
        title: "Modern Loft near Shoreditch",
        location: "London, UK",
        price: "£2,800/mo",
        beds: 1,
        baths: 1,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
        tag: "Available Now",
    },
    {
        title: "Charming Victorian Terrace",
        location: "London, UK",
        price: "£3,200/mo",
        beds: 2,
        baths: 2,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800",
        tag: "Popular",
    },
    {
        title: "Sleek Studio apartment in City Centre",
        location: "Manchester, UK",
        price: "£1,400/mo",
        beds: 1,
        baths: 1,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800",
        tag: "Verified Direct",
    },
    {
        title: "Riverside 2-Bed with Balcony",
        location: "London, UK",
        price: "£3,800/mo",
        beds: 2,
        baths: 2,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&q=80&w=800",
        tag: "Pet Friendly",
    },
    {
        title: "Spacious suburban family home",
        location: "Surrey, UK",
        price: "£2,200/mo",
        beds: 4,
        baths: 3,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
        tag: "Family Perfect",
    }
];

export default function PropertiesPage() {
    const [view, setView] = useState<"grid" | "map">("grid");

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-black font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <Navbar />

            {/* Filter Header Section */}
            <div className="pt-24 pb-6 px-6 border-b border-zinc-100 dark:border-zinc-900 sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-xl z-40">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Main Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full max-w-2xl bg-zinc-100 dark:bg-zinc-900 p-2 rounded-full flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 focus-within:ring-2 focus-within:ring-indigo-500/50 transition-all shadow-sm"
                    >
                        <div className="flex-1 flex items-center gap-3 px-4 h-10 w-full">
                            <Search className="w-5 h-5 text-indigo-500" />
                            <input
                                type="text"
                                placeholder="Search by city, neighborhood, or postcode"
                                className="bg-transparent border-none focus:ring-0 w-full font-medium text-zinc-900 dark:text-white placeholder:text-zinc-500 outline-none"
                            />
                        </div>
                        <div className="h-6 w-px bg-zinc-300 dark:bg-zinc-700 hidden md:block" />
                        <button className="hidden md:flex flex-none items-center gap-2 px-4 h-10 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-colors text-zinc-700 dark:text-zinc-300 font-medium">
                            <SlidersHorizontal className="w-4 h-4" />
                            Filters
                        </button>
                        <button className="px-6 h-10 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20">
                            Search
                        </button>
                    </motion.div>

                    {/* View Toggles */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 p-1.5 rounded-full border border-zinc-200 dark:border-zinc-800"
                    >
                        <button
                            onClick={() => setView("grid")}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${view === "grid" ? "bg-white dark:bg-black text-indigo-600 shadow border border-zinc-200 dark:border-zinc-800" : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"}`}
                        >
                            <HomeIcon className="w-4 h-4" /> List
                        </button>
                        <button
                            onClick={() => setView("map")}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${view === "map" ? "bg-white dark:bg-black text-indigo-600 shadow border border-zinc-200 dark:border-zinc-800" : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"}`}
                        >
                            <Map className="w-4 h-4" /> Map
                        </button>
                    </motion.div>
                </div>

                {/* Quick Filters */}
                <div className="max-w-7xl mx-auto flex items-center gap-3 mt-6 overflow-x-auto pb-2 scrollbar-hide shrink-0">
                    {["Price: Any", "Beds: 1+", "Property Type", "Pet Friendly", "Instant Book", "Furnished"].map((filter, i) => (
                        <button key={i} className="whitespace-nowrap flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-full text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 transition-colors">
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-10 flex gap-8">

                {/* Listings Grid */}
                <div className={`w-full ${view === "map" ? "lg:w-3/5" : ""}`}>
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Properties for Rent</h1>
                            <p className="text-zinc-500 dark:text-zinc-400 font-medium">Showing 142 direct-from-landlord homes</p>
                        </div>
                        <div className="hidden md:flex items-center gap-2 text-sm font-bold text-zinc-500">
                            <Filter className="w-4 h-4" />
                            Sort by: <span className="text-indigo-600 cursor-pointer">Recommended</span>
                        </div>
                    </div>

                    <div className={`grid grid-cols-1 ${view === "map" ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"} gap-8`}>
                        {mockListings.map((listing, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.05 * idx }}
                                className="group cursor-pointer bg-white dark:bg-zinc-900 overflow-hidden rounded-[2rem] border border-zinc-100 dark:border-zinc-800/50 shadow-md shadow-zinc-200/20 dark:shadow-none hover:shadow-2xl hover:border-indigo-200 dark:hover:border-indigo-900/50 transition-all duration-300 flex flex-col"
                            >
                                <div className="relative aspect-[4/3] w-full overflow-hidden shrink-0">
                                    <img
                                        src={listing.image}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        alt={listing.title}
                                    />
                                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 dark:bg-black/80 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 border border-white dark:border-zinc-800">
                                        {listing.tag}
                                    </div>
                                    <div className="absolute bottom-4 right-4 p-2.5 bg-white/95 dark:bg-black/80 backdrop-blur-md rounded-xl flex items-center gap-1.5 shadow-lg border border-white dark:border-zinc-800">
                                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                                        <span className="text-xs font-bold text-zinc-900 dark:text-white">{listing.rating}</span>
                                    </div>
                                    <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-white dark:hover:bg-black transition-colors text-zinc-600 dark:text-zinc-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                    </button>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight mb-2 line-clamp-1">
                                            {listing.title}
                                        </h3>
                                        <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 font-medium mb-4">
                                            <MapPin className="w-3.5 h-3.5" />
                                            <span className="text-xs">{listing.location}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800 pt-5 mt-auto">
                                        <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                                            <div className="flex items-center gap-1.5 bg-zinc-50 dark:bg-zinc-800/50 px-2 py-1 rounded-lg">
                                                <Bed className="w-3.5 h-3.5 text-zinc-400" />
                                                <span className="text-xs font-bold">{listing.beds}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 bg-zinc-50 dark:bg-zinc-800/50 px-2 py-1 rounded-lg">
                                                <Bath className="w-3.5 h-3.5 text-zinc-400" />
                                                <span className="text-xs font-bold">{listing.baths}</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-bold font-sans text-indigo-600 dark:text-indigo-400">
                                                {listing.price}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-16 flex justify-center items-center gap-2">
                        <button className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500">
                            &larr;
                        </button>
                        {[1, 2, 3, "...", 8].map((page, i) => (
                            <button key={i} className={`w-10 h-10 rounded-full font-bold text-sm flex items-center justify-center transition-colors ${page === 1 ? 'bg-indigo-600 text-white' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'}`}>
                                {page}
                            </button>
                        ))}
                        <button className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-900 dark:text-white">
                            &rarr;
                        </button>
                    </div>
                </div>

                {/* Optional Map View */}
                {view === "map" && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="hidden lg:block w-2/5 rounded-[3rem] overflow-hidden sticky top-48 h-[calc(100vh-14rem)] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 relative shadow-inner"
                    >
                        {/* Fake Map Interface */}
                        <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=London,UK&zoom=12&size=800x800&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0x333333&style=feature:all|element:labels.text.stroke|color:0xffffff&style=feature:landscape|element:geometry|color:0xf5f5f5&style=feature:poi|element:geometry|color:0xeeeeee&style=feature:poi.park|element:geometry|color:0xe5e5e5&style=feature:road|element:geometry|color:0xffffff&style=feature:road.local|element:geometry|color:0xffffff&style=feature:road.highway|element:geometry|color:0xcccccc&style=feature:water|element:geometry|color:0xc9c9c9')] bg-cover bg-center grayscale opacity-80 dark:invert dark:opacity-60" />

                        {/* Map Pins */}
                        {[
                            { top: '40%', left: '30%', price: '£4.5k' },
                            { top: '55%', left: '60%', price: '£2.8k' },
                            { top: '30%', left: '70%', price: '£3.2k' },
                            { top: '65%', left: '40%', price: '£3.8k' },
                        ].map((pin, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5 + (0.1 * i), type: "spring" }}
                                className="absolute bg-white dark:bg-black text-indigo-600 dark:text-indigo-400 font-bold text-xs py-1.5 px-3 rounded-full shadow-lg border border-zinc-200 dark:border-zinc-800 hover:scale-110 hover:bg-indigo-600 hover:text-white cursor-pointer origin-bottom transition-colors"
                                style={{ top: pin.top, left: pin.left, transform: 'translate(-50%, -100%)' }}
                            >
                                {pin.price}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-[6px] border-t-white dark:border-t-black border-transparent" />
                            </motion.div>
                        ))}

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-full text-xs font-bold shadow-xl border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white flex items-center gap-2">
                            <Search className="w-4 h-4 text-indigo-600 animate-spin-slow" /> Searching this area...
                        </div>
                    </motion.div>
                )}
            </main>

            <Footer />
        </div>
    );
}
