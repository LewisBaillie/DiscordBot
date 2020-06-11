const discord = require('discord.js');
const bot = new discord.Client();

//DISCLAIMER, this token is not active anymore.
const token = 'NzEyOTY5MzM2NzEyODU1NjE0.XsZSeg.ow58giViImw_gMntoav4XnTivrE';

const PREFIX = '--';

//commands
const mul = (...operands) => operands.reduce((a, c) => a * c, 1);
const sub = (...operands) => operands.reduce((a, c) => a - c);
const sum = (...operands) => operands.reduce((a, c) => a + c, 0);
const div = (...operands) => operands.reduce((a, c) => a / c, 0);

//lexical analyser
const lex = str => str.split(' ').map(s => s.trim()).filter(s => s.length);

//Syntax Analyser nodes
const Op = Symbol('op');
const Num = Symbol('num');

//Parser function
const parse = tokens => {
    let c = 0;

    const peek = () => tokens[c];
    const consume = () => tokens[c++];

    const parseNum = () => ({ val: parseInt(consume()), type: Num });

    const parseOp = () => {
        const node = { val: consume(), type: Op, expr: [] };
        while (peek()) node.expr.push(parseExpr());
        return node;
    }

    const parseExpr = () => /\d/.test(peek()) ? parseNum() : parseOp();

    return parseExpr();
}

//Transpiler function
const transpile = ast => {
    const opMap = { sum: '+', mul: '*', sub: '-', div: '/' };
    const transpileNode = ast => ast.type === Num ? transpileNum(ast) : transpileOp(ast);
    const transpileNum = ast => ast.val;
    const transpileOp = ast => `(${ast.expr.map(transpileNode).join(' ' + opMap[ast.val] + ' ')})`;
    return transpileNode(ast);
}

var user;
var member;
var tag;
var i;
var toBan;
var lowerBan;
var toRemove;
var lowerRemove;
var counter = 0;
let bannedWords = ['~'];
var program;
var programming = false;
var RandomNum;
var isRandomGame = false;
var isGuessing = false;

var isTicTacToe = false;
var player = 1;
var ticTacToeArray = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
var ticTacToeWon = false;

bot.on('Ready to go',() =>{
    Debug.Print('This bot is online!');
});



bot.on('message', msg => {

    if (isTicTacToe) {
        if (!msg.author.bot) {
            switch (msg.content) {
                case 'a1':
                    if (ticTacToeArray[0] === '-') {
                        if (player === 1) {
                            ticTacToeArray[0] = 'X';

                        }
                        if (player === 2) {
                            ticTacToeArray[0] = 'O';
                        }
                    } else {
                        msg.reply("This square is already taken!");
                    }
                    break;
                case 'a2':
                    if (ticTacToeArray[1] === '-') {
                        if (player === 1) {
                            ticTacToeArray[1] = 'X';

                        }
                        if (player === 2) {
                            ticTacToeArray[1] = 'O';
                        }
                    } else {
                        msg.reply("This square is already taken!");
                    }
                    break;
                case 'a3':
                    if (ticTacToeArray[2] === '-') {
                        if (player === 1) {
                            ticTacToeArray[2] = 'X';

                        }
                        if (player === 2) {
                            ticTacToeArray[2] = 'O';
                        }
                    } else {
                        msg.reply("This square is already taken!");
                    }
                    break;
                case 'b1':
                    if (ticTacToeArray[3] === '-') {
                        if (player === 1) {
                            ticTacToeArray[3] = 'X';

                        }
                        if (player === 2) {
                            ticTacToeArray[3] = 'O';
                        }
                    } else {
                        msg.reply("This square is already taken!");
                    }
                    break;
                case 'b2':
                    if (ticTacToeArray[4] === '-') {
                        if (player === 1) {
                            ticTacToeArray[4] = 'X';

                        }
                        if (player === 2) {
                            ticTacToeArray[4] = 'O';
                        }
                    } else {
                        msg.reply("This square is already taken!");
                    }
                    break;
                case 'b3':
                    if (ticTacToeArray[5] === '-') {
                        if (player === 1) {
                            ticTacToeArray[5] = 'X';

                        }
                        if (player === 2) {
                            ticTacToeArray[5] = 'O';
                        }
                    } else {
                        msg.reply("This square is already taken!");
                    }
                    break;
                case 'c1':
                    if (ticTacToeArray[6] === '-') {
                        if (player === 1) {
                            ticTacToeArray[6] = 'X';

                        }
                        if (player === 2) {
                            ticTacToeArray[6] = 'O';
                        }
                    } else {
                        msg.reply("This square is already taken!");
                    }
                    break;
                case 'c2':
                    if (ticTacToeArray[7] === '-') {
                        if (player === 1) {
                            ticTacToeArray[7] = 'X';

                        }
                        if (player === 2) {
                            ticTacToeArray[7] = 'O';
                        }
                    } else {
                        msg.reply("This square is already taken!");
                    }
                    break;
                case 'c3':
                    if (ticTacToeArray[8] === '-') {
                        if (player === 1) {
                            ticTacToeArray[8] = 'X';

                        }
                        if (player === 2) {
                            ticTacToeArray[8] = 'O';
                        }
                    } else {
                        msg.reply("This square is already taken!");
                    }
                    break;
            }

            msg.reply(`${ticTacToeArray[0]}   ${ticTacToeArray[1]}   ${ticTacToeArray[2]}`);
            msg.reply(`${ticTacToeArray[3]}   ${ticTacToeArray[4]}   ${ticTacToeArray[5]}`);
            msg.reply(`${ticTacToeArray[6]}   ${ticTacToeArray[7]}   ${ticTacToeArray[8]}`);


            if (ticTacToeArray[0] === 'X') {
                if ((ticTacToeArray[0] === ticTacToeArray[1] && ticTacToeArray[0] === ticTacToeArray[2]) || (ticTacToeArray[0] === ticTacToeArray[4] && ticTacToeArray[0] === ticTacToeArray[8]) || (ticTacToeArray[0] === ticTacToeArray[3] && ticTacToeArray[0] === ticTacToeArray[6])) {
                    msg.reply("Player 1 wins!");
                    isTicTacToe = false;
                    ticTacToeWon = true;
                }
            }
            if (ticTacToeArray[1] === 'X') {
                if (ticTacToeArray[1] === ticTacToeArray[4] && ticTacToeArray[1] === ticTacToeArray[7]) {
                    msg.reply("Player 1 wins!");
                    isTicTacToe = false;
                    ticTacToeWon = true;
                }
            }
            if (ticTacToeArray[2] === 'X') {
                if ((ticTacToeArray[2] === ticTacToeArray[5] && ticTacToeArray[2] === ticTacToeArray[8]) || (ticTacToeArray[2] === ticTacToeArray[4] && ticTacToeArray[2] === ticTacToeArray[6])) {
                    msg.reply("Player 1 wins!");
                    isTicTacToe = false;
                    ticTacToeWon = true;
                }
            }
            if (ticTacToeArray[3] === 'X') {
                if (ticTacToeArray[3] === ticTacToeArray[4] && ticTacToeArray[3] === ticTacToeArray[5]) {
                    msg.reply("Player 1 wins!");
                    isTicTacToe = false;
                    ticTacToeWon = true;
                }
            }
            if (ticTacToeArray[6] === 'X') {
                if (ticTacToeArray[6] === ticTacToeArray[7] && ticTacToeArray[6] === ticTacToeArray[8]) {
                    msg.reply("Player 1 wins!");
                    isTicTacToe = false;
                    ticTacToeWon = true;
                }
            }



            if (ticTacToeArray[0] === 'O') {
                if ((ticTacToeArray[0] === ticTacToeArray[1] && ticTacToeArray[0] === ticTacToeArray[2]) || (ticTacToeArray[0] === ticTacToeArray[4] && ticTacToeArray[0] === ticTacToeArray[8]) || (ticTacToeArray[0] === ticTacToeArray[3] && ticTacToeArray[0] === ticTacToeArray[6])) {
                    msg.reply("Player 2 wins!");
                    isTicTacToe = false;
                    ticTacToeWon = true;
                }
            }
            if (ticTacToeArray[1] === 'O') {
                if (ticTacToeArray[1] === ticTacToeArray[4] && ticTacToeArray[1] === ticTacToeArray[7]) {
                    msg.reply("Player 2 wins!");
                    isTicTacToe = false;
                    ticTacToeWon = true;
                }
            }
            if (ticTacToeArray[2] === 'O') {
                if ((ticTacToeArray[2] === ticTacToeArray[5] && ticTacToeArray[2] === ticTacToeArray[8]) || (ticTacToeArray[2] === ticTacToeArray[4] && ticTacToeArray[2] === ticTacToeArray[6])) {
                    msg.reply("Player 2 wins!");
                    isTicTacToe = false;
                    ticTacToeWon = true;
                }
            }
            if (ticTacToeArray[3] === 'O') {
                if (ticTacToeArray[3] === ticTacToeArray[4] && ticTacToeArray[3] === ticTacToeArray[5]) {
                    msg.reply("Player 2 wins!");
                    isTicTacToe = false;
                    ticTacToeWon = true;
                }
            }
            if (ticTacToeArray[6] === 'O') {
                if (ticTacToeArray[6] === ticTacToeArray[7] && ticTacToeArray[6] === ticTacToeArray[8]) {
                    msg.reply("Player 2 wins!");
                    isTicTacToe = false;
                    ticTacToeWon = true;
                }
            }




            if (ticTacToeWon === false) {
                if (player === 1) {
                    player = 2;
                    msg.reply("Player 2, make your move");
                } else {
                    player = 1;
                    msg.reply("Player 1, make your move");
                }
            }

            if (ticTacToeWon === true) {
                ticTacToeArray = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
            }
        }
    }

    if (isGuessing) {
        if (!msg.author.bot) {
            if (parseInt(msg.content) === randomNum) {
                msg.reply("YOU WON!!!!");
            } else {
                msg.reply("Wrong number, better luck next time!");
            }
            isGuessing = false;
        }
    }

    if (isRandomGame) {
        if (!msg.author.bot) {
            let arg = msg.content.split(" ");
            min = arg[0];
            max = arg[1];
            randomNum = chooseRandom(min, max);
            msg.reply('Guess a number between the two limits!');
            isRandomGame = false;
            isGuessing = true;
        }
    }

    if (programming) {
        if (!msg.author.bot) {
            if (msg.content === '1') {
                isRandomGame = true;
                programming = false;
                msg.reply('please input the number limits, with a space in between');
            }
            if (msg.content === '2') {
                isTicTacToe = true;
                programming = false;
                msg.reply(`${ticTacToeArray[0]}   ${ticTacToeArray[1]}   ${ticTacToeArray[2]}`);
                msg.reply(`${ticTacToeArray[3]}   ${ticTacToeArray[4]}   ${ticTacToeArray[5]}`);
                msg.reply(`${ticTacToeArray[6]}   ${ticTacToeArray[7]}   ${ticTacToeArray[8]}`);
                msg.reply("Player 1, please input the grid square you would like to change. e.g a1");
            }
        }
    }


    if (!msg.content.startsWith(PREFIX)) {
        if (!msg.author.bot) {
            for (i = 0; i <= bannedWords.length; i++) {
                if (msg.content.toLowerCase().includes(bannedWords[i])) {
                    user = msg.author;
                    tag = user.tag;
                    member = msg.guild.member(user);
                    kick(msg);
                    msg.delete();
                }
            }
        }
        
    }

    let args = msg.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'kick':
            user = msg.mentions.users.first();
            tag = user.tag;
            if (user) {
                member = msg.guild.member(user);
                kick(msg);
            }
            user = '';
            break;
        case 'ban':
            user = msg.mentions.users.first();
            tag = user.tag;
            if (user) {
                member = msg.guild.member(user);
                ban(msg);
            }
            user = '';
            break;
        case 'addbannedword':
            toBan = args[1];
            lowerBan = toBan.toLowerCase();
            addBannedWord(lowerBan);
            break;
        case 'printbannedwords':
            msg.reply(bannedWords);
            break;
        case 'removebannedword':
            toRemove = args[1];
            lowerRemove = toRemove.toLowerCase();
            removeBannedWord(lowerRemove);
            break;

        case 'programme':
            program = msg.content.substr("programme".length);
            programme(program,game ,msg);
            break;

        case 'game':
            Game(msg);

    }
})

function kick(msg){
    if (member) {
        member.kick({ ression: 'You Have Been Kicked!' }).then(() => {
            msg.reply(`User ${tag} has been kicked!`);
        })
    } else {
        msg.reply('User is not in the server!');
    }
}

function ban(msg){
    if (member) {
        member.ban({ ression: 'You Have Been Banned!' }).then(() => {
            msg.reply(`User ${tag} has been banned!`);
        })
    } else {
        msg.reply('User is not in the server!');
    }
}

function addBannedWord(toBan) {
    bannedWords[counter] = toBan;
    counter = counter + 1;
    console.log(bannedWords);
}

function removeBannedWord(toBan) {
    for (i = 0; i < bannedWords.length; i++) {
        if (toRemove === bannedWords[i]) {
            bannedWords.splice(i, 1);
            break;
        }
    }
}

function Game(msg) {
    programming = true;
    msg.reply('What type of game: Random Number Guesser (1), Tic Tac Toe (2)');
}

function programme(program, game, msg) {
    let programReturn = transpile(parse(lex(program)));
    msg.reply(eval(programReturn));
}

function chooseRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

bot.login(token);