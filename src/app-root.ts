import confetti from 'canvas-confetti';
import chunk from 'lodash.chunk';

console.log('Lets chunk it in the main thread: ', chunk(['a', 'b', 'c', 'd'], 2));

const canvas = document.getElementById('canvas') as HTMLCanvasElement;

if (canvas) {
  confetti.create(canvas, {
    resize: true,
    useWorker: true,
  })({ particleCount: 200, spread: 200 });
}

const myWorker = new Worker('/_dist_/worker.js', { type: "module" });
myWorker.postMessage(['a', 'b', 'c', 'd']);
myWorker.onmessage = (ev => {
  console.log(ev.data);
});
