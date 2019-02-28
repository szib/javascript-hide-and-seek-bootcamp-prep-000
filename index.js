function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(target, nested) {
  return document.querySelector(`#nested .target`);
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list li')
  
  for(var i = 0; i<rankedLists.length; i++) {
    rankedLists[i].innerHtml = parseInt(rankedLists[i].innerHtml) + n
  }
  
}