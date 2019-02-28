function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(target, nested) {
  var n = document.querySelector(`#nested`);
  var t = n.querySelectorAll(`.target`)
  console.log(t[0])
  return t
  // .querySelectorAll(`.${target}`)
}