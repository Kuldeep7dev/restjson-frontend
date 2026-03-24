import { useEffect } from "react";
import Kursor from "kursor";
import "kursor/dist/kursor.css";

export default function GlobalCursor() {
    useEffect(() => {
        // Disable on touch devices (important)
        if (window.matchMedia("(pointer: coarse)").matches) return;

        new Kursor({
            type: 5,
            removeDefaultCursor: true,
        });

    }, []);

    return null;
}
