import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
4. Ghi commit: `Thêm src/index.js`
5. Nhấn **Commit changes** ✅

---

## Bước 4 — Tạo public/index.html

1. Nhấn **"Add file"** → **"Create new file"**
2. Gõ tên:
```
public/index.html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#0a0f0a" />
    <title>TrinityX OS</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```
4. Ghi commit: `Thêm public/index.html`
5. Nhấn **Commit changes** ✅

---

## Kết quả cuối cùng repo sẽ như này:
```
trinityx-platform/
├── package.json
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   └── index.js
└── trinityx.jsx  (file cũ, không sao)
