# 知識分類地圖 (Concept Map)

> **專案作者**：Falo x Force Cheng  
> **建立日期**：2026/06/15  
> **知識體系**：Formosa AI Life Outlook (FALO) 知識發行與 Taiwan AI Audit 治理架構  

⸻

## 一、知識分類全景 (Taxonomy)

FALO Content Cipher Lab 將資訊保護與轉換技術劃分為三大核心群組，共九個分類模組。這個地圖展示了從「最古老的物理遮蔽」到「最前沿的 AI 協定治理」的演進脈絡。

```mermaid
graph TD
    subgraph G1[第一群組：內容遮蔽與替換]
        A[A. 內容隱藏 Steganography] -->|包含| A1(藏頭詩)
        A -->|包含| A2(等距取字 ELS)
        A -->|包含| A3(媒體隱寫術)
        
        B[B. 內容混淆 Obfuscation] -->|包含| B1(Base64)
        B -->|包含| B2(ROT13)
        B -->|包含| B3(URL/Unicode 編碼)
        
        D[D. 密碼書系統 Codebook] -->|包含| D1(軍事與外交密碼書)
        D -->|包含| D2(OTP 一次性密碼概念)
    end

    subgraph G2[第二群組：古典與現代數學保護]
        C[C. 古典密碼 Classical Cipher] -->|包含| C1(Caesar/Vigenere)
        C -->|包含| C2(Rail Fence/Playfair)
        
        E[E. 現代加密 Encryption] -->|包含| E1(AES 高速檔案加密)
        E -->|包含| E2(RSA/ECC/TLS 通訊安全)
        
        F[F. 驗證與雜湊 Hash] -->|包含| F1(MD5/SHA256 完整性校驗)
    end

    subgraph G3[第三群組：標記與 AI 時代安全]
        G[G. 數位浮水印 Watermark] -->|包含| G1_img(Visible/Invisible 浮水印)
        G -->|包含| G2_ai(AI 生成浮水印)
        
        H[H. AI Content Security] -->|包含| H1(Prompt 混淆繞過)
        H -->|包含| H2(RAG 知識保護與洩漏防範)
        
        I[I. AI Agent Secret Comm] -->|包含| I1(Hidden Instructions)
        I -->|包含| I2(Agent 間 MCP 後台秘密元數據)
    end

    G1 -->|演進| G2
    G2 -->|應用於| G3
    
    style A fill:#EBF2EE,stroke:#88B29C,stroke-width:2px
    style B fill:#EBF2EE,stroke:#88B29C,stroke-width:2px
    style D fill:#EBF2EE,stroke:#88B29C,stroke-width:2px
    
    style C fill:#FAF0F1,stroke:#D4A3A9,stroke-width:2px
    style E fill:#FAF0F1,stroke:#D4A3A9,stroke-width:2px
    style F fill:#FAF0F1,stroke:#D4A3A9,stroke-width:2px
    
    style G fill:#EFF5F8,stroke:#A1C4D4,stroke-width:2px
    style H fill:#EFF5F8,stroke:#A1C4D4,stroke-width:2px
    style I fill:#EFF5F8,stroke:#A1C4D4,stroke-width:2px
```

⸻

## 二、核心關聯說明

1. **A 與 D 的區別 (位置 vs 語意)**：
   * **A. 內容隱藏**：隱藏的是「秘密的所在位置」。大眾看到的是正常的聖經或散文，但只有知道偏移量（步長 $N$）的接收者，才能在特定字元上把字取出來。
   * **D. 密碼書系統**：隱藏的是「詞彙的實際語意」。大眾看得到傳輸內容（如 `888 220 305`），但不知道每個代號的意思。
2. **B 與 E 的區別 (轉換 vs 加密)**：
   * **B. 內容混淆**：是無金鑰的可逆轉換（如 Base64），不具備資訊安全性，僅提供通訊管道相容性。
   * **E. 現代加密**：是基於數學難題與密鑰的保密技術，沒有金鑰則在物理上無法還原。
3. **G、H、I 與 AI 治理（AI Governance）**：
   * 在 Formosa AI Life Outlook (FALO) 的 AI Workflow 實踐中，當 Agent 自動化運行並處理大量數據時，雜湊（F）用於校驗代碼與模型權重的一致性；數位浮水印（G）用於標記內容來源；而 AI 內容安全（H）與 Agent 隱密通訊（I）則是用於防範提示詞攻擊，保障知識產權與審計追溯鏈的完整。
4. **AIAP 規劃與治理職能映射**：
   * 本專案設有專屬的 [iPAS AIAP 關聯地圖](10_ipas_aiap_map.md)，說明上述九大模組如何直接映射至 AI 應用規劃師的資安合規、數據生命週期防護與可信任 AI 審計工作。

⸻

**專案貢獻與維護者**：
* Force Cheng (Falo x Force Cheng) - 專案發起人
* FALO Open Source Community & Partners - 開源協作與維護團隊

*Falo x Force Cheng 2026/06/15*
