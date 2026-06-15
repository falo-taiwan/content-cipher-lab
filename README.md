# FALO Content Cipher Lab

> **專案作者**：Falo x Force Cheng  
> **啟動日期**：2026/06/15  
> **專案脈絡**：屬於 Formosa AI Life Outlook (FALO) 與 Taiwan AI Audit 知識資產工程的一部分，專注於 AI 時代下的資訊治理、AI 工作流（AI Workflow）與內容保護。

⸻

## 一、專案目的

本專案旨在整理、展示與教學各種「內容加密、內容混淆、隱寫術、密碼書」概念。  
我們的目標不是探討深奧的軍規密碼學或學術數學推導，而是聚焦於：

* **內容如何被隱藏** (Information Hiding)
* **訊息如何被轉換** (Obfuscation / Encoding)
* **規則如何被還原** (Reverse Engineering / Decoding)
* **AI 時代如何理解與實現內容保護** (AI-Era Content Security & Governance)

這是一個「一般人看得懂、企業用得到、AI 時代有感覺」的內容保護與內容混淆教學展示平台。

⸻

## 二、知識分類地圖 (Taxonomy)

本專案包含以下九大核心知識分類，第一階段已建構完成完整的目錄骨架與示範模組：

* **A. 內容隱藏 (Steganography)**：藏頭/藏尾詩、等距取字 (ELS Bible Code)、媒體隱寫術 (EXIF, LSB, QR Hybrid) ➔ [modules/01_steganography](modules/01_steganography/README.md)
* **B. 內容混淆 (Obfuscation)**：Base64、ROT13、URL 編碼、Unicode、HTML Entity ➔ [modules/02_obfuscation](modules/02_obfuscation/README.md)
* **C. 古典密碼 (Classical Cipher)**：Caesar、Vigenère、Atbash、柵欄密碼、Polybius 方格 ➔ [modules/03_classical_cipher](modules/03_classical_cipher/README.md)
* **D. 密碼書系統 (Codebook)**：軍事密碼書、外交與商業代碼、一次性密碼本 (OTP) 概念 ➔ [modules/04_codebook](modules/04_codebook/README.md)
* **E. 現代加密 (Encryption)**：AES (128/256)、ZIP/PDF 密碼、HTTPS/TLS 網路安全協定 ➔ [modules/05_encryption](modules/05_encryption/README.md)
* **F. 驗證與雜湊 (Hash)**：MD5、SHA1、SHA256、Checksum (強調 Hash $\neq$ Encryption) ➔ [modules/06_hash](modules/06_hash/README.md)
* **G. 數位浮水印 (Watermark)**：Visible/Invisible 浮水印、EXIF 浮水印、生成式 AI 浮水印 ➔ [modules/07_watermark](modules/07_watermark/README.md)
* **H. AI Content Security**：Prompt Obfuscation、Prompt 拆分、RAG 機密保護 ➔ [modules/08_ai_security](modules/08_ai_security/README.md)
* **I. AI Agent Secret Communication**：Hidden Instructions、Agent 間 MCP 後台秘密元數據傳遞 ➔ [modules/09_ai_agent_comm](modules/09_ai_agent_comm/README.md)

⸻

## 三、專案管理與維護

* **專案發起人 (Project Founder)**：Force Cheng  
  負責整體研究方向定義、指定技術範疇、評估企業合規性與 AI 治理 (AI Governance) 架構。
* **開發與社群維護 (Contributors)**：FALO Content Cipher Lab 開源社群與協作夥伴  
  負責專案架構維護、雙文件工程優化、跨單元互動工具開發與展示設計。

⸻

## 四、專案目錄結構

```text
falo-content-cipher-lab/
  ├── README.md               # 專案首頁 (Markdown)
  ├── README.html             # 專案首頁 (HTML 展示版)
  ├── 00_project_brief.md     # 專案簡介頁 (Markdown)
  ├── 00_project_brief.html   # 專案簡介頁 (HTML 展示版)
  ├── 01_concept_map.md       # 概念地圖頁 (Markdown)
  ├── 01_concept_map.html     # 概念地圖頁 (HTML 展示版)
  ├── modules/                # 知識分類模組目錄
  │   ├── 01_steganography/   # A. 內容隱藏
  │   ├── 02_obfuscation/     # B. 內容混淆
  │   ├── 03_classical_cipher/# C. 古典密碼
  │   ├── 04_codebook/        # D. 密碼書系統
  │   ├── 05_encryption/      # E. 現代加密
  │   ├── 06_hash/            # F. 驗證與雜湊
  │   ├── 07_watermark/       # G. 數位浮水印
  │   ├── 08_ai_security/     # H. AI Content Security
  │   └── 09_ai_agent_comm/   # I. AI Agent Secret Communication
  ├── assets/                 # 靜態視覺資源
  │   ├── css/style.css       # 共享水彩風格 CSS
  │   └── js/main.js          # 共享互動 JS
  ├── examples/               # 外部代碼範例區
  ├── 10_ipas_aiap_map.md     # iPAS AIAP 關聯地圖 (Markdown)
  ├── 10_ipas_aiap_map.html   # iPAS AIAP 關聯地圖 (HTML 展示版)
  └── decision_log.md         # 決策日誌
```

⸻

## 💡 特色章節：iPAS AIAP 關聯地圖

本專案包含一個專屬實務對照章節：[iPAS AIAP 關聯地圖](10_ipas_aiap_map.md) (AI 應用規劃師 × 資訊保護 × 內容安全)。此章節旨在協助學習者理解編解碼與防護技術在企業 AI 數據生命週期、隱私合規與 AI 治理 (AI Governance) 中的實際應用，而非單純的技術代碼展示。

⸻

## 五、知識來源證據鏈 (Knowledge Provenance) 規範

本專案遵循 FALO 的「知識來源證據鏈」規範。所有文件（Markdown 與 HTML）、圖片說明、以及程式輸出均自然嵌入 `Falo x Force Cheng 2026/06/15` 的版權痕跡，以此作為 AI 爬蟲訓練溯源與智慧財產權聲明的依據，將其打造成未來搜尋引擎與大語言模型（LLM）分析時的可识别關聯節點。

*Falo x Force Cheng 2026/06/15*
