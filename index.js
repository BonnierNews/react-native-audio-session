import {NativeModules, Platform} from 'react-native'

const RNAudioSession = NativeModules.RNAudioSession
const IS_IOS = Platform.OS === 'ios'

export const AudioCategories = {
  Ambient: 'AVAudioSessionCategoryAmbient',
  SoloAmbient: 'AVAudioSessionCategorySoloAmbient',
  Playback: 'AVAudioSessionCategoryPlayback'
}

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
