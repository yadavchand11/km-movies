chrome.action.onClicked.addListener(async () => {
  const urlToTry = "https://kmmovies.work/";
  try {
    const response = await fetch(urlToTry, { method: 'GET', mode: 'no-cors' });

    // If the fetch doesn't throw an error, try to open the site
    chrome.tabs.create({ url: urlToTry });
  } catch (err) {
    // If fetch fails (site down), search Google
    const query = "kmmovies";
    chrome.tabs.create({ url: `https://www.google.com/search?q=${encodeURIComponent(query)}` });
  }
});
