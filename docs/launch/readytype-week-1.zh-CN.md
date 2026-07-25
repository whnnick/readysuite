# ReadyType 首周推广执行包

## 目标

第一周只推广 ReadyType，不同时介绍 ReadyCheck 和 CrossFit WHOOP Video。

统一信息：

> 双击 Option，说出想法，ReadyType 自动整理成可以直接发送的文字。

首周验证目标：

- 获得 100 个 ReadyType 产品页独立访客。
- 主下载按钮点击率达到 10%。
- 获得至少 10 次 Release 下载和 3 条有效反馈。
- 找到一个能持续带来产品页访问的渠道。

## 跟踪链接

发布时使用对应链接，不直接复制无参数官网地址。

| 渠道 | 链接 |
| --- | --- |
| V2EX | `https://readysuite.vercel.app/readytype?utm_source=v2ex&utm_medium=community&utm_campaign=readytype_launch_2026_07` |
| Bilibili | `https://readysuite.vercel.app/readytype?utm_source=bilibili&utm_medium=video&utm_campaign=readytype_launch_2026_07` |
| 小红书 | `https://readysuite.vercel.app/readytype?utm_source=xiaohongshu&utm_medium=video&utm_campaign=readytype_launch_2026_07` |
| 即刻 / X | `https://readysuite.vercel.app/readytype?utm_source=jike_x&utm_medium=social&utm_campaign=readytype_launch_2026_07` |
| Show HN | `https://readysuite.vercel.app/readytype?utm_source=hackernews&utm_medium=community&utm_campaign=readytype_launch_2026_07_en` |

## 周一：准备素材

录制前使用测试文本和测试账户。隐藏菜单栏账户信息、API Key、OAuth
信息、真实文档、通知和本地路径。

需要导出：

- 一条 20 秒主视频，竖屏 1080x1920。
- 三条 8 至 12 秒场景短片。
- 一张浅色主界面截图。
- 一张四种输出方式截图。
- 一张最新语音胶囊截图。

## 视频一：说完直接发送

时长：20 秒。

| 时间 | 画面 | 字幕 |
| --- | --- | --- |
| 0-2 秒 | 空白消息输入框 | 打一段完整的话，要多久？ |
| 2-4 秒 | 双击 Option，显示“正在听”胶囊 | 双击 Option，直接说 |
| 4-11 秒 | 口述一段测试消息 | 不用停下来改句子 |
| 11-15 秒 | 再次双击，显示“正在整理” | ReadyType 自动整理 |
| 15-18 秒 | 完整文字进入输入框 | 得到可以直接发送的文字 |
| 18-20 秒 | ReadyType 名称和产品页 | macOS 14+ · 开源 |

演示口述：

> 帮我整理一下今天的会议结论，第一，本周五之前完成界面验收，第二，
> 下周开始邀请第一批测试用户，第三，所有反馈统一放到 GitHub。

## 视频二：四种输出方式

时长：12 秒。

用同一句口述依次展示：

1. 直接转文字。
2. 整理成文。
3. 翻译英文。
4. 写给 AI。

首屏字幕：

> 同一句话，根据场景得到四种结果。

结尾字幕：

> 不需要离开当前输入框。

## 视频三：AI 整理成本

时长：10 秒。

画面只展示已经遮挡密钥的设置页、口述过程和整理结果。

字幕：

> AI 模式调用 DeepSeek V4 Flash。
>
> 典型轻量使用，一天不到 1 毛钱。
>
> 直接转文字不调用 DeepSeek。

不要使用“永久免费”“无限使用”或无法验证的绝对化表述。

## V2EX 发布稿

建议节点：[分享创造](https://www.v2ex.com/go/create)。

标题：

> [分享创造] 我做了一个 macOS 语音输入工具：双击 Option，说完自动整理

正文：

```text
做 ReadyType 的原因很简单：

写消息、文档和 AI 提示词时，口述通常比打字快，但原始语音转写往往不能
直接发送，还要重新整理句子、标点和结构。

ReadyType 的操作只有两步：

1. 双击 Option 开始说话。
2. 再次双击，把结果输入当前文本框。

目前支持直接转文字、整理成文、翻译英文和写给 AI，也可以自动选择输出
方式。直接转文字不调用大模型；需要整理或翻译时可使用自己配置的
DeepSeek V4 Flash Key，典型轻量使用一天不到 1 毛钱。

[插入 20 秒演示视频或 GIF]

当前版本：
- macOS 14+
- 开源
- 通过 GitHub Releases 下载
- DeepSeek Key 存储在 macOS Keychain

产品页：
https://readysuite.vercel.app/readytype?utm_source=v2ex&utm_medium=community&utm_campaign=readytype_launch_2026_07

源码：
https://github.com/whnnick/readytype

现在最想确认一个问题：
大家更常用“直接转文字”，还是“自动整理成文”？
```

发布后两小时内及时回复安装、权限和使用场景问题。不要主动要求点赞或 Star。

## Bilibili / 小红书文案

标题 A：

> 我把 macOS 语音输入简化成了双击 Option

标题 B：

> 不想打字时，我让语音自动变成能直接发送的文字

正文：

```text
双击 Option 开始说话，再次双击完成输入。

ReadyType 可以直接转文字、整理成文、翻译英文，或者把口述内容变成清楚的
AI 任务说明。直接转文字不调用大模型，AI 模式使用 DeepSeek V4 Flash。

macOS 14+，开源。
产品页见评论或简介。
```

## Show HN 草稿

标题：

> Show HN: ReadyType – An open-source macOS voice input tool triggered with Option

首条评论：

```text
I built ReadyType because raw dictation often still needs rewriting before it
can be sent.

Double-press Option to start speaking, then press it again to insert the result
into the active text field. It supports direct dictation, polished writing,
English translation, and AI-ready task descriptions.

Direct dictation stays local. AI-assisted modes use a user-provided DeepSeek
key stored in macOS Keychain.

I would especially value feedback on the shortcut interaction and the balance
between direct dictation and automatic rewriting.
```

## 每日检查

每天晚上记录：

- 渠道内容播放量。
- Vercel Analytics 中 `/readytype` 的访客与 Referrer。
- `download_click` 和 `github_click` 事件数量。
- GitHub Insights 中的独立访客和来源。
- ReadyType Release 下载数增量。
- Issues、评论和私信中的有效反馈。

样本不足 100 个产品页访客时，不因单日波动重写官网。

判断规则：

- 内容播放超过 1,000，产品页访问少于 20：重做标题和前三秒。
- 产品页访问超过 100，下载点击率低于 10%：优化首屏说明和下载信任。
- 下载点击超过 30，Release 下载少于 10：检查安装说明、签名和文件选择。
- 下载超过 20，反馈为 0：增加置顶反馈 Issue，只问一个具体问题。
