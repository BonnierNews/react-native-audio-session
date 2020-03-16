import { NativeModules } from 'react-native'

const RNAudioSession = NativeModules.RNAudioSession

function definedStringMap<V extends string, T extends { [key in string]: V }>(
  o: T
): T {
  return o
}

export const AudioCategories = definedStringMap({
  Ambient: 'Ambient',
  SoloAmbient: 'SoloAmbient',
  Playback: 'Playback',
  Record: 'Record',
  PlayAndRecord: 'PlayAndRecord',
  MultiRoute: 'MultiRoute'
})
type AudioCategory = typeof AudioCategories[keyof typeof AudioCategories]

export const AudioOptions = definedStringMap({
  MixWithOthers: 'MixWithOthers',
  DuckOthers: 'DuckOthers',
  InterruptSpokenAudioAndMixWithOthers: 'InterruptSpokenAudioAndMixWithOthers',
  AllowBluetooth: 'AllowBluetooth',
  AllowBluetoothA2DP: 'AllowBluetoothA2DP',
  AllowAirPlay: 'AllowAirPlay',
  DefaultToSpeaker: 'DefaultToSpeaker'
})
type AudioOption = typeof AudioOptions[keyof typeof AudioOptions]

export const AudioModes = definedStringMap({
  Default: 'Default',
  VoiceChat: 'VoiceChat',
  VideoChat: 'VideoChat',
  GameChat: 'GameChat',
  VideoRecording: 'VideoRecording',
  Measurement: 'Measurement',
  MoviePlayback: 'MoviePlayback',
  SpokenAudio: 'SpokenAudio'
})
type AudioMode = typeof AudioModes[keyof typeof AudioModes]

const create = () => {
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
    new Promise<AudioOption>((resolve, reject) => {
      RNAudioSession.options((option?: AudioOption) => {
        if (option) {
          resolve(option)
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
    options: AudioOption
  ): Promise<void> => RNAudioSession.setCategory(category, options)

  const setMode = (mode: AudioMode): Promise<void> =>
    RNAudioSession.setMode(mode)

  const setCategoryAndMode = (
    category: AudioCategory,
    mode: AudioMode,
    options: AudioOption
  ): Promise<void> => RNAudioSession.setCategoryAndMode(category, mode, options)

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
