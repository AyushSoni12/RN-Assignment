import { StyleSheet, View } from 'react-native'
import React from 'react'
import { sheet } from './app/constants'
import Main from './app/screens/main'

const App = () => {
  return (
    <View style={ sheet.container }>
      <Main />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})