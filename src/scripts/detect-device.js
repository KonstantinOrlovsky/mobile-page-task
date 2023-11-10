export const Layout = {
  iphone8: 0,
	iphone13: 1
}

export function detectMobile() {
  const devicesForLayoutIphone8 = [
    /iPhone SE/i,
    /iPhone 8+/i
  ];

  const devicesForLayoutIphone13 = [
    /iPhone 11 pro/i,
    /iPhone 14/i,
    /iPhone 14 plus/i,
    /iPhone 14 pro max/i,
  ];
  

  let isdeviceForLayoutIphone8 = devicesForLayoutIphone8.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });

  if (isdeviceForLayoutIphone8) {
    return Layout.iphone8;
  }

  let isdeviceForLayoutIphone13 = devicesForLayoutIphone13.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });

  if (isdeviceForLayoutIphone13) {
    return Layout.iphone13;
  }
    // deffault layout
  return Layout.iphone13; 
}