const fs = require('fs');
const xml2js = require('xml2js');

const parser = new xml2js.Parser();

async function getXPath(xpath) {
    let splitPath = xpath.split('/');
    splitPath.shift();
    const data = fs.readFileSync('./files/3142_K101_1.xml')
    const result = await parser.parseStringPromise(data)
    let currentValue = result[splitPath[0]];
    for(let i = 1; i < splitPath.length; i++)
    {
        currentValue = currentValue[splitPath[i]];
    }
    return currentValue;
}


async function main()
{
    const result = await getXPath("/Invoice/cbc:DueDate");
    console.log(result[0]);
    const result2 = await getXPath("/Invoice/cbc:ID");
    console.log(result2[0]);
}

main();


