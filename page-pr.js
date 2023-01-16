import createButton, { buttonClassName } from "./button.js";

const headers = document.getElementsByClassName("pr-header-branches");

if (headers.length === 1) {
  const links = headers[0].getElementsByTagName("a");

  for (let i = 0; i < links.length; i++) {
    if (links[i].getElementsByClassName(buttonClassName).length === 0) {
      const button = createButton(links[i].innerHTML);
      links[i].insertAdjacentElement("afterend", button);
    }
  }
}
