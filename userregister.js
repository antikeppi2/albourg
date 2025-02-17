const baseUrl = "https://minecraftonline.com/cgi-bin/";

async function getUserInfo(user) {
  const firstSeenUrl = `${baseUrl}/getfirstseen?${user}`;
  const lastSeenUrl = `${baseUrl}/getlastseen?${user}`;
  const timeOnlineUrl = `${baseUrl}/gettimeonline?${user}`;
  const isPlayerBannedUrl = `${baseUrl}/getbanwhy.sh?${user}`;
  const usernameUrl = `${baseUrl}/getcorrectname?${user}`;

  try {
    const usernameResponse = await fetch(usernameUrl);
    if (usernameResponse.ok) {
      const username = await usernameResponse.text();
      console.log(`Username:\n${username}`);
    } else {
      console.log(`Failed To Retrieve Data ${usernameResponse.status}`);
    }

    const firstSeenResponse = await fetch(firstSeenUrl);
    if (firstSeenResponse.ok) {
      const firstSeen = await firstSeenResponse.text();
      console.log(`First Seen:\n${firstSeen}`);
    } else {
      console.log(`Failed To Retrieve Data ${firstSeenResponse.status}`);
    }

    const lastSeenResponse = await fetch(lastSeenUrl);
    if (lastSeenResponse.ok) {
      const lastSeen = await lastSeenResponse.text();
      console.log(`Last Seen:\n${lastSeen}`);
    } else {
      console.log(`Failed To Retrieve Data ${lastSeenResponse.status}`);
    }

    const timeOnlineResponse = await fetch(timeOnlineUrl);
    if (timeOnlineResponse.ok) {
      const seconds = await timeOnlineResponse.text();
      const cleanSeconds = seconds.trim();
      const time = new Date(0);
      time.setSeconds(parseInt(cleanSeconds));
      console.log(`Time Played:\n${new Date(time).toISOString().substr(11, 8)}`);
    } else {
      console.log(`Failed To Retrieve Data ${timeOnlineResponse.status}`);
    }

    const isPlayerBannedResponse = await fetch(isPlayerBannedUrl);
    if (isPlayerBannedResponse.ok) {
      const isBanned = await isPlayerBannedResponse.text();
      console.log(`Is Player Banned?\n${isBanned}`);
    } else {
      console.log(`Failed To Retrieve Data ${isPlayerBannedResponse.status}`);
    }
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

const userName = "Legnano";
getUserInfo(userName);
