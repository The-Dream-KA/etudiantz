import ScrollRestoration from "@/components/ScrollRestoration";

export async function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'fr' }, { locale: 'nl' }];
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    return (
        <>
            <ScrollRestoration />
            {children}
        </>
    );
}
