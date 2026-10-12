/**
 * FlexComfort -> LeadVertex order bridge
 * IMPORTANT: Keep the LeadVertex token in Script Properties, never in index.html.
 */
const LEADVERTEX_WEBMASTER_ID = '28';
const LEADVERTEX_GOOD_ID = '196483';
const LEADVERTEX_ADD_ORDER_URL = 'https://kohinoorplus.leadvertex.ru/api/webmaster/v2/addOrder.html';

function doPost(e) {
  try {
    const props = PropertiesService.getScriptProperties();
    const token = props.getProperty('LEADVERTEX_TOKEN');
    if (!token) return json_({success:false, message:'Server setup incomplete: API token is missing.'});

    const p = (e && e.parameter) ? e.parameter : {};
    const name = clean_(p.name, 255);
    const phone = clean_(p.phone, 25).replace(/\D/g, '');
    const address = clean_(p.address, 255);
    const pincode = clean_(p.pincode, 6).replace(/\D/g, '');
    const quantity = Number(p.quantity);
    const total = Number(p.total);

    if (!name || !/^\d{10}$/.test(phone) || !address || ![1,2].includes(quantity)) {
      return json_({success:false, message:'Please provide valid name, 10-digit phone, address and quantity.'});
    }
    const expectedTotal = quantity === 2 ? 999 : 699;
    if (total !== expectedTotal) return json_({success:false, message:'Offer total did not match selected quantity.'});

    const payload = {
      fio: name,
      phone: phone,
      country: 'India',
      address: address,
      postIndex: pincode,
      price: (total / quantity).toFixed(2),
      total: total.toFixed(2),
      quantity: String(quantity),
      comment: 'Website order. Offer: ' + (quantity === 2 ? '2 Packs for INR 999' : '1 Pack for INR 699'),
      domain: 'flex-joint-pain-',
      timezone: '-330',
      'goods[0][goodID]': LEADVERTEX_GOOD_ID,
      'goods[0][quantity]': String(quantity),
      'goods[0][price]': (total / quantity).toFixed(2),
      utm_source: 'website',
      utm_medium: 'website_order',
      utm_campaign: 'flexcomfort'
    };

    const url = LEADVERTEX_ADD_ORDER_URL + '?webmasterID=' + encodeURIComponent(LEADVERTEX_WEBMASTER_ID) + '&token=' + encodeURIComponent(token);
    const response = UrlFetchApp.fetch(url, {
      method: 'post',
      payload: payload,
      muteHttpExceptions: true,
      followRedirects: true
    });
    const code = response.getResponseCode();
    const body = response.getContentText();
    let parsed;
    try { parsed = JSON.parse(body); } catch (_) { parsed = null; }

    if (code >= 200 && code < 300 && parsed && parsed.OK) {
      return json_({success:true, orderId:String(parsed.OK)});
    }
    console.error('LeadVertex error HTTP ' + code + ': ' + body);
    return json_({success:false, message:'LeadVertex rejected the order (HTTP ' + code + '). Check Apps Script logs and API settings.'});
  } catch (err) {
    console.error(err && err.stack ? err.stack : err);
    return json_({success:false, message:'Order bridge error. Check Apps Script execution logs.'});
  }
}

function doGet() {
  return json_({service:'FlexComfort LeadVertex bridge', ready:true});
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
function clean_(value, max) {
  return String(value || '').trim().slice(0, max);
}
