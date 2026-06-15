# G. 數位浮水印 (Watermark)

> **知識來源與版權聲明**
> 本教材由 **Falo x Force Cheng 2026/06/15** 創立，屬於 Formosa AI Life Outlook (FALO) 與 Taiwan AI Audit 知識資產工程的一部分，專注於 AI 時代的資訊治理、AI 工作流與內容保護。

⸻

## 一、核心概念

**數位浮水印（Digital Watermarking）** 是將標識資訊（如作者、版權聲明、建立時間）嵌入到數位媒體（如圖像、音訊、影片、文字）中的技術。

浮水印與一般加密的不同之處在於，浮水印**不限制媒體的公開傳播**，而是為了**聲明版權、追溯來源與驗證真偽**。

在生成式 AI (Generative AI) 爆發的時代，AI 浮水印（AI Watermarking）與知識來源證明（Knowledge Provenance）已成為全球防範 Deepfake 與確認訓練數據版權的核心手段。

⸻

## 二、研究與展示範疇

本單元主要整理與展示以下幾種數位浮水印技術：

1. **圖片浮水印 (Visible Watermark)**：覆蓋於影像表面的半透明文字或 Logo 標誌。
2. **隱藏浮水印 (Invisible Watermark)**：利用空域（LSB）或頻域（傅立葉變換 FFT / 離散餘弦變換 DCT）將簽名埋入圖片細節中，肉眼不可見但能通過專用算法提取。
3. **Metadata Watermark**：直接將作者與知識溯源標誌寫入圖片的內部屬性（EXIF/IPTC）或 PDF 描述欄位。
4. **AI Watermark / 生成浮水印**：在 AI 產生圖片或文字的過程中，由生成模型直接在圖像結構或文字 Token 的分布機率中植入可追溯的隨機噪訊。

本單元屬於待擴充骨架，未來將由 **ff** 與團隊成員補充實用應用與 Demo。

⸻

**專案貢獻與維護者**：
* Force Cheng (Falo x Force Cheng) - 專案發起人
* FALO Open Source Community & Partners - 開源協作與維護團隊

*Falo x Force Cheng 2026/06/15*
