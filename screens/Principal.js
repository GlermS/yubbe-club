import { useEffect,useState } from 'react';
import { Button, StyleSheet, Linking, View  } from 'react-native';
import Card from '../components/Card';
import moment from 'moment';
import { updateSession } from '../utils/common';
import { listMyMeetings, deleteMeeting, joinMeeting } from '../utils/meetings';
import { listTags } from '../utils/tags';



const Principal = ({navigation}) => {
  
  const [meetings, setMeetings] = useState([])
  const [update, setUpdate] = useState(true)
  const [session, setSession] = useState({authToken:'', userId:''})
  const [tags, setTags] = useState({})


  const updateFunc = async()=>{
      await updateSession(session, setSession)
      let response = await listMyMeetings(session)

      if(response.status===200){
          const mts = response.data.map(element => {
              const {id, subscribed_users, start, tag} = element
              return {
                  meetingId: id,
                  users: subscribed_users,
                  start,
                  tag
              }
          });
          if(meetings!==mts){
              setMeetings(mts)
          }
          
      }
      response = await listTags(session)
      if(response.status===200){
          const mts = response.data.map(element => {
              const {id, tag_color:color, tag_name:name} = element
              return {
                  tagId: id,
                  color,
                  name
              }
          });
          var d = {}
          mts.forEach(element => {
              d = {...d, [element.tagId]: element}
          });

          if(tags!==d){            
              setTags(d)
          }
      }
      
  }

  const join = async (meeting)=>{
    console.log("join"); 
    Linking.openURL('https://meeting.yubbe.club/'+meeting.meetingId)
    }

  useEffect(()=>{
      if(update){
          updateFunc();
          setUpdate(false);
      }
  })
  return (
    <View style={styles.container}>
      
      {
                meetings.map((meeting, i) =>{
                  let meetingId = meeting.meetingId
                  let startTime = moment(meeting.start)
                  const tag = tags[meeting.tag]
                  let name = ''
                  let color = '#000000'
                  if (tag) {
                      name=tag.name 
                      color=tag.color
                  }
                  console.log(tags)
                  console.log(meeting)
                  return (
                      <Card switch_type='my-meeting' tag_color = {color} cardId = {meetingId} updatePath='/meetings/update-meeting' fields={[
                          {label: 'Inscriptions', value: meeting.users? meeting.users.length:0},
                          {label: 'Date', value: startTime.format("DD/MM/YYYY")},
                          {label: 'Start', value: startTime.format("hh:mm")},
                      ]
                      } key ={i} deleteFunc={async()=>{await deleteMeeting(session, {meetingId}); updateFunc()}} joinFunc={async()=>{await join(meeting)}}></Card>
                  )
                })
            }
        <Button color= "#ff8b1a"title="Reload" onPress={()=>{setUpdate(true)}}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});



export default Principal