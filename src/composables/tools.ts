export const open_link_new_window = (url: string) => {
  window.open(url);
};

import MobileDetect from 'mobile-detect';

export function isMobile(): boolean {
  const md = new MobileDetect(window.navigator.userAgent);
  return md.mobile() !== null;
}
