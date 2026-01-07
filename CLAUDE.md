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
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- next-intl（国际化）

## 项目结构
```
/app/[locale]/          # 国际化路由
  layout.tsx            # 根布局（含Sidebar）
  page.tsx              # 首页
  works/page.tsx        # 作品页
  about/page.tsx        # 关于页
/components/
  Sidebar.tsx           # 左侧导航栏
  ArtworkGrid.tsx       # 作品网格
  ArtworkCard.tsx       # 作品卡片
  FilterBar.tsx         # 筛选栏
  LightBox.tsx          # 大图查看
/data/
  artworks.json         # 作品数据
  artist.ts             # 艺术家信息
/messages/
  zh.json               # 中文翻译
  en.json               # 英文翻译
```

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

## 图片说明
当前使用 picsum.photos 占位图，用户后续将提供真实作品图片替换。
替换方式：更新 /data/artworks.json 中的 imageUrl 字段。

## 艺术家信息来源
- 简介：用户提供（1955年生于青岛...）
- 年表：用户提供（2014-1990主要展览获奖）
- 原网站参考：https://xihaifei.artron.net

## 设计规范速查

### 颜色
| 用途 | 色值 |
|-----|------|
| 背景 | #FFFFFF |
| 主文字 | #000000 |
| 次要文字 | #999999 |
| 边框 | #EEEEEE |

### 字体
| 元素 | 样式 |
|-----|------|
| Logo | 24px, bold, uppercase, letter-spacing: 2px |
| 导航 | 15px, bold, uppercase |
| 标题 | 15px, bold, uppercase |
| 元信息 | 13px, #999 |
| 正文 | 15px, line-height: 1.8 |

### 布局
- 左侧导航：260px 固定宽度
- 右侧内容：calc(100% - 266px)
- 网格间距：40px
- 内边距：40px（桌面）/ 20px（移动）
- 响应式断点：768px

### 交互
- 过渡时间：0.3s ease
- 悬停缩放：scale(1.02)
