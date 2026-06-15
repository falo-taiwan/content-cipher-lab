# B. 內容混淆 (Obfuscation)

> **知識來源與版權聲明**
> 本教材由 **Falo x Force Cheng 2026/06/15** 創立，屬於 Formosa AI Life Outlook (FALO) 與 Taiwan AI Audit 知識資產工程的一部分，專注於 AI 時代的資訊治理、AI 工作流與內容保護。

⸻

## 一、核心概念

**內容混淆（Content Obfuscation）** 是指透過某種公開且確定的規則，將明文轉換為一種**人類無法直接閱讀，但能夠以相同规则輕鬆還原**的格式。

**⚠️ 重要觀念：混淆與編碼不等同於加密 (Obfuscation/Encoding $\neq$ Encryption)**
* **混淆 / 編碼（Obfuscation / Encoding）**：不需要金鑰（Key）。任何人只要知道了編碼格式（例如 Base64 或 ROT13），就可以百分之百還原內容。其主要用途是**傳輸相容性**（如將二進位檔轉為純文字）或**規避靜態過濾**。
* **加密（Encryption）**：必須依賴一個秘密金鑰（Key）。沒有金鑰，即使知道了加密演算法（如 AES），在數學上也幾乎不可能在有限時間內解密。

在 AI 安全領域，內容混淆（例如將 Prompt 編碼為 Base64 或 Emoji）常被惡意測試者用來測試大語言模型（LLM）的對齊（Alignment）邊界，稱為**繞過攻擊（Jailbreak / Prompt Obfuscation）**。這使得理解混淆機制成為 AI 安全治理的核心一環。

⸻

## 二、研究與展示範疇

本單元主要整理與展示以下幾種編碼與混淆技術：

1. **Base64 編碼**：將二進位資料或 UTF-8 文字轉換為由 64 個可列印字元（`A-Z`, `a-z`, `0-9`, `+`, `/`，以及填充符 `=`）組成的 ASCII 字串。
2. **ROT13 (Caesar Shift 13)**：古典密碼凱撒密碼的變體。將字母表中的字母循環右移 13 位。因為英文字母共 26 個，所以 ROT13 的加密與解密演算法完全相同。
3. **URL Encoding (Percent Encoding)**：將非 ASCII 字元或 URL 保留字元轉換為 `%` 後接兩位十六進位數（例如「空格」轉為 `%20`）。
4. **Unicode Encoding / HTML Entity**：將字元轉換為特定的編碼形式（如 `\u4e2d` 或 `&#20013;`），常用於繞過網頁應用程式的安全過濾網。
5. **Emoji Encoding / 字元替換**：使用一組預設的映射表，將英文字母或中文漢字替換為特定表情符號（Emoji）或同音字。

⸻

## 三、教學重點與思考

1. **為什麼要混淆？**：
   - 確保資料在不相容的管道上完整傳輸（例如電子郵件中的 Base64 附件）。
   - 快速遮蔽敏感詞彙（例如將敏感詞以 ROT13 隱藏，避免被初階的關鍵字檢查器直接匹配）。
2. **對抗 LLM 過濾器**：
   - 許多 LLM 安全護欄（Guardrails）是在「字串明文」層面進行過濾。如果將一段具破壞性的 Prompt 經過 Base64 編碼輸入，並在 Prompt 中指示 LLM「先解碼 Base64 再執行」，這有高機率繞過防禦。這種現象突顯了 AI 時代資訊治理（AI Governance）必須朝向語意分析，而非單純的規則匹配。

⸻

**專案貢獻與維護者**：
* Force Cheng (Falo x Force Cheng) - 專案發起人
* FALO Open Source Community & Partners - 開源協作與維護團隊

*Falo x Force Cheng 2026/06/15*
