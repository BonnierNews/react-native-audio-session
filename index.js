import {NativeModules, Platform} from 'react-native'

const RNAudioSession = NativeModules.RNAudioSession
const IS_IOS = Platform.OS === 'ios'

export const AudioCategories = {
  Ambient: 'Ambient',
  SoloAmbient: 'SoloAmbient',
  Playback: 'Playback',
  Record: 'Record',
  PlayAndRecord: 'PlayAndRecord',
  MultiRoute: 'MultiRoute'
}

export const AudioOptions = {
  MixWithOthers: 'MixWithOthers',
  DuckOthers: 'DuckOthers',
  InterruptSpokenAudioAndMixWithOthers: 'InterruptSpokenAudioAndMixWithOthers',
  AllowBluetooth: 'AllowBluetooth',
  AllowBluetoothA2DP: 'AllowBluetoothA2DP',
  AllowAirPlay: 'AllowAirPlay',
  DefaultToSpeaker: 'DefaultToSpeaker'
}

export const AudioModes = {
  Default: 'Default',
  VoiceChat: 'VoiceChat',
  VideoChat: 'VideoChat',
  GameChat: 'GameChat',
  VideoRecording: 'VideoRecording',
  Measurement: 'Measurement',
  MoviePlayback: 'MoviePlayback',
  SpokenAudio: 'SpokenAudio'
}

const create = () => {
  const currentCategory = () => {
    if (IS_IOS) {
      return new Promise((resolve, reject) => {
        RNAudioSession.category(event => {
          resolve(event)
        })
      })
    }
  }

  const currentCategoryOptions = () => {
    if (IS_IOS) {
      return new Promise((resolve, reject) => {
        RNAudioSession.categoryOptions(event => {
          resolve(event)
        })
      })
    }
  }

  const currentMode = () => {
    if (IS_IOS) {
      return new Promise((resolve, reject) => {
        RNAudioSession.mode(event => {
          resolve(event)
        })
      })
    }
  }

  const setCategory = (category, options) => {
    if (IS_IOS) {
      return RNAudioSession.setCategory(category, options)
    }
  }

  const setMode = mode => {
    if (IS_IOS) {
      return RNAudioSession.setMode(mode)
    }
  }
  const setCategoryAndMode = (category, mode, options) => {
    if (IS_IOS) {
      return RNAudioSession.setCategoryAndMode(category, mode, options)
    }
  }

  return {
    currentCategory,
    currentCategoryOptions,
    currentMode,
    setCategory,
    setMode,
    setCategoryAndMode
  }
}

export default create()
