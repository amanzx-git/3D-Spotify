
const music = new Audio('song/psycho/song1.mp3');
let songIndex = 0;
const masterPlay = document.getElementById('masterPlay');
const progressBar = document.getElementById('progressBar');
const songItems = Array.from(document.getElementsByClassName('songs'));
const gifitems = Array.from(document.getElementsByClassName('gifItem'));
const list = Array.from(document.getElementsByClassName('list'));
let typeIndex = 0;

let items = [
    [
        {type:"psycho" , path:"/song/psycho/song1.mp3", gif:"/gif/psycho/gif1.gif", name:"Villain"},
        {type:"psycho" , path:"/song/psycho/song2.mp3", gif:"/gif/psycho/gif2.gif", name:"Cradel" },
        {type:"psycho" , path:"/song/psycho/song3.mp3", gif:"/gif/psycho/gif3.gif", name:"Enemy"},
        {type:"psycho" , path:"/song/psycho/song4.mp3", gif:"/gif/psycho/gif4.gif", name:"Wanna be slave" },
        {type:"psycho" , path:"/song/psycho/song5.mp3", gif:"/gif/psycho/gif5.gif", name:"Animal"},
        {type:"psycho" , path:"/song/psycho/song6.mp3", gif:"/gif/psycho/gif6.gif", name:"Centuries"},
        {type:"psycho" , path:"/song/psycho/song7.mp3", gif:"/gif/psycho/gif7.gif", name:"Darkside"},
        {type:"psycho" , path:"/song/psycho/song8.mp3", gif:"/gif/psycho/gif8.gif", name:"Baby I Got Issue"},
    ],
    [
      {type:"rage" , path:"/song/rage/song1.mp3", gif:"/gif/rage/gif1.gif", name:"Petrunko"},
      {type:"rage" , path:"/song/rage/song2.mp3", gif:"/gif/rage/gif2.gif", name:"Middle Of Night" },
      {type:"rage" , path:"/song/rage/song3.mp3", gif:"/gif/rage/gif3.gif", name:"Ainsi Bas La"},
      {type:"rage" , path:"/song/rage/song4.mp3", gif:"/gif/rage/gif4.gif", name:"Wonderland" },
      {type:"rage" , path:"/song/rage/song5.mp3", gif:"/gif/rage/gif5.gif", name:"Unstoppable"},
      {type:"rage" , path:"/song/rage/song6.mp3", gif:"/gif/rage/gif6.gif", name:"Lai Lai"},
      {type:"rage" , path:"/song/rage/song7.mp3", gif:"/gif/rage/gif7.gif", name:"Joker BGM"},
      {type:"rage" , path:"/song/rage/song8.mp3", gif:"/gif/rage/gif8.gif", name:"Dead To Me"}
    ],
    [
      {type:"romantic" , path:"/song/romantic/song1.mp3", gif:"/gif/romantic/gif1.gif", name:"Scars of Beauty"},
      {type:"romantic" , path:"/song/romantic/song2.mp3", gif:"/gif/romantic/gif2.webp", name:"Havana" },
      {type:"romantic" , path:"/song/romantic/song3.mp3", gif:"/gif/romantic/gif3.gif", name:"Perfect"},
      {type:"romantic" , path:"/song/romantic/song4.mp3", gif:"/gif/romantic/gif4.gif", name:"Shut Up" },
      {type:"romantic" , path:"/song/romantic/song5.mp3", gif:"/gif/romantic/gif5.gif", name:"Ride It"},
      {type:"romantic" , path:"/song/romantic/song6.mp3", gif:"/gif/romantic/gif6.gif", name:"Shayad"},
      {type:"romantic" , path:"/song/romantic/song7.mp3", gif:"/gif/romantic/gif7.gif", name:"Falling"},
      {type:"romantic" , path:"/song/romantic/song8.mp3", gif:"/gif/romantic/gif8.gif", name:"Vaste"},
  ],
    [
      {type:"cool" , path:"/song/cool/song1.mp3", gif:"/gif/cool/gif1.gif", name:"Fairytale"},
      {type:"cool" , path:"/song/cool/song2.mp3", gif:"/gif/cool/gif2.webp", name:"Satisfya" },
      {type:"cool" , path:"/song/cool/song3.mp3", gif:"/gif/cool/gif3.gif", name:"Industry Baby"},
      {type:"cool" , path:"/song/cool/song4.mp3", gif:"/gif/cool/gif4.gif", name:"Can't Hold Us" },
      {type:"cool" , path:"/song/cool/song5.mp3", gif:"/gif/cool/gif5.gif", name:"Astronaut Ocean"},
      {type:"cool" , path:"/song/cool/song6.mp3", gif:"/gif/cool/gif6.webp", name:"My Ordinary Life"},
      {type:"cool" , path:"/song/cool/song7.mp3", gif:"/gif/cool/gif7.webp", name:"No Lie"},
      {type:"cool" , path:"/song/cool/song8.mp3", gif:"/gif/cool/gif8.gif", name:"Courtesy Call"},
  ],
  [
    {type:"vibe" , path:"/song/vibe/song1.mp3", gif:"/gif/vibe/gif1.gif", name:"Into Arm"},
    {type:"vibe" , path:"/song/vibe/song2.mp3", gif:"/gif/vibe/gif2.gif", name:"No Friend" },
    {type:"vibe" , path:"/song/vibe/song3.mp3", gif:"/gif/vibe/gif3.gif", name:"Need To Know"},
    {type:"vibe" , path:"/song/vibe/song4.mp3", gif:"/gif/vibe/gif4.gif", name:"Women" },
    {type:"vibe" , path:"/song/vibe/song5.mp3", gif:"/gif/vibe/gif5.gif", name:"Sexy and I Knew"},
    {type:"vibe" , path:"/song/vibe/song6.mp3", gif:"/gif/vibe/gif6.gif", name:"Cheap thrills"},
    {type:"vibe" , path:"/song/vibe/song7.mp3", gif:"/gif/vibe/gif7.gif", name:"Wanna Be"},
    {type:"vibe" , path:"/song/vibe/song8.mp3", gif:"/gif/vibe/gif8.gif", name:"Wait A Minute"},
],
[
  {type:"sad" , path:"/song/sad/song1.mp3", gif:"/gif/sad/gif1.gif", name:"Numb"},
  {type:"sad" , path:"/song/sad/song2.mp3", gif:"/gif/sad/gif2.gif", name:"Kaash Essa Bhi" },
  {type:"sad" , path:"/song/sad/song3.webm", gif:"/gif/sad/gif3.gif", name:"Name Of Love"},
  {type:"sad" , path:"/song/sad/song4.mp3", gif:"/gif/sad/gif4.webp", name:"Attention" },
  {type:"sad" , path:"/song/sad/song5.mp3", gif:"/gif/sad/gif5.gif", name:"Let Me down"},
  {type:"sad" , path:"/song/sad/song6.mp3", gif:"/gif/sad/gif6.gif", name:"Sahmi Dhadakan"},
  {type:"sad" , path:"/song/sad/song7.mp3", gif:"/gif/sad/gif7.gif", name:"Arcade"},
  {type:"sad" , path:"/song/sad/song8.mp3", gif:"/gif/sad/gif8.gif", name:"What If I"},
],
[
  {type:"cry" , path:"/song/cry/song1.webm", gif:"/gif/cry/gif1.gif", name:"Princess N't Cry"},
  {type:"cry" , path:"/song/cry/song2.mp3", gif:"/gif/cry/gif2.gif", name:"Beshram Bewafa" },
  {type:"cry" , path:"/song/cry/song3.mp3", gif:"/gif/cry/gif3.gif", name:"IDFC"},
  {type:"cry" , path:"/song/cry/song4.mp3", gif:"/gif/cry/gif4.gif", name:"Gasoline" },
  {type:"cry" , path:"/song/cry/song5.mp3", gif:"/gif/cry/gif5.gif", name:"Without Me"},
  {type:"cry" , path:"/song/cry/song6.mp3", gif:"/gif/cry/gif6.gif", name:"Broke Me First"},
  {type:"cry" , path:"/song/cry/song7.mp3", gif:"/gif/cry/gif7.gif", name:"Takeaway"},
  {type:"cry" , path:"/song/cry/song8.mp3", gif:"/gif/cry/gif8.gif", name:"Sad"},
],
[
  {type:"badass" , path:"/song/badass/song1.mp3", gif:"/gif/badass/gif1.gif", name:"See Me Fall"},
  {type:"badass" , path:"/song/badass/song2.mp3", gif:"/gif/badass/gif2.gif", name:"Heathens" },
  {type:"badass" , path:"/song/badass/song3.mp3", gif:"/gif/badass/gif3.gif", name:"Running Low"},
  {type:"badass" , path:"/song/badass/song4.mp3", gif:"/gif/badass/gif4.gif", name:"River" },
  {type:"badass" , path:"/song/badass/song5.mp3", gif:"/gif/badass/gif5.gif", name:"Montero"},
  {type:"badass" , path:"/song/badass/song6.mp3", gif:"/gif/badass/gif6.gif", name:"Me Myself & I"},
  {type:"badass" , path:"/song/badass/song7.mp3", gif:"/gif/badass/gif7.webp", name:"Rockstar"},
  {type:"badass" , path:"/song/badass/song8.mp3", gif:"/gif/badass/gif8.gif", name:"Inferno"},
],
[
  {type:"hardwork" , path:"/song/hardwork/song1.mp3", gif:"/gif/hardwork/gif1.gif", name:"Brothers Anthem"},
  {type:"hardwork" , path:"/song/hardwork/song2.mp3", gif:"/gif/hardwork/gif2.gif", name:"Sinner" },
  {type:"hardwork" , path:"/song/hardwork/song3.mp3", gif:"/gif/hardwork/gif3.gif", name:"Arambha Hai"},
  {type:"hardwork" , path:"/song/hardwork/song4.mp3", gif:"/gif/hardwork/gif4.webp", name:"Chunar" },
  {type:"hardwork" , path:"/song/hardwork/song5.mp3", gif:"/gif/hardwork/gif5.gif", name:"Fight Back"},
  {type:"hardwork" , path:"/song/hardwork/song6.mp3", gif:"/gif/hardwork/gif6.gif", name:"Remember Name"},
  {type:"hardwork" , path:"/song/hardwork/song7.mp3", gif:"/gif/hardwork/gif7.webp", name:"Kar Har Fateh"},
  {type:"hardwork" , path:"/song/hardwork/song8.mp3", gif:"/gif/hardwork/gif8.gif", name:"Zinda"},
],
[
  {type:"happy" , path:"/song/happy/song1.mp3", gif:"/gif/happy/gif1.gif", name:"Mood"},
  {type:"happy" , path:"/song/happy/song2.mp3", gif:"/gif/happy/gif2.gif", name:"Dancin" },
  {type:"happy" , path:"/song/happy/song3.mp3", gif:"/gif/happy/gif3.webp", name:"Khulke Jeene Ka"},
  {type:"happy" , path:"/song/happy/song4.mp3", gif:"/gif/happy/gif4.gif", name:"Savage Love" },
  {type:"happy" , path:"/song/happy/song5.mp3", gif:"/gif/happy/gif5.gif", name:"Wavin Flag"},
  {type:"happy" , path:"/song/happy/song6.mp3", gif:"/gif/happy/gif6.gif", name:"Wallerman"},
  {type:"happy" , path:"/song/happy/song7.mp3", gif:"/gif/happy/gif7.gif", name:"Senorita"},
  {type:"happy" , path:"/song/happy/song8.mp3", gif:"/gif/happy/gif8.gif", name:"Stay"},
],
[
  {type:"whore" , path:"/song/whore/song1.mp3", gif:"/gif/whore/gif1.gif", name:"Candy Shop"},
  {type:"whore" , path:"/song/whore/song2.mp3", gif:"/gif/whore/gif2.gif", name:"Such Whore" },
  {type:"whore" , path:"/song/whore/song3.mp3", gif:"/gif/whore/gif3.gif", name:"No Guidence"},
  {type:"whore" , path:"/song/whore/song4.mp3", gif:"/gif/whore/gif4.gif", name:"Shape Of You" },
  {type:"whore" , path:"/song/whore/song5.mp3", gif:"/gif/whore/gif5.gif", name:"Bheegh Loon"},
  {type:"whore" , path:"/song/whore/song6.mp3", gif:"/gif/whore/gif6.gif", name:"Dirty Thought"},
  {type:"whore" , path:"/song/whore/song7.webm", gif:"/gif/whore/gif7.gif", name:"Bad Boy"},
  {type:"whore" , path:"/song/whore/song8.mp3", gif:"/gif/whore/gif8.gif", name:"Talk Dirty"},
],
[
  {type:"alone" , path:"/song/alone/song1.mp3", gif:"/gif/alone/gif1.gif", name:"Trust Fall"},
  {type:"alone" , path:"/song/alone/song2.mp3", gif:"/gif/alone/gif2.gif", name:"Talking To Moon" },
  {type:"alone" , path:"/song/alone/song3.webm", gif:"/gif/alone/gif3.gif", name:"LoveNavininti"},
  {type:"alone" , path:"/song/alone/song4.mp3", gif:"/gif/alone/gif4.gif", name:"Hymn Weekend" },
  {type:"alone" , path:"/song/alone/song5.mp3", gif:"/gif/alone/gif5.gif", name:"Khariyat"},
  {type:"alone" , path:"/song/alone/song6.mp3", gif:"/gif/alone/gif6.gif", name:"At My Worst"},
  {type:"alone" , path:"/song/alone/song7.mp3", gif:"/gif/alone/gif7.gif", name:"Sach Keh Raha"},
  {type:"alone" , path:"/song/alone/song8.mp3", gif:"/gif/alone/gif8.gif", name:"Zara Zara"},
],
    
];

const moodKeys = ['psycho', 'rage', 'romantic', 'cool', 'vibe', 'sad', 'cry', 'badass', 'hardwork', 'happy', 'whore', 'alone'];
const moodDescriptions = [
  'Turn up the energy and let the moment take over.',
  'Big feelings, bigger volume. Let it all out.',
  'A softer soundtrack for all the butterflies.',
  'Easygoing sounds for taking it slow.',
  'Find your rhythm and let the good times roll.',
  'A little space to feel everything.',
  'Let the music hold what words cannot.',
  'Main-character energy, from start to finish.',
  'Keep your focus and make today count.',
  'A bright little boost for your day.',
  'Turn up the confidence and own the room.',
  'Quiet songs for your own little world.'
];
const moodThemes = [
  ['#8c72e8', '#7356d7', '#eee9ff', '#f7f3ff'],
  ['#ed806f', '#d65f54', '#ffebe6', '#fff6f2'],
  ['#e887a9', '#d96791', '#ffe9f0', '#fff5f8'],
  ['#63a9c7', '#448eae', '#e4f5fa', '#f2fbfd'],
  ['#5bbba4', '#349b83', '#def5ef', '#f1fbf7'],
  ['#7796c9', '#5c7db1', '#e7efff', '#f5f8ff'],
  ['#8297d6', '#657cbf', '#e8ecff', '#f6f7ff'],
  ['#e39b63', '#cc7b42', '#fff0df', '#fff8ef'],
  ['#66a987', '#488a68', '#e2f4e9', '#f3faf5'],
  ['#e9b94e', '#c9962d', '#fff4d9', '#fffaf0'],
  ['#d977a0', '#bf5885', '#ffe8f1', '#fff5f8'],
  ['#8290bd', '#66749f', '#e9ecf8', '#f6f7fb']
];

const currentArtwork = document.getElementById('currentArtwork');
const playerArtwork = document.getElementById('playerArtwork');
const currentTrack = document.getElementById('currentTrack');
const currentMood = document.getElementById('currentMood');
const playerTrack = document.getElementById('playerTrack');
const playerMood = document.getElementById('playerMood');
const playIcon = masterPlay.querySelector('i');

function assetPath(path) {
  return path.replace(/^\/+/, '');
}

function setPlaying(isPlaying) {
  document.body.classList.toggle('is-playing', isPlaying);
  playIcon.classList.toggle('fa-pause', isPlaying);
  playIcon.classList.toggle('fa-play', !isPlaying);
  masterPlay.setAttribute('aria-label', isPlaying ? 'Pause' : 'Play');
  document.getElementById('heroPlay').querySelector('i').className =
    `fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`;
  document.getElementById('heroPlay').querySelector('span').textContent =
    isPlaying ? 'Pause this mood' : 'Play this mood';
  songItems.forEach((item, index) => {
    const icon = item.querySelector('.songPlay');
    const active = isPlaying && index === songIndex;
    item.classList.toggle('active', index === songIndex);
    icon.classList.toggle('fa-pause', active);
    icon.classList.toggle('fa-play', !active);
  });
}

function renderTrack() {
  const track = items[typeIndex][songIndex];
  const artwork = assetPath(track.gif);
  currentTrack.textContent = track.name;
  playerTrack.textContent = track.name;
  currentMood.textContent = `${list[typeIndex].dataset.label} · Track ${songIndex + 1} of ${items[typeIndex].length}`;
  playerMood.textContent = list[typeIndex].dataset.label;
  currentArtwork.src = artwork;
  playerArtwork.src = artwork;
  songItems.forEach((item, index) => {
    item.querySelector('.songName').textContent = items[typeIndex][index].name;
    item.classList.toggle('active', index === songIndex);
    const icon = item.querySelector('.songPlay');
    icon.classList.toggle('fa-pause', !music.paused && index === songIndex);
    icon.classList.toggle('fa-play', music.paused || index !== songIndex);
  });
}

function selectMood(index) {
  const wasPlaying = !music.paused;
  typeIndex = index;
  songIndex = 0;
  const moodName = list[index].dataset.label;
  const moodKey = moodKeys[index];
  const [accent, accentStrong, accentSoft, accentWash] = moodThemes[index];

  document.body.dataset.mood = moodKey;
  document.documentElement.style.setProperty('--accent', accent);
  document.documentElement.style.setProperty('--accent-strong', accentStrong);
  document.documentElement.style.setProperty('--accent-soft', accentSoft);
  document.documentElement.style.setProperty('--accent-wash', accentWash);
  document.getElementById('topMood').textContent = moodName;
  document.getElementById('moodTitle').textContent = `${moodName} mode`;
  document.getElementById('moodDescription').textContent = moodDescriptions[index];
  list.forEach((mood, moodIndex) => {
    const active = moodIndex === index;
    mood.classList.toggle('active', active);
    mood.setAttribute('aria-pressed', String(active));
  });
  gifitems.forEach((item, gifIndex) => {
    item.querySelector('img').src = assetPath(items[index][gifIndex].gif);
  });
  music.src = assetPath(items[index][songIndex].path);
  music.load();
  progressBar.value = 0;
  renderTrack();
  setPlaying(false);
  if (wasPlaying) {
    playTrack();
  }
}

async function playTrack() {
  try {
    await music.play();
    setPlaying(true);
  } catch (error) {
    setPlaying(false);
    currentMood.textContent = 'This track could not be played. Try another song.';
    console.error('Unable to play the selected track.', error);
  }
}

function changeTrack(index, autoplay = true) {
  songIndex = (index + items[typeIndex].length) % items[typeIndex].length;
  music.src = assetPath(items[typeIndex][songIndex].path);
  music.load();
  music.currentTime = 0;
  progressBar.value = 0;
  renderTrack();
  if (autoplay) {
    playTrack();
  } else {
    setPlaying(false);
  }
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) {
    return '0:00';
  }
  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${remainder}`;
}

list.forEach((mood, index) => {
  mood.addEventListener('click', () => selectMood(index));
});

songItems.forEach((item) => {
  item.addEventListener('click', () => {
    const index = Number(item.dataset.index);
    if (index === songIndex && !music.paused) {
      music.pause();
      setPlaying(false);
      return;
    }
    changeTrack(index);
  });
});

masterPlay.addEventListener('click', () => {
  if (music.paused) {
    playTrack();
  } else {
    music.pause();
    setPlaying(false);
  }
});

document.getElementById('heroPlay').addEventListener('click', () => {
  if (music.paused) {
    playTrack();
  } else {
    music.pause();
    setPlaying(false);
  }
});

document.getElementById('next').addEventListener('click', () => {
  changeTrack(songIndex + 1);
});

document.getElementById('prev').addEventListener('click', () => {
  changeTrack(songIndex - 1);
});

music.addEventListener('timeupdate', () => {
  if (Number.isFinite(music.duration) && music.duration > 0) {
    progressBar.value = String((music.currentTime / music.duration) * 100);
  }
  document.getElementById('elapsedTime').textContent = formatTime(music.currentTime);
});

music.addEventListener('loadedmetadata', () => {
  document.getElementById('durationTime').textContent = formatTime(music.duration);
});

music.addEventListener('ended', () => {
  changeTrack(songIndex + 1);
});

music.addEventListener('error', () => {
  setPlaying(false);
});

progressBar.addEventListener('input', () => {
  if (Number.isFinite(music.duration) && music.duration > 0) {
    music.currentTime = (Number(progressBar.value) / 100) * music.duration;
  }
});

const fullscreenButton = document.getElementById('btn');
fullscreenButton.addEventListener('click', async () => {
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
  } catch (error) {
    console.error('Unable to change fullscreen mode.', error);
  }
});

document.addEventListener('fullscreenchange', () => {
  const isFullscreen = Boolean(document.fullscreenElement);
  fullscreenButton.querySelector('i').className =
    `fa-solid ${isFullscreen ? 'fa-compress' : 'fa-expand'}`;
  fullscreenButton.querySelector('span').textContent =
    isFullscreen ? 'Exit fullscreen' : 'Fullscreen';
  fullscreenButton.setAttribute('aria-label', isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen');
});

renderTrack();
setPlaying(false);