import Module from './verovio.js';

const ModulePromise = Module();

console.log(ModulePromise, ModulePromise.promise, ModulePromise.ready);

export default ModulePromise;
