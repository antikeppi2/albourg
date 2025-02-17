document.addEventListener('DOMContentLoaded', () => {  
  import cors from 'cors';
  const baseUrl = "https://minecraftonline.com/cgi-bin/";
  const cors = await import('cors');
 

  app.use(cors({
    origin: "*",
  }))

  async function getUserInfo(user) {
    const firstSeenUrl = `${baseUrl}/getfirstseen?${user}`;
    const lastSeenUrl = `${baseUrl}/getlastseen?${user}`;
    const timeOnlineUrl = `${baseUrl}/gettimeonline?${user}`;
    const isPlayerBannedUrl = `${baseUrl}/getbanwhy.sh?${user}`;
    const usernameUrl = `${baseUrl}/getcorrectname?${user}`;

    // Get the results div
    const resultsDiv = document.getElementById('results');

    // Check if resultsDiv exists
    if (!resultsDiv) {
      console.error("Error: #results div not found in the DOM.");
      return;  // Stop further execution if results div doesn't exist
    }

    // Clear previous results
    resultsDiv.innerHTML = '';

    try {
      const usernameResponse = await fetch(usernameUrl);
      if (usernameResponse.ok) {
        const username = await usernameResponse.text();
        resultsDiv.innerHTML += `<div class="result-item"><strong>Username:</strong><br>${username}</div>`;
      } else {
        resultsDiv.innerHTML += `<div class="result-item error">Failed to retrieve Username</div>`;
      }

      const firstSeenResponse = await fetch(firstSeenUrl);
      if (firstSeenResponse.ok) {
        const firstSeen = await firstSeenResponse.text();
        resultsDiv.innerHTML += `<div class="result-item"><strong>First Seen:</strong><br>${firstSeen}</div>`;
      } else {
        resultsDiv.innerHTML += `<div class="result-item error">Failed to retrieve First Seen</div>`;
      }

      const lastSeenResponse = await fetch(lastSeenUrl);
      if (lastSeenResponse.ok) {
        const lastSeen = await lastSeenResponse.text();
        resultsDiv.innerHTML += `<div class="result-item"><strong>Last Seen:</strong><br>${lastSeen}</div>`;
      } else {
        resultsDiv.innerHTML += `<div class="result-item error">Failed to retrieve Last Seen</div>`;
      }

      const timeOnlineResponse = await fetch(timeOnlineUrl);
      if (timeOnlineResponse.ok) {
        const seconds = await timeOnlineResponse.text();
        const cleanSeconds = seconds.trim();
        const time = new Date(0);
        time.setSeconds(parseInt(cleanSeconds));
        resultsDiv.innerHTML += `<div class="result-item"><strong>Time Played:</strong><br>${new Date(time).toISOString().substr(11, 8)}</div>`;
      } else {
        resultsDiv.innerHTML += `<div class="result-item error">Failed to retrieve Time Played</div>`;
      }

      const isPlayerBannedResponse = await fetch(isPlayerBannedUrl);
      if (isPlayerBannedResponse.ok) {
        const isBanned = await isPlayerBannedResponse.text();
        resultsDiv.innerHTML += `<div class="result-item"><strong>Is Player Banned?</strong><br>${isBanned}</div>`;
      } else {
        resultsDiv.innerHTML += `<div class="result-item error">Failed to retrieve Ban Info</div>`;
      }
    } catch (error) {
      console.error("Error occurred:", error);
      resultsDiv.innerHTML += `<div class="result-item error">An error occurred while fetching data.</div>`;
    }
  }

  // Handle form submission
  document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    if (username) {
      getUserInfo(username);
    } else {
      alert("Please enter a valid Minecraft username.");
    }
  });
});
