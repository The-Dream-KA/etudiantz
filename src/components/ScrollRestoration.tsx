'use client';

import { useEffect } from 'react';

export default function ScrollRestoration() {
    useEffect(() => {
        // Restore scroll position after language change
        const savedScrollPosition = sessionStorage.getItem('scrollPosition');

        if (savedScrollPosition) {
            const targetPosition = parseInt(savedScrollPosition, 10);

            // Function to restore scroll
            const restoreScroll = () => {
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'instant'
                });
            };

            // Try multiple times to ensure content is loaded
            // First attempt immediately
            requestAnimationFrame(() => {
                restoreScroll();
            });

            // Second attempt after a short delay
            const timeout1 = setTimeout(() => {
                restoreScroll();
            }, 50);

            // Third attempt after page is fully loaded
            const timeout2 = setTimeout(() => {
                restoreScroll();
                // Clear the saved position after final restoration
                sessionStorage.removeItem('scrollPosition');
            }, 150);

            // Also try on window load event
            const handleLoad = () => {
                restoreScroll();
            };

            if (document.readyState === 'complete') {
                handleLoad();
            } else {
                window.addEventListener('load', handleLoad);
            }

            // Cleanup
            return () => {
                clearTimeout(timeout1);
                clearTimeout(timeout2);
                window.removeEventListener('load', handleLoad);
            };
        }
    }, []); // Run only on mount

    return null; // This component doesn't render anything
}
