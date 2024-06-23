import { createRoot } from 'react-dom/client';

const node = document.getElementById('app');
let nodeNonull: HTMLElement;
if (node instanceof HTMLElement) {
    nodeNonull = node;
} else {
    throw new Error("Couldn't find app div");
}
const root = createRoot(nodeNonull);
root.render(<p>Hello, World</p>)
