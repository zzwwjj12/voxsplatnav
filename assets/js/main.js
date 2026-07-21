
(() => {
  const video = document.getElementById('project-video');
  const placeholder = document.getElementById('video-placeholder');
  if (!video || !placeholder) return;

  const showPlaceholder = () => {
    video.hidden = true;
    placeholder.hidden = false;
  };

  video.addEventListener('error', showPlaceholder, true);
  const source = video.querySelector('source');
  if (source) source.addEventListener('error', showPlaceholder);

  setTimeout(() => {
    if (video.readyState === 0) showPlaceholder();
  }, 1200);
})();
