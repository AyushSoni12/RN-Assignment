import React, { useState, useEffect } from "react";
import { ImageBackground, Text, View, Image, TouchableOpacity, Modal, FlatList } from 'react-native'

import { styles } from "./styles";
import { image, color, sheet, COUNTRIES } from "./../../constants";
import { Status } from "../../utilities";

const Main = () => {
  const [date, setDate] = useState(new Date().toLocaleString("en-US", { hour12: false }))
  const [selectedCountry, setSelectedCountry] = useState(1)
  const [hours, setHours] = useState(new Date().getHours())



  useEffect(() => {
    let time = setInterval(() => {
      updateDate()
    }, 1000)

    return () => clearInterval(time);
  }, [selectedCountry]);


  const localString = (timezone) => {
    const time = new Date().toLocaleString("en-US", { timeZone: `${timezone}`, hour12: false })
    const lastIndex = time.lastIndexOf(",") + 2;
    const sliceTime = time.slice(lastIndex, lastIndex + 2)
    const finalTime = sliceTime[0] == 0 ? sliceTime.slice(-1) : sliceTime
    setHours(+finalTime)
    return time
  }


  const updateDate = () => {
    if (selectedCountry === 1) {
      setDate(localString('Asia/Kolkata'))
    }
    else if (selectedCountry === 2) {
      setDate(localString("America/New_York"))
    }
    else if (selectedCountry === 3) {
      setDate(localString("Australia/Sydney"))
    }
    else if (selectedCountry === 4) {
      setDate(localString("Africa/Johannesburg"))
    }
    else {
      setDate(localString(`Europe/London`))
    }
  }

  const wall = (hours) => {
    if (hours >= 5 && hours < 12) {
      return image.MORNING
    }
    else if (hours >= 12 && hours < 17) {
      return image.AFTER_NOON
    }
    else if (hours >= 17 && hours < 20) {
      return image.EVENING
    }
    else {
      return image.NIGHT
    }
  }

  const renderItem = ({ item }) => {
    const selectCountry = () => {
      setSelectedCountry(item.id)
    }
    return (
      <TouchableOpacity onPress={ selectCountry } style={ styles.country }>
        <Image style={ styles.flag } source={ item.flag } />
        <Text style={ { color: item.id === selectedCountry ? color.white : color.black } }>{ item.country }</Text>
      </TouchableOpacity>
    )
  }


  return (
    <View style={ sheet.container }>
      { Status() }
      <ImageBackground style={ sheet.container } source={ wall(hours) }>
        <View style={ styles.timeView }>
          <Text style={ styles.date }>{ date }</Text>
        </View>
        <FlatList data={ COUNTRIES } renderItem={ renderItem } />
      </ImageBackground>
    </View>
  )
}

export default Main