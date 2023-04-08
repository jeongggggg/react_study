module: {
    loaders: [
        {
            test: /\.js$/,
            loaders: ['react-hot', 'babel?' + JSON.stringify({
                cacheDirectory: true,
                presets: ['es2015', 'react']
            })],
            exclude: /node_modules/,
        }
    ]
}



/* PREVIOUS STATE

module: {
    loaders: [
        {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                cacheDirectory: true,
                presets: ['es2015', 'react']
            }
        }
    ]
},

*/