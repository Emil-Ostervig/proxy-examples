export type User = {
    firstName: string;
    lastName: string;
    age: number;
};

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
};

const handler: ProxyHandler<User> = {
    set(target, property: keyof User, value) {
        if (property === 'age') {
            if (value < 18) {
                throw new Error('The user must be 18 or older.');
            }
        }
        Reflect.set(target, property, value);
        return true;
    },
};

export const proxyUser = new Proxy(user, handler);
