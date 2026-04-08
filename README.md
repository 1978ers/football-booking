# ⚽ 足球约球

足球约球 Android App，基于 Capacitor 构建。

## 功能

- 发布球局（日期、时间、场地、人数上限、费用、备注）
- 报名/取消报名
- 按日期筛选球局（今天/明天/本周）
- 已过期球局自动隐藏
- 我的发球 / 已报名列表
- 纯本地存储，无需后端

## APK 构建方式

本项目使用 **GitHub Actions** 自动构建 APK，无需配置本地 Java/Android SDK。

### 第一步：创建 GitHub 仓库并推送代码

在 GitHub 上新建一个空仓库（如 `football-booking`），然后：

```bash
cd football-booking
git remote add origin https://github.com/你的用户名/football-booking.git
git branch -M main
git push -u origin main
```

### 第二步：等待 Actions 构建

推送代码后，进入 GitHub 仓库 → **Actions** 页面，可以看到自动构建流程。

- 构建完成后进入 **Actions** → 最新的 workflow → **Artifacts**
- 点击 `football-booking-apk` 下载 APK 文件

### APK 安装

下载后通过以下方式安装到手机：
- 发送到手机（微信/QQ/邮件）
- 复制到手机存储，在手机上直接点击安装
- 首次安装需要开启"允许安装未知来源应用"

## 本地开发

```bash
npm install
npx cap sync android       # 同步 web 资源到 Android
npx cap open android       # 用 Android Studio 打开项目
```

## 技术栈

- 前端：原生 HTML/CSS/JS（单文件，无框架）
- 移动端：Capacitor 8
- CI/CD：GitHub Actions
- 存储：LocalStorage
# Trigger build
