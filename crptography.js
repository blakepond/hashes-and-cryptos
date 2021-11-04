const cryptography = (string) => {
    const cipher = []
    const letters = string.toLowerCase()
    for (let i = 0; i < string.length; i++){
       cipher.push(letters[i])
       
       console.log(string.charCodeAt([i]))
    }
}
cryptography("nopqrstuvwxyz")

// "abcdefghijklm" = 97-109
// "nopqrstuvwxyz" = 110-122
