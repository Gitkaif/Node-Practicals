try {
    throw new Error('something went wrong')
} catch (error) {
    // console.log(error)
    console.log('Message:',error.message)
}