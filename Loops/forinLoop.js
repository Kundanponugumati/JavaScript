let alien ={
    name:"kundan",
    age:20,
    laptop: {
        brand:'apple',
        cpu:"m1 chip",
        ram:"8gb",
        cost:23000
    }
}

// to print use forin loop

    for(let key in alien)
    {
    console.log(key,alien[key])
    }

    for(let key in alien.laptop)
    {
        console.log(key + ": " +alien.laptop[key])
    }