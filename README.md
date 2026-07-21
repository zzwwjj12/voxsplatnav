# VoxSplatNav 学术项目网页部署说明

本目录已经按 GitHub Pages 静态网页结构整理，可直接上传。

## 1. 发布前必须替换

1. 作者和单位：编辑 `index.html` 中的 `authors` 与 `affiliation`。
2. 项目视频：将最终 MP4 命名为：
   `assets/video/voxsplatnav_project_video.mp4`
3. 论文 PDF：用最终稿替换：
   `assets/paper/VoxSplatNav_manuscript.pdf`
4. Code 按钮：把 `href="#"` 替换为代码仓库地址，并删除 `disabled` 类。
5. BibTeX：在网页底部替换作者、期刊、年份和 DOI。
6. 新实验完成后，更新首页 97.38%、131.35 和 0.1868 m 等数值。

## 2. 推荐视频结构（3–5 分钟）

- 0:00–0:20：研究问题与核心贡献
- 0:20–0:50：手机图像 / SfM / 3DGS 重建
- 0:50–1:30：3DGS Depth + Alpha → TSDF → Voxel-ESDF
- 1:30–2:10：Masked Voxel Pretraining、MCER、TQF-PPO
- 2:10–3:20：多个场景中的导航过程和轨迹
- 3:20–4:00：定量结果、消融和真机部署路径

建议使用 H.264 编码的 MP4，网页兼容性最好。

## 3. GitHub Pages 发布

推荐仓库名：`voxsplatnav`

上传本目录内所有文件后，在仓库中进入：
`Settings → Pages → Build and deployment → Deploy from a branch`

选择：
- Branch：`main`
- Folder：`/(root)`

发布地址通常为：
`https://你的GitHub用户名.github.io/voxsplatnav/`

## 4. 论文中加入链接

LaTeX 示例：

```latex
A project webpage containing supplementary videos and qualitative
navigation results is available at
\url{https://YOUR-USERNAME.github.io/voxsplatnav/}.
```

在匿名评审阶段，请先确认期刊是否允许包含可能暴露作者身份的公开链接。
