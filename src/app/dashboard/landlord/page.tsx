"use client";

import { motion } from "framer-motion";
import { Plus, Home, MessageSquare, TrendingUp, Users, CheckCircle, Clock } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const stats = [
    { label: "Active Listings", value: "3", icon: <Home className="w-5 h-5" />, trend: "+1 this month" },
    { label: "Total Views", value: "2,405", icon: <TrendingUp className="w-5 h-5" />, trend: "+24% this week" },
    { label: "New Inquiries", value: "18", icon: <MessageSquare className="w-5 h-5" />, trend: "5 unread" },
    { label: "Saved by Tenants", value: "142", icon: <Users className="w-5 h-5" />, trend: "High demand" },
];

const properties = [
    {
        title: "Luxury Penthouse in Canary Wharf",
        status: "Active",
        views: 1205,
        inquiries: 8,
        image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=200",
        price: "£4,500/mo"
    },
    {
        title: "Charming Victorian Terrace",
        status: "Pending Check",
        views: 850,
        inquiries: 10,
        image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=200",
        price: "£3,200/mo"
    },
    {
        title: "Modern Loft near Shoreditch",
        status: "Rented",
        views: 350,
        inquiries: 0,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=200",
        price: "£2,800/mo"
    }
];

export default function LandlordDashboard() {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <Navbar />

            <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-28">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">Welcome back, Eleanor</h1>
                        <p className="text-zinc-500 dark:text-zinc-400 font-medium text-lg">Here's what's happening with your properties today.</p>
                    </div>
                    <button className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20 active:scale-95">
                        <Plus className="w-5 h-5" /> Add New Property
                    </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 shadow-sm flex flex-col justify-between h-40 group hover:border-indigo-500/50 transition-colors"
                        >
                            <div className="flex items-center justify-between text-zinc-500 dark:text-zinc-400">
                                <span className="font-bold">{stat.label}</span>
                                <div className="p-2 bg-zinc-50 dark:bg-zinc-800 rounded-xl group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {stat.icon}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-4xl font-black text-zinc-900 dark:text-white font-sans">{stat.value}</h3>
                                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-1">{stat.trend}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Properties */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Your Properties</h2>
                            <button className="text-sm font-bold text-indigo-600">View all</button>
                        </div>

                        <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] overflow-hidden shadow-sm">
                            {properties.map((prop, i) => (
                                <div key={i} className="flex flex-col sm:flex-row items-center gap-6 p-6 border-b border-zinc-50 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors last:border-0 group cursor-pointer">
                                    <div className="w-full sm:w-32 h-24 rounded-2xl overflow-hidden shrink-0">
                                        <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="flex-1 w-full flex flex-col justify-center">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="text-lg font-bold text-zinc-900 dark:text-white line-clamp-1">{prop.title}</h3>
                                            <span className="text-lg font-bold font-sans text-indigo-600 dark:text-indigo-400 hidden sm:block">{prop.price}</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                                            <div className="flex items-center gap-1.5">
                                                {prop.status === "Active" ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Clock className="w-4 h-4 text-amber-500" />}
                                                <span className={prop.status === "Active" ? "text-green-600 dark:text-green-500" : "text-amber-600 dark:text-amber-500"}>{prop.status}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Users className="w-4 h-4" /> {prop.views} views
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <MessageSquare className="w-4 h-4" /> {prop.inquiries} inquiries
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Messages/Alerts */}
                    <div className="lg:col-span-1 space-y-6">
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Recent Messages</h2>

                        <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] p-6 shadow-sm">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-start gap-4 mb-6 last:mb-0 group cursor-pointer">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="User" className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800" />
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className="font-bold text-zinc-900 dark:text-white text-sm">Alexander D.</h4>
                                            <span className="text-xs font-bold text-zinc-400">2h ago</span>
                                        </div>
                                        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                                            Hi Eleanor! I'm very interested in the Canary Wharf penthouse. Is it possible to schedule a viewing this Friday?
                                        </p>
                                    </div>
                                </div>
                            ))}
                            <button className="w-full mt-4 py-3 bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white rounded-xl font-bold text-sm transition-colors">
                                View Inbox
                            </button>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
