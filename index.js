function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(target, nested) {
  return document.querySelector(`#nested .target`);
}

function increaseRankBy(n) {
  var rankedLists = document.querySelector('.ranked-list')
  
  for(var i = 0; i<rankedLists.length; i++) {
    console.log(rankedLists[i].innerHtml)
  }
}