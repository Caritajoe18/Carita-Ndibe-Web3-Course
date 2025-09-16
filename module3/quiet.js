async function activityTable(day) {
    let table = [];
    //Creates an array with 24 elements (one per hour), all set to 0.
    for (let i = 0; i < 24; i++) table[i] = 0;
  
    let logFileList = await textFile("camera_logs.txt");
    for (let filename of logFileList.split("\n")) {
      let log = await textFile(filename);
      for (let timestamp of log.split("\n")) {
        let date = new Date(Number(timestamp));
        if (date.getDay() == day) {
          table[date.getHours()]++;
        }
      }
    }
  
    return table;
  }
  
  activityTable(1)
    .then(table => console.log(activityGraph(table)));