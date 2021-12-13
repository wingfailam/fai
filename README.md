# WING-FAI 輝

以 React 實作，搭配 Express, Next 後端框架建造的 SSG、RWD 個人網頁，以 GCP 創建 VM 使用 Docker 在 Container 內搭配 Nginx 部署並由 certbot 產生 SSL 憑證，再重新導向至 https 且 www 之網址增益 SEO，主要呈現自身攝影作品。


## 功能

* 以 Next.js 實作後端與 SSG（預渲染），增益 SEO
* 使用 Docker 打包搭配 Nginx 以便部署，降低對 VM 之危害
* 藉 certbot、letsencrypt 產生 SSL 憑證，以供基本安全
* 呈現個人資訊、呈現履歷、影像作品

## 學習運用
* pre-render SPA（Next SSG）
* 後端資料處理
* Docker Container 
* Nginx反向代理

## 所用套件
* [fireflies.js](https://www.npmjs.com/package/fireflies.js)