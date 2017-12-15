const wait = (time, data) => new Promise(resolve => setTimeout(() => resolve(data), time))

export default wait