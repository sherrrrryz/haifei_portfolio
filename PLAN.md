# 郗海飞艺术家个人网站开发计划

## 项目概述
为艺术家郗海飞创建个人作品展示网站，支持年份/类型筛选，中英双语界面。
- 图片暂用占位图，后续由用户提供真实作品图片

## 技术选型
- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **数据**: 静态JSON文件
- **国际化**: next-intl

---

## 实施步骤

### 第零阶段：创建 CLAUDE.md 项目文档

在项目根目录创建 `/CLAUDE.md` 文件，确保项目目标和设计原则在未来会话中延续。

---

### 第一阶段：项目初始化

**1. 创建Next.js项目**
```bash
npx create-next-app@latest . --typescript --tailwind --app
```

**2. 安装依赖**
- `next-intl` - 国际化支持

**3. 项目结构**
```
/app
  /[locale]
    /layout.tsx
    /page.tsx           # 首页
    /works/page.tsx     # 作品页
    /about/page.tsx     # 关于页
/components
  /Sidebar.tsx          # 左侧导航栏
  /ArtworkGrid.tsx      # 作品网格
  /ArtworkCard.tsx      # 单个作品卡片
  /FilterBar.tsx        # 筛选栏
  /LightBox.tsx         # 作品大图查看
/data
  /artworks.json        # 作品数据（示例占位数据）
/messages
  /zh.json              # 中文翻译
  /en.json              # 英文翻译
/lib
  /types.ts             # TypeScript类型定义
```

---

### 第二阶段：数据准备

**1. 创建示例作品数据** `/data/artworks.json`
- 使用占位图片（picsum.photos或unsplash随机图）
- 创建示例作品条目，便于展示筛选功能

**2. 数据结构**
```typescript
interface Artwork {
  id: string;
  title: string;
  titleEn?: string;
  year: number;
  dimensions: string;
  category: 'watercolor' | 'oil';
  imageUrl: string;      // 占位图URL
}
```

**3. 艺术家信息** `/data/artist.ts`
已提供内容，包含：
- 简介（1955年生于青岛...）
- 主要参展获奖
- 年表（2014-1990）

---

### 第三阶段：核心组件开发

**1. Sidebar组件**
- Logo/艺术家姓名
- 导航链接：作品 | 关于
- 语言切换按钮（中/EN）

**2. ArtworkGrid组件**
- CSS Grid响应式布局
- 参考Erwin Wurm网站样式：
  - 白色背景
  - 网格间距均匀
  - 悬停时显示作品信息

**3. FilterBar组件**
- 年份筛选下拉（1979-2021）
- 类型筛选（全部/水彩/油画）
- 排序选项

**4. ArtworkCard组件**
- 图片懒加载
- 悬停效果：显示标题、年份、尺寸
- 点击打开大图

**5. LightBox组件**
- 全屏查看作品大图
- 左右箭头切换
- ESC关闭

---

### 第四阶段：页面开发

**1. 首页 `/`**
- 精选作品展示
- 简短介绍
- 进入作品页按钮

**2. 作品页 `/works`**
- FilterBar筛选栏
- ArtworkGrid作品网格
- 分页或无限滚动

**3. 关于页 `/about`**
- 艺术家照片
- 简介文字
- 履历/展览经历
- 获奖记录
- 联系方式

---

### 第五阶段：样式完善（详细参考Erwin Wurm）

---

#### 5.1 整体页面布局

```
┌─────────────────────────────────────────────────────────┐
│  ┌──────────┐  ┌────────────────────────────────────┐   │
│  │          │  │                                    │   │
│  │  左侧    │  │         右侧内容区域                │   │
│  │  导航栏   │  │         (作品网格/关于页)           │   │
│  │          │  │                                    │   │
│  │  260px   │  │      calc(100% - 266px)           │   │
│  │  固定    │  │                                    │   │
│  │          │  │                                    │   │
│  │          │  │                                    │   │
│  │  社交    │  │                                    │   │
│  │  链接    │  │                                    │   │
│  └──────────┘  └────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

**桌面端（≥768px）**：
- 左侧导航：固定宽度 `260px`，高度 `100vh`，`position: fixed`
- 右侧内容：`width: calc(100% - 266px)`，`margin-left: 266px`
- 内容内边距：`padding: 40px`

**移动端（<768px）**：
- 导航栏收起为汉堡菜单
- 内容全宽显示
- 内边距：`padding: 20px`

---

#### 5.2 导航栏详细样式

```css
/* 左侧导航容器 */
.sidebar {
  width: 260px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  background: #fff;
}

/* Logo/艺术家姓名 */
.logo {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 60px;
}

/* 导航链接 */
.nav-link {
  font-size: 15px;
  font-weight: 700;
  line-height: 19px;
  text-transform: uppercase;
  color: #000;
  margin-bottom: 15px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #999;
}

/* 当前页面高亮 */
.nav-link.active {
  color: #000;
}

/* 语言切换 */
.lang-switch {
  font-size: 13px;
  color: #999;
  margin-top: auto;
  margin-bottom: 20px;
}

/* 社交链接（底部） */
.social-links {
  margin-top: auto;
  font-size: 13px;
}
```

---

#### 5.3 作品网格布局（核心）

**网格容器**：
```css
.artwork-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 桌面：3列 */
  gap: 40px;
  padding: 40px;
}

/* 响应式列数 */
@media (max-width: 1200px) {
  .artwork-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .artwork-grid { grid-template-columns: 1fr; gap: 30px; }
}
```

**单个作品卡片**：
```css
.artwork-card {
  position: relative;
  cursor: pointer;
}

/* 图片 */
.artwork-card img {
  width: 100%;
  height: auto;
  aspect-ratio: 4/3;        /* 统一图片比例 */
  object-fit: cover;
  display: block;
}

/* 作品信息（图片下方） */
.artwork-info {
  padding-top: 15px;
}

.artwork-title {
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 19px;
  margin-bottom: 5px;
}

.artwork-meta {
  font-size: 13px;
  color: #999;
  line-height: 1.4;
}

/* 悬停效果 */
.artwork-card:hover .artwork-info {
  opacity: 1;
}
```

---

#### 5.4 悬停交互效果

```css
/* 图片悬停缩放 */
.artwork-card img {
  transition: transform 0.4s ease;
}
.artwork-card:hover img {
  transform: scale(1.02);
}

/* 信息悬停显示（可选模式） */
.artwork-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.artwork-card:hover .artwork-overlay {
  opacity: 1;
}
```

---

#### 5.5 筛选栏样式

```css
.filter-bar {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
  padding: 0 40px;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
}

/* 筛选按钮/下拉 */
.filter-select {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  color: #999;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px 0;
}

.filter-select:hover,
.filter-select.active {
  color: #000;
}

/* 下拉菜单 */
.filter-dropdown {
  font-size: 13px;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 0;           /* 方角，保持极简 */
  background: #fff;
}
```

---

#### 5.6 大图查看（LightBox）

```css
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.98);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-image {
  max-width: 90vw;
  max-height: 85vh;
  object-fit: contain;
}

.lightbox-close {
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 24px;
  cursor: pointer;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 30px;
  cursor: pointer;
  padding: 20px;
}
.lightbox-prev { left: 20px; }
.lightbox-next { right: 20px; }

/* 作品信息 */
.lightbox-info {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
```

---

#### 5.7 关于页面布局

```css
.about-page {
  max-width: 800px;
  padding: 60px 40px;
}

.about-photo {
  width: 300px;
  float: left;
  margin-right: 40px;
  margin-bottom: 20px;
}

.about-section {
  margin-bottom: 50px;
}

.about-section h2 {
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 20px;
  letter-spacing: 1px;
}

.about-section p {
  font-size: 15px;
  line-height: 1.8;
  color: #333;
}

/* 年表列表 */
.timeline {
  list-style: none;
  padding: 0;
}

.timeline-item {
  display: flex;
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 1.6;
}

.timeline-year {
  width: 80px;
  flex-shrink: 0;
  font-weight: 700;
}

.timeline-content {
  color: #333;
}
```

---

#### 5.8 全局设计规范

| 属性 | 值 |
|-----|-----|
| **背景色** | `#FFFFFF` |
| **主文字色** | `#000000` |
| **次要文字色** | `#999999` |
| **边框色** | `#EEEEEE` |
| **字体** | `Arial, Helvetica, sans-serif` |
| **标题字号** | `15px`，`font-weight: 700` |
| **正文字号** | `13-15px` |
| **行高** | `1.6-1.8` |
| **过渡时间** | `0.3s ease` |
| **内容最大宽度** | 无限制（网格自适应） |
| **移动断点** | `768px` |

---

#### 5.9 字体层级

```css
/* 艺术家姓名/Logo */
.logo { font-size: 24px; font-weight: 700; letter-spacing: 2px; }

/* 导航链接 */
.nav { font-size: 15px; font-weight: 700; text-transform: uppercase; }

/* 作品标题 */
.title { font-size: 15px; font-weight: 700; text-transform: uppercase; }

/* 作品元信息 */
.meta { font-size: 13px; color: #999; }

/* 正文段落 */
.body { font-size: 15px; line-height: 1.8; }

/* 年份标签 */
.year { font-size: 13px; font-weight: 700; }
```

---

### 第六阶段：国际化

**1. 配置next-intl**
- 默认语言：中文
- 支持语言：中文、英文

**2. 翻译文件**
- `/messages/zh.json` - 中文
- `/messages/en.json` - 英文
- 作品标题保留中文原名

---

## 关键文件清单

| 文件路径 | 说明 |
|---------|------|
| `/CLAUDE.md` | **项目文档（首先创建）** |
| `/app/[locale]/layout.tsx` | 根布局 |
| `/app/[locale]/page.tsx` | 首页 |
| `/app/[locale]/works/page.tsx` | 作品页 |
| `/app/[locale]/about/page.tsx` | 关于页 |
| `/components/Sidebar.tsx` | 左侧固定导航栏 |
| `/components/ArtworkGrid.tsx` | 核心作品展示组件 |
| `/components/ArtworkCard.tsx` | 单个作品卡片 |
| `/components/FilterBar.tsx` | 筛选功能组件 |
| `/components/LightBox.tsx` | 大图查看模态框 |
| `/data/artworks.json` | 作品数据（占位） |
| `/data/artist.ts` | 艺术家信息 |
| `/messages/zh.json` | 中文翻译 |
| `/messages/en.json` | 英文翻译 |

---

## 预计工作量
- 项目初始化：1步
- 数据准备：1步
- 核心组件：5个组件
- 页面开发：3个页面
- 样式/国际化：2步

总计约12个主要任务

---

## 注意事项
1. 图片暂用 picsum.photos 占位图，用户后续替换为真实作品
2. 作品英文标题可留空，仅界面文字双语
3. 响应式设计：支持桌面端和移动端
4. 筛选功能：年份（下拉）、类型（水彩/油画）

---

## 艺术家信息（已提供）

### 简介
1955年生于青岛，祖籍江苏扬州。1978年考入中央工艺美术学院装饰艺术系，1982年毕业后获学士学位。1988年复入该系师从袁运甫先生，攻读壁画专业硕士研究生，1991年毕业后获硕士学位并留校任教至今。1997年赴法国巴黎国际艺术城进修并考察欧洲十余国。2010年-2011年美国波士顿麻省艺术学院高级访问学者。曾任清华美院绘画系副主任。现任清华大学美术学院绘画系教授，硕士生导师，中国美术家协会壁画艺术委员会副主任，中国国家画院研究员，中国壁画学会副会长，中国美术家协会会员，中国油画学会会员，北京市美术家协会公共艺术委员会委员，北京市水彩协会会员，吴冠中艺术研究中心研究员。

### 主要参展获奖
- 壁画《有向日葵的风景》获日本�的富士国际美术大奖
- 作品《青花》在香港大会堂举办的中国画展获优秀作品奖
- 油画《都市的诱惑》参加第八届全国美展，军事博物馆
- 油画《众神的黄昏》参加首届中国油画学会展，中国美术馆
- 油画《华丽家族》、《众神的黄昏》参加孟加拉第十届亚洲艺术双年展

### 年表
- 2014年 北京地铁六号线壁画《春潮涌动》获第三届全国壁画展大奖，同时获得第十二届全国美展壁画银奖
- 2006年 作为艺术品规划组组长，三峡工程建设遗迹保护小组组长，完成《三峡坝区艺术设计与文化建设总体规划》设计，该设计获清华大学美术学院科研成果优秀奖
- 2004年 油画《白山黑水系列——最后的家园》获清华大学美术学院第三届"清华工美杯"教师作品展铜奖
- 2004年 中华世纪坛大型石材镶嵌壁画《中华千秋颂》参加首届全国壁画大展，作为主要设计者之一并获嘉奖
- 2002年 油画《华丽家族》、《众神的黄昏》参加孟加拉第十届亚洲艺术双年展
- 2001年 素描《齐白石——自然》入选清华大学建院90周年艺术与科学展，（中国美术馆），获国际评委提名奖
- 1996年 油画《众神的黄昏》参加首届中国油画学会展，中国美术馆
- 1995年 油画《都市的诱惑》参加第八届全国美展，军事博物馆
- 1991年 彩墨画《荷花》、《青花》在香港大会堂举办的中国画展获优秀作品奖
- 1990年 壁毯《有向日葵的风景》、漆屏风《夏夜》获日本泷富士国际美术大奖
