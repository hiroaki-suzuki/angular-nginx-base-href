# Angular & Nginx ベースパスがある場合のサンプル

https://ドメイン/app/ などベースパスととして/app/などが入る場合のサンプル

- `angular.json` で `"baseHref": "/app/"` を追加
  - これで/appとして全体が動くようになる
- 過去のバージョンだと、 `angular.json` に `"deployUrl": "/app/"` が必要みたい
  - jsファイルのパスに/app/がつかなかったので、deployUrlを入れると付くようになる
- Nginx のルート配下に /app/index.html などなるように配置する
  - app無しの/index.htmlになるようにしても、画面表示自体はできたが、jsファイルの読み込みのパスが解決出来ず
  - jsファイルのレスポンスで、index.htmlが帰ってきている状態
  - これは、Nginxの方で/app/runtime.js などが見つけられないため、try_filesの定義通り、最終的なindex.htmlが返されることになっている
    - `try_files $uri $uri/ /index.html`;
  - これをこのままの配置方法で解決する方法はありそうだが、リダイレクトやら何やらでやらないと出来ない気がするのでやめた
  - パスどおりに、Nginxのドキュメント配下がなるようにすれば、すっきり解決出来るので、配置のパスを変更した
    - `angular.json` の `"outputPath: "./dist/app"` で、配置パスの変更が出来る。


