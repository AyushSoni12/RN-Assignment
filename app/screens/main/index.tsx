import React, { useState, useEffect } from "react";
import { ImageBackground, Text, View, Image, TouchableOpacity, Modal, FlatList } from 'react-native'

import { styles } from "./styles";
import { image, color, sheet, COUNTRIES } from "./../../constants";
import { Status } from "../../utilities";

const Main = () => {
  // const australia = new Date().toLocaleTimeString("en-US", { timeZone: "Australia/Sydney" });
  // const uk = new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/London' })

  const [date, setDate] = useState(new Date().toLocaleTimeString());
  const [hours, setHours] = useState(new Date().getHours())
  const [show, setShow] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState()

  useEffect(() => {
    let time = setInterval(() => {
      updateDate()
    }, 1000)

    return () => clearInterval(time);
  }, []);

  const updateDate = () => {
    setDate(new Date().toLocaleTimeString())
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


  const showModal = () => {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity onPress={ () => setSelectedCountry(item.id) } style={ selectedCountry === item.id ? styles.activeStripe : styles.stripe }>
          <Text>{ item.country }</Text>
        </TouchableOpacity>
      )
    }
    return (
      <Modal
        animationType={ "fade" }
        transparent={ true }
        visible={ show }
        onRequestClose={ () => { console.log("Modal has been closed.") } }>
        <View onStartShouldSetResponder={ () => setShow(false) } style={ { flex: 1, backgroundColor: '#0000007d', justifyContent: 'flex-end' } }>
          <View style={ { backgroundColor: color.white, padding: 16, margin: 16, borderRadius: 7 } }>
            <FlatList
              data={ COUNTRIES }
              renderItem={ renderItem }
            />
          </View>
        </View>
      </Modal >
    )
  }

  return (
    <View style={ sheet.container }>
      { Status() }
      <ImageBackground style={ sheet.container } source={ wall(hours) }>
        <View style={ styles.timeView }>
          <Text style={ styles.date }>{ date }</Text>
          <TouchableOpacity onPress={ () => {
            console.log("Hello")
            setShow(true)
          } }>
            <Image style={ styles.globe } source={ image.GLOBE } />
          </TouchableOpacity>
        </View>
        { show && showModal() }
      </ImageBackground>
    </View>
  )
}

export default Main