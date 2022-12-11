module.exports = {
  $schema: 'https://json.schemastore.org/swcrc',
  sync: true,
  module: {
    type: 'es6',
    ignoreDynamic: false,
  },
  jsc: {
    parser: {
      syntax: 'typescript',
      tsx: true,
      dynamicImport: true,
      dts: true,
      importAssertions: true,
    },
    transform: {
      react: {
        refresh: true,
        runtime: 'classic',
      },
    },
    target: 'es2015',
    loose: true,
    externalHelpers: true,
    // Requires v1.2.50 or upper and requires target to be es2016 or upper.
  },
  minify: false,
  isModule: true,
};
