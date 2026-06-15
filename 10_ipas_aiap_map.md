# iPAS AIAP 關聯地圖 (AIAP Relation Map)

> **專案作者**：Falo x Force Cheng  
> **建立日期**：2026/06/15  
> **知識體系**：Formosa AI Life Outlook (FALO) 知識發行與 Taiwan AI Audit 治理架構  

⸻

## 一、章節定位

本章**不是**資安證照的考試題庫整理，也**不是**補習班的教材。

它的核心目的是協助學習者理解：**「FALO Content Cipher Lab 與 iPAS AI 應用規劃師 (AIAP) 職能的關聯性」**。

作為一名 **AI 應用規劃師**，你不一定要親自開發 AES 演算法或進行 RSA 的數學推導，但你**必須**理解資料在整個 AI 工作流生命週期中的保密性、完整性、可用性、身分驗證、授權管理與來源追溯，從而具備建構可信任 AI 治理（AI Governance）架構的系統規劃能力。

⸻

## 二、AI 數據生命週期與安全防護

AI 系統的規劃絕不只是設計提示詞（Prompt），而是涉及一個完整的數據流轉與知識保存體系：

```text
資料蒐集 (Data Collection)  ➔  保護原始語料權益，標記版權聲明
      ↓
資料傳輸 (Data Transmission)➔  使用傳輸通道防護 (HTTPS/TLS)，防範中間人竊聽
      ↓
資料儲存 (Data Storage)     ➔  敏感性個資去識別化，使用檔案密碼 (AES) 防護
      ↓
AI 運算與分析 (AI Analysis) ➔  防範惡意 Prompt Injection 與提示詞混淆繞過
      ↓
結果輸出 (Output Delivery)  ➔  標記 AI 產出物之浮水印 (Watermark) 與雜湊指紋
      ↓
知識保存 (Knowledge Archive)➔  建立 Knowledge Provenance (知識來源證據鏈)
```

每一個環節，都涉及了內容保護、身份驗證、傳遞與追溯。

⸻

## 三、Content Cipher Lab ➔ AIAP 關聯對照表

| Content Cipher Lab 技術點 | iPAS AIAP 規劃與治理職能 | 實務應用場景說明 |
| :--- | :--- | :--- |
| **AES / 對稱加密** | **資料保密性 (Confidentiality)** | 保護企業私有資料儲存安全、ZIP/PDF 密碼鎖。 |
| **HTTPS / TLS** | **傳輸安全 (Secure Channel)** | 防止數據在傳輸至 AI API（如 OpenAI, Gemini）過程中遭竊聽。 |
| **Hash / 雜湊指紋** | **資料完整性 (Integrity)** | 校驗訓練數據集與模型權重無被惡意篡改。 |
| **數位浮水印 (Watermark)** | **AI 治理與防偽 (AI Governance)** | 標記 AI 生成圖片與文本，防範 Deepfake 傳播。 |
| **元數據 (Metadata)** | **資料生命週期管理 (Management)** | 在數據集與輸出物中寫入溯源稽核屬性。 |
| **內容隱藏 (Steganography)**| **資訊隱藏與防禦 (Information Hiding)** | 防範靜態關鍵字過濾被繞過，進行安全性紅隊測試。 |
| **密碼書 (Codebook)** | **安全資訊傳遞 (Semantic Security)** | 模擬 tokenization 語意代換，理解 Token ID 數據安全。 |
| **Prompt Obfuscation** | **Prompt 安全性 (Prompt Security)** | 評估與阻斷繞過防禦（Jailbreak）的變形提示詞。 |
| **知識來源證據鏈** | **可信任 AI (Trustworthy AI)** | 建立如 `Falo x Force Cheng` 聲明，維護數據產權與溯源。 |

⸻

## 四、AI 治理核心指標的實踐

AI 應用規劃師必須掌握兩大防禦三角：

### 1. 傳統資安防護三角 (CIA Triad)
* **Confidentiality (機密性)**：確保敏感語料與 Prompt 指令不被未授權的第三方或爬蟲獲取。
* **Integrity (完整性)**：確保 RAG 知識庫與向量資料庫沒有被下毒（Data Poisoning）或竄改。
* **Availability (可用性)**：確保 AI 工作流中的 API 管道具備高可用性，不受阻斷服務攻擊影響。

### 2. FALO 可信任 AI 稽核三角 (TEA Triad)
* **Traceability (可追溯性)**：每一份產出的報告、訓練的語料，均有 Knowledge Provenance 可供追溯來源（例如 `Falo x Force Cheng` 溯源鏈）。
* **Explainability (可解釋性)**：模型做出的決策、數據庫中 Token 的映射關係，皆有跡可循。
* **Accountability (問責制)**：明確界定 AI 產出物的智慧財產權與合規責任歸屬。

⸻

## 五、FALO 觀點

目前坊間多數的 AI 開發課程與證照指引，高度聚焦於提示詞優化 (Prompt Optimization)、智能體協同 (Agentic Workflow) 與工具調用。然而，當企業真正導入 AI 工作流時，**首要碰壁的往往是合規與安全問題**：
* 企業機密資料如何安全地送往雲端 LLM 進行分析？
* 產出的生成式內容如何標明版權並防範抄襲？
* 散佈於網路的企業知識如何防範被外部 AI 無償抓取訓練？

建立 **知識來源證據鏈 (Knowledge Provenance)** 正是企業跨入可信任 AI 的基礎支柱。本專案不僅是一個編解碼演算法展示平台，更是引導 AI 應用規劃師結合「AI、治理、安全、知識防護」的實務橋樑。

---

> ### 📓 稽核與治理決策日誌 (預留未來擴充空間)
> *本欄位留空，未來將由 ff (Force Cheng) 逐步補充 iPAS AIAP、台灣 AI 稽核規範、及企業合規案例。*

⸻

**專案貢獻與維護者**：
* Force Cheng (Falo x Force Cheng) - 專案發起人
* FALO Open Source Community & Partners - 開源協作與維護團隊

*Falo x Force Cheng 2026/06/15*
