function changeMode(size, weight, transform, background, color) {
  return () => {
    document.body.style.fontSize = `${size}px`;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
}

function main() {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const welcome = document.createElement('p');
  welcome.textContent = 'Welcome Holberton!';
  document.body.append(welcome);

  const spookyBtn = document.createElement('button');
  spookyBtn.textContent = 'Spooky';
  spookyBtn.addEventListener('click', spooky);
  document.body.append(spookyBtn);

  const darkModeBtn = document.createElement('button');
  darkModeBtn.textContent = 'Dark mode';
  darkModeBtn.addEventListener('click', darkMode);
  document.body.append(darkModeBtn);

  const screamModeBtn = document.createElement('button');
  screamModeBtn.textContent = 'Scream mode';
  screamModeBtn.addEventListener('click', screamMode);
  document.body.append(screamModeBtn);
}

main();
