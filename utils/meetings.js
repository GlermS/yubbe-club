import axios from 'axios'

export async function postMeeting(session, data){
    return await axios({
      url:'https://api.yubbe.club'+'/meetings/meeting',
      method: 'post',
      crossDomain: true,
      headers: {
            'Authorization': session.authToken
         },
      data
      }).then((response) => {
        // console.log(response)
        return {data: response.data, status: response.status}
  
    }).catch(error =>{
      return {msg:error, status:401}
    })
  }
  export async function subscribeMeeting(session, params){
    console.log(params)
    console.log(session)

    return await axios({
      url:'https://api.yubbe.club'+'/meetings/subscribe',
      method: 'post',
      crossDomain: true,
      headers: {
            'Authorization': session.authToken
         },
      params
      }).then((response) => {
        console.log(response)
        return {data: response.data, status: response.status}
  
    }).catch(error =>{
      console.log(error)
      return {msg:error, status:401}
    })
  }
  
export async function joinMeeting(session, params){
    return await axios({
      url:'https://api.yubbe.club'+'/meetings/join',
      method: 'get',
      crossDomain: true,
      headers: {
            'Authorization': session.authToken
         },
      params
      }).then((response) => {
        // console.log(response)
        return {data: response.data, status: response.status}
  
    }).catch(error =>{
      return {msg:error, status:401}
    })
  }

export async function updateMeeting(session, data){
    return await axios({
      url:'https://api.yubbe.club'+'/meetings/meeting',
      method: 'put',
      crossDomain: true,
      headers: {
            'Authorization': session.authToken
         },
      data
      }).then((response) => {
        // console.log(response)
        return {data: response.data, status: response.status}
  
    }).catch(error =>{
      return {msg:error, status:401}
    })
  }

  export async function deleteMeeting(session, params){
    return await axios({
      url:'https://api.yubbe.club'+'/meetings/meeting',
      method: 'delete',
      crossDomain: true,
      headers: {
            'Authorization': session.authToken
         },
      params
      }).then((response) => {
        // console.log(response)
        return {data: response.data, status: response.status}
  
    }).catch(error =>{
      return {msg:error, status:401}
    })
  }

  export async function listMeetings(session){
    return await axios({
      url:'https://api.yubbe.club'+'/meetings',
      method: 'get',
      crossDomain: true,
      headers: {
            'Authorization': session.authToken
         }
      }).then((response) => {
        // console.log(response)
        return {data: response.data, status: response.status}
  
    }).catch(error =>{
      return {msg:error, status:401}
    })
  }

  export async function listMyMeetings(session){
    return await axios({
      url:'https://api.yubbe.club'+'/meetings/my_meetings',
      method: 'get',
      crossDomain: true,
      headers: {
            'Authorization': session.authToken
         }
      }).then((response) => {
        // console.log(response)
        return {data: response.data, status: response.status}
  
    }).catch(error =>{
      return {msg:error, status:401}
    })
  }
  export async function getMeeting(session, params){
    return await axios({
      url:'https://api.yubbe.club'+'/meetings/meeting',
      method: 'get',
      crossDomain: true,
      headers: {
            'Authorization': session.authToken
         },
      params
      }).then((response) => {
        console.log(response)
        return {data: response.data.Item, status: response.status}
  
    }).catch(error =>{
      return {msg:error, status:401}
    })
  }