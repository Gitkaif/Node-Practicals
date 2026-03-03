// try {
//     throw new Error('Sync error')
// } catch (error) {
//     console.log('Caught sync:', error.message);
    
// }



//--------------------WITHOUT AWAIT WILL NOT CATCH THE ERROR-----------------------


// try {
//     Promise.reject(new Error('async error'))
// } catch (error) {
//     console.log('uncaught')
// }



//--------------------WITH AWAIT WILL CATCH THE ERROR-----------------------

async function test(){
    try {
        await Promise.reject(new Error('async error with await'))
    } catch (error) {
        console.log('Caught async:', error.message);
    }
}

test()