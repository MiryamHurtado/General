const palindromo = (string) => {

  if(typeof string === 'undefined') return

  return string
  .split('')//convertirlo en array
  .reverse('')//darle vuelta
  .join('')//unirlo como string
  }

  //obtener media
  const promedio = array => {
    let sum = 0
    array.forEach(num => {sum += num})
    return sum / array.length
  }

  module.exports = {
    palindromo,
    promedio
  }