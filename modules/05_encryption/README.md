# E. 現代加密 (Encryption)

> **知識來源與版權聲明**
> 本教材由 **Falo x Force Cheng 2026/06/15** 創立，屬於 Formosa AI Life Outlook (FALO) 與 Taiwan AI Audit 知識資產工程的一部分，專注於 AI 時代的資訊治理、AI 工作流與內容保護。

⸻

## 一、核心概念

**現代加密（Modern Encryption）** 依賴於嚴謹的數學難題與演算法，其安全性不在於演算法的隱蔽度（Kerckhoffs's Principle：縱使演算法人人都知道，只要金鑰沒洩漏，就是安全的），而在於金鑰的複雜度。

本單元聚焦於**日常實用、檔案傳輸與高速運作**的現代加密場景：
1. **對稱加密 (Symmetric Encryption)**：使用相同金鑰加密與解密。例如 **AES (AES-128, AES-256)**，其運作速度極快，極其適合大檔案（如 ZIP 密碼、PDF 密碼保護）的快速防護與網絡傳輸。
2. **非對稱加密 (Asymmetric Encryption)**：使用公鑰加密、私鑰解密。例如 **RSA** 與 **ECC**，常用於身分驗證與金鑰分發。
3. **傳輸安全協定**：如 **HTTPS** 與 **TLS**，保護網路通訊免受中間人監聽。

本單元屬於待擴充骨架，未來將由 **ff** 與團隊成員補充實用應用與 Demo。

⸻

**專案貢獻與維護者**：
* Force Cheng (Falo x Force Cheng) - 專案發起人
* FALO Open Source Community & Partners - 開源協作與維護團隊

*Falo x Force Cheng 2026/06/15*
