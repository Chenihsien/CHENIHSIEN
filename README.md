# Physics Personal Site

這是一個使用 [Astro](https://astro.build/) 建立的個人網站，適合整理物理教學、作品集與個人介紹。

## 技術

- Framework: Astro
- Language: TypeScript / Astro components
- Deploy: GitHub Pages + GitHub Actions

## 開發

```bash
npm install
npm run dev
```

## 常用指令

```bash
npm run build
npm run preview
```

## 部署到 GitHub Pages

這個專案已經包含 `.github/workflows/deploy.yml`。推送到 `main` 分支後，GitHub Actions 會自動使用 Astro 官方 Action 建置並部署到 GitHub Pages。

第一次部署前，到 GitHub repository 的 `Settings > Pages`，把 `Source` 設為 `GitHub Actions`。
