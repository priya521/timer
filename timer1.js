const sl = process.argv.slice(2);
for (let time of sl){
  const delay = Number(time);
  if (!isNaN(delay) && delay > 0){
    setTimeout(() => {
    process.stdout.write("\007")
    process.stdout.write("beep")
    }, delay * 1000)
  } 
}