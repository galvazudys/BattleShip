 const data =  {
    shipData: [
        [null, null, null, null, null, null, null, null, null, null],
        ['S', null, null, null, null, null, null, null, 'B', null],
        ['S', null, 'C', 'C', 'C', 'C', 'C', null, 'B', null],
        ['S', null, null, null, null, null, null, null, 'B', null],
        [null, null, 'P', null, null, null, null, null, null, null],
        [null, null, 'P', null, null, null, null, null, null, null],
        ['D', null, null, null, null, null, null, null, null, null],
        ['D', null, null, null, null, null, null, null, null, null],
        ['D', null, null, null, null, null, null, null, null, null],
        ['D', null, null, null, null, null, null, null, null, null]
    ],

    gameState: [
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null]
    ],
    emptyGameState: [
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null]
    ],
    schips: {
        C: {
            name: "Carrier",
            hits: 5
        },
        B: {
            name: "Battleship",
            hits: 3
        },
        S: {
            name: "Submarine",
            hits: 3
        },
        D: {
            name: "Destroyer",
            hits: 4
        },
        P: {
            name: "Patrol Boat",
            hits: 2
        }
    },
    message:{
        text:"make move!"
    }
    
}

export default data;