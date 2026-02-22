import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        // Prevent default browser scroll restoration to avoid jumping
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        // Override html { scroll-behavior: smooth } to snap instantly
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });

        // Secondary tick to ensure it executes after React commits
        const timeoutId = setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant"
            });
        }, 0);

        return () => clearTimeout(timeoutId);
    }, [pathname]);

    return null;
}
