const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
export function clacWinner(cells) {
    for (let i = 0; i < winningLines.length; i++) {
        const [a, b, c] = winningLines[i];
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return {winner:cells[a], line:winningLines[i]};
        }
    }
    return null;
}

export function checkMove(cells, player) {
    const duplicated = (arr => {
        let count = 0;
        arr.forEach(i =>{
            if(cells[i] === player) count++
        })
        return count;
    })
    const sortedLines = winningLines.sort((a, b) => {
        const account = duplicated(b) - duplicated(a);
        return account;
    })

    for(let i = 0; i< sortedLines.length; i++) {
        let val = sortedLines[i].find(ele => {
            if(cells[ele] === '') return ele + '';
            else return null
        })
        if(!val) continue;
        else return +val;
    }
    return null;
}