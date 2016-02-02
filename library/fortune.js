var fortunes = [
    "You will be very rich.",
    "You will be very poor.",
    "You will become very powerful.",
    "You will become weak and powerless."
]

function getFortune () {
    return fortunes[ Math.floor(Math.random() * fortunes.length)]
}

module.exports = { getFortune: getFortune }