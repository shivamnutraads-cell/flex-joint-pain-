# FlexComfort — Same Style Landing Page

यह landing page reference screenshot के same visual direction में बनाया गया है:
- Black + red premium theme
- Sticky header
- Large Hindi hero
- Product hero image
- Problem section
- Why FlexComfort section
- Ingredients area
- How-to-use section
- Reviews
- ₹699 offer section
- FAQ
- Order form
- Mobile sticky order CTA
- Responsive design
- Scroll animations

## Images upload names

GitHub में `assets` folder के अंदर ये files upload करनी हैं:

1. hero-product.png
   - Hero में FlexComfort box + tube
   - Transparent PNG बेहतर रहेगा

2. hero-bg.jpg
   - Dark joint/knee background
   - 16:9 या 1920x900

3. pain-problem.jpg
   - Person showing joint/back discomfort
   - 1200x800

4. benefits-bg.jpg
   - Dark red/black medical/ingredient background
   - 1600x900

5. product-center.png
   - Product box + tube, transparent background
   - 1000x1000

6. ingredient-arnica.jpg
7. ingredient-eucalyptus.jpg
8. ingredient-clove.jpg
9. ingredient-camphor.jpg
   - प्रत्येक 500x500 square

10. how-to-use.jpg
   - Knee/joint application visual
   - 1200x800

11. offer-product.png
   - Product box + tube
   - Transparent PNG

## Current price

MRP: ₹999
Offer price: ₹699

## GitHub

Repository में:
index.html
assets/
  सभी ऊपर वाली images

फिर Settings → Pages → Deploy from branch → main / root.

## Important

Order form अभी demo mode में है। Final LeadVertex/API endpoint मिलने के बाद उसी form को CRM से connect किया जा सकता है।
Medical/ingredient/benefit claims केवल verified packaging, manufacturer documentation या applicable regulatory information के अनुसार रखें।


## Full image display update

Problem and how-to-use images are rendered as normal images with `height:auto` and `object-fit:contain`, so the complete uploaded image stays visible instead of being cropped by `background-size:cover`. Product PNGs also use contain/auto sizing.
