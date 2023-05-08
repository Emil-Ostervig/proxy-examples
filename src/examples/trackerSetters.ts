const TRACKING_ENV = 'DEV';
// const TRACKING_ENV = 'PRODUCTION';

// Tracking Library
class Tracker {
    public myProperty = 'some value';
    trackPageView(pageId: string) {
        console.log('Actual trackPageView event: ', pageId);
    }
    trackProductPageView(productId: string) {
        console.log('Actual trackProductPageView event: ', productId);
    }
}

// Proxy for intercepting
const trackerProxy: ProxyHandler<Tracker> = {
    set(target, prop, value, receiver) {
        console.log('Warning!! Setters are not available on Tracker in DEV mode');
        return true;
    },
    get(target, prop, receiver) {
        return function (...args: unknown[]) {
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
