export async function getMovie(title) {
    const response = await fetch(
      `https://YOUR_BACKEND_URL/movies/${encodeURIComponent(title)}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }
  
  

/*

export async function getMovie(title) {
const response = await fetch(
    `/~mballard7/medical-records-swe/cgi-bin/db.cgi`
);
if (!response.ok) {
    throw new Error("Network response was not ok");
}
return response.json();
}

*/