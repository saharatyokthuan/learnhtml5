# 🌐 คู่มือการเขียน HTML ฉบับสมบูรณ์

เว็บไซต์สอน HTML5 ภาษาไทย ตั้งแต่พื้นฐานจนถึงระดับสูง จำนวน 16 บท พร้อมตัวอย่างโค้ดและแนวปฏิบัติที่ดี — เป็นเว็บ static ล้วน ไม่ต้องติดตั้งหรือ build

---

## ✨ ฟีเจอร์หลัก

| ฟีเจอร์ | รายละเอียด |
|:---|:---|
| 📑 **สารบัญ** | หน้า `index.html` แสดงลิงก์ไปทั้ง 16 บทแบบ grid |
| 🧭 **การนำทางระหว่างบท** | แต่ละบทมี nav กลับไปสารบัญ และลิงก์ไปบทก่อนหน้า/ถัดไป |
| ⬆️ **ปุ่มกลับด้านบน** | ปุ่ม `scrollTopBtn` โผล่เมื่อเลื่อนลงเกิน 300px และเลื่อนกลับแบบ smooth (`script.js`) |
| 🖱️ **Smooth anchor scroll** | ลิงก์ที่ขึ้นต้นด้วย `#` เลื่อนไปยังหัวข้อแบบ smooth (`script.js`) |
| 🎨 **ตกแต่งด้วย CSS** | ใช้ `style.css` ร่วมกันทุกหน้า มี animation (`slideDown`, `fadeIn`) และ media query ที่ 768px / 600px |
| 🔤 **ฟอนต์ไทย** | ใช้ฟอนต์ Sarabun จาก Google Fonts |

---

## 📚 รายการบทเรียน

ชื่อบทมาจาก `<title>` ของแต่ละไฟล์ในโฟลเดอร์ `lesson/`

| บท | ไฟล์ | ชื่อบทเรียน |
|:---:|:---|:---|
| 1 | `lesson/01-intro.html` | บทนำ HTML |
| 2 | `lesson/02-structure.html` | โครงสร้างพื้นฐาน |
| 3 | `lesson/03-elements.html` | HTML Elements และ Tags |
| 4 | `lesson/04-text.html` | Text Elements |
| 5 | `lesson/05-links.html` | Link Elements |
| 6 | `lesson/06-images.html` | Image Elements |
| 7 | `lesson/07-lists.html` | List Elements |
| 8 | `lesson/08-tables.html` | Table Elements |
| 9 | `lesson/09-forms.html` | Form Elements |
| 10 | `lesson/10-semantic.html` | Semantic Elements |
| 11 | `lesson/11-meta.html` | Meta Tags และ Document Head |
| 12 | `lesson/12-attributes.html` | Attributes (คุณลักษณะ) |
| 13 | `lesson/13-comments.html` | Comments (ความเห็น) |
| 14 | `lesson/14-best-practices.html` | Best Practices |
| 15 | `lesson/15-common-mistakes.html` | Common Mistakes |
| 16 | `lesson/16-tools.html` | Tools & Resources |

---

## 📁 โครงสร้างไฟล์

```
learnhtml5/
├── index.html                   # หน้าแรก + สารบัญ 16 บท
├── style.css                    # สไตล์ที่ใช้ร่วมกันทุกหน้า
├── script.js                    # ปุ่มกลับด้านบน + smooth anchor scroll
├── lesson/
│   ├── 01-intro.html            # บทนำ HTML
│   ├── 02-structure.html        # โครงสร้างพื้นฐาน
│   ├── 03-elements.html         # HTML Elements และ Tags
│   ├── 04-text.html             # Text Elements
│   ├── 05-links.html            # Link Elements
│   ├── 06-images.html           # Image Elements
│   ├── 07-lists.html            # List Elements
│   ├── 08-tables.html           # Table Elements
│   ├── 09-forms.html            # Form Elements
│   ├── 10-semantic.html         # Semantic Elements
│   ├── 11-meta.html             # Meta Tags และ Document Head
│   ├── 12-attributes.html       # Attributes
│   ├── 13-comments.html         # Comments
│   ├── 14-best-practices.html   # Best Practices
│   ├── 15-common-mistakes.html  # Common Mistakes
│   └── 16-tools.html            # Tools & Resources
└── README.md                    # ไฟล์นี้
```

---

## 🚀 วิธีใช้งาน

### เปิดในเครื่อง

เปิดไฟล์ `index.html` ในเบราว์เซอร์ได้ทันที — หรือรันผ่าน local server:

```bash
cd learnhtml5
python3 -m http.server 8000
```

แล้วเปิด http://localhost:8000

> ต้องต่ออินเทอร์เน็ตเพื่อโหลดฟอนต์และไอคอนจาก CDN (ดูหัวข้อเทคโนโลยี) ถ้าออฟไลน์เนื้อหายังอ่านได้ แต่ฟอนต์และไอคอนอาจไม่แสดง

### การอ่าน

เริ่มจากสารบัญใน `index.html` แล้วเลือกบทที่ต้องการ หรืออ่านเรียงตามบทโดยใช้ลิงก์บทก่อนหน้า/ถัดไปที่ส่วนหัวของแต่ละหน้า

---

## 🛠 เทคโนโลยีที่ใช้

- **HTML5** — โครงสร้างเนื้อหา
- **CSS3** — `style.css` (animation, media query)
- **JavaScript** (vanilla) — `script.js`
- **Google Fonts** — ฟอนต์ Sarabun (`fonts.googleapis.com`)
- **Font Awesome 6.5.0** — ไอคอน โหลดจาก `cdnjs.cloudflare.com`
