const pattern = /(^0(2|8|9){1}[0-9]{2})|(^[1-9]{1}[0-9]{3})$/

module.exports = postcode => pattern.test(postcode)