export const layout = './_layout_day.vto';

export default async function* ({ readings }) {
  for (const [index, { ref1, ref2, youtubeId }] of readings.entries()) {
    const day = index + 1;
    const refs = [ref1, ref2].map(r => r.split(',')).flat();
    const passages = await Promise.all(refs.map(async r => ({
      ref: r,
      ...await (await fetch(`http://localhost:8080/?ref=${encodeURIComponent(r)}`)).json()
    })));
    const copyright = [...new Set(passages.map(p => p.copyright))].join('\n');

    const readingWordsPerMin = 220;
    const allText = passages.map(p => p.books.map(b => b.lines.map(l => l.verses.map(v => v.text)))).flat().join(' ');
    const wordCount = (allText.match(/ /g)||[]).length;
    const duration = Math.round(wordCount / readingWordsPerMin);
    if (duration == 0) {
      duration = 1
    }

    yield {
      day,
      url: `/${day}/index.html`,
      title: `Day ${day}`,
      prevday: day > 1 ? day - 1 : null,
      nextday: day < readings.length ? day + 1 : null,
      youtubeid: youtubeId?.trim(),
      passages,
      duration,
      copyright,
    };
  }
}
