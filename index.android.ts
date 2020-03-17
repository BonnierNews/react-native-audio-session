const noAndroid = () =>
  new Promise<never>((_, reject) => {
    reject('AudioSession is not supported on Android.')
  })

const AudioSession = {
  currentCategory: noAndroid,
  currentCategoryOptions: noAndroid,
  currentMode: noAndroid,
  setActive: noAndroid,
  setCategory: noAndroid,
  setMode: noAndroid,
  setCategoryAndMode: noAndroid
}

export default AudioSession
