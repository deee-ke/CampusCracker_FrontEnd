
import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

    // register API
    export const registerAPI = async(users)=>{
        return await commonAPI('POST',`${BASE_URL}/user/register`,users,"")
    }

    // login api
    export const loginAPI = async(users)=>{
        return await commonAPI('POST',`${BASE_URL}/user/login`,users,"")
    }

   // Getting general questions
    export const getGeneralQuestionAPI = async(sectionName,categoryName)=>{
        return await commonAPI('GET',`${BASE_URL}/general/${sectionName}/${categoryName}`) 
    }

    // Getting general exam questions
    export const getGeneralExamAPI = async(sectionName,categoryName)=>{
        return await commonAPI('GET',`${BASE_URL}/general/exam/${sectionName}/${categoryName}`)
    }

    // Adding exam results to database
    export const addResultsAPI = async(reqBody,reqHeader)=>{
        return await commonAPI('POST',`${BASE_URL}/user/results/add`,reqBody,reqHeader)
    }