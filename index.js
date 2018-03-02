import {NativeModules, Platform} from 'react-native'

const RNAudioSession = NativeModules.AudioSession
const IS_IOS = Platform.OS === 'ios'

const create = () => {
  const setCategory = (category, options) => {
    if (IS_IOS) {
      RNAudioSession.setCategory(category, options)
    }
  }

  return {
    setCategory
  }
}

export default create()
