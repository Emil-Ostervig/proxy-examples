import './style.css';

class InputSync {
    public input;
    public value = 1;
    constructor(input: HTMLInputElement) {
        this.input = input;
        input?.addEventListener('input', (event) => {
            const value = (event.currentTarget as HTMLInputElement)?.value;
            console.log('input change event: ', value);
            if (value) {
                this.value = parseInt(value);
            }
        });
    }

    public increment() {
        this.value = this.value + 1;
    }

    public decrement() {
        this.value = Math.max(this.value - 1, 1);
    }
}

// Proxy trap
const myInputProxyHandler: ProxyHandler<InputSync> = {
    set(target, prop, value) {
        if (prop == 'value' && target.input) {
            console.log('Instance value change: ', value);
            target.input.value = value;
            target.value = value;
        }
        Reflect.set(target, prop, value);
        return true;
    },
};

const input = document.getElementById('my-input') as HTMLInputElement;
const increment = document.getElementById('increment') as HTMLButtonElement;
const decrement = document.getElementById('decrement') as HTMLButtonElement;

const myInputProxy = new Proxy(new InputSync(input), myInputProxyHandler);

increment?.addEventListener('click', () => myInputProxy.increment());
decrement?.addEventListener('click', () => myInputProxy.decrement());
