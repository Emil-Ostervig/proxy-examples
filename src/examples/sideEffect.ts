export type MyObject = {
    firstProperty: string;
    secondProperty: string;
    thirdProperty: (param: string) => string;
};

const myObject: MyObject = {
    firstProperty: 'firstProperty value',
    secondProperty: 'secondProperty value',
    thirdProperty: (param) => 'thirdProperty value ' + param,
};

// Proxy for intercepting
const proxyObject: ProxyHandler<MyObject> = {
    get(target, prop, receiver) {
        console.log(`object property "${String(prop)}" accessed`);
        return Reflect.get(target, prop, receiver);
    },
};

export const sideEffectProxy = new Proxy(myObject, proxyObject);
