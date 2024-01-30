export async function checkApi(token) {
    try {
      const secretKey = "6Lc4nGApAAAAAHvtx1_pWnR_oeZ4t4VwIRQCSB5e"; // Replace with your actual secret key
      const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
  
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error in checkApi function:", error);
      throw error; // Re-throw the error for further handling
    }
  }
  