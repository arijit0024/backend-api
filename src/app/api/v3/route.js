import { checkApi } from "@/app/myfun/chekapi";
import { NextResponse } from "next/server";

export async function GET(req){
    return NextResponse.json({msg:201})
}
export async function POST(req,res){
    const data  =await req.json()
  //console.log(data.token)
  const tk = data.token;
  

  const captchaToken = '...'; // Your reCAPTCHA token

try {
  const apiResponse = await checkApi(tk);
  console.log(apiResponse); // Process the API response
} catch (error) {
  // Handle any errors that occurred during the API call
}


  return NextResponse.json(tk);


  
}
export async function OPTION(req,res){
    const data  =await req.json()
  console.log(req)

  return NextResponse.json(data)
}