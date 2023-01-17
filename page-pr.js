import createButton, { buttonClassName } from './button.js';

const pattern = new RegExp(
  /https:\/\/dev\.azure\.com\/.*\/_git\/.*\/pullrequest\/.*/
);

const pageObserver = new MutationObserver(
  () => pattern.test(location.href) && tryAddButtons()
);
pageObserver.observe(document, { subtree: true, childList: true });

function tryAddButtons() {
  const headers = document.getElementsByClassName('pr-header-branches');

  if (
    headers.length === 1 &&
    headers[0].getElementsByClassName(buttonClassName).length === 0
  ) {
    const links = headers[0].getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
      const button = createButton(links[i].innerHTML);
      links[i].insertAdjacentElement('afterend', button);
    }
  }
}
