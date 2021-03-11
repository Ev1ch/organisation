module.exports = {
    publicPath: './',
    productionSourceMap: false,
    chainWebpack: (config) => {
        config.optimization.delete('splitChunks');
    },
};
