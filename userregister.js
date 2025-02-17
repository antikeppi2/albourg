fetchData();

async function fetchData(){

  try{

    const userName = document.getElementById("userName").value;
    const responde = await fetch("https://minecraftonline.com/cgi-bin/getfirstseen?${}");

    if(!response.ok){
      throw new Error("Failed To Retrieve Data");
      
    }

    const data = await response.text();
    const userHead = data.sprites.front_default;
    const imgElement = document.getElementById("userHead");

    imgElement.src = "https://minecraftonline.com/cgi-bin/getplayerhead.sh?${}";
    imgElement.style.display = "block";
  }
  catch(error){
    console.error(error);
  }
}
