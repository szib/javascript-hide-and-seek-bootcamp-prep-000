function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(target, nested) {
  const nested = document.querySelector(`#${nested}`)
  // .querySelectorAll(`.${target}`)
}