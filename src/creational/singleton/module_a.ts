//-- CLASSIC
// import { MyDatabaseClassic } from './db/my-database-classic';

// const myDatabaseClassic = MyDatabaseClassic.instance;

// myDatabaseClassic.add({ name: 'Paulo', age: 37 });
// myDatabaseClassic.add({ name: 'Bruna', age: 31 });
// myDatabaseClassic.add({ name: 'Lola', age: 6 });

// export { myDatabaseClassic };

//-- MODULE
// import { MyDatabaseModule } from './db/my-database-module';

// const MyDatabaseModuleA = MyDatabaseModule;

// MyDatabaseModuleA.add({ name: 'Paulo', age: 37 });
// MyDatabaseModuleA.add({ name: 'Bruna', age: 31 });
// MyDatabaseModuleA.add({ name: 'Lola', age: 6 });

// export { MyDatabaseModuleA };

//-- FUNCTION

import { MyDatabaseFunction } from './db/my-database-function';

const MyDatabaseFunctionA = MyDatabaseFunction;

MyDatabaseFunctionA.add({ name: 'Paulo', age: 37 });
MyDatabaseFunctionA.add({ name: 'Bruna', age: 31 });
MyDatabaseFunctionA.add({ name: 'Lola', age: 6 });

export { MyDatabaseFunctionA };
