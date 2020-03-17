import { NativeModules } from 'react-native'

const RNAudioSession = NativeModules.RNAudioSession

export type AudioCategory =
  | 'Ambient'
  | 'SoloAmbient'
  | 'Playback'
  | 'Record'
  | 'PlayAndRecord'
  | 'MultiRoute'

export type AudioOptions =
  | 'MixWithOthers'
  | 'DuckOthers'
  | 'InterruptSpokenAudioAndMixWithOthers'
  | 'AllowBluetooth'
  | 'AllowBluetoothA2DP'
  | 'AllowAirPlay'
  | 'DefaultToSpeaker'

export type AudioMode =
  | 'Default'
  | 'VoiceChat'
  | 'VideoChat'
  | 'GameChat'
  | 'VideoRecording'
  | 'Measurement'
  | 'MoviePlayback'
  | 'SpokenAudio'

const currentCategory = () =>
  new Promise<AudioCategory>((resolve, reject) => {
    RNAudioSession.category((category?: AudioCategory) => {
      if (category) {
        resolve(category)
      } else {
        reject('Unable to get current category')
      }
    })
  })

const currentOptions = () =>
  new Promise<AudioOptions>((resolve, reject) => {
    RNAudioSession.options((options?: AudioOptions) => {
      if (options) {
        resolve(options)
      } else {
        reject('Unable to get current options')
      }
    })
  })

const currentMode = () =>
  new Promise<AudioMode>((resolve, reject) => {
    RNAudioSession.mode((mode: AudioMode) => {
      if (mode) {
        resolve(mode)
      } else {
        reject('Unable to get current mode')
      }
    })
  })

const setActive = (active: boolean): Promise<void> =>
  RNAudioSession.setActive(active)

const setCategory = (
  category: AudioCategory,
  options?: AudioOptions
): Promise<void> => RNAudioSession.setCategory(category, options)

const setMode = (mode: AudioMode): Promise<void> => RNAudioSession.setMode(mode)

const setCategoryAndMode = (
  category: AudioCategory,
  mode: AudioMode,
  options: AudioOptions
): Promise<void> => RNAudioSession.setCategoryAndMode(category, mode, options)

const AudioSession = {
  currentCategory,
  currentOptions,
  currentMode,
  setActive,
  setCategory,
  setMode,
  setCategoryAndMode
}

export default AudioSession
