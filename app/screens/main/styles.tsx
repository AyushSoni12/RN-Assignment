import { StyleSheet } from 'react-native'
import { color } from '../../constants'
export const styles = StyleSheet.create({
  timeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  date: {
    fontSize: 35,
    fontWeight: 'bold',
    color: color.white,
    fontStyle: 'italic',
  },
  globe: {
    tintColor: color.white,
    width: 40,
    height: 40
  },
  stripe: {
    backgroundColor: color.white,
    padding: 12
  },
  activeStripe: {
    backgroundColor: 'lightgrey',
    padding: 12
  }
})