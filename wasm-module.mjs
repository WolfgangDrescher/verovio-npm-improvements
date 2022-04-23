import Module from './verovio.js';

console.log(Module);

Module().then((instance) => {
    console.log(instance);
});

export default Module();
