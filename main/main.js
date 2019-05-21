module.exports = function main(s_num) {
    let lcdData = [
        ["._.","...","._.","._.","...","._.","._.","._.","._.","._."],
        ["|.|","..|","._|","._|","|_|","|_.","|_.","..|","|_|","|_|"],
        ["|_|","..|","|_.","._|","..|","._|","|_|","..|","|_|","..|"]
    ]

    let top = "";
    let middle = "";
    let bottom = "";

    for(let i = 0; i<s_num.length; i++){
        top += lcdData[0][parseInt(s_num[i])] + " ";
        middle += lcdData[1][parseInt(s_num[i])] + " ";
        bottom += lcdData[2][parseInt(s_num[i])] + " ";
    }

    let result  = top.trim() + "\n" + middle.trim()+ "\n" + bottom.trim() + "\n";

    return result;
};