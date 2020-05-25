import chunk from 'lodash.chunk';

self.onmessage = function(e: MessageEvent) {
  console.log('Posting message back to main script');
  postMessage(chunk(e.data, 2));
}
