export const buttonClassName = "chrome-ext-devops-branch-name";

export const createButton = (branchName) => {
  const button = document.createElement("button");
  button.setAttribute("title", "Copy to clipboard");
  button.setAttribute("aria-label", "Copy to clipboard");
  button.setAttribute(
    "class",
    `bolt-button bolt-icon-button enabled icon-only bolt-focus-treatment ${buttonClassName}`
  );
  button.setAttribute("type", "button");
  button.setAttribute("role", "button");
  button.setAttribute("style", buttonStyle);

  button.appendChild(createSpan());

  button.addEventListener("click", () =>
    navigator.clipboard.writeText(branchName)
  );

  return button;
};

export default createButton;

const createSpan = () => {
  const span = document.createElement("span");
  span.setAttribute("aria-hidden", "true");
  span.setAttribute(
    "class",
    "left-icon flex-noshrink fabric-icon ms-Icon--Copy medium"
  );
  return span;
};

const buttonStyle = "padding: 8px; margin-left: .25rem; margin-right: .75rem;";
