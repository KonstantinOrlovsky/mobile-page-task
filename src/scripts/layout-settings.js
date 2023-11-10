import { Layout, detectMobile} from './detect-device.js'
import { setStyleVariable} from './helpers/dom-helper.js'

// layout iphone8

const Iphone8LayoutSettings = {
    //status bar
    statusBarFontSize: '12px',
    statusBarPadding: '5px 5px 23px 5px',

    //main content
    pictureMargin: '0 3px',
    continueBtnMargin: '10px 0 0 0',

    //footer
    homeBtnDisplay: 'none',

    //common
    pageContainerMarginTop: '30px',
}

const Iphone13LayoutSettings = {
    //status bar
    statusBarFontSize: '15px',
    statusBarPadding: '10px 10px 35px 35px',

    //main content
    pictureMargin: '0 7px',
    continueBtnMargin: '20px 0 0 0',

    //common
    pageContainerMarginTop: '60px',
}

export function applyLayoutSettings() {
    let usingLayout = detectMobile();

    if (Layout.iphone8 === usingLayout) {
        applyLayoutSettingsForIphone8();
    }

    else if (Layout.iphone13 === usingLayout) {
        applyLayoutSettingsForIphone13();
    }
}

function applyLayoutSettingsForIphone8() {
    
    setStyleVariable('--font-size-status-bar', Iphone8LayoutSettings.statusBarFontSize)
    setStyleVariable('--padding-status-bar', Iphone8LayoutSettings.statusBarPadding);
    setStyleVariable('--margin-figure', Iphone8LayoutSettings.pictureMargin);
    setStyleVariable('--margin-continue-btn', Iphone8LayoutSettings.continueBtnMargin);
    setStyleVariable('--margin-top-page-container', Iphone8LayoutSettings.pageContainerMarginTop);
    setStyleVariable('--display-hr', Iphone8LayoutSettings.homeBtnDisplay);
}

function applyLayoutSettingsForIphone13() {
    setStyleVariable('--font-size-status-bar', Iphone13LayoutSettings.statusBarFontSize)
    setStyleVariable('--padding-status-bar', Iphone13LayoutSettings.statusBarPadding);
    setStyleVariable('--margin-figure', Iphone13LayoutSettings.pictureMargin);
    setStyleVariable('--margin-continue-btn', Iphone13LayoutSettings.continueBtnMargin);
    setStyleVariable('--margin-top-page-container', Iphone13LayoutSettings.pageContainerMarginTop);
}