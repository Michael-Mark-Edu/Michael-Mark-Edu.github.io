import { createRoot } from 'react-dom/client';
import App from './app.tsx';

const node = document.getElementById('root');
let nodeNonull: HTMLElement = node || function(): never {
    throw new Error("Couldn't find root div");
}();
const root = createRoot(nodeNonull);
root.render(<App />);
