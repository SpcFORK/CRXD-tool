var chubLocation = "html"

var chubDev = true

function makeCRX(id) {
  const url = new URL('https://clients2.google.com/service/update2/crx');

  Object.entries({
    response: 'redirect',
    prodversion: '49.0', // Not sure if changes
    acceptformat: 'crx3',
    x: new URLSearchParams({
      id,
      installsource: 'ondemand',
      uc: ''
    })
  }).forEach(v => url.searchParams.set(...v))

  return url
}

function getHTTP_CRX(url) {
  let paths = url.pathname.split("/");
  let id = paths[paths.length - 1];

  return makeCRX(id);
}

function getCE_CRX(url) {
  return makeCRX(url.hostname)
}

const { downloadAndWarn } = class SafetyWhenDownloading {
  static message = 'Chrome Extensions can sometimes be completely malicious and most likely hide malware and other foriegn software. Are you sure you want to download this file?'

  static downloadAndWarn(url) {
    if (window.confirm(SafetyWhenDownloading.message)) window.open(url)
    else throw new Error('User cancelled download.')
  }
}

function handleChromeHTTP(url) {
  let crx = getHTTP_CRX(url);
  window.open(crx)
}

function handleChromeExtension(url) {
  let crx = getCE_CRX(url);
  window.open(crx);
}

// ---

var chubstart = () => {
  beamChub("beam.chub", "html")
}

// On injectChub finished.
var chubinjected = (locationGot) => {
  window.chmlFrame.__init()

  function checkForCard(inp, cb) {
    let element = $(inp)
    if (element) cb(element, inp)
    else setTimeout(checkForCard, 100, inp, cb);
  }

  checkForCard("#SK-card", (linkInput) => handleInject(linkInput))
}

function handleInject(linkInput) {
  let linkBtn = $("#SK-download");
  let result = $("#linkResu");

  function getInputURL() {
    try { return new URL(linkInput.value.trim()) }
    catch { return {} }
  }

  function routeChromeURL(httpCB, chromeCB) {
    let url = getInputURL();

    switch (url.protocol) {
      case "http:":
      case "https:":
        if (url.hostname.startsWith('chrome'))
          return httpCB(url);
      case "chrome-extension:":
        return chromeCB(url);
    }
  }

  function makeLink(url, txt) {
    return `<a href="${url}" target="_blank">${txt}</a>`;
  }

  linkInput.oninput = (e) => result.innerHTML = (
    routeChromeURL(
      (url) => makeLink(getHTTP_CRX(url), "Download (Got Store URL)"),
      (url) => makeLink(getCE_CRX(url), "Download (Got Chrome Extension URL)")
    ) || 'No valid Link!'
  );

  linkBtn.onclick = () => routeChromeURL(
    handleChromeHTTP,
    handleChromeExtension
  );
}

