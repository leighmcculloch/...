(function() {
  function main() {
    const $textControlVerses = document.querySelectorAll('.text-controls-verses');
    for (const $elem of $textControlVerses) {
      $elem.addEventListener("click", onTextControlVersesClick);
    }
  }

  function onTextControlVersesClick(e) {
    e.preventDefault();
    toggleVerses();
    return false;
  }

  function toggleVerses() {
    const $text = document.querySelectorAll('.text');
    for (let i = 0; i < $text.length; ++i) {
      if ($text[i].className.indexOf('show-verses') == -1) {
        $text[i].className += ' show-verses';
      } else {
        $text[i].className = $text[i].className.replace('show-verses', '');
      }
    }
  }

  main();
})();
