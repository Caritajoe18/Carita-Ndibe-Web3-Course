const SCRIPTS = [
    {
      name: "Latin",
      ranges: [[65, 91], [97, 123], [192, 256]], // ASCII letters, some extended
      direction: "ltr",
    },
    {
      name: "Cyrillic",
      ranges: [[1024, 1280]], // Basic Cyrillic range
      direction: "ltr",
    },
    {
      name: "Arabic",
      ranges: [[1424, 1536], [1611, 1614]], // Basic Arabic range
      direction: "rtl",
    },
    {
      name: "Hangul",
      ranges: [[44032, 55204]], // Korean script
      direction: "ltr",
    },
  ];
  

  function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.find(c => c.name == name);
      if (!known) {
        counts.push({name, count: 1});
      } else {
        known.count++;
      }
    }
    return counts;
  }

  function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }
  
  function dominantDirection(text) {
    // Use countBy to get the number of characters for each script direction.
    // The filter here ensures we only process characters that have a script.
    let directions = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
  
    // If no characters with a script were found, return null.
    if (directions.length === 0) {
      return null;
    }
  
    // Find the direction with the highest count.
    let dominant = directions.reduce((a, b) => a.count > b.count ? a : b);
  
    return dominant.name;
  }
  
  console.log(dominantDirection("Hello!"));

  console.log(dominantDirection("Hey, مساء الخير, مرحبًا بالعالم"));
  console.log(dominantDirection( "مرحبًا بالعالم"));
