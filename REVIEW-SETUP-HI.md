# FlexComfort Review Feature — Setup Notes (Hindi)

## क्या अपडेट हुआ
- पुराने sample/fake reviews हटाए गए हैं; अब कोई नकली customer review या rating दिखाने के लिए hard-code नहीं है।
- Review form में नाम, 1–5 rating, वास्तविक अनुभव, वैकल्पिक product photo और consent checkbox है।
- Photo upload validation: JPG/PNG/WEBP, अधिकतम 3 MB; preview भी दिखता है।
- Review submission के बाद review को moderation/approval के बाद ही public दिखाने के लिए UI तैयार है।
- Ingredients के placeholder text को बदलकर pack की verified ingredient list देखने का निर्देश रखा है।

## जरूरी: Live review चालू करने के लिए backend चाहिए
यह वेबसाइट static GitHub Pages पर है। केवल HTML/JavaScript से एक ग्राहक का review दूसरे ग्राहकों को सुरक्षित रूप से दिखाना संभव नहीं है। अभी `index.html` में `CUSTOMER_REVIEW_API_URL = ""` खाली है; इसलिए form स्पष्ट संदेश देगा और review भेजने का झूठा दावा नहीं करेगा।

Live करने के लिए:
1. Supabase/Firebase या सुरक्षित API में reviews table/storage बनाएं।
2. API में server-side validation, image size/type checks, spam protection/rate limiting और moderation status (`pending`/`approved`) रखें।
3. केवल approved reviews public read endpoint से लोड हों; कोई भी visitor सीधे review को approved न कर सके।
4. Image upload के लिए storage bucket/policy configure करें।
5. `index.html` में `CUSTOMER_REVIEW_API_URL` को उस API endpoint से बदलें। Endpoint का response JSON में `{ "success": true }` लौटाए जब review सुरक्षित रूप से जमा हो जाए।
6. Live API बन जाने पर approved reviews को `#liveReviewList` में fetch करके render करने वाला read endpoint भी जोड़ना होगा। User input को `textContent` से render करें, `innerHTML` से नहीं।

**महत्वपूर्ण:** इस ZIP में live database/API credentials नहीं थे, इसलिए मैंने सार्वजनिक cross-device review storage का दावा नहीं किया है। इस ZIP को upload करने से review form दिखेगा, लेकिन backend configure होने तक reviews save/publish नहीं होंगे।

## Copy/claims review
- पुराने sample reviews हटाए गए।
- Product के exact ingredients/medical claims को pack/manufacturer के verified label से मिलाकर ही publish करें।
- Landing page के current prices ₹699 (1 pack) और ₹999 (2 packs) को भी checkout/offer से match करके verify करें।
