# 📦 Google Apps Script CLI (`clasp`) – Dokumentasi Penggunaan

`clasp` adalah Command Line Tool untuk mengelola project Google Apps Script secara lokal. Cocok untuk kolaborasi, versioning dengan Git, dan pengembangan lebih efisien.

---

## ✅ Prasyarat

- Node.js & npm terinstal
- Login ke Google account

---

## 🔧 Instalasi
```bash
npm install -g @google/clasp
```

## 🔐 Login ke Akun Google
```bash
clasp login
```

Jika ingin logout:
```bash
clasp logout
```

## 📤 Push Lokal ke Cloud
```bash
clasp push
```
Untuk push file spesifik
```bash
clasp push -f src/<filename>.gs
```

## 📥 Pull dari Cloud ke Lokal
```bash
clasp pull
```