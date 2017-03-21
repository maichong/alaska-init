import Register from 'alaska-user/sleds/Register';

export default async function () {
  await Register.run({
    username: 'alaska',
    password: '123456',
    roles: ['root']
  });
}
