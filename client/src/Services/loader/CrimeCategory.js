async function loadCrimeCategory() {
  try {
   
    const response = await fetch(`${API}/crimecategory/getCategories`, {
      method: "GET",
      // headers: {
      //   "Content-Type": "application/json",  
      //   Authorization: `Bearer ${token}`, // for token
      // },
    });

    if (!response.ok) {
      const responseData = await response.json();

      throw new Error(responseData?.error || "Failed to fetch crime categories");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || "Something went wrong while fetching crime categories.");
  }
}

// Loader now returns a normal async function instead of `defer()`
export async function loader() {
  const crimeCategories = await loadCrimeCategory();

  return { crimeCategories }; 
}