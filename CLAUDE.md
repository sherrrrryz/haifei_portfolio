# 郗海飞艺术家个人网站

## 项目概述
为艺术家郗海飞创建个人作品展示网站，展示其水彩和油画作品。

## 核心功能
1. **作品展示** - 网格布局展示所有画作
2. **筛选功能** - 按年份（1979-2021）和类型（水彩/油画）筛选
3. **大图查看** - 点击作品查看高清大图，支持左右切换
4. **关于页面** - 艺术家简介、履历、年表
5. **中英双语** - 界面支持中/英文切换

## 设计风格（参考 erwinwurm.com）
- **极简主义**：纯白背景 #FFFFFF，黑色文字 #000000
- **两栏布局**：左侧固定导航栏 260px + 右侧内容区
- **字体**：Arial/Helvetica，标题15px粗体大写
- **交互**：悬停0.3s过渡动画
- **响应式**：768px断点，移动端汉堡菜单

## 技术栈
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui（组件库）
- next-intl（国际化）

## 项目结构
```
/app/[locale]/          # 国际化路由
  layout.tsx            # 根布局（SidebarProvider）
  page.tsx              # 首页
  works/page.tsx        # 作品页
  about/page.tsx        # 关于页
/components/
  Sidebar.tsx           # 左侧导航栏（使用 shadcn/ui Sidebar）
  ArtworkGrid.tsx       # 作品网格
  ArtworkCard.tsx       # 作品卡片（使用 shadcn/ui Card）
  FilterBar.tsx         # 筛选栏（使用 ToggleGroup + Select）
  LightBox.tsx          # 大图查看（使用 Dialog + Carousel）
  /ui/                  # shadcn/ui 组件
    button.tsx
    card.tsx
    carousel.tsx
    dialog.tsx
    select.tsx
    sidebar.tsx
    toggle-group.tsx
    ...
/lib/
  types.ts              # 类型定义
  utils.ts              # 工具函数（cn）
/data/
  artworks.json         # 作品数据
  artist.ts             # 艺术家信息
/messages/
  zh.json               # 中文翻译
  en.json               # 英文翻译
/hooks/
  use-mobile.ts         # 移动端检测 hook
components.json         # shadcn/ui 配置
```

## shadcn/ui 组件映射

| 功能 | 使用的组件 |
|-----|-----------|
| 侧边栏 | Sidebar, SidebarProvider, SidebarInset |
| 筛选类别 | ToggleGroup, ToggleGroupItem |
| 年份下拉 | Select, SelectTrigger, SelectContent, SelectItem |
| 大图查看 | Dialog, DialogContent |
| 图片轮播 | Carousel, CarouselContent, CarouselItem |
| 作品卡片 | Card, CardContent |
| 按钮 | Button |

## 数据结构

### 作品数据 (artworks.json)
```json
{
  "id": "001",
  "title": "作品标题",
  "year": 2021,
  "dimensions": "53x38cm",
  "category": "watercolor | oil",
  "imageUrl": "图片URL"
}
```

## 开发命令
- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run lint` - 代码检查

## 添加 shadcn/ui 组件
```bash
npx shadcn@latest add [component-name]
```

## 图片说明
当前使用 picsum.photos 占位图，用户后续将提供真实作品图片替换。
替换方式：更新 /data/artworks.json 中的 imageUrl 字段。

## 艺术家信息来源
- 简介：用户提供（1955年生于青岛...）
- 年表：用户提供（2014-1990主要展览获奖）
- 原网站参考：https://xihaifei.artron.net

## 设计规范速查

### 颜色（CSS 变量）
| 用途 | 变量 | 色值 |
|-----|------|------|
| 背景 | --background | #FFFFFF |
| 主文字 | --foreground | #000000 |
| 次要文字 | --muted-foreground | #999999 |
| 边框 | --border | #EEEEEE |

### 字体
| 元素 | 样式 |
|-----|------|
| Logo | 24px, bold, uppercase, letter-spacing: 2px |
| 导航 | 15px, bold, uppercase |
| 标题 | 15px, bold, uppercase |
| 元信息 | 13px, muted-foreground |
| 正文 | 15px, line-height: 1.8 |

### 布局
- 左侧导航：260px 固定宽度（--sidebar-width）
- 网格间距：40px（gap-10）
- 内边距：40px（桌面）/ 20px（移动）
- 响应式断点：768px（md）
- 圆角：0rem（--radius: 0rem，保持极简风格）

### 交互
- 过渡时间：0.3s ease（duration-300）
- 悬停缩放：scale(1.02)
