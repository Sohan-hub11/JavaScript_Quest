let btn = document.querySelector("button");
let result = document.querySelector("#result");
let url = "https://catfact.ninja/fact";

btn.addEventListener("click", async () => {
  let fact = await getfact();
  result.innerHTML = fact;
})
async function getfact() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  }
  catch(e) {
    console.log("Error : " + e);
    return "Fact Not Found";
  }
}