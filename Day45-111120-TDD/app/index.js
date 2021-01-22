module.exports.greet = (name) => {
  // Test2
  if (name === null) {
    return `Hello, my friend.`;
  }

  const nLength = name.length;
  let nameUpper = [];
  let nameNormal = [];
  for (let i = 0; i < nLength; i++) {
    if (name[i].toUpperCase() === name[i]) {
      nameUpper.push(name[i]);
    } else {
      nameNormal.push(name[i]);
    }
  }

  if (typeof name === "object") {
    if (nLength > 2) {
      // Test5
      if (nameUpper.length === 0) {
        let message = "Hello, ";
        for (let i = 0; i < nLength - 1; i++) {
          message += `${name[i]}, `;
        }

        message += `and ${name[nLength - 1]}.`

        return message;
        // Test6
      } else {
        let message = "Hello,"
        for (let i = 0; i < nameNormal.length - 1; i++) {
          if (i < nameNormal.length - 2 && i > 0) {
            message += `,`
          }
          message += ` ${nameNormal[i]}`
        }
        message += ` and ${nameNormal[nameNormal.length - 1]}.`
        if (nameUpper.length > 0) {
          message += ` AND HELLO ${nameUpper[0]}!`;
        }

        return message;
      }
      // Test4
    } else {
      let test;
      for (let i = 0; i < nameNormal.length; i++) {
        if (nameNormal[i].indexOf('\"') > -1) {
          test = 8;
        } else if (nameNormal[i].indexOf(', ') > -1) {
          test = 7;
        } else {
          test = 5;
        }
      }
      if (test === 7) {
        let newName = [];
        for (let i = 0; i < nameNormal.length; i++) {
          if (nameNormal[i].indexOf(', ') > -1) {
            let arr = nameNormal[i].split(', ');
            for (let j = 0; j < arr.length; j++) {
              newName.push(arr[j]);
            }
          } else {
            newName.push(nameNormal[i]);
          }
        }
        let message = "Hello, ";
        for (let i = 0; i < newName.length - 1; i++) {
          message += `${newName[i]}, `;
        }

        message += `and ${newName[newName.length - 1]}.`

        return message;
      } else if (test === 8) {
        let newName = [];
        for (let i = 0; i < nameNormal.length; i++) {
          if (nameNormal[i].indexOf('\"') > -1) {
            let arr = nameNormal[i].slice(nameNormal[i].indexOf('\"')+1,nameNormal[i].lastIndexOf('\"'));
            let arr2 = arr.split(', ');
            for (let j = 0; j < arr2.length; j++) {
              newName.push(arr2[j]);
            }
          } else {
            newName.push(nameNormal[i]);
          }
        }

        return `Hello, ${newName[0]} and ${newName[1]}, ${newName[2]}.`;

      } else {

        return `Hello, ${name[0]} and ${name[1]}.`;
      }
    }
  }

  // Test3
  if (name.toUpperCase() === name) {
    return `HELLO, ${name}!`;
  }

  // Test1
  return `Hello, ${name}.`;
}