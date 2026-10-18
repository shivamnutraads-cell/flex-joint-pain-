# FlexComfort — 15 Review Drafts + Image Upload Guide (Hindi)

## जरूरी: इन्हें नकली customer reviews की तरह publish न करें
नीचे दिए गए 15 text केवल **लेखन के नमूने / prompts** हैं। इन्हें वेबसाइट पर असली ग्राहक की राय बताकर न लगाएँ। हर text को वास्तविक खरीदार के feedback के अनुसार बदलें, ग्राहक की अनुमति लें, और तभी नाम/फोटो के साथ publish करें। Review से medical result या guaranteed relief का दावा न बनाएं।

## 15 review-writing prompts (ग्राहक के असली जवाब से भरें)
1. **उपयोग का अनुभव:** “मैंने FlexComfort को ______ जगह पर label के निर्देश के अनुसार इस्तेमाल किया। मेरा अनुभव ______ रहा।”
2. **लगाने का तरीका:** “क्रीम लगाना मेरे लिए ______ रहा। इस्तेमाल के बाद मैंने ______ महसूस किया।”
3. **Texture:** “क्रीम का texture ______ लगा और इसे लगाना ______ था।”
4. **खुशबू:** “इसकी खुशबू मेरे हिसाब से ______ है।”
5. **पैकिंग:** “मुझे product की packing ______ मिली।”
6. **डिलीवरी:** “मेरा ऑर्डर ______ दिन में पहुँचा। डिलीवरी का अनुभव ______ रहा।”
7. **ऑर्डर अनुभव:** “ऑर्डर देने की प्रक्रिया ______ रही।”
8. **ग्राहक सहायता:** “मेरे सवाल पर customer support ने ______ मदद की।”
9. **मसाज अनुभव:** “हल्की मालिश के दौरान क्रीम का अनुभव ______ रहा।”
10. **रोज़मर्रा की सुविधा:** “मेरी routine में product इस्तेमाल करना ______ रहा।”
11. **मात्रा:** “मेरे लिए थोड़ी मात्रा ______ रही; मैंने पैक पर दिए निर्देश follow किए।”
12. **पैक की जानकारी:** “पैक पर दी गई जानकारी ______ लगी।”
13. **किसे पसंद आया:** “मुझे product की ______ बात पसंद आई।”
14. **सुधार का सुझाव:** “मेरे अनुभव में ______ अच्छा था; सुधार के लिए मेरा सुझाव ______ है।”
15. **कुल अनुभव:** “कुल मिलाकर मेरा खरीदारी/उपयोग अनुभव ______ रहा। मेरी राय ______ है।”

## GitHub पर customer photo किस नाम से upload करें?
हर **वास्तविक ग्राहक की अनुमति वाली** photo को `assets` folder में इस तरह नाम दें:

- `customer-review-01.jpg`
- `customer-review-02.jpg`
- `customer-review-03.jpg`
- `customer-review-04.jpg`
- `customer-review-05.jpg`
- `customer-review-06.jpg`
- `customer-review-07.jpg`
- `customer-review-08.jpg`
- `customer-review-09.jpg`
- `customer-review-10.jpg`
- `customer-review-11.jpg`
- `customer-review-12.jpg`
- `customer-review-13.jpg`
- `customer-review-14.jpg`
- `customer-review-15.jpg`

**ध्यान दें:** सिर्फ GitHub पर image upload करने से वह review card में अपने-आप नहीं दिखेगी। `index.html` में संबंधित image path और approved review content जोड़ना होगा। JPG इस्तेमाल करें; file names में spaces न रखें। ग्राहक की अनुमति के बिना चेहरा, फोन नंबर, पता या कोई निजी जानकारी publish न करें।

## “50K+ Certified Customers” के बारे में
“Certified Customers” आमतौर पर सही wording नहीं है, जब तक कोई वास्तविक certification scheme न हो। अगर आपके पास 50,000+ customers का सत्यापित order record है, तो “50,000+ customers served” जैसा दावा प्रमाण के साथ इस्तेमाल करें। अगर रिकॉर्ड नहीं है, तो यह दावा न लगाएँ। अभी landing page पर कोई अप्रमाणित 50K+ दावा नहीं जोड़ा गया है।

## Live review system की स्थिति
GitHub Pages अकेले reviews को सभी visitors के बीच save/share नहीं करता। मौजूदा form में `CUSTOMER_REVIEW_API_URL = ""` है; live storage और public display के लिए secure database/API, image storage और approval workflow configure करना बाकी है। तब तक form submission पर साइट सही संदेश देती है कि backend setup बाकी है; वह झूठा success नहीं दिखाती।
