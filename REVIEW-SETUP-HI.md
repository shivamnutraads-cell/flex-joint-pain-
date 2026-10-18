# FlexComfort — 15 Review Drafts + Image Upload Guide (Hindi)

## जरूरी सूचना
नीचे दिए गए 15 वाक्य केवल **review लिखने के prompts/drafts** हैं, असली customer testimonials नहीं। इन्हें customer की अनुमति और उनके वास्तविक अनुभव के आधार पर ही पूरा करके publish करें। किसी ग्राहक का नाम, फोटो, rating या अनुभव खुद से न गढ़ें।

## 15 review लिखने के नमूने — ग्राहक के वास्तविक जवाब से पूरा करें
1. **पहला अनुभव:** “मैंने FlexComfort को पहली बार ______ पर इस्तेमाल किया। मेरा वास्तविक अनुभव ______ रहा।”
2. **Texture:** “क्रीम का texture मुझे ______ लगा।”
3. **लगाने में आसानी:** “क्रीम लगाना मेरे लिए ______ रहा।”
4. **खुशबू:** “इसकी खुशबू मेरे हिसाब से ______ है।”
5. **पैकिंग:** “मुझे product की packing ______ मिली।”
6. **डिलीवरी:** “मेरा ऑर्डर ______ समय में पहुँचा और delivery का अनुभव ______ रहा।”
7. **ऑर्डर प्रक्रिया:** “ऑर्डर देने की प्रक्रिया ______ रही।”
8. **Customer support:** “मेरे सवाल पर support team ने ______ मदद की।”
9. **मालिश का अनुभव:** “हल्की मालिश के दौरान क्रीम का अनुभव ______ रहा।”
10. **Routine:** “मेरी daily routine में product इस्तेमाल करना ______ रहा।”
11. **मात्रा:** “मैंने पैक पर दिए निर्देशों के अनुसार ______ मात्रा इस्तेमाल की।”
12. **जानकारी:** “पैक पर दी गई जानकारी मुझे ______ लगी।”
13. **पसंदीदा बात:** “मुझे product की ______ बात पसंद आई।”
14. **सुझाव:** “मेरे अनुभव में ______ अच्छा था; सुधार के लिए मेरा सुझाव ______ है।”
15. **कुल अनुभव:** “कुल मिलाकर मेरा खरीदारी/उपयोग अनुभव ______ रहा। मेरी वास्तविक राय ______ है।”

> इन prompts को हूबहू review की तरह publish न करें। खाली जगह ग्राहक के अपने जवाब से भरें; review का अर्थ न बदलें और medical benefit/guaranteed relief के दावे न जोड़ें।

## GitHub पर customer photo के नाम
वास्तविक ग्राहक की अनुमति वाली तस्वीरें repository के `assets` folder में upload करें:

- `assets/customer-review-01.jpg`
- `assets/customer-review-02.jpg`
- `assets/customer-review-03.jpg`
- `assets/customer-review-04.jpg`
- `assets/customer-review-05.jpg`
- `assets/customer-review-06.jpg`
- `assets/customer-review-07.jpg`
- `assets/customer-review-08.jpg`
- `assets/customer-review-09.jpg`
- `assets/customer-review-10.jpg`
- `assets/customer-review-11.jpg`
- `assets/customer-review-12.jpg`
- `assets/customer-review-13.jpg`
- `assets/customer-review-14.jpg`
- `assets/customer-review-15.jpg`

JPG, PNG या WEBP इस्तेमाल किया जा सकता है, लेकिन HTML में file extension बिल्कुल वही होना चाहिए जो upload की गई है। उदाहरण: अगर file `customer-review-01.png` है, तो path में `.png` ही लिखें। Spaces और special characters से बचें। ग्राहक की स्पष्ट अनुमति के बिना चेहरा या निजी जानकारी publish न करें।

## “50K+ Certified Customers”
“Certified Customers” तभी लिखें जब कोई वास्तविक certification scheme और प्रमाण हो। यदि business records से 50,000+ अलग-अलग ग्राहकों की पुष्टि होती है, तो प्रमाणित wording जैसे “50,000+ customers served” इस्तेमाल की जा सकती है। सत्यापन के बिना 50K+ दावा न जोड़ें। इस version में अप्रमाणित दावा जानबूझकर नहीं जोड़ा गया है।

## Live reviews अभी क्यों नहीं दिखेंगे?
GitHub Pages static hosting है; यह customer reviews को अपने-आप सभी visitors के बीच save/share नहीं करता। `index.html` में `CUSTOMER_REVIEW_API_URL = ""` है। Live reviews के लिए secure database/API, image storage और approval workflow configure करना होगा। अभी form local photo preview दिखाता है, लेकिन backend जुड़ने तक submission सेव नहीं होती। साइट इसे स्पष्ट बताती है—झूठा success message नहीं दिखाती।
