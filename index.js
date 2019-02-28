function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(target, nested) {
  return document.querySelector(`#nested .target`);
}

function increaseRankBy(n) {
  console.log('Rank:' + n)
  
  var rankedLists = document.querySelectorAll('.ranked-list li')
  console.log(rankedLists.length)
  for(var i = 0; i<rankedLists.length; i++) {
    console.log(parseInt(rankedLists[i].innerHtml) + n)
    rankedLists[i].innerHtml = parseInt(rankedLists[i].innerHtml) + n
  }
  
}