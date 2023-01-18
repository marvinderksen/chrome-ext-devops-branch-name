import createButton from "./button.js";

const pagePattern = new RegExp(
  /https:\/\/dev\.azure\.com\/.*\/_git\/.*\/pullrequestcreate/
);
const labelPattern = new RegExp(/(.*) Branch/);

const pageObserver = new MutationObserver(
  () => pagePattern.test(location.href) && tryAddButtons()
);
pageObserver.observe(document, { subtree: true, childList: true });

function tryAddButtons() {
  const headers = document.getElementsByClassName("repos-pr-create-header");

  if (headers.length === 1) {
    const dropdowns = headers[0].getElementsByClassName("version-dropdown");

    for (let i = 0; i < dropdowns.length; i++) {
      const branchButtons = dropdowns[i].getElementsByTagName("button");
      if (
        dropdowns[i].getElementsByClassName(buttonClassName).length === 0 &&
        branchButtons.length === 1
      ) {
        const label = branchButtons[0].getAttribute("aria-label");
        const match = label.match(labelPattern);

        if (match.length === 2) {
          const branchName = match[1];
          const copyButton = createButton(branchName);
          branchButtons[0].insertAdjacentElement("afterend", copyButton);
        }
      }
    }
  }
}
