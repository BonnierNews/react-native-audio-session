import { NativeModules } from 'react-native'

const RNAudioSession = NativeModules.RNAudioSession

export type AudioCategory =
  | 'Ambient'
  | 'SoloAmbient'
  | 'Playback'
  | 'Record'
  | 'PlayAndRecord'
  | 'MultiRoute'

export type AudioCategoryOptions =
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

const currentCategoryOptions = () =>
  new Promise<AudioCategoryOptions>((resolve, reject) => {
    RNAudioSession.options((options?: AudioCategoryOptions) => {
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
  options?: AudioCategoryOptions
): Promise<void> => RNAudioSession.setCategory(category, options)

const setMode = (mode: AudioMode): Promise<void> => RNAudioSession.setMode(mode)

const setCategoryAndMode = (
  category: AudioCategory,
  mode: AudioMode,
  options?: AudioCategoryOptions
): Promise<void> => RNAudioSession.setCategoryAndMode(category, mode, options)

const AudioSession = {
  currentCategory,
  currentCategoryOptions,
  currentMode,
  setActive,
  setCategory,
  setMode,
  setCategoryAndMode
}

export default AudioSession
