module.exports = {
  name: 'fancy-app',
  exposes: {
    './Module': 'apps/fancy-app/src/app/remote-entry/entry.module.ts',
  },
};