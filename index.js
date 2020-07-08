const { models: { House, User } } = require('./src/db/models');

//  Note: First create and migrate database with sequelize-cli before run index.js.
//  Read more at https://sequelize.org/master/manual/migrations.html.

async function test() {
  const Will = await User.create({ name: 'Will' });
  const House1 = await House.create({ location: 'Rio de Janeiro' });
  const House2 = await House.create({ location: 'São Paulo' });

  try {
    await Will.addHouses([House1, House2]);

    //  Testing 'Eager Loading'
    const info = await User.findByPk(Will.userID, { include: ['Houses'] });

    console.log('Dono:', info.name);
    info.Houses.forEach((house, i) => console.log('House location ' + (i+1) + ':', house.location));
  } catch (e) {
    console.log(e);
  }
}

test();
