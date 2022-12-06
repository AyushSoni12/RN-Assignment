import React, { useState, useEffect } from "react";
import { ImageBackground, Text, View, Image, TouchableOpacity, Modal, FlatList } from 'react-native'

import { styles } from "./styles";
import { image, color, sheet, COUNTRIES } from "./../../constants";
import { Status } from "../../utilities";

const Main = () => {
  const [date, setDate] = useState();
  const [hours, setHours] = useState(new Date().getHours())
  const [selectedCountry, setSelectedCountry] = useState(1)

  useEffect(() => {
    let time = setInterval(() => {
      updateDate()
    }, 1000)

    return () => clearInterval(time);
  }, [selectedCountry]);


  const updateDate = () => {
    if (selectedCountry === 1) {
      setDate(new Date().toLocaleTimeString())
    }
    else if (selectedCountry === 2) {
      setDate(new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" }))
    }
    else if (selectedCountry === 3) {
      setDate(new Date().toLocaleTimeString("en-US", { timeZone: "Australia/Sydney" }))
    }
    else if (selectedCountry === 4) {
      setDate(new Date().toLocaleTimeString("en-US", { timeZone: "Africa/Johannesburg" }))
    }
    else {
      setDate(new Date().toLocaleTimeString("en-US", { timeZone: `Europe/London` }))
    }
  }

  const wall = (hours) => {
    if (hours > 5 && hours < 12) {
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