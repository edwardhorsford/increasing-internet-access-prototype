const faker = require('faker')
const dateFormat = require('dateformat')

faker.locale = 'en_GB'

function generateFakeUsers (count) {
  const requests = []

  for (var i = 0; i < count; i++) {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()

    requests.push({
      name: `${firstName} ${lastName}`,
      email: `${firstName}.${lastName}@example.com`.toLowerCase(),
      date: dateFormat(faker.date.recent(), 'd mmmm h:MMtt'),
      requests: faker.random.arrayElement([10, 23, 45, 65, 102, 9, 36, 39, 5]),
      org: faker.random.arrayElement([
        'STEP Academy',
        'Learners Secondary School',
        'Basildon Catholic School',
        'St Mary’s',
        'St John’s'
      ])
    })
  }

  return requests
}

module.exports = generateFakeUsers(5)