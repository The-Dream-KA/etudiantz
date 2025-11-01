import { useState, useEffect } from 'react';

interface Translations {
    [key: string]: string | Translations;
}

export default function useTranslation(locale: string) {
    const [translations, setTranslations] = useState<Translations>({});

    useEffect(() => {
        async function loadTranslations() {
            try {
                const localeModule = await import(`@/locales/${locale}.json`);
                setTranslations(localeModule.default);
            } catch (error) {
                console.error(`Could not load locale: ${locale}`, error);
                // Fallback to English
                const fallbackModule = await import(`@/locales/en.json`);
                setTranslations(fallbackModule.default);
            }
        }

        loadTranslations();
    }, [locale]);

    return translations;
}
