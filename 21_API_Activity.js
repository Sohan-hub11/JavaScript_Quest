//Activity using Query String.

let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  console.log(country);
  let resCol = await getColleges(country);
  console.log(resCol);
  
  showItem(resCol);
});

function showItem(resCol) {
  let list = document.querySelector("#list");
  list.innerHTML = "";
  for(col of resCol){
    console.log(col.name);

    let li = document.createElement("li");
    li.innerHTML = col.name;
    list.append(li);
  }
}

async function getColleges(country) {
  try {
    let res = await axios.get(url+country);
    return res.data;
  }
  catch(e) {
    console.log("Error : " + e);
    return "Fact Not Found";
  }
}