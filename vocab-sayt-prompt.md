# PROMPT: Ingliz tili lug'atini o'rgatuvchi sayt (Duolingo uslubida)

Quyida shu saytni yaratish uchun to'liq texnik topshiriq (prompt) berilgan. Buni istalgan AI dasturlash vositasiga (Claude, ChatGPT, Cursor va h.k.) nusxa ko'chirib berishingiz mumkin.

---

## 1. Loyihaning maqsadi

Ingliz tilidagi so'zlarni tez va uzoq muddat esda saqlab qolishga yordam beruvchi, o'yin shaklidagi interaktiv veb-sayt yaratish kerak. Foydalanuvchi o'zi so'z qo'shadi (inglizcha + o'zbekcha tarjima), tizim esa ilmiy asoslangan usullar orqali ularni takrorlatadi.

Maqsadli auditoriya: ingliz tilini o'rganayotgan o'zbek tilidagi foydalanuvchilar. Interfeys tili — o'zbek tili (lotin alifbosida).

---

## 2. Dizayn yo'nalishi — "Duolingo uslubida", lekin nusxa emas

Dizayn Duolingo ilovasining **hissiy va vizual uslubidan ilhomlanishi kerak**, lekin uning aniq belgilari (yashil boyqush maskoti, savdo belgisi, aniq shrift kombinatsiyasi) **nusxalanmasligi kerak** — mualliflik huquqi sabab. Faqat quyidagi dizayn tamoyillari olinsin:

- **Rang palitrasi**: yorqin, quvnoq, to'yingan ranglar. Asosiy rang — yorqin yashil (masalan `#58CC02`), qo'shimcha ranglar — moviy, sariq/oltin, qizil (xato uchun).
- **Tugmalar** — "3D bosiladigan" uslubda: tugmaning pastki qismida qalinroq soya chizig'i bo'lib, bosilganda tugma pastga siljib, soya yo'qoladi (`box-shadow` orqali).
- **Shrift** — yumaloq, qalin (bold/black weight), do'stona ko'rinishdagi shrift (masalan Nunito, Baloo 2 yoki shunga o'xshash Google Fonts shrifti).
- **Burchaklar** — katta radius (12-16px), yumshoq va o'ynoqi ko'rinish.
- **Progress bar, yurak (hearts/life) tizimi, XP yulduzchalari, kunlik streak (ketma-ketlik)** — o'yinlashtirish elementlari sifatida ko'rinsin.
- **O'z maskoti**: Duolingo boyqushi o'rniga, loyihaga xos, mualliflik huquqidan mustaqil oddiy va do'stona xarakter (masalan qush, robot yoki boshqa neytral obraz) yaratilsin — SVG yoki chizilgan shaklda, hech qanday tayyor brendga o'xshamasligi kerak.
- Interfeys **matnlari qisqa, faol ohangda, undov belgisi bilan haddan tashqari band qilinmagan, tabriklovchi va rag'batlantiruvchi** bo'lsin ("Ajoyib!", "Yana bir urinish!", "Zo'r ketyapsiz!").

---

## 3. Asosiy funksional talablar

### 3.1. So'zlarni boshqarish
- Foydalanuvchi o'zi qo'lda so'z qo'sha oladi: **inglizcha so'z**, **o'zbekcha tarjima**, ixtiyoriy **misol jumla**.
- So'zlarni ro'yxatdan **o'chirish** imkoniyati.
- Har bir so'zning "bilish darajasi" (masalan 5 pog'onali indikator) ko'rinib tursin.

### 3.2. Oraliqli takrorlash (spaced repetition) — Leitner tizimi
Ilmiy asos: **spaced repetition** — unutish egri chizig'iga (Ebbinghaus forgetting curve) qarshi eng samarali isbotlangan usul.

- Har bir so'z 1 dan 5 gacha bo'lgan "qutida" (box/level) turadi.
- To'g'ri javob berilsa → so'z keyingi qutiga o'tadi (kamroq tez-tez takrorlanadi).
- Xato javob berilsa → so'z 1-qutiga qaytadi (tez-tez takrorlanadi).
- Har bir quti uchun keyingi takrorlash oralig'i (kunlarda): 1-quti = har kuni, 2-quti = 2 kunda bir, 3-quti = 4 kunda bir, 4-quti = 8 kunda bir, 5-quti = 16 kunda bir ("o'zlashtirilgan" hisoblanadi).
- Tizim har kuni faqat **"muddati kelgan" (due) so'zlarni** takrorlash uchun tanlaydi.

### 3.3. Ma'lumotlarni saqlash
- So'zlar, ularning darajasi, keyingi takrorlash sanasi, foydalanuvchi progressi (XP, streak) **doimiy saqlanishi** kerak — sahifa yopilib qayta ochilganda ma'lumot yo'qolmasligi kerak.

---

## 4. O'yinlar — ilmiy asoslangan xotira mashqlari

Kartochka (faqat old-orqa aylantirish) formati **yetarli emas**, chunki u passiv tanib olishga asoslangan. Shuning uchun quyidagi **faol eslash (active recall / retrieval practice)** tamoyiliga asoslangan bir nechta xilma-xil o'yin turi bo'lishi kerak — bu psixologik tadqiqotlarda "testing effect" nomi bilan tanilgan va passiv qayta o'qishdan sezilarli darajada samaraliroq ekani isbotlangan:

1. **Ko'p tanlovli test (multiple choice)** — so'z (inglizcha yoki o'zbekcha) ko'rsatiladi, 4 variantdan to'g'ri tarjimani tanlash kerak. Noto'g'ri variantlar foydalanuvchining boshqa so'zlaridan tasodifiy olinadi (distraktor sifatida).
2. **Yozib javob berish (typing recall)** — foydalanuvchi tarjimani o'zi klaviaturada yozadi. Bu eng kuchli faol eslash shakli, chunki javobni "ishlab chiqarish" xotirani mustahkamlaydi (production effect).
3. **Harflardan so'z terish (letter tiles)** — o'zbekcha ma'no ko'rsatiladi, inglizcha so'zning harflari aralashtirilgan holda "plitkalar" ko'rinishida beriladi, foydalanuvchi ularni to'g'ri tartibda bosib so'zni yig'adi. Bu imloni ham mustahkamlaydi.
4. **Juftlarni moslashtirish (matching game)** — inglizcha va o'zbekcha so'zlar aralashtirilgan holda kartochkalar to'plamida ko'rsatiladi, foydalanuvchi mos juftlarni topadi.

**Qo'shimcha taklif etiladigan o'yin turlari** (agar vaqt/resurs yetsa, qo'shish tavsiya etiladi):
5. **Gapni to'ldirish (fill in the blank)** — foydalanuvchi qo'shgan misol jumladan so'z olib tashlanadi, foydalanuvchi kontekstga qarab to'g'ri so'zni tanlaydi yoki yozadi. Bu kontekstli o'rganishni kuchaytiradi.
6. **Tinglab yozish (listen and type)** — brauzerning ovoz sintezi (Web Speech API, `speechSynthesis`) orqali so'z talaffuz qilinadi, foydalanuvchi eshitgan so'zini yozadi. Bu eshitib idrok etishni rivojlantiradi.
7. **Vaqt bosimli tezkor tur (timed speed round)** — bir necha soniya ichida iloji boricha ko'p to'g'ri javob berish; bu diqqatni jamlash va tez tan olishni mashq qildiradi (ixtiyoriy, faqat "o'zlashtirilgan" so'zlar uchun qo'shimcha mashq sifatida).

Har bir dars sessiyasida turli o'yin turlari **aralashtirib (interleaving)** beriladi — bir xil o'yin ketma-ket takrorlanmasligi kerak. Ilmiy asos: **interleaved practice** bir turdagi mashqni blok holida takrorlashdan (blocked practice) ko'ra samaraliroq ekani ko'rsatilgan.

---

## 5. O'yinlashtirish (gamification) elementlari

- **Yuraklar (hearts)** — sessiya davomida cheklangan miqdordagi "jon" (masalan 5 ta), har xato javobda biri kamayadi.
- **XP (tajriba ochkolari)** — har to'g'ri javob uchun ochko beriladi.
- **Kunlik streak** — foydalanuvchi har kuni mashq qilsa, ketma-ketlik hisoblagichi oshadi.
- **Progress bar** — sessiya davomidagi umumiy taraqqiyotni ko'rsatadi.
- **Sessiya yakunida xulosa ekrani** — qancha to'g'ri javob berilgani, qancha XP olingani, rag'batlantiruvchi xabar bilan.

---

## 6. Texnik talablar

- Bitta sahifali (single-page) veb-ilova, mobil qurilmalarda ham yaxshi ko'rinadigan (responsive) dizayn.
- Ma'lumotlar mahalliy saqlashda (browser storage yoki backend) doimiy saqlanadi.
- Yuklanish tezkor, animatsiyalar ortiqcha bo'lmasligi, lekin to'g'ri/xato javoblarga yengil vizual va (ixtiyoriy) tovushli fikr-mulohaza (feedback) berilishi kerak.

---

## 7. Boshlang'ich so'zlar ro'yxati (tizimga oldindan yuklab qo'yiladigan)

Quyidagi so'zlar tizimga boshlang'ich lug'at sifatida kiritilishi kerak (manba: @essential_test, Unit 1–4):

### Unit 1
afraid - qo'rqmoq
agree - rozi bo'lmoq
angry - jahlda
arrive - yetib kelmoq
attack - hujum qilmoq
bottom - tagi, osti
clever - aqlli
cruel - shafqatsiz
finally - nihoyat
hide - yashirmoq
hunt - ovlamoq
lot - ko'p
middle - o'rta
moment - lahza
pleased - mamnun
promise - va'da bermoq
reply - javob bermoq
safe - xavfsiz
trick - hiyla
well - yaxshi

### Unit 2
adventure - sarguzasht
approach - yaqinlashmoq
carefully - ehtiyotkorlik bilan
chemical - kimyoviy
create - yaratmoq
evil - yomonlik
experiment - tajriba
kill - o'ldirmoq
laboratory - laboratoriya
laugh - kulmoq
loud - baland ovozda
nervous - asabiy
noise - shovqin
project - loyiha
scare - qo'rqitmoq
secret - sir
shout - baqirmoq
smell - hid
terrible - qo'rqinchli
worse - yomonroq

### Unit 3
alien - begona
among - orasida
chart - grafik, jadval
cloud - bulut
comprehend - tushunmoq
describe - ta'riflamoq
ever - qachon bo'lsa ham
fail - muvaffaqiyatsizlikka uchramoq
friendly - do'stona
grade - baho
instead - o'rniga
library - kutubxona
planet - sayyora
report - hisobot
several - bir nechta
solve - hal qilmoq
suddenly - to'satdan
suppose - faraz qilmoq
universe - olam
view - ko'rinish

### Unit 4
appropriate - muvofiq
avoid - oldini olmoq, saqlanmoq
behave - o'zini tutmoq
calm - sokin
concern - tashvishlanmoq
content - mamnun
expect - kutmoq
frequently - tez-tez
habit - odat
instruct - ko'rsatma bermoq
issue - masala
none - hech biri
patient - sabrli
positive - ijobiy
punish - jazolamoq
represent - vakillik qilmoq
shake - silkitmoq
spread - tarqalmoq
stroll - sayrga chiqmoq
village - qishloq

---

## 8. Muvaffaqiyat mezoni

Sayt quyidagilarni bajarsa, topshiriq bajarilgan hisoblanadi:
- Foydalanuvchi o'z so'zlarini qo'sha oladi va yuqoridagi 80 ta so'z oldindan yuklangan bo'ladi.
- Kamida 4 xil faol eslashga asoslangan o'yin turi mavjud, kartochka aylantirish yagona usul emas.
- Spaced repetition mantiqi to'g'ri ishlaydi (bilingan so'z kamroq, bilinmagan so'z ko'proq chiqadi).
- Dizayn Duolingo hissi bilan, lekin o'ziga xos, mualliflik huquqini buzmagan holda ishlangan.
- Progress (XP, streak, so'z darajalari) doimiy saqlanadi.
