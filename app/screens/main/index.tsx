import React, { useState, useEffect } from "react";
import { ImageBackground, SafeAreaView, Text, StatusBar, View } from 'react-native'
import { Status } from "../../utilities";

import { Image, color, sheet } from "./../../constants";
import { styles } from "./styles";

const Main = () => {
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  const [hours, setHours] = useState(new Date().getHours())
  useEffect(() => {
    let time = setInterval(() => {
      setDate(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(time);
  }, []);

  const wall = (hours) => {
    if (hours > 5 && hours < 12) {
      return Image.MORNING
    }
    else if (hours >= 12 && hours < 17) {
      return Image.AFTER_NOON
    }
    else if (hours >= 17 && hours < 20) {
      return Image.EVENING
    }
    else {
      return Image.NIGHT
    }
  }

  return (
    <View style={ sheet.container }>
      { Status() }
      <ImageBackground style={ sheet.container } source={ wall(hours) }>
        <Text style={ styles.date }>{ date }</Text>
      </ImageBackground>
    </View>
  )
}

export default Main