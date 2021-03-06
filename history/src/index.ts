export {Location} from 'history';
export * from './types';

/**
 * Wraps a History Driver to add "click capturing" functionality.
 *
 * If you want to intercept and handle any click event that leads to a link,
 * like on an `<a>` element, you pass your existing driver (e.g. created from
 * `makeHistoryDriver()`) as argument and this function will return another
 * driver of the same nature, but including click capturing logic.
 *
 * @param {Function} driver an existing History Driver function.
 * @return {Function} a History Driver function
 * @function captureClicks
 */
export {captureClicks} from './captureClicks';

/**
 * Create a History Driver to be used in the browser.
 *
 * This is a function which, when called, returns a History Driver for Cycle.js
 * apps. The driver is also a function, and it takes a stream of new locations
 * (strings representing pathnames or location objects) as input, and outputs
 * another stream of locations that were applied.
 *
 * @param {object} options an object with some options specific to
 * this driver. These options are the same as for the corresponding
 * `createBrowserHistory()` function in History v4. Check its
 * [docs](https://github.com/mjackson/history/tree/v4.5.1#usage) for a good
 * description on the options.
 * @return {Function} the History Driver function
 * @function makeHistoryDriver
 */
export {makeHistoryDriver} from './drivers';

/**
 * Create a History Driver for older browsers using hash routing.
 *
 * This is a function which, when called, returns a History Driver for Cycle.js
 * apps. The driver is also a function, and it takes a stream of new locations
 * (strings representing pathnames or location objects) as input, and outputs
 * another stream of locations that were applied.
 *
 * @param {object} options an object with some options specific to
 * this driver. These options are the same as for the corresponding
 * `createHashHistory()` function in History v4. Check its
 * [docs](https://github.com/mjackson/history/tree/v4.5.1#usage) for a good
 * description on the options.
 * @return {Function} the History Driver function
 * @function makeHashHistoryDriver
 */
export {makeHashHistoryDriver} from './drivers';

/**
 * Create a History Driver to be used in non-browser enviroments such as
 * server-side Node.js.
 *
 * This is a function which, when called, returns a History Driver for Cycle.js
 * apps. The driver is also a function, and it takes a stream of new locations
 * (strings representing pathnames or location objects) as input, and outputs
 * another stream of locations that were applied.
 *
 * @param {object} options an object with some options specific to
 * this driver. These options are the same as for the corresponding
 * `createMemoryHistory()` function in History v4. Check its
 * [docs](https://github.com/mjackson/history/tree/v4.5.1#usage) for a good
 * description on the options.
 * @return {Function} the History Driver function
 * @function makeHashHistoryDriver
 */
export {makeServerHistoryDriver} from './drivers';
