# FlexComfort Reviews — GitHub Upload Guide (Hindi)

## Kya update hua
- Landing page ke Reviews section mein 15 static review cards hain.
- Koi live review submission form, database connection ya review upload functionality nahi hai.
- Cards mein photo path set hai. Photo missing hone par initials fallback dikhega.
- Review text abhi example copy hai, verified customer feedback nahi. Publish karne se pehle actual customer ki permission wali feedback se replace karein.

## GitHub par images kaise upload karein
Apni repository ke `flex-joint-pain--main/assets/` folder mein customer ki permission wali photos upload karein, aur exact filenames rakhein:

- `customer-review-01.jpg`\n- `customer-review-02.jpg`\n- `customer-review-03.jpg`\n- `customer-review-04.jpg`\n- `customer-review-05.jpg`\n- `customer-review-06.jpg`\n- `customer-review-07.jpg`\n- `customer-review-08.jpg`\n- `customer-review-09.jpg`\n- `customer-review-10.jpg`\n- `customer-review-11.jpg`\n- `customer-review-12.jpg`\n- `customer-review-13.jpg`\n- `customer-review-14.jpg`\n- `customer-review-15.jpg`\n
Photo paths `index.html` mein pehle se set hain. JPG format recommended hai. Agar aap PNG upload karte hain, to filename extension ko `index.html` mein bhi `.png` karna hoga. Photos ko square crop karein (recommended 400×400 px), image ka size optimize karein, aur bina permission kisi ka chehra/photo upload na karein.

## Important
- Demo review text ko genuine/verified customer review kehkar publish na karein. Text ko actual feedback ke mutabik badlein.
- `50K+ Certified Customers` claim add nahi kiya gaya, kyunki iske liye verifiable proof/certification chahiye.
- Order form, LeadVertex endpoint, Meta Pixel, product sections aur thank-you page ko is update mein jaanbujhkar change nahi kiya gaya.
