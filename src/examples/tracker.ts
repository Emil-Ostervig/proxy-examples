const TRACKING_ENV = 'DEV';
// const TRACKING_ENV = 'PRODUCTION';

// Tracking Library
class Tracker {
    trackPageView(pageId: string) {
        console.log('Actual trackPageView event: ', pageId);
    }
    trackProductPageView(productId: string) {
        console.log('Actual trackProductPageView event: ', productId);
    }
}

// Proxy for intercepting
const trackerProxy: ProxyHandler<Tracker> = {
    get(target, prop, receiver) {
        return function (...args: unknown[]) {
            console.log({ target, prop, receiver });
            console.log(`RelewiseTracking: Intercepting tracking method: ${String(prop)}`, {
                methodName: prop,
                params: args,
            });
        };
    },
};

export const useTracker = () => {
    const useProxy = TRACKING_ENV == 'DEV';

    // Tracker instance
    const tracker = useProxy ? new Proxy(new Tracker(), trackerProxy) : new Tracker();

    return tracker;
};
