import './index.css'
import './assets/fonts/SF Pro Display/stylesheet.css'
import { applyLayoutSettings } from './scripts/layout-settings'
import { fillContent, generateStatusBar } from './scripts/fill-content'

applyLayoutSettings();
generateStatusBar();
fillContent();

const btn = document.querySelector('.continue-btn'); 

btn.addEventListener(
    "click",
    (event) => {
        let getSelectedValue = document.querySelector( 'input[type="radio"]:checked')?.value;
        if (getSelectedValue) {
            window.location.href = getSelectedValue;
        }

      event.preventDefault();
    },
    false,
);

  