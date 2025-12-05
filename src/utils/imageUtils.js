export const preloadImages = (urls) => {
    return Promise.all(
        urls.map((url) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = url;
                img.onload = resolve;
                img.onerror = resolve; // Resolve even on error to avoid blocking
            });
        })
    );
};
