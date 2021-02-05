var url = "https://q24.io/api/v1/idea";

function setup() {
  noCanvas();
  wordnik('tabcontent', url);
  switchDarkMode()
}

function switchDarkMode() {
  let media = window.matchMedia("(prefers-color-scheme: dark)")
  if (media.matches) {
    document.querySelector('html').classList.add('darkmode');
  }

  let callback = (e) => {
    let darkmode = e.matches;
    if (darkmode) {
      document.querySelector('html').classList.add('darkmode');
    } else {
      document.querySelector('html').classList.remove('darkmode');
    }
  }

  if (typeof media.addEventListener === 'function') {
    media.addEventListener('change', callback);
  } else if (typeof media.addListener === 'function') {
    media.addListener(callback);
  }
}

function wordnik(where, url) {
  loadJSON(url, wordLoaded);
  function wordLoaded(data) {
    let content = select('#tabcontent')
    let tag;
    if (data.tag) {
      tag = createP("🏷️ " + data.tag);
    } else {
      tag = createP("️");
    }
    let idea = createP(data.idea);
    let author = createP(data.author);
    let intro = createP(data.intro);
    let curator = createP("本内容由 " + data.curator + " 提供");

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