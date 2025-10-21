# 智眠科技 - 智能睡眠品牌网站

这是一个现代化的睡眠品牌网站，专为智能睡眠产品设计，体现科技、创新、可靠的品牌形象。

## 品牌定位

**品牌调性**：智能、创新的、领导者、理性的

**品牌形象**：克制、科学、科技、可靠、体贴

**品牌配色**：
- 深蓝色：象征睡眠、深度睡眠、平静、放松、同理心
- 白色：象征医疗、科技、现代、平等、对消费者透明
- 橙色：象征温暖、热情、康养、长寿

## 技术栈

- **框架**: Next.js 14 (App Router)
- **UI**: React 18 + TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **字体**: Inter (Google Fonts)

## 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 运行开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产版本

```bash
npm run build
npm run start
```

## 项目结构

```
SleepWeb/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── components/            # React组件
│   ├── Navbar.tsx         # 导航栏
│   ├── HeroSection.tsx    # 首屏英雄区
│   ├── ProductSection.tsx # 产品展示
│   ├── FeaturesSection.tsx# 品牌特色
│   ├── TechnologySection.tsx # 科技展示
│   └── Footer.tsx         # 页脚
├── public/                # 静态资源
├── tailwind.config.ts     # Tailwind配置
└── package.json           # 项目配置
```

## 网站特色

- ✨ **现代设计**：简洁优雅的UI设计，体现品牌调性
- 🎨 **品牌配色**：深蓝 + 白色 + 橙色的配色方案
- 📱 **响应式**：完美适配各种设备和屏幕尺寸
- 🎭 **流畅动画**：使用Framer Motion实现优雅的交互动画
- ⚡ **性能优化**：基于Next.js的SSR和优化
- 🔧 **可定制**：易于修改和扩展

## 自定义配置

### 修改品牌配色

在 `tailwind.config.ts` 中修改自定义颜色：

```typescript
colors: {
  'sleep-blue': { ... },
  'sleep-orange': { ... },
}
```

### 修改内容

所有文本内容都在各个组件文件中，可以直接编辑对应的 `.tsx` 文件。

## 部署

### Vercel（推荐）

最简单的部署方式是使用 [Vercel](https://vercel.com)：

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动部署完成

### 其他平台

也可以部署到 Netlify、AWS、阿里云等平台，参考 Next.js 官方文档。

## License

MIT

---

由 Cursor AI 协助开发 🚀

