/**
 * https://github.com/terjanq/JS-Alpha
 * js - alpha encode
 * JS-Alpha v3.0
 * 创建一个编码器/混淆器的有趣项目，该编码器/混淆器将任何javascript代码转换为仅由字符组成的代码/[a-z().]/
 * 生成的代码应该适用于所有平台。它仅使用标准化功能。
 * 演示：https://terjanq.github.io/JS-Alpha/encoder.html
 * 笔记
 * with(escape())with(eval.bind)eval(unescape(match().concat(strike().big().link().length).concat(escape(escape.name.length).concat(escape(...call.name))).concat(escape(escape(link())).length).concat(link().blink().link().length).concat(link().link().strike().length).concat(name.link().length).concat(big().big().length).concat(link().length).concat(link().length).concat(strike().big().length).concat(fixed().big().length).join(unescape(...escape(this)))))
 * 主版本编码器.html不能在某些无法插入 with 语句的情况下使用（例如，如果关闭，则在内部）。在这种情况下，encoder_old.html应该可以工作，但会产生更大的代码。
 * 不支持 UTF8
 * 学分
 * 编码器是作为以下人员的协作创建的：
 * 作者 （@terjanq）
 * 佩佩·维拉（@cgvwzq）
 * 加雷斯·海耶斯〔@garethheyes〕
 */
const emptystr = 'match().pop()';
const dict = {
    // numbers
    '-1': 'search(big)',
    0: 'search()',
    1: 'length',
    2: 'apply.length',
    3: 'sub.name.length',
    4: 'name.length',
    5: 'apply.name.length',
    6: 'escape.name.length',
    7: 'replace.name.length',
    8: 'unescape.name.length',
    9: 'escape().length',
    10: 'sub.name.bold().length',
    11: 'name.bold().length',
    12: 'sub.name.fixed().length',
    13: 'name.fixed().length',
    14: 'sub.name.big().length',
    15: 'name.big().length',
    16: 'bold().length',
    17: 'escape.name.big().length',
    18: 'fixed().length',
    19: 'name.blink().length',
    20: 'big().length',
    21: 'name.strike().length',
    22: 'name.big().bold().length',
    23: 'bold().bold().length',
    24: 'blink().length',
    25: 'fixed().bold().length',
    26: 'strike().length',
    27: 'bold().big().length',
    28: 'name.link().length',
    29: 'fixed().big().length',
    30: 'name.big().blink().length',
    31: 'big().big().length',
    32: 'escape(blink()).length',
    33: 'link().length',
    34: 'name.fontsize().length',
    35: 'blink().big().length',
    36: 'bold().link(false).length',
    37: 'strike().big().length',
    38: 'big().big().bold().length',
    39: 'fontsize().length',
    40: 'fontcolor().length',
    41: 'strike().blink().length',
    42: 'link().fixed().length',
    43: 'strike().strike().length',
    44: 'link().big().length',
    45: 'strike().link(true).length',
    46: 'fontsize().bold().length',
    47: 'fontcolor().bold().length',
    48: 'link().blink().length',
    49: 'escape(link()).length',
    50: 'strike().link().length',
    51: 'fontcolor().big().length',
    52: 'link().link(true).length',
    53: 'link().link(false).length',
    54: 'fontsize().blink().length',
    55: 'big().big().link().length',
    56: 'strike().fontsize().length',
    57: 'link().link().length',
    58: 'link().fontsize(true).length',
    59: 'link().big().blink().length',
    60: 'escape(link()).big().length',
    61: 'strike().big().link().length',
    62: 'big().big().fontcolor().length',
    63: 'link().fontsize().length',
    64: 'link().fontcolor().length',
    65: 'escape(escape(link())).length',
    66: 'link().fixed().link().length',
    67: 'strike().link().strike().length',
    68: 'link().big().link().length',
    69: 'fontsize().fontsize().length',
    70: 'fontsize().fontcolor().length',
    71: 'fontcolor().fontcolor().length',
    72: 'link().blink().link().length',
    73: 'escape(link()).link().length',
    74: 'link().link().strike().length',
    75: 'link().big().fontcolor().length',
    76: 'link().link(true).link().length',
    77: 'link().link(false).link().length',
    78: 'link().blink().fontsize().length',
    79: 'link().big().link().sub().length',
    80: 'strike().fontsize().link().length',
    81: 'link().link().link().length',
    82: 'link().fontsize(true).link().length',
    83: 'link().big().blink().link().length',
    84: 'escape(link().link(true)).length',
    85: 'escape(link().link(false)).length',
    86: 'big().big().fontcolor().link().length',
    87: 'link().fontsize().link().length',
    88: 'link().fontcolor().link().length',
    89: 'escape(link().link()).length',
    90: 'link().fixed().link().link().length',
    91: 'escape(link().big().blink()).length',
    92: 'link().big().link().link().length',
    93: 'fontsize().fontsize().link().length',
    94: 'link().fontcolor().fontsize().length',
    95: 'escape(link().fontsize()).length',
    96: 'escape(link().fontcolor()).length',
    97: 'escape(strike().blink().link()).length',
    98: 'link().link().strike().link().length',
    99: 'link().big().fontcolor().link().length',
    100: 'escape(link().link()).big().length',
    101: 'escape(fontsize().fontsize()).length',
    102: 'escape(fontsize().fontcolor()).length',
    103: 'escape(fontcolor().fontcolor()).length',
    104: 'escape(link().link()).blink().length',
    105: 'link().link().link().link().length',
    106: 'escape(link().fixed().link()).length',
    107: 'escape(link().fontcolor()).big().length',
    108: 'escape(link().big().link()).length',
    109: 'escape(link().link(false)).link().length',
    110: 'escape(link().fontsize()).blink().length',
    111: 'link().fontsize().link().link().length',
    112: 'escape(link().blink().link()).length',
    113: 'escape(link().link()).link().length',
    114: 'escape(link().link().strike()).length',
    115: 'escape(link().big().fontcolor()).length',
    116: 'link().big().link().link().link().length',
    117: 'escape(escape(link().link(false))).length',
    118: 'escape(link().blink().fontsize()).length',
    119: 'escape(link().link()).fontsize().length',
    120: 'escape(link().link()).fontcolor().length',
    121: 'escape(escape(link().link())).length',
    122: 'link().link().strike().link().link().length',
    123: 'escape(link().big().link()).blink().length',
    124: 'escape(link().link(true).link()).length',
    125: 'escape(link().link(false).link()).length',
    126: 'escape(link().fontsize()).fontcolor().length',
    127: 'escape(link().big().link().sub()).length',
    128: 'escape(escape(link().fontcolor())).length',
    129: 'escape(link().link().link()).length',
    130: 'escape(link().fontsize(true).link()).length',
    131: 'escape(link().big().blink().link()).length',
    132: 'escape(link().big().link()).link().length',
    133: 'escape(link().big().link().strike()).length',
    134: 'escape(big().big().fontcolor().link()).length',
    135: 'escape(link().fontsize().link()).length',
    136: 'escape(link().fontcolor().link()).length',
    137: 'escape(escape(escape(link()).link())).length',
    138: 'escape(link().link().link()).fixed().length',
    139: 'escape(strike().link().strike().link()).length',
    140: 'escape(link().link().link()).big().length',
    141: 'escape(fontsize().fontsize().link()).length',
    142: 'escape(link().fontcolor().fontsize()).length',
    143: 'escape(fontcolor().fontcolor().link()).length',
    144: 'escape(link().link().link()).blink().length',
    145: 'escape(escape(link().link())).link().length',
    146: 'escape(link().fixed().link().link()).length',
    147: 'escape(link().fontcolor().link()).big().length',
    148: 'escape(link().big().link().link()).length',
    149: 'escape(link().link(false).link()).link().length',
    150: 'escape(link().fontsize().link()).blink().length',
    151: 'escape(link().big().link().sub()).link().length',
    152: 'escape(link().blink().link().link()).length',
    153: 'escape(link().link().link()).link().length',
    154: 'escape(link().link().strike().link()).length',
    155: 'escape(link().big().fontcolor().link()).length',
    156: 'escape(fontsize().fontsize().link()).blink().length',
    157: 'escape(link().fixed().link().link()).big().length',
    158: 'escape(link().blink().fontsize().link()).length',
    159: 'escape(link().link().link()).fontsize().length',
    160: 'escape(link().link().link()).fontcolor().length',
    161: 'escape(link().fixed().link().link()).blink().length',
    162: 'escape(escape(escape(link().link()))).fixed().length',
    163: 'escape(link().big().link().link()).blink().length',
    164: 'escape(link().link(true).link().link()).length',
    165: 'escape(link().link(false).link().link()).length',
    166: 'escape(link().fontsize().link()).fontcolor().length',
    167: 'escape(link().big().link().sub().link()).length',
    168: 'escape(escape(link().link()).link()).bold().length',
    169: 'escape(link().link().link().link()).length',
    170: 'escape(link().fontsize(true).link().link()).length',
    171: 'escape(link().big().blink().link().link()).length',
    172: 'escape(escape(link().link(true).link())).length',
    173: 'escape(escape(link().link(false).link())).length',
    174: 'escape(escape(link().link()).fontsize()).bold().length',
    175: 'escape(link().fontsize().link().link()).length',
    176: 'escape(link().fontcolor().link().link()).length',
    177: 'escape(escape(link().link().link())).length',
    178: 'escape(link().link().link().link()).fixed().length',
    179: 'escape(escape(link().big().blink().link())).length',
    180: 'escape(link().link().link().link()).big().length',
    181: 'escape(link().fontsize().link().fontsize()).length',
    182: 'escape(link().fontcolor().fontsize().link()).length',
    183: 'escape(escape(link().fontsize().link())).length',
    184: 'escape(escape(link().fontcolor().link())).length',
    185: 'escape(escape(link().link()).link()).link().length',
    186: 'escape(link().fixed().link().link().link()).length',
    187: 'escape(escape(strike().link().strike().link())).length',
    188: 'escape(link().big().link().link().link()).length',

    // hex letters
    a: 'escape(...apply.name)',
    b: 'escape(...name)',
    c: 'escape(...call.name)',
    d: 'name.slice(search(big))',
    e: 'escape(...eval.name)',
    f: 'escape(...escape(big))',

    // escape character
    '%': 'unescape(...escape(this))',
}

dict['\''] = `unescape(${dict['%']}.concat(${dict[27]}))`
dict['\\'] = `unescape(${dict['%']}.concat(${dict[5]}).concat(${dict['c']}))` // \

// Code written by Pepe Vila (@cgvwzq)
// unescape('%2f%27')
function encode_unescape(input) {
    let cnv = [...input].map(e => ('00' + e.charCodeAt(0).toString(16)).substr(-2));
    let output = 'with(escape())with(eval.bind)eval(unescape(match()';
    for (let c in cnv) {
        if (cnv[c] in dict)
            output += '.concat(' + dict[cnv[c]] + ')';
        else {
            let [u, l] = cnv[c];
            if (typeof (eval('with(escape())with(eval.bind)' + dict[u])) === "string") {
                output += '.concat(' + dict[u] + '.concat(' + dict[l] + '))';
            } else {
                output += '.concat(escape(' + dict[u] + ').concat(' + dict[l] + '))';
            }
        }
    }
    output += '.join(' + dict['%'] + ')))';
    return output
}

// Code written by me (@terjanq)
// eval(eval('\141\141\141'))
function encode_eval(input) {
    let prefix = `${dict['\'']}`
    let mid = 'match()'
    for (let c of input) {
        let oct = c.charCodeAt(0).toString(8);
        mid += `.concat(${dict[oct]})`
    }
    mid += `.join(${dict['\\']})`
    let suf = `${dict['\'']}`

    return `with(escape())with(eval.bind)eval(eval(${prefix}.concat(${mid}).concat(${suf})))`
}

// choose the shorter code
function jsalphaencode(input) {
    function convert(input) {
        const [res1, res2] = [encode_eval(input), encode_unescape(input)]
        if (res2.length < res1.length) {
            return res2

        }
        return res1
    }
    return convert(input)
}

