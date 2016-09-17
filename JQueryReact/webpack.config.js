var path = require("path");
module.exports = {
  entry:"./public/Main.jsx",
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  module:{
  	loaders:[
  	{
  	test: /\.jsx/,
  	loader: 'babel',
  	query: {
  		presets:['es2015','react']
  }
}
]
  }
};