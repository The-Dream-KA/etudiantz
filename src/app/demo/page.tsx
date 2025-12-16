'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import ProductDetail from '@/components/ProductDetail';
import Footer from '@/components/Footer';

export const dynamic = 'force-dynamic';

export default function ProductDemo() {
    const [showDetail, setShowDetail] = useState(false);
    const [locale, setLocale] = useState('en');

    if (showDetail) {
        return (
            <div className="min-h-screen bg-white flex flex-col">
                <Header locale={locale} />
                <main className="flex-grow">
                    <ProductDetail
                        category="STUDENT HOUSING"
                        title="YOUR PERFECT ROOM AWAITS"
                        description="Find affordable student housing in the heart of Belgium's major cities. All listings verified, all prices transparent. Connect directly with landlords and secure your spot today."
                        price="€ 450/mo"
                        bgColor="bg-[#00e5ff]"
                        textColor="text-white"
                        onBack={() => setShowDetail(false)}
                    />
                </main>
                <Footer locale={locale} />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header locale={locale} />
            <main className="flex-grow flex items-center justify-center p-12">
                <div className="text-center space-y-6">
                    <h1 className="text-4xl font-bold text-gray-900">Product Detail Demo</h1>
                    <p className="text-lg text-gray-600">Click the button below to see the product detail view</p>
                    <button
                        onClick={() => setShowDetail(true)}
                        className="px-8 py-4 bg-[#00e5ff] text-white rounded-full font-semibold hover:bg-black transition-colors"
                    >
                        View Product Detail
                    </button>
                </div>
            </main>
            <Footer locale={locale} />
        </div>
    );
}
