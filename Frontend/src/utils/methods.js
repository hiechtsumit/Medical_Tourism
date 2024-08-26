import { base_url } from "./constant";

const getMethod = async (path, body) => {
 try {
    const res = await fetch(`${base_url}${path}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const resData = await res.json();
      return resData;
 } catch (error) {
  // console.log(error)
  return {status : 404,error}
 }
}

const postMethod = async (path, body) => {
    try {
      const res = await fetch(`${base_url}${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const resData = await res.json();
      return resData;
    } catch (error) {
      return {status : 404,error}
    }
}

export { getMethod, postMethod };
