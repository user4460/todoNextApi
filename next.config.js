/** @type {import('next').NextConfig} */
const nextConfig = {
  //reactStrictModeとは、ReactのStrictモードを有効にするかどうかを指定する設定です。
  reactStrictMode: true,
  //swcMinifyとは、SWCを使用してコードを最小化するかどうかを指定する設定です。
  swcMinify: true,
}

//exportsなのでnode.jsのモジュールとしてエクスポートする
module.exports = nextConfig
