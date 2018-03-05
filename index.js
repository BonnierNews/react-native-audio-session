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

  const noAndroid = () => {
    return new Promise((resolve, reject) => {
      resolve("AudioSession is not supported on Android.")
    })
  }
  const currentCategory = () => {
    if (IS_IOS) {
      return new Promise((resolve, reject) => {
        RNAudioSession.category(event => {
          resolve(event)
        })
      })
    } else {
      return noAndroid()
    }
  }

  const currentOptions = () => {
    if (IS_IOS) {
      return new Promise((resolve, reject) => {
        RNAudioSession.options(event => {
          const keys = Object.keys(AudioOptions)
          const key = keys.length > event - 1 ? keys[event - 1]: null
          resolve(AudioOptions[key])
        })
      })
    } else {
      return noAndroid()
    }
  }

  const currentMode = () => {
    if (IS_IOS) {
      return new Promise((resolve, reject) => {
        RNAudioSession.mode(event => {
          resolve(event)
        })
      })
    } else {
      return noAndroid()
    }
  }

  const setActive = active => {
    if (IS_IOS) {
      return RNAudioSession.setActive(active)
    } else {
      return noAndroid()
    }
  }

  const setCategory = (category, options) => {
    if (IS_IOS) {
      return RNAudioSession.setCategory(category, options)
    } else {
      return noAndroid()
    }
  }

  const setMode = mode => {
    if (IS_IOS) {
      return RNAudioSession.setMode(mode)
    } else {
      return noAndroid()
    }
  }

  const setCategoryAndMode = (category, mode, options) => {
    if (IS_IOS) {
      return RNAudioSession.setCategoryAndMode(category, mode, options)
    } else {
      return noAndroid()
    }
  }

  return {
    currentCategory,
    currentOptions,
    currentMode,
    setActive,
    setCategory,
    setMode,
    setCategoryAndMode
  }
}

export default create()
