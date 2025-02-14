import { getAuthToken } from "../../action/user/Auth";
import { API } from "../../API";

export async function loader() {
  const crimeCategoryList = fetchCrimeCategory();
  
  return { crimeCategoryList };
 }

 async function fetchCrimeCategory(){
    const token = getAuthToken();
    const response = await fetch(`${API}/police/crime-category`,
        {
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    if(!response.ok){
        throw new Error("Failed to fetch Crime Category List")
    }

    return response.json();
 }

