# react-native-audio-session
[![npm version](https://img.shields.io/npm/v/react-native-audio-session.svg?style=flat)](https://www.npmjs.com/package/react-native-audio-session)
[![npm downloads](https://img.shields.io/npm/dm/react-native-audio-session.svg?style=flat)](https://www.npmjs.com/package/react-native-audio-session)

A React Native module for handling category, category options and mode on the [`AVAudioSession`](https://developer.apple.com/documentation/avfoundation/avaudiosession?language=objc) sharedInstance on iOS.

## Getting started

`$ yarn add react-native-audio-session`

and then

`$ react-native link react-native-audio-session`

## Usage

```javascript
import AudioSession, {AudioCategories, AudioOptions, AudioModes} from 'react-native-audio-session'

// Set AVAudioSession active
AudioSession.setActive(true)
.then(() => { console.log('Success!') })
.catch(error => { console.log('Error!') })

// Set AVAudioSession category
AudioSession.setCategory(AudioCategories.Playback)
.then(() => { console.log('Success!') })
.catch(error => { console.log('Error!') })

// Set AVAudioSession category and options
AudioSession.setCategory(AudioCategories.Playback, AudioOptions.MixWithOthers)
.then(() => { console.log('Success!') })
.catch(error => { console.log('Error!') })

// Set AVAudioSession mode
AudioSession.setMode(AudioModes.VoiceChat)
.then(() => { console.log('Success!') })
.catch(error => { console.log('Error!') })

// Set AVAudioSession category, mode and options
AudioSession.setCategoryAndMode(AudioCategories.Playback, AudioModes.VoiceChat, AudioOptions.MixWithOthers)
.then(() => { console.log('Success!') })
.catch(error => { console.log('Error!') })

// Get current AVAudioSession category
AudioSession.currentCategory().then(category => {
  console.log(category)
})

// Get current AVAudioSession options
AudioSession.currentOptions().then(options => {
  console.log(options)
})

// Get current AVAudioSession mode
AudioSession.currentMode().then(mode => {
  console.log(mode)
})

```

## API

### Modules
#### AudioSession
| Method Name | Params | Returns | Notes |
|---|---|---|---|
|setActive|`Bool`|`Promise`|Set the current AVAudioSession as active [(Reference)](https://developer.apple.com/documentation/avfoundation/avaudiosession/1616627-setactive?language=objc).|
|setCategory|`AudioCategories`, `AudioOptions` (nullable)|`Promise`|Set the current AVAudioSession category [(Reference)](https://developer.apple.com/documentation/avfoundation/avaudiosession/1616442-setcategory?language=objc).|
|setMode|`AudioModes`|`Promise`|Set the current AVAudioSession mode [(Reference)](https://developer.apple.com/documentation/avfoundation/avaudiosession/1616614-setmode?language=objc).|
|setCategoryAndMode|`AudioCategories`, `AudioModes`, `AudioOptions` (nullable)|`Promise`|Set the current AVAudioSession category and mode [(Reference)](https://developer.apple.com/documentation/avfoundation/avaudiosession/1771734-setcategory?language=objc).|
|currentCategory|-|`Promise`|Get the current AVAudioSession category [(Reference)](https://developer.apple.com/documentation/avfoundation/avaudiosession/1616615-category?language=objc).|
|currentOptions|-|`Promise`|Get the current AVAudioSession options [(Reference)](https://developer.apple.com/documentation/avfoundation/avaudiosession/1616503-categoryoptions?language=objc).|
|currentMode|-|`Promise`|Get the current AVAudioSession mode [(Reference)](https://developer.apple.com/documentation/avfoundation/avaudiosession/1616508-mode?language=objc).|

### Objects
#### AudioCategories
The `AudioCategories` param to all methods. Corresponds to `AVAudioSessionCategory` in iOS. Read more: [Audio Session Categories (developer.apple.com)](https://developer.apple.com/documentation/avfoundation/avaudiosession/audio_session_categories?language=objc)

| Key | Value |
|---|---|
|`Ambient`|`AVAudioSessionCategoryAmbient`|
|`SoloAmbient`|`AVAudioSessionCategorySoloAmbient`|
|`Playback`|`AVAudioSessionCategoryPlayback`|
|`Record`|`AVAudioSessionCategoryRecord`|
|`PlayAndRecord`|`AVAudioSessionCategoryPlayAndRecord`|
|`MultiRoute`|`AVAudioSessionCategoryMultiRoute`|

#### AudioOptions
The `AudioOptions` param to all methods. Corresponds to `AVAudioSessionCategoryOptions` in iOS. Read more: [AVAudioSessionCategoryOptions (developer.apple.com)](https://developer.apple.com/documentation/avfoundation/avaudiosessioncategoryoptions?language=objc)

| Key | Value |
|---|---|
|`MixWithOthers`|`AVAudioSessionCategoryOptionMixWithOthers`|
|`DuckOthers`|`AVAudioSessionCategoryOptionDuckOthers`|
|`InterruptSpokenAudioAndMixWithOthers`|`AVAudioSessionCategoryOptionInterruptSpokenAudioAndMixWithOthers`|
|`AllowBluetooth`|`AVAudioSessionCategoryOptionAllowBluetooth`|
|`AllowBluetoothA2DP`|`AVAudioSessionCategoryOptionAllowBluetoothA2DP`|
|`AllowAirPlay`|`AVAudioSessionCategoryOptionAllowAirPlay`|
|`DefaultToSpeaker`|`AVAudioSessionCategoryOptionDefaultToSpeaker`|

#### AudioModes
The `AudioModes` param to all methods. Corresponds to `AVAudioSessionModes` in iOS. Read more: [Audio Session Modes (developer.apple.com)](https://developer.apple.com/documentation/avfoundation/avaudiosession/audio_session_modes?language=objc)

| Key | Value |
|---|---|
|`Default`|`AVAudioSessionModeDefault`|
|`VoiceChat`|`AVAudioSessionModeVoiceChat`|
|`VideoChat`|`AVAudioSessionModeVideoChat`|
|`GameChat`|`AVAudioSessionModeGameChat`|
|`VideoRecording`|`AVAudioSessionModeVideoRecording`|
|`Measurement`|`AVAudioSessionModeMeasurement`|
|`MoviePlayback`|`AVAudioSessionModeMoviePlayback`|
|`SpokenAudio`|`AVAudioSessionModeSpokenAudio`|

## Contributing

If you find a bug or would like to request a new feature, just [open an issue](https://github.com/BonnierNews/react-native-audio-session/issues/new). You are also welcome to submit pull requests and contribute to the project.

## License

#### The MIT License (MIT)

Copyright (c) 2018 Johan Kasperi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
