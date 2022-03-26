import { Auth } from "aws-amplify"

export function LoadingMessege(props){
    return (
        <div id="loading-messege">
            Wait a sec
        </div>
    )
}

export async function updateSession(session, setSession){
    let sessionInfo = await Auth.currentSession()
    // console.log(sessionInfo)
    // @ts-ignore
    if(session.authToken !== sessionInfo.idToken.jwtToken){
      console.log('Update token')
      // @ts-ignore
      session.authToken = sessionInfo.idToken.jwtToken
      setSession(session)
    }
    return session
}