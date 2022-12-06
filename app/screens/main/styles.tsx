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
  stripe: {
    backgroundColor: color.white,
    padding: 12
  },
  activeStripe: {
    backgroundColor: 'lightgrey',
    padding: 12
  },
  country: {
    marginBottom: 10,
    width: 75,
    alignItems: 'center'
  },
  flag: {
    width: 45,
    height: 45
  },


})