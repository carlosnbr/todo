import { resolve, dirname } from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));


export const entry = "./src/index.js";
export const output = {
    filename: "bundle.js",
    path: resolve(__dirname, "dist"),
    clean: true,
};

export const moduleRules = {
    rules: [
        {
            test: /\.html$/i,
            loader: 'html-loader',
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
        },
    ],
};

export const plugins = [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: "body"
    })
];

export default {
    entry,
    output,
    module: moduleRules,
    plugins
};