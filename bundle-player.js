const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/PlayerWrapper.tsx'],
  bundle: true,
  outfile: 'public/remotion-player.js',
  format: 'iife',
  platform: 'browser',
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  jsx: 'automatic',
  loader: {
    '.tsx': 'tsx',
    '.ts': 'ts',
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  banner: {
    js: `
const React = window.React;
const ReactDOM = window.ReactDOM;
const exports = {};
const module = { exports };
`,
  },
  footer: {
    js: `
if (typeof window !== 'undefined') {
  window.RemotionPlayerWrapper = exports.PlayerWrapper || module.exports.PlayerWrapper;
}
`,
  },
}).then(() => {
  console.log('✅ Player bundle created at public/remotion-player.js');
}).catch((error) => {
  console.error('❌ Build failed:', error);
  process.exit(1);
});