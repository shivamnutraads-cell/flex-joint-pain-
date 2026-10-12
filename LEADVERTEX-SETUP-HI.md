# FlexComfort website → LeadVertex CRM setup (Hindi)

इस package में website form और Google Apps Script bridge तैयार है। LeadVertex API token को website के HTML में न डालें—वह public हो जाएगा। Token केवल Apps Script की Script Properties में रखें।

## 1) Google Apps Script बनाएं
1. https://script.google.com/ खोलें और **New project** चुनें।
2. `Code.gs` में मौजूद sample code हटाकर `LeadVertex-Google-Apps-Script.gs` की पूरी सामग्री paste करें।
3. **Project Settings → Script Properties → Add script property** में जोड़ें:
   - Property: `LEADVERTEX_TOKEN`
   - Value: आपका LeadVertex API token/password (नया token बेहतर है; chat में साझा किया गया credential rotate करें)
4. Save करें।

## 2) Web app deploy करें
1. **Deploy → New deployment → Web app** चुनें।
2. Execute as: **Me**
3. Who has access: **Anyone** (website से order आने के लिए)
4. Deploy करें, authorization मांगे तो authorize करें।
5. मिलने वाला URL इस तरह होगा: `https://script.google.com/macros/s/DEPLOYMENT_ID/exec`

## 3) Website में URL लगाएं
`index.html` खोलें और यह line खोजें:

`const LEADVERTEX_PROXY_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";`

Placeholder की जगह अपना पूरा deployed `/exec` URL डालें। Save करके GitHub Pages पर `index.html` update/push करें।

## 4) CRM settings
- Webmaster ID: `28`
- Good ID: `196483`
- 1 pack: ₹699
- 2 packs: ₹999
- Form fields: name, phone, address, pincode, quantity

## 5) Test ज़रूर करें
पहले एक test order अपने नंबर/पते से भेजें और LeadVertex → Orders में देखें। Apps Script में **Executions** खोलकर error logs देखें। अगर LeadVertex का API token बदला हो, Script Properties में नया token update करें।

**महत्वपूर्ण:** यह bridge LeadVertex के `addOrder.html` endpoint को call करता है। LeadVertex में webmaster 28 के लिए offer/product import permission और Good ID 196483 उपलब्ध होना चाहिए। अगर API error दे, Apps Script Execution log में उसका HTTP code/body देखें। Token कभी HTML/GitHub में न डालें।
