/*
// Classe Object racine intégrant un proxy pour filtrer tous les appels à une méthode d'une classe fille
// exemple d'usage
class C1 extends Object {
 sayHello() {console.log('hello')}
}
const c1 = new C1().proxy;
c1.sayHello(); // => console "hello"
c1.abc(); // => console "Tentative d'appel d'une fonction non existante : abc"

class Object {
  get proxy() {
    const handler = {
      get: (target, propKey) => {
        const origMethod = target[propKey];
        if (origMethod === undefined) {
          return function() {
            console.log(`Tentative d'appel d'une fonction non existante : ${propKey}`);
          }
        }
        return function(...args) {
          return origMethod.apply(target, args);
        };
      }
    };

    return new Proxy(this, handler);
  }
}

// Ajout d'un proxy sur une instance de classe existante
function addProxyFunctionalityToObject(instance) {
    const handler = {
        get: (target, propKey) => {
            if (propKey in target) {
                return typeof target[propKey] === 'function' ? 
                        target[propKey].bind(target) : 
                        target[propKey];
            } else {
                return function() {
                    console.log(`Tentative d'appel d'une fonction non existante : ${propKey}`);
                }
            }
        }
    };
    // Ajouter le proxy comme propriété de l'instance
    instance.proxy = new Proxy(instance, handler);
}

// exemple d'usage
class MyClass {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}

let instance = new MyClass("John");
addProxyFunctionalityToObject(instance);

// Utiliser directement l'instance
instance.greet(); 

// Utiliser le proxy à travers l'instance
instance.proxy.greet();  
instance.proxy.nonExistentMethod();  // Cela affichera "Tentative d'appel d'une fonction non existante : nonExistentMethod".
*/