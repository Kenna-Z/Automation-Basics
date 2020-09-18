var auto = {}
module.exports = {
    beforeEach: browser => {
        auto = browser.page.autoObject()
        auto
            .navigate()
    },
    after: browser => {
        auto
            .end()
    },
    'Evens test': browser => {
        auto
        // .click('@even')
        .setValue('@even', '2')
        .click('@evenSplit')
        .expect.element('@evenResults').text.to.equal('Evens: [2]')
    },
    'Odds test': browser => {
        auto
        // .click('@even')
        .clearValue('@even')
        .setValue('@even', '1')
        .click('@evenSplit')
        .expect.element('@oddResults').text.to.equal('Odds: [1]') 
    },
    'Filter Object test': browser => {
        auto
        // .click('@objectInput')
        .setValue('@objectInput', 'hairColor')
        .click('@objectFilter')
        .expect.element('@objectResults').text.to.contain('Filtered: [ { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" } ]') 
    },
    'Filter String test': browser => {
        auto
        // .click('@stringInput')
        .setValue('@stringInput', 'Blake')
        .click('@stringFilter')
        .expect.element('@stringResults').text.to.contain('Filtered Names: [ "Blake" ]')
    },
    'Palindrome true test': browser => {
        auto
        .setValue('@palinInput', 'eye')
        .click('@palinCheck')
        .expect.element('@palinResults').text.to.contain('Palindrome: true')
    },
    'Palindrome false test': browser => {
        auto
        .setValue('@palinInput', 'killer queen')
        .click('@palinCheck')
        .expect.element('@palinResults').text.to.contain('Palindrome: false')
    },
    'Sum test': browser => {
        auto
        .setValue('@sumInputOne', '2')
        .setValue('@sumInputTwo', '2')
        .click('@sumAddButton')
        .expect.element('@sumAddResults').text.to.contain('Sum: 4')
    },

}
