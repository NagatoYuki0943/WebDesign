/*
    postcss配置
 */

const PostcssPresetEnv = require('postcss-preset-env');

module.exports = {
    plugins : [
        new PostcssPresetEnv({
            browsers : [
                '> 0.15% in CN'
            ]
        })
    ]
};