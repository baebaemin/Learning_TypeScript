function sing(song: string, singer = "Beirut") {
    console.log(`Singing: ${song} with ${singer}`);
}

sing("Goshen"); // OK
sing("feel the same", undefined) // OK
// sing("Carmen", 100) // Error - not assignable