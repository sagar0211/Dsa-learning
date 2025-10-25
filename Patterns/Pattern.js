let n = 5
for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j <= i; j++) {
        row = row + "*"
    }
    console.log(row)
}

console.log("------------")


for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j <= i; j++) {
        row = row + (i + 1)
    }
    console.log(row)
}

console.log("------------")


for (let i = 1; i <= n; i++) {
    let row = ""
    for (let j = 1; j <= i; j++) {
        row = row + (i)
    }
    console.log(row)
}


console.log("------------")


for (let i = 0; i <= n; i++) {
    let row = ""
    for (let j = 0; j < (n - i); j++) {
        row = row + (j + 1)
    }
    console.log(row)
}


console.log("------------")

for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j < (n - (i + 1)); j++) {
        //Adding empty string as .
        row = row + "."
    }
    for (let k = 0; k <= i; k++) {
        //Adding stars in row
        row = row + "*"
    }

    console.log(row)
}

console.log("------------")

for (let i = 0; i < n; i++) {
    let row = "";
    let toggle = 1;
    for (let j = 0; j <= i; j++) {
        row = row + toggle;
        if (toggle === 1) {
            toggle = 0
        } else {
            toggle = 1
        }
    }
    console.log(row)
}

console.log("------------")

let toggle = 1;
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row = row + toggle;
        if (toggle === 1) {
            toggle = 0
        } else {
            toggle = 1
        }
    }
    console.log(row)
}