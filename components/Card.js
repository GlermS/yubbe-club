// import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Button, StyleSheet, Text, View  } from 'react-native';

export default function Card({ switch_type, tag_color, cardId, fields, joinFunc, ...props}) {

    const subscribeButton = ()=>{
            return  <Button color= "#ff8b1a" title="Subscribe" onPress={async ()=>{await joinFunc()}}></Button>
    }

    const joinButton = ()=>{
        return <Button color= "#ff8b1a" title="Join" onPress={async ()=>{await joinFunc()}}></Button>
    }

    const stylesCard = StyleSheet.create({
      tagBox:{
        backgroundColor:tag_color,
        width: 30,
        height: 100,
      }
    }) 
    switch (switch_type) {
        case 'my-meeting':
          return (
            <View style={styles.cardBox}>
              <View style = {stylesCard.tagBox}></View>
                <View style={styles.cardBody}>
                  <View style={styles.fields}>
                    {fields.map((field, key)=>{
                        // console.log(field, i)
                        return renderField(field, key)
                    })}
                  </View>
                  <View style={styles.buttons}>
                    {joinButton()}
                  </View>
                </View>
              </View>)
        default:
            return(
              <View style={styles.cardBox}>
                <View style = {stylesCard.tagBox}></View>
                <View style={styles.cardBody}>
                  <View style={styles.fields}>
                    {fields.map((field, key)=>{
                        // console.log(field, i)
                        return renderField(field, key)
                    })}
                  </View>
                  <View style={styles.buttons}>
                    {subscribeButton()}
                  </View>
                </View>
              </View>
                
            )
          break;
      }
    }

const renderField = (field, key) =>{
    // let stl = StyleSheet.create({Box:{background:field.value, height:"1rem", width:"1rem"}})
    const output = ()=>{
        switch(field.type){
            // case "color":
            //     return <View style={stl.Box}></View>
            default:
                return <Text>{field.value}</Text>
        }
    }
    return(
        <View style={styles.field} key ={key}>
            <Text style={styles.label}>{field.label}: </Text>
            {output()}
        </View>
    )
}

const styles = StyleSheet.create({
  cardBody: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 10,
    display:"flex",
    flexDirection: "row",
    width: 350,
    borderWidth: 1,
    borderColor:"#AAAAAA",
    marginLeft: 0
    // marginHorizontal: 50,
  },
  cardBox: {
    display:"flex",
    // width:300,
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,

    // justifyContent: "center",
    // alignItems: "center"

  },
  field: {
    display:"flex",
    flexDirection: "row",
  },
  fields: {
    display:"flex",
    flexDirection: "column",
  },
  buttons: {
    display:"flex",
    flexDirection: "row",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  tagBox:{
    margin: 0
  },
  label:{
    fontWeight: "700",
  },
  button: {
    color: "#ff8b1a"
  }
});
