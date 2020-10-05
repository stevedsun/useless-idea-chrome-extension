var url = "https://q24.io/api/v1/idea";

function setup() {
  noCanvas();
  wordnik('tabcontent', url);
}


function wordnik(where, url) {
  loadJSON(url, wordLoaded);
  function wordLoaded(data) {
    var content = select('#tabcontent')
    var idea_content = data.idea.replace("「", "『").replace("」", "』");
    var tag = createP("🏷️ " + data.tag);
    var idea = createP("「" + idea_content + "」");
    var author = createP(data.author);
    var intro = createP(data.intro);
    var curator = createP("本内容由 " + data.curator + " 提供");
    tag.class('tag')
    idea.class('idea')
    author.class('author')
    author.a
    intro.class('intro')
    curator.class('curator')
    content.child(tag)
    content.child(idea)
    content.child(author)
    content.child(intro)
    content.child(curator)
    content.mouseClicked(
      function() {
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
          chrome.tabs.update(tabs[0].id, { url: data.url });
        });
    })
  }
}