
export async function geocodeAddress(address) {
    // code goes here
    const apiKey = process.env.GOOGLE_API_KEY;
    console.log(process.env.GOOGLE_API_KEY);
    const url =

  `https://maps.googleapis.com/maps/api/geocode/json` +
  `?address=${encodeURIComponent(address)}` +
  `&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    //get lat/long coords
    if (data.status !== "OK") {
        return {
          lat: null,
          lng: null
        };
      }
  
    const geometry = data.results[0].geometry;
        return {
            lat: geometry.location.lat,
            lng: geometry.location.lng
          };
}