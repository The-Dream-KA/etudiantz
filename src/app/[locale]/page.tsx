'use client';

import { use } from 'react';
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import OldSchoolProblem from "@/components/OldSchoolProblem";
import CompleteSolution from "@/components/CompleteSolution";
import StudentServices from "@/components/StudentServices";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = use(params);

    return (
        <div className="min-h-screen flex flex-col">
            <Header locale={locale} />
            <main className="flex-grow">
                <HeroCarousel locale={locale} />
                <OldSchoolProblem locale={locale} />
                <CompleteSolution locale={locale} />
                <StudentServices locale={locale} />
                <SocialProof locale={locale} />
                <FAQ locale={locale} />
                <CallToAction locale={locale} />
            </main>
            <Footer locale={locale} />
        </div>
    );
}
