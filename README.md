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
import AudioSession from 'react-native-audio-session'

// Set AVAudioSession active
AudioSession.setActive(true)
.then(() => { console.log('Success!') })
.catch(error => { console.log('Error!') })

// Set AVAudioSession category
AudioSession.setCategory('Playback')
.then(() => { console.log('Success!') })
.catch(error => { console.log('Error!') })

// Set AVAudioSession category and options
AudioSession.setCategory('Playback', 'MixWithOthers')
.then(() => { console.log('Success!') })
.catch(error => { console.log('Error!') })

// Set AVAudioSession mode
AudioSession.setMode('VoiceChat')
.then(() => { console.log('Success!') })
.catch(error => { console.log('Error!') })

// Set AVAudioSession category, mode and options
AudioSession.setCategoryAndMode('Playback', 'VoiceChat', 'MixWithOthers')
.then(() => { console.log('Success!') })
.catch(error => { console.log('Error!') })

// Get current AVAudioSession category
AudioSession.currentCategory().then(category => {
  console.log(category)
})

// Get current AVAudioSession options
AudioSession.currentCategoryOptions().then(options => {
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
|setActive|`Bool`|`Promise<void>`|Set the current AVAudioSession as active [(Reference)](https://developer.apple.com/documentation/avfoundation/avaudiosession/1616627-setactive?language=objc).|
|setCategory|`AudioCategory`, `AudioCategoryOptions` (nullable)|`Promise<void>`|Set the current AVAudioSession category [(Reference)](https://developer.apple.com/documentation/avfoundation/avaudiosession/1616442-setcategory?language=objc).|
|setMode|`AudioMode`|`Promise<void>`|Set the current AVAudioSession mode [(Reference)](https://developer.apple.com/documentation/avfoundation/avaudiosession/1616614-setmode?language=objc).|
|setCategoryAndMode|`AudioCategory`, `AudioMode`, `AudioCategoryOptions` (nullable)|`Promise<void>`|Set the current AVAudioSession category and mode [(Reference)](https://developer.apple.com/documentation/avfoundation/avaudiosession/1771734-setcategory?language=objc).|
|currentCategory|-|`Promise<AudioCategory>`|Get the current AVAudioSession category [(Reference)](https://developer.apple.com/documentation/avfoundation/avaudiosession/1616615-category?language=objc).|
|currentOptions|-|`Promise<AudioCategoryOptions>`|Get the current AVAudioSession options [(Reference)](https://developer.apple.com/documentation/avfoundation/avaudiosession/1616503-categoryoptions?language=objc).|
|currentMode|-|`Promise<AudioMode>`|Get the current AVAudioSession mode [(Reference)](https://developer.apple.com/documentation/avfoundation/avaudiosession/1616508-mode?language=objc).|

### Params
#### AudioCategory
The `AudioCategory` param to all methods. Corresponds to `AVAudioSessionCategory` in iOS. Read more: [Audio Session Category (developer.apple.com)](https://developer.apple.com/documentation/avfoundation/avaudiosessioncategory?language=objc)

| Param | AVAudioSessionCategory |
|---|---|
|`Ambient`|`AVAudioSessionCategoryAmbient`|
|`SoloAmbient`|`AVAudioSessionCategorySoloAmbient`|
|`Playback`|`AVAudioSessionCategoryPlayback`|
|`Record`|`AVAudioSessionCategoryRecord`|
|`PlayAndRecord`|`AVAudioSessionCategoryPlayAndRecord`|
|`MultiRoute`|`AVAudioSessionCategoryMultiRoute`|

#### AudioCategoryOptions
The `AudioCategoryOptions` param to all methods. Corresponds to `AVAudioSessionCategoryOptions` in iOS. Read more: [AVAudioSessionCategoryOptions (developer.apple.com)](https://developer.apple.com/documentation/avfoundation/avaudiosessioncategoryoptions?language=objc)

| Param | AVAudioSessionCategoryOptions |
|---|---|
|`MixWithOthers`|`AVAudioSessionCategoryOptionMixWithOthers`|
|`DuckOthers`|`AVAudioSessionCategoryOptionDuckOthers`|
|`InterruptSpokenAudioAndMixWithOthers`|`AVAudioSessionCategoryOptionInterruptSpokenAudioAndMixWithOthers`|
|`AllowBluetooth`|`AVAudioSessionCategoryOptionAllowBluetooth`|
|`AllowBluetoothA2DP`|`AVAudioSessionCategoryOptionAllowBluetoothA2DP`|
|`AllowAirPlay`|`AVAudioSessionCategoryOptionAllowAirPlay`|
|`DefaultToSpeaker`|`AVAudioSessionCategoryOptionDefaultToSpeaker`|

#### AudioMode
The `AudioMode` param to all methods. Corresponds to `AVAudioSessionModes` in iOS. Read more: [Audio Session Modes (developer.apple.com)](https://developer.apple.com/documentation/avfoundation/avaudiosession/audio_session_modes?language=objc)

| Param | AVAudioSessionModes |
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
