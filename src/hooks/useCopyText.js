import { useState } from 'react';

export function useCopyText() {
    const [copied, setCopied] = useState(false);

    const copy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        } catch (error) {
            console.error('Failed to copy:', error);
        }
    }

    return { copy, copied};
}