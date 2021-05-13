
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('bet') || lowerStr.includes('xxx');
  }
  

  console.log(checkSpam('bet grbrgtbhte'));