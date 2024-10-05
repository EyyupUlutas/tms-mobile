const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'), // SVG dosyalarını işlemek için transformer
  },
  resolver: {
    assetExts: getDefaultConfig(__dirname).resolver.assetExts.filter(ext => ext !== 'svg'), // SVG'yi asset olarak ele almamak
    sourceExts: [...getDefaultConfig(__dirname).resolver.sourceExts, 'svg'], // SVG dosyalarını bileşen olarak kullanmak
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
