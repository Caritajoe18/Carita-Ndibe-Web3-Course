const SCRIPTS = [
    {
      name: "Latin",
      ranges: [
        [65, 91],     // A–Z
        [97, 123],    // a–z
        [192, 383],   // Latin-1 Supplement
        [384, 591],   // Latin Extended-A/B
      ],
      direction: "ltr",
    },
    {
      name: "Cyrillic",
      ranges: [
        [1024, 1328],  // Basic Cyrillic + supplement
        [11744, 11776] // Cyrillic Extended
      ],
      direction: "ltr",
    },
    {
      name: "Arabic",
      ranges: [
        [1536, 1792],   // Arabic
        [1872, 1920],   // Arabic Extended-A
        [2208, 2304],   // Arabic Extended-B
        [64336, 65024], // Arabic Presentation Forms-A
        [65136, 65280], // Arabic Presentation Forms-B
      ],
      direction: "rtl",
    },
    {
      name: "Hangul",
      ranges: [
        [44032, 55204], // Hangul Syllables
        [12592, 12688], // Hangul Jamo
        [127488, 127488 + 64], // Small Hangul block
      ],
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
