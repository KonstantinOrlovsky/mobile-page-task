import contentDe from "../assets/content-txt/de.json" assert { type: 'json' };
import contentEn from "../assets/content-txt/en.json" assert { type: 'json' };
import contentEs from "../assets/content-txt/es.json" assert { type: 'json' };
import contentFr from "../assets/content-txt/fr.json" assert { type: 'json' };
import contentJa from "../assets/content-txt/ja.json" assert { type: 'json' };
import contentPt from "../assets/content-txt/pt.json" assert { type: 'json' };
import { Layout, detectMobile} from './detect-device.js'
import { getDateWithPrepand, getDateWithoutPrepand} from './helpers/date-helper.js'
import { setInnerHtml, setTextContent} from './helpers/dom-helper.js'

export function fillContent() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');
    const content = getContentByLang(lang);
    
    setTextContent('main title', content["Get Unlimited <br>Access"]);
    setTextContent('#content-image-description-1', content["Unlimited Art <br>Creation"]);
    setTextContent('#content-image-description-2', content["Exclusive <br>Styles"]);
    setTextContent('#content-image-description-3', content["Magic Avatars <br>With 20% Off"]);
    setTextContent('.early .title-access', content["YEARLY ACCESS"]);
    setTextContent('.best-offer', content["BEST OFFER"]);
    setTextContent('.early .offer-description', content["Just {{price}} per year"].replace('{{price}}', '$39.9'));
    setTextContent('.weekly .title-access', content["WEEKLY ACCESS"]);
    setTextContent('.early .offer-perweek .offer-description', content["{{price}} <br>per week"].replace('{{price}}', '$0.48'));
    setTextContent('.weekly .offer-perweek .offer-description', content["{{price}} <br>per week"].replace('{{price}}', '$6.99'));
    setTextContent('footer .link-1', content["Terms of Use"]);
    setTextContent('footer .link-2', content["Privacy Policy"]);
    setTextContent('footer .link-3', content["Restore"]);
    setTextContent('.continue-btn .title', content["Continue"]);
}

export function generateStatusBar() {
    const elem = document.querySelector('.status-bar');
    const usingLayout = detectMobile();
    let template = ''; 
    
    if (Layout.iphone8 === usingLayout) {
      template = document.getElementById('8iphone');
    }
  
    else if (Layout.iphone13 === usingLayout) {
      template = document.getElementById('13iphone');
    }
    
    const clone = template.content.cloneNode(true); 
  
    setDateTimeToTemplate(usingLayout, clone);
  
    navigator.getBattery().then((battery) => {
      setWidthBatterySvgByValue(battery.level);
      setInnerHtml('.battery-lvl', `${battery.level * 100}%`);
    });
  
    elem.appendChild(clone);
}

function getContentByLang(lang) {
    switch (lang) {
        case "en":
            return contentEn;
        case "de":
            return contentDe;
        case "es":
            return contentEs;          
        case "fr":
            return contentFr;
        case "ja":
            return contentJa;
        case "pt":
            return contentPt;
        default:
            return contentEn;    
    }
}

function setDateTimeToTemplate(usingLayout, template) {
    const date = template.querySelector('.datetime');
   
    if (usingLayout === Layout.iphone8) {
        date.innerHTML = getDateWithPrepand();
        return;
    }
  
    date.innerHTML = getDateWithoutPrepand();
}
  
function setWidthBatterySvgByValue(value) {
    const MaxValue = 18.8;
    let elem = document.getElementById('battery-indicator');
    
    if (elem) {
      elem.setAttribute("width", value * MaxValue);
    }
}