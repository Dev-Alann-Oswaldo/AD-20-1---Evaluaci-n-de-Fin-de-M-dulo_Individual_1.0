const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });
  test('add uster to userController',()=> {
    let user = new User(7777,"Alann", "Alann@generation.org");
    userController.add(user);
    expect(userController.getUsers()).toContain(user);
  })

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });
  test('remove user to userController',()=> {
    let user = new User(5555,"chris", "chris@generation.org");
    userController.add(user);
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  })
test('findByEmail()',()=>{{}
  const user = new User(9999, "Maria", "maria@generation.org");
  userController.add(user);
  expect(userController.findByEmail('maria@generation.org')).toEqual(user);
});
test('findByEmail()',()=>{{}
  const user = new User(8888, "juan", "juan@generation.org");
  userController.add(user);
  expect(userController.findByEmail('juan@generation.org')).toEqual(user);
});
test('findById()',()=>{{}
  const user = new User(6666, "juan", "juan@generation.org");
  userController.add(user);
  expect(userController.findById(6666)).toEqual(user);
});

test('findById()',()=>{{}
  const user = new User(4444, "pedro", "pedro@generation.org");
  userController.add(user);
  expect(userController.findById(4444)).toEqual(user);
});