function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(target, nested) {
  return document.querySelector(`#nested .target`);
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list li')
  for(var i = 0; i<rankedLists.length; i++) {
    console.log(parseInt(rankedLists[i].innerHTML) + n)
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n
  }
}

function deepestChild() {
  var currentNode = document.querySelector('#grand-node')
  
  while (currentNode.children.length === 0) {
    currentNode = currentNode.children
  }
  
  return currentNode
}