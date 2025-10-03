const esbuild = require('esbuild');
const fs = require('fs');

// Plugin to replace jsx-runtime imports
const jsxRuntimePlugin = {
  name: 'jsx-runtime-plugin',
  setup(build) {
    build.onResolve({ filter: /^react\/jsx-runtime$/ }, () => {
      return { path: 'react', external: true };
    });
  },
};

esbuild.build({
  entryPoints: ['src/PlayerWrapper.tsx'],
  bundle: true,
  outfile: 'public/remotion-player.js',
  format: 'iife',
  platform: 'browser',
  external: ['react', 'react-dom'],
  plugins: [jsxRuntimePlugin],
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
`,
  },
  footer: {
    js: `
if (typeof window !== 'undefined') {
  window.RemotionPlayerWrapper = exports.PlayerWrapper;
  console.log('RemotionPlayerWrapper exported:', !!window.RemotionPlayerWrapper);
}
`,
  },
}).then(() => {
  console.log('✅ Player bundle created at public/remotion-player.js');
}).catch((error) => {
  console.error('❌ Build failed:', error);
  process.exit(1);
});