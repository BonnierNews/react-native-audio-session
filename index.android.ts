function noAndroid() {
  return () =>
    new Promise<never>((_, reject) => {
      reject('AudioSession is not supported on Android.')
    })
}

const create = () => {
  return {
    currentCategory: noAndroid(),
    currentOptions: noAndroid(),
    currentMode: noAndroid(),
    setActive: noAndroid(),
    setCategory: noAndroid(),
    setMode: noAndroid(),
    setCategoryAndMode: noAndroid()
  }
}

export default create()
