function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(target, nested) {
  var n = document.querySelector(`#nested`);
  console.log(n)
  // .querySelectorAll(`.${target}`)
}