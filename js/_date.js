(function() {
  function main() {
    const $metaDay = document.querySelector('meta[name="readprayrepeat:day"]');
    if ($metaDay) {
      const day = $metaDay.getAttribute("content");
      const date = getDateForDay(day);
      const $navCurrentDate = document.querySelectorAll('.nav-current-date');
      for (const $elem of $navCurrentDate) {
        $elem.innerText = date.toDateString();
      }
    }
  }

  function getDateForDay(day) {
    const start = getStartDate();
    const oneDay = 1000 * 60 * 60 * 24;
    const daysInTime = oneDay * day;
    return new Date(start.getTime() + daysInTime);
  }

  function getStartDate() {
    const now = new Date();
    return new Date(now.getFullYear(), 0, 0);
  }

  main();
})();
