import './style.css';

import { useTracker } from './examples/tracker';
// import { useTracker } from './examples/trackerReflect';
// import { useTracker } from './examples/trackerSetters';

import { sideEffectProxy } from './examples/sideEffect';
import { proxyUser } from './examples/propertValidation';

const tracker = useTracker();
/* 
// Example 1 - Basic proxy interception

tracker.trackPageView('frontpage');
tracker.trackProductPageView('blue-shirt');
 */
/* 
// Example 2 - Reflect

const tracker = useTracker();

tracker.trackPageView('frontpage');
tracker.trackProductPageView('blue-shirt');

*/

/* 
// Example 3 - Setters

const tracker = useTracker();

tracker.trackPageView('frontpage');
tracker.trackProductPageView('blue-shirt');
tracker.myProperty = 'new value';

*/

/*
// Example 4 - SideEffects and Reflect
console.log(sideEffectProxy.firstProperty);
console.log(sideEffectProxy.thirdProperty('hello'));
*/

/*
// Example 5 - Property validation
console.log(proxyUser);
proxyUser.age = 18;
console.log(proxyUser);

*/
