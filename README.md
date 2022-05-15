# ゆめみのフロントエンドコーディング試験

### 試験概要
https://notion.yumemi.co.jp/0e9ef27b55704d7882aab55cc86c999d

制約としてフレームワークがReact/Next.js、Vue/Nuxt.js、Angularになっているが今回はSvelteの勉強を兼ねてSvelteで実装する

### セットアップ

```sh
yarn
yarn dev
```

### コードフォーマッター

eslint-plugin-svelte3をベースに必要な依存関係のあるpackageを導入しているが、正しい設定かどうかはまだ調べきれていない。一応動く状態にはなっている。尚huskyなどはまだ導入できていない

### deploy
cloudflare Pagesで行っている。mainブランチにプッシュしたら自動でデプロイされる