//-- CLASSIC
// import { MyDatabaseClassic } from './db/my-database-classic';
// import { myDatabaseClassic as myDatabaseClassicA } from './module_a';

// const myDatabaseClassic = MyDatabaseClassic.instance;

// myDatabaseClassic.add({ name: 'Carlos', age: 37 });
// myDatabaseClassic.add({ name: 'Lucas', age: 31 });
// myDatabaseClassic.add({ name: 'Jerônimo', age: 6 });

// myDatabaseClassic.show();

// console.log(myDatabaseClassic === myDatabaseClassicA);

//-- MODULE
// import { MyDatabaseModule } from './db/my-database-module';
// import { MyDatabaseModuleA } from './module_a';

// MyDatabaseModuleA.add({ name: 'Carlos', age: 37 });
// MyDatabaseModuleA.add({ name: 'Lucas', age: 31 });
// MyDatabaseModuleA.add({ name: 'Jerônimo', age: 6 });

// MyDatabaseModuleA.show();

// console.log(MyDatabaseModule === MyDatabaseModuleA);

//-- FUNCTION
import { MyDatabaseFunction } from './db/my-database-function';
import { MyDatabaseFunctionA } from './module_a';

MyDatabaseFunctionA.add({ name: 'Carlos', age: 37 });
MyDatabaseFunctionA.add({ name: 'Lucas', age: 31 });
MyDatabaseFunctionA.add({ name: 'Jerônimo', age: 6 });

MyDatabaseFunctionA.show();

console.log(MyDatabaseFunction === MyDatabaseFunctionA);
