"use client";

import { useState, useEffect, useRef } from "react";

export default function TextScramble({ children, className }: { children: React.ReactNode, className?: string  }) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;':,.<>?/~`";
    const originalText = String(children);
    const [text, setText] = useState(originalText);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const randomLetter = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        let iteration = 0;

        intervalRef.current = setInterval(() => {
            const newText = originalText.split("").map((_, index) => {
                if (index < iteration) {
                    return originalText[index];
                }
                return letters[Math.floor(Math.random() * letters.length)];
            }).join("");

            setText(newText);

            iteration += 1 / 2;

            if (iteration >= originalText.length) {
                clearInterval(intervalRef.current!);
                intervalRef.current = null;
                setText(originalText);
            }
        }, 40);
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <div>
            <h1 onMouseOver={randomLetter} className={`${className}`}>
                {text}
            </h1>
        </div>
    );
}
