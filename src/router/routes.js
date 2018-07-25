export default function getRoutes({
  UserList, NamedWrapper, User, Sidebar
})
{
  return [{
    path: '/users',
    name: 'userList',
    component: UserList
  }, {
    path: '/named',
    name: 'named',
    component: NamedWrapper,
    children: [{
      path: 'user/:userId',
      name: 'named_id',
      components: { user_details: User, sidebar: Sidebar },
      props: { user_details: true, sidebar: false }
    }]
  },
    {
      path: '/user/:userId',
      name: 'user',
      component: User,
      props: true
    }];
}

