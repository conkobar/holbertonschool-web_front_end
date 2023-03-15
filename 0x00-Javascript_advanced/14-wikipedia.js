function createElement(data) {
  const p = document.createElement('p');
  p.textContent = data;
  document.body.append(p);
}

function queryWikipedia(callback) {
  const xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*'
  );
  xhr.onload = () => {
    callback(xhr.responseText);
  };
  xhr.send();
}

queryWikipedia(createElement);
