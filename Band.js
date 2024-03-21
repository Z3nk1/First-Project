const Band = {
    member: 5,
    name: "A",
    popularSong:"KK"
};

const bandDetail = () => {
    return Band.name + Band.member + Band.popularSong ;
};

console.log(bandDetail());