import { HashMap } from "./hashMap.js";

let map = new HashMap();

map.set('apple', 'red')
map.set('banana', 'yellow')
map.set('carrot', 'orange')
map.set('dog', 'brown')
map.set('elephant', 'gray')
map.set('frog', 'green')
map.set('grape', 'purple')
map.set('hat', 'black')
map.set('ice cream', 'white')
map.set('jacket', 'blue')
map.set('kite', 'pink')
map.set('lion', 'golden')


console.log( map.length() );
console.log( map.size() );

map.set('moon', 'silver')
map.set('apple', 'green')

console.log( '-----' );
console.log( map.get( 'apple' ) );
console.log( map.get( 'cheese' ) );

console.log( map.has( 'kite' ) );
console.log( map.has( 'shark' ) );

console.log( map.remove( 'frog' ) );
console.log( map.remove( 'shoe' ) );

console.log( map.keys() );
console.log( map.values() );

map.clear();
console.log( '-----' );

console.log( map.keys() );
console.log( map.values() );

// console.log( map.entries() );
// let entries = map.entries();

// for(let i = 0; i< entries.length; i++){
//     outconsole.log( entries[i] );
// };

const test = [
    'Acai','Ackee','Apple','Apricot','Avocado','Babaco','Banana',
    'Bilberry','Blackberry','Blackcurrant','Blood orange','Blueberry',
    'Boysenberry','Breadfruit','Cactus pear','Cantaloupe','Carambola',
    'Cherimoya','Cherry','Clementine','Coconut','Cranberry',
    'Custard apple','Date','Dragon fruit','Durian','Elderberry','Feijoa',
    'Fig','Gooseberry','Grape','Grapefruit','Guava','Honeydew',
    'Huckleberry','Jabuticaba','Jackfruit','Jambul','Jujube','Kiwano',
    'Kiwi','Kumquat','Lemon','Lime','Longan','Loquat','Lychee','Mandarin',
    'Mango','Mangosteen','Marionberry','Mulberry','Nectarine','Olive',
    'Orange','Papaya','Passion fruit','Peach','Pear','Persimmon',
    'Pineapple','Plum','Pomegranate','Pomelo','Prickly pear','Quince',
    'Rambutan','Raspberry','Redcurrant','Salak','Satsuma','Soursop',
    'Star fruit','Strawberry','Tamarillo','Tamarind','Tangelo',
    'Tangerine','Ugli fruit','Watermelon','White currant','Yuzu']

// let distribution = new Array(map.size()).fill(0)

// for( let i = 0; i < test.length; i++) {
//     let n = map.hash( test[ i ] );
//     distribution[ n ] += 1;    
// };


// console.log( distribution );