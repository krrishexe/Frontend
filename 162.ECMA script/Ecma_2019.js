//       FLAT
const arr =[23,34,45,"string"]
arr.flat();
const arr2 =[23,[25,45],[67,7,89]]
arr2.flat();
//flat() method merges two or more complicated arrays
// the inner no. could be anything ex-: 50,100.

const entries =['bob','marley' ,,,,, ,'lucy']
entries.flat()


//      FLATMAP

const arr5 = arr.flatMap(x => x + 'lamda');
console.log(arr5); 
// [23lamda,34lamda,45lamda,stringlamda]


//       TRIM FUNCTION   (TRIMSTART & TRIMDEND)


userEmail1= '      eddytheeagle@gmail.com'
userEmail2= 'johnny@gmail.   com          '
console.log(userEmail1.trimStart());
console.log(userEmail2.trimStart());

//        FORM-ENTRIES

userProfiles = [['commandertom',23],[bazooka34,34],[ashusix9,69]]
Object.fromEntries(userProfiles);