var _0x1084 = [
    'DjJIF',
    'size',
    'error',
    'Return\x20error\x20message',
    'jITGE',
    'newPrize',
    'qMKDb',
    'addTime',
    'setEndTimestamp',
    'NjFQH',
    'fWJBy',
    'OLpEI',
    '\x20is\x20ended.',
    'jOnyW',
    'congrat',
    'config-yml',
    'path',
    'randomstring',
    'ceil',
    'uOGks',
    'writeFileSync',
    'storage',
    'utf-8',
    '{days}\x20',
    'messages',
    'units',
    'days',
    'hours',
    '{hours}\x20',
    '{minutes}\x20',
    'minutes',
    '{seconds}\x20',
    'seconds',
    'timeRemaining',
    'replace',
    '{duration}',
    '{hours}',
    '{seconds}',
    'find',
    'giveawayID',
    'ended',
    'stringify',
    'now',
    'time',
    'RichEmbed',
    'setAuthor',
    'setColor',
    'embedColor',
    'setFooter',
    'winnersCount',
    'winners',
    'setDescription',
    'setTimestamp',
    'toISOString',
    'send',
    'then',
    'nijID',
    'react',
    'reaction',
    'guild',
    'prize',
    'generate',
    'push',
    'reactions',
    'emoji',
    'name',
    'fetchUsers',
    'botsCanWin',
    'users',
    'filter',
    'client',
    'members',
    'get',
    'forEach',
    'ignoreIfHasPermission',
    'hasPermission',
    'CydVd',
    'No\x20giveaway\x20found\x20with\x20message\x20ID\x20',
    'random',
    'map',
    'join',
    'toUpperCase',
    'substr',
    'length',
    'embedColorEnd',
    'endAt',
    'edit',
    'giveawayEnded',
    'channel',
    'winMessage',
    '{winners}',
    '{prize}',
    'noWinner',
    'THYva',
    'endedAt',
    '\x20is\x20not\x20a\x20valid\x20hexadecimal\x20value.',
    'wsDvb',
    'createdAt',
    'channels',
    'channelID',
    'XuuqY',
    'delete',
    'markAsEnded',
    'messageID',
    'catch',
    'JjBNP',
    'newWinnersCount',
    'inviteToParticipate',
    'giveaway',
    'updateCountdownEvery',
    'EujAc',
    'giveaways',
    'exports',
    'AMRLu',
    'No\x20client\x20found.',
    '/data/giveaways.json',
    'HRDSP',
    'uSzPF',
    'vEDsi',
    'ADMINISTRATOR',
    'CREATE_INSTANT_INVITE',
    'KICK_MEMBERS',
    'BAN_MEMBERS',
    'MANAGE_CHANNELS',
    'MANAGE_GUILD',
    'VIEW_AUDIT_LOG',
    'PRIORITY_SPEAKER',
    'STREAM',
    'SEND_MESSAGES',
    'MANAGE_MESSAGES',
    'EMBED_LINKS',
    'ATTACH_FILES',
    'READ_MESSAGE_HISTORY',
    'MENTION_EVERYONE',
    'USE_EXTERNAL_EMOJIS',
    'MOVE_MEMBERS',
    'USE_VAD',
    'CHANGE_NICKNAME',
    'MANAGE_ROLES',
    'MANAGE_WEBHOOKS',
    'MANAGE_EMOJIS',
    'includes',
    'HRfNc',
    'LCWld',
    '#000000',
    'Invalid\x20permissions:\x20',
    'pfLGM',
    'startsWith',
    '#FF0000',
    'Rkmev',
    'xvSpf',
    'Cannot\x20fetch\x20message\x20',
    '\x20in\x20channel\x20',
    'OIqwb',
    'existsSync',
    'isArray',
    'dVjSt',
    'NPOZI',
    'UZVcJ',
    'Code\x20has\x20been\x20modified,\x20Cannot\x20run\x20giveaways.',
    'Channel',
    '\x20is\x20not\x20a\x20valid\x20channel.',
    'ZSYsK',
    'apicX',
    'ADD_REACTIONS',
    'VIEW_CHANNEL',
    'SPEAK',
    'DEAFEN_MEMBERS',
    'MANAGE_NICKNAMES',
    '\x20is\x20not\x20a\x20number.',
    '\x20is\x20not\x20a\x20string.',
    'start',
    'rerollMessage',
    'No\x20valid\x20participations,\x20no\x20winners\x20can\x20be\x20chosen!',
    'The\x20giveaway\x20with\x20message\x20ID\x20',
    '\x20is\x20not\x20ended.\x20Please\x20wait\x20and\x20retry.',
    'Cannot\x20get\x20channel\x20',
    'fetchMessage',
    'YYtfk',
    'olqUh',
    'bot',
    'YVgUn'
];
(function (_0x5a37ea, _0xcd03fa) {
    var _0x498b3d = function (_0xaf6d45) {
        while (--_0xaf6d45) {
            _0x5a37ea['push'](_0x5a37ea['shift']());
        }
    };
    _0x498b3d(++_0xcd03fa);
}(_0x1084, 0xc5));
var _0x2469 = function (_0x5a37ea, _0xcd03fa) {
    _0x5a37ea = _0x5a37ea - 0x0;
    var _0x498b3d = _0x1084[_0x5a37ea];
    return _0x498b3d;
};
const Discord = require('discord.js');
const config = require(_0x2469('0x0'));
const fs = require('fs'), path = require(_0x2469('0x1'));
randomstring = require(_0x2469('0x2'));
function parseTime(_0xc9f1f, _0x4c5a4a) {
    let _0x555007 = _0xc9f1f > 0x0 ? Math['floor'] : Math[_0x2469('0x3')];
    let _0xcd3e1 = _0x555007(_0xc9f1f / 0x5265c00), _0x31aeca = _0x555007(_0xc9f1f / 0x36ee80) % 0x18, _0x5edc6b = _0x555007(_0xc9f1f / 0xea60) % 0x3c, _0x5b46ee = _0x555007(_0xc9f1f / 0x3e8) % 0x3c;
    if (_0x5b46ee === 0x0) {
        if (_0x2469('0x4') === _0x2469('0x4')) {
            _0x5b46ee++;
        } else {
            fs[_0x2469('0x5')](settings[_0x2469('0x6')], '[]', _0x2469('0x7'));
        }
    }
    let _0x32a332 = _0xcd3e1 > 0x0, _0x2c98ce = _0x31aeca > 0x0, _0x3f8e8c = _0x5edc6b > 0x0;
    let _0x2c2482 = (!_0x32a332 ? '' : _0x2c98ce || _0x3f8e8c ? _0x2469('0x8') + _0x4c5a4a[_0x2469('0x9')]['units']['days'] + ',\x20' : _0x2469('0x8') + _0x4c5a4a[_0x2469('0x9')][_0x2469('0xa')][_0x2469('0xb')]) + (!_0x2c98ce ? '' : _0x3f8e8c ? '{hours}\x20' + _0x4c5a4a['messages'][_0x2469('0xa')][_0x2469('0xc')] + ',\x20' : _0x2469('0xd') + _0x4c5a4a[_0x2469('0x9')][_0x2469('0xa')][_0x2469('0xc')]) + (!_0x3f8e8c ? '' : _0x2469('0xe') + _0x4c5a4a[_0x2469('0x9')][_0x2469('0xa')][_0x2469('0xf')] + ',\x20') + (_0x2469('0x10') + _0x4c5a4a[_0x2469('0x9')][_0x2469('0xa')][_0x2469('0x11')]);
    let _0x4ca5c1 = _0x4c5a4a[_0x2469('0x9')][_0x2469('0x12')][_0x2469('0x13')](_0x2469('0x14'), _0x2c2482)[_0x2469('0x13')]('{days}', _0xcd3e1)[_0x2469('0x13')](_0x2469('0x15'), _0x31aeca)[_0x2469('0x13')]('{minutes}', _0x5edc6b)[_0x2469('0x13')](_0x2469('0x16'), _0x5b46ee);
    return _0x4ca5c1;
}
function markAsEnded(_0x1e96e4, _0xc3f0c6) {
    let _0x4700bf = require(_0xc3f0c6['storage']);
    _0x4700bf[_0x2469('0x17')](_0x15ef61 => _0x15ef61[_0x2469('0x18')] === _0x1e96e4)[_0x2469('0x19')] = !![];
    fs[_0x2469('0x5')](_0xc3f0c6['storage'], JSON[_0x2469('0x1a')](_0x4700bf), _0x2469('0x7'));
}
async function start(_0x2e615b, _0x4bf7d5, _0x3de83b) {
    let _0x4e1c63 = require(_0x3de83b[_0x2469('0x6')]);
    return new Promise(function (_0x14a344, _0x40b64d) {
        let _0x348029 = Date[_0x2469('0x1b')]() + _0x4bf7d5[_0x2469('0x1c')], _0x56ecbc = _0x348029 - Date[_0x2469('0x1b')](), _0x3874e5 = parseTime(_0x56ecbc, _0x4bf7d5), _0x42a794 = null;
        _0x42a794 = new Discord[(_0x2469('0x1d'))]();
        _0x42a794[_0x2469('0x1e')](_0x4bf7d5['prize'])[_0x2469('0x1f')](_0x3de83b[_0x2469('0x20')])[_0x2469('0x21')](_0x4bf7d5[_0x2469('0x22')] + '\x20' + _0x4bf7d5[_0x2469('0x9')][_0x2469('0x23')])[_0x2469('0x24')](_0x4bf7d5['messages']['inviteToParticipate'] + '\x0a' + _0x3874e5)[_0x2469('0x25')](new Date(_0x348029)[_0x2469('0x26')]());
        _0x2e615b[_0x2469('0x27')](_0x4bf7d5[_0x2469('0x9')]['giveaway'], { 'embed': _0x42a794 })[_0x2469('0x28')](_0x47e8cb => {
            if (_0x2469('0x29') !== 'UOCYj') {
                _0x47e8cb[_0x2469('0x2a')](_0x3de83b[_0x2469('0x2b')]);
                let _0x103c09 = {
                    'messageID': _0x47e8cb['id'],
                    'channelID': _0x2e615b['id'],
                    'guildID': _0x2e615b[_0x2469('0x2c')]['id'],
                    'prize': _0x4bf7d5[_0x2469('0x2d')],
                    'time': _0x4bf7d5[_0x2469('0x1c')],
                    'createdAt': Date[_0x2469('0x1b')](),
                    'giveawayID': randomstring[_0x2469('0x2e')](0x5),
                    'winnersCount': _0x4bf7d5[_0x2469('0x22')],
                    'messages': _0x4bf7d5[_0x2469('0x9')],
                    'ended': ![]
                };
                _0x4e1c63[_0x2469('0x2f')](_0x103c09);
                fs[_0x2469('0x5')](_0x3de83b[_0x2469('0x6')], JSON[_0x2469('0x1a')](_0x4e1c63), 'utf-8');
                _0x14a344(_0x103c09);
            } else {
                let _0x13d825 = require(_0x3de83b[_0x2469('0x6')]);
                _0x13d825['find'](_0x4356f0 => _0x4356f0['giveawayID'] === giveawayID)['ended'] = !![];
                fs[_0x2469('0x5')](_0x3de83b['storage'], JSON['stringify'](_0x13d825), _0x2469('0x7'));
            }
        });
    });
}
async function endGiveaway(_0x44f09a, _0x1aca8d, _0x220296, _0x5dce8b) {
    let _0x4422d = require(_0x5dce8b[_0x2469('0x6')]);
    let _0xf4bdcc = null;
    _0xf4bdcc = new Discord['RichEmbed']();
    let _0x281ef8 = _0x1aca8d[_0x2469('0x2c')];
    let _0x10a0f5 = _0x220296[_0x2469('0x30')]['find'](_0x557edf => _0x557edf[_0x2469('0x31')][_0x2469('0x32')] === _0x5dce8b[_0x2469('0x2b')]);
    _0x10a0f5['users'] = await _0x10a0f5[_0x2469('0x33')]();
    if (_0x10a0f5) {
        let _0x85bb92 = _0x5dce8b[_0x2469('0x34')] ? _0x10a0f5[_0x2469('0x35')][_0x2469('0x36')](_0xf4c1bb => _0xf4c1bb['id'] !== _0x220296[_0x2469('0x37')]['id'])[_0x2469('0x36')](_0x4fed01 => _0x281ef8[_0x2469('0x38')][_0x2469('0x39')](_0x4fed01['id'])) : _0x10a0f5[_0x2469('0x35')][_0x2469('0x36')](_0x18b371 => !_0x18b371['bot'])['filter'](_0x56a203 => _0x56a203['id'] !== _0x220296[_0x2469('0x37')]['id'])[_0x2469('0x36')](_0x58d905 => _0x281ef8[_0x2469('0x38')][_0x2469('0x39')](_0x58d905['id']));
        _0x85bb92[_0x2469('0x3a')](_0x2cb35a => {
            let _0x49c173 = _0x281ef8[_0x2469('0x38')][_0x2469('0x39')](_0x2cb35a['id']);
            _0x5dce8b[_0x2469('0x3b')][_0x2469('0x3a')](_0x26510e => {
                if (_0x49c173[_0x2469('0x3c')](_0x26510e)) {
                    _0x85bb92 = _0x85bb92['filter'](_0x46d83b => _0x46d83b['id'] !== _0x2cb35a['id']);
                }
            });
        });
        if (_0x85bb92['size'] > 0x0) {
            if (_0x2469('0x3d') !== _0x2469('0x3d')) {
                return reject(_0x2469('0x3e') + messageID);
            } else {
                let _0x5f1833 = _0x85bb92[_0x2469('0x3f')](_0x44f09a[_0x2469('0x22')])[_0x2469('0x36')](_0x294d3a => _0x294d3a);
                let _0x3fb0c9 = _0x5f1833[_0x2469('0x40')](_0x34c96f => '<@' + _0x34c96f['id'] + '>')[_0x2469('0x41')](',\x20');
                let _0x59ecd2 = _0x44f09a[_0x2469('0x9')][_0x2469('0x23')]['substr'](0x0, 0x1)[_0x2469('0x42')]() + _0x44f09a[_0x2469('0x9')][_0x2469('0x23')][_0x2469('0x43')](0x1, _0x44f09a[_0x2469('0x9')][_0x2469('0x23')][_0x2469('0x44')]) + ':\x20' + _0x3fb0c9;
                _0xf4bdcc[_0x2469('0x1e')](_0x44f09a[_0x2469('0x2d')])[_0x2469('0x1f')](_0x5dce8b[_0x2469('0x45')])[_0x2469('0x21')](_0x44f09a['messages']['endedAt'])[_0x2469('0x24')](_0x59ecd2)[_0x2469('0x25')](new Date(_0x44f09a[_0x2469('0x46')])[_0x2469('0x26')]());
                _0x220296[_0x2469('0x47')](_0x44f09a[_0x2469('0x9')][_0x2469('0x48')], { 'embed': _0xf4bdcc });
                _0x220296[_0x2469('0x49')][_0x2469('0x27')](_0x44f09a[_0x2469('0x9')][_0x2469('0x4a')][_0x2469('0x13')](_0x2469('0x4b'), _0x3fb0c9)[_0x2469('0x13')](_0x2469('0x4c'), _0x44f09a[_0x2469('0x2d')]));
                markAsEnded(_0x44f09a[_0x2469('0x18')], _0x5dce8b);
            }
        } else {
            _0xf4bdcc[_0x2469('0x1e')](_0x44f09a[_0x2469('0x2d')])[_0x2469('0x1f')](_0x5dce8b[_0x2469('0x45')])['setFooter'](_0x44f09a['messages']['endedAt'])[_0x2469('0x24')](_0x44f09a[_0x2469('0x9')][_0x2469('0x4d')])[_0x2469('0x25')](new Date(_0x44f09a['endAt'])[_0x2469('0x26')]());
            _0x220296[_0x2469('0x47')](_0x44f09a[_0x2469('0x9')][_0x2469('0x48')], { 'embed': _0xf4bdcc });
            markAsEnded(_0x44f09a[_0x2469('0x18')], _0x5dce8b);
        }
    } else {
        if (_0x2469('0x4e') === _0x2469('0x4e')) {
            _0xf4bdcc[_0x2469('0x1e')](_0x44f09a[_0x2469('0x2d')])[_0x2469('0x1f')](_0x5dce8b[_0x2469('0x45')])[_0x2469('0x21')](_0x44f09a[_0x2469('0x9')][_0x2469('0x4f')])[_0x2469('0x24')](_0x44f09a[_0x2469('0x9')]['noWinner'])['setTimestamp'](new Date(_0x44f09a[_0x2469('0x46')])[_0x2469('0x26')]());
            _0x220296[_0x2469('0x47')](_0x44f09a[_0x2469('0x9')][_0x2469('0x48')], { 'embed': _0xf4bdcc });
            markAsEnded(_0x44f09a[_0x2469('0x18')], _0x5dce8b);
        } else {
            throw new TypeError(_0x5dce8b[_0x2469('0x45')] + _0x2469('0x50'));
        }
    }
}
async function check(_0x331934, _0x5d58c3) {
    let _0x574241 = require(_0x5d58c3['storage']);
    _0x574241[_0x2469('0x36')](_0x5d4bbe => !_0x5d4bbe[_0x2469('0x19')])['forEach'](async _0x5d80fd => {
        if ('ZXyVN' !== _0x2469('0x51')) {
            _0x5d80fd[_0x2469('0x46')] = parseInt(_0x5d80fd[_0x2469('0x52')] + _0x5d80fd[_0x2469('0x1c')]);
            let _0x3b41fc = _0x331934[_0x2469('0x53')]['get'](_0x5d80fd[_0x2469('0x54')]);
            if (_0x3b41fc) {
                if (_0x2469('0x55') === 'xpnYK') {
                    message[_0x2469('0x56')]();
                    utils[_0x2469('0x57')](_0x5d80fd[_0x2469('0x18')], _0x5d58c3);
                    resolve(_0x5d80fd);
                } else {
                    let _0x4abe29 = null;
                    _0x4abe29 = await _0x3b41fc['fetchMessage'](_0x5d80fd[_0x2469('0x58')])[_0x2469('0x59')](_0x34a4c7 => {
                    });
                    if (_0x4abe29) {
                        let _0x2de3b8 = _0x5d80fd[_0x2469('0x46')] - Date[_0x2469('0x1b')](), _0x4947bd = parseTime(_0x2de3b8, _0x5d80fd), _0x4737c6 = null;
                        if (_0x2de3b8 < 0x0) {
                            if ('JjBNP' === _0x2469('0x5a')) {
                                endGiveaway(_0x5d80fd, _0x3b41fc, _0x4abe29, _0x5d58c3);
                            } else {
                                _0x5d80fd[_0x2469('0x22')] = options[_0x2469('0x5b')];
                            }
                        }
                        _0x4737c6 = new Discord[(_0x2469('0x1d'))]();
                        _0x4737c6[_0x2469('0x1e')](_0x5d80fd[_0x2469('0x2d')])[_0x2469('0x1f')](_0x5d58c3[_0x2469('0x20')])[_0x2469('0x21')](String(_0x5d80fd[_0x2469('0x22')]) + '\x20' + _0x5d80fd[_0x2469('0x9')][_0x2469('0x23')])[_0x2469('0x24')](_0x5d80fd[_0x2469('0x9')][_0x2469('0x5c')] + '\x0a' + _0x4947bd)[_0x2469('0x25')](new Date(_0x5d80fd[_0x2469('0x46')])[_0x2469('0x26')]());
                        _0x4abe29[_0x2469('0x47')](_0x5d80fd['messages'][_0x2469('0x5d')], { 'embed': _0x4737c6 });
                        if (_0x2de3b8 < _0x5d58c3[_0x2469('0x5e')]) {
                            setTimeout(function () {
                                if (_0x2469('0x5f') === 'EujAc') {
                                    endGiveaway(_0x5d80fd, _0x3b41fc, _0x4abe29, _0x5d58c3);
                                } else {
                                    return reject(_0x2469('0x3e') + messageID);
                                }
                            }, _0x2de3b8);
                        }
                    } else {
                        markAsEnded(_0x5d80fd['giveawayID'], _0x5d58c3);
                    }
                }
            } else {
                markAsEnded(_0x5d80fd[_0x2469('0x18')], _0x5d58c3);
            }
        } else {
            endGiveaway(_0x5d80fd, channel, message, _0x5d58c3);
        }
    });
}
let utils = {
    'parseTime': parseTime,
    'markAsEnded': markAsEnded,
    'endGiveaway': endGiveaway,
    'start': start,
    'check': check
};
const settings = {
    'updateCountdownEvery': 0x1388,
    'botsCanWin': config[_0x2469('0x60')][_0x2469('0x34')],
    'ignoreIfHasPermission': config['giveaways'][_0x2469('0x3b')],
    'embedColor': config[_0x2469('0x60')][_0x2469('0x20')],
    'embedColorEnd': config[_0x2469('0x60')]['embedColorEnd'],
    'reaction': config['giveaways'][_0x2469('0x2b')],
    'client': null,
    'storage': null,
    'launched': ![]
};
module[_0x2469('0x61')] = {
    'launch'(_0x1a6f70, _0x5cec46) {
        if (!_0x1a6f70) {
            if (_0x2469('0x62') === _0x2469('0x62')) {
                throw new Error(_0x2469('0x63'));
            } else {
                let _0x594e17 = require(settings[_0x2469('0x6')]);
                return _0x594e17;
            }
        }
        settings[_0x2469('0x6')] = _0x5cec46 + _0x2469('0x64');
        if (settings[_0x2469('0x34')] != ![] && settings[_0x2469('0x34')] != !![]) {
            if (_0x2469('0x65') === _0x2469('0x65')) {
                settings[_0x2469('0x34')] = ![];
            } else {
                users = users[_0x2469('0x36')](_0x404774 => _0x404774['id'] !== user['id']);
            }
        }
        if (settings['ignoreIfHasPermission']) {
            if (_0x2469('0x66') !== _0x2469('0x67')) {
                let _0x1bebf0 = [
                    _0x2469('0x68'),
                    _0x2469('0x69'),
                    _0x2469('0x6a'),
                    _0x2469('0x6b'),
                    _0x2469('0x6c'),
                    _0x2469('0x6d'),
                    'ADD_REACTIONS',
                    _0x2469('0x6e'),
                    _0x2469('0x6f'),
                    _0x2469('0x70'),
                    'VIEW_CHANNEL',
                    _0x2469('0x71'),
                    'SEND_TTS_MESSAGES',
                    _0x2469('0x72'),
                    _0x2469('0x73'),
                    _0x2469('0x74'),
                    _0x2469('0x75'),
                    _0x2469('0x76'),
                    _0x2469('0x77'),
                    'CONNECT',
                    'SPEAK',
                    'MUTE_MEMBERS',
                    'DEAFEN_MEMBERS',
                    _0x2469('0x78'),
                    _0x2469('0x79'),
                    _0x2469('0x7a'),
                    'MANAGE_NICKNAMES',
                    _0x2469('0x7b'),
                    _0x2469('0x7c'),
                    _0x2469('0x7d')
                ];
                let _0x4cfe0c = settings['ignoreIfHasPermission'][_0x2469('0x36')](_0x4b4d06 => !_0x1bebf0[_0x2469('0x7e')](_0x4b4d06));
                if (_0x4cfe0c[0x0]) {
                    if (_0x2469('0x7f') === _0x2469('0x80')) {
                        settings[_0x2469('0x45')] = _0x2469('0x81');
                    } else {
                        throw new TypeError(_0x2469('0x82') + _0x4cfe0c[0x0]);
                    }
                }
            } else {
                let _0x580dd6 = guild[_0x2469('0x38')][_0x2469('0x39')](user['id']);
                settings[_0x2469('0x3b')][_0x2469('0x3a')](_0x1fb6ce => {
                    if (_0x580dd6[_0x2469('0x3c')](_0x1fb6ce)) {
                        users = users[_0x2469('0x36')](_0x606d35 => _0x606d35['id'] !== user['id']);
                    }
                });
            }
        }
        if (!settings[_0x2469('0x3b')][0x0]) {
            settings[_0x2469('0x3b')] = [];
        }
        if (settings[_0x2469('0x20')]) {
            if (_0x2469('0x83') === 'JFoXF') {
                let _0x4f1f9b = require(settings[_0x2469('0x6')]);
                return new Promise(function (_0x3150fd, _0x2f9200) {
                    let _0x32f09a = Date[_0x2469('0x1b')]() + options[_0x2469('0x1c')], _0x4e722c = _0x32f09a - Date['now'](), _0x35d9f5 = parseTime(_0x4e722c, options), _0x86b170 = null;
                    _0x86b170 = new Discord[(_0x2469('0x1d'))]();
                    _0x86b170[_0x2469('0x1e')](options[_0x2469('0x2d')])[_0x2469('0x1f')](settings['embedColor'])[_0x2469('0x21')](options[_0x2469('0x22')] + '\x20' + options[_0x2469('0x9')][_0x2469('0x23')])[_0x2469('0x24')](options['messages'][_0x2469('0x5c')] + '\x0a' + _0x35d9f5)[_0x2469('0x25')](new Date(_0x32f09a)[_0x2469('0x26')]());
                    channel['send'](options['messages'][_0x2469('0x5d')], { 'embed': _0x86b170 })[_0x2469('0x28')](_0x5eb7f4 => {
                        _0x5eb7f4[_0x2469('0x2a')](settings['reaction']);
                        let _0x5342a6 = {
                            'messageID': _0x5eb7f4['id'],
                            'channelID': channel['id'],
                            'guildID': channel[_0x2469('0x2c')]['id'],
                            'prize': options['prize'],
                            'time': options['time'],
                            'createdAt': Date['now'](),
                            'giveawayID': randomstring[_0x2469('0x2e')](0x5),
                            'winnersCount': options['winnersCount'],
                            'messages': options[_0x2469('0x9')],
                            'ended': ![]
                        };
                        _0x4f1f9b[_0x2469('0x2f')](_0x5342a6);
                        fs[_0x2469('0x5')](settings['storage'], JSON[_0x2469('0x1a')](_0x4f1f9b), _0x2469('0x7'));
                        _0x3150fd(_0x5342a6);
                    });
                });
            } else {
                let _0x25424b = settings[_0x2469('0x20')][_0x2469('0x84')]('#') ? settings[_0x2469('0x20')][_0x2469('0x43')](0x1, settings[_0x2469('0x20')][_0x2469('0x44')]) : settings['embedColor'];
                let _0x3a3917 = parseInt(_0x25424b, 0x10);
                if (isNaN(_0x3a3917)) {
                    throw new TypeError(setings['embedColor'] + _0x2469('0x50'));
                }
            }
        } else {
            if ('HQcOw' !== 'HQcOw') {
                throw new Error(_0x2469('0x63'));
            } else {
                settings['embedColor'] = _0x2469('0x85');
            }
        }
        if (settings[_0x2469('0x45')]) {
            let _0x45cb27 = settings['embedColorEnd'][_0x2469('0x84')]('#') ? settings[_0x2469('0x45')][_0x2469('0x43')](0x1, settings[_0x2469('0x45')][_0x2469('0x44')]) : settings[_0x2469('0x45')];
            let _0x248534 = parseInt(_0x45cb27, 0x10);
            if (isNaN(_0x248534)) {
                throw new TypeError(settings['embedColorEnd'] + _0x2469('0x50'));
            }
        } else {
            settings[_0x2469('0x45')] = '#000000';
        }
        if (!settings[_0x2469('0x2b')]) {
            if (_0x2469('0x86') !== _0x2469('0x87')) {
                settings[_0x2469('0x2b')] = '🎉';
            } else {
                return reject(_0x2469('0x88') + giveaway[_0x2469('0x58')] + _0x2469('0x89') + giveaway[_0x2469('0x54')]);
            }
        }
        if (!settings['storage']) {
            if ('OIqwb' !== _0x2469('0x8a')) {
                let _0x5e98f0 = settings[_0x2469('0x20')][_0x2469('0x84')]('#') ? settings[_0x2469('0x20')]['substr'](0x1, settings[_0x2469('0x20')][_0x2469('0x44')]) : settings[_0x2469('0x20')];
                let _0x452085 = parseInt(_0x5e98f0, 0x10);
                if (isNaN(_0x452085)) {
                    throw new TypeError(setings[_0x2469('0x20')] + _0x2469('0x50'));
                }
            } else {
                settings[_0x2469('0x6')] = '../data/giveaways.json';
            }
        }
        settings['launched'] = !![];
        settings[_0x2469('0x37')] = _0x1a6f70;
        if (!fs[_0x2469('0x8b')](settings[_0x2469('0x6')])) {
            fs[_0x2469('0x5')](settings[_0x2469('0x6')], '[]', 'utf-8');
        } else if (!Array[_0x2469('0x8c')](require(settings[_0x2469('0x6')]))) {
            fs[_0x2469('0x5')](settings[_0x2469('0x6')], '[]', _0x2469('0x7'));
        }
        setInterval(utils['check'], settings[_0x2469('0x5e')], _0x1a6f70, settings);
    },
    async 'start'(_0x96120f, _0x56b2f1) {
        return new Promise(function (_0x2572e1, _0x6d8d1d) {
            if (_0x2469('0x8d') !== 'yIhlb') {
                if (!settings['launched']) {
                    if (_0x2469('0x8e') !== _0x2469('0x8f')) {
                        return _0x6d8d1d(_0x2469('0x90'));
                    } else {
                        let _0x325d43 = users[_0x2469('0x3f')](giveawayData[_0x2469('0x22')])[_0x2469('0x36')](_0x29db48 => _0x29db48);
                        let _0xaaa97c = _0x325d43[_0x2469('0x40')](_0x499d73 => '<@' + _0x499d73['id'] + '>')[_0x2469('0x41')](',\x20');
                        let _0x4bef17 = giveawayData[_0x2469('0x9')][_0x2469('0x23')]['substr'](0x0, 0x1)[_0x2469('0x42')]() + giveawayData['messages'][_0x2469('0x23')][_0x2469('0x43')](0x1, giveawayData[_0x2469('0x9')]['winners'][_0x2469('0x44')]) + ':\x20' + _0xaaa97c;
                        embed[_0x2469('0x1e')](giveawayData['prize'])[_0x2469('0x1f')](settings[_0x2469('0x45')])['setFooter'](giveawayData['messages'][_0x2469('0x4f')])[_0x2469('0x24')](_0x4bef17)[_0x2469('0x25')](new Date(giveawayData[_0x2469('0x46')])[_0x2469('0x26')]());
                        message['edit'](giveawayData[_0x2469('0x9')][_0x2469('0x48')], { 'embed': embed });
                        message[_0x2469('0x49')][_0x2469('0x27')](giveawayData[_0x2469('0x9')][_0x2469('0x4a')]['replace'](_0x2469('0x4b'), _0xaaa97c)['replace']('{prize}', giveawayData[_0x2469('0x2d')]));
                        markAsEnded(giveawayData['giveawayID'], settings);
                    }
                }
                _0x56b2f1[_0x2469('0x9')] = {
                    'giveaway': config[_0x2469('0x9')][_0x2469('0x5d')],
                    'giveawayEnded': config[_0x2469('0x9')][_0x2469('0x48')],
                    'timeRemaining': config[_0x2469('0x9')][_0x2469('0x12')],
                    'inviteToParticipate': config[_0x2469('0x9')][_0x2469('0x5c')],
                    'winMessage': config[_0x2469('0x9')][_0x2469('0x4a')],
                    'embedFooter': config[_0x2469('0x9')]['embedFooter'],
                    'noWinner': config['messages'][_0x2469('0x4d')],
                    'winners': config[_0x2469('0x9')][_0x2469('0x23')],
                    'endedAt': config[_0x2469('0x9')][_0x2469('0x4f')],
                    'units': {
                        'seconds': _0x2469('0x11'),
                        'minutes': _0x2469('0xf'),
                        'hours': 'hours',
                        'days': _0x2469('0xb')
                    }
                };
                if (!_0x96120f || !(_0x96120f instanceof Discord[_0x2469('0x91')])) {
                    return _0x6d8d1d(_0x96120f + _0x2469('0x92'));
                }
                if (!_0x56b2f1[_0x2469('0x1c')] || isNaN(_0x56b2f1['time'])) {
                    if (_0x2469('0x93') === _0x2469('0x94')) {
                        let _0x59c2d8 = [
                            _0x2469('0x68'),
                            _0x2469('0x69'),
                            _0x2469('0x6a'),
                            _0x2469('0x6b'),
                            _0x2469('0x6c'),
                            _0x2469('0x6d'),
                            _0x2469('0x95'),
                            'VIEW_AUDIT_LOG',
                            _0x2469('0x6f'),
                            _0x2469('0x70'),
                            _0x2469('0x96'),
                            _0x2469('0x71'),
                            'SEND_TTS_MESSAGES',
                            _0x2469('0x72'),
                            _0x2469('0x73'),
                            'ATTACH_FILES',
                            _0x2469('0x75'),
                            _0x2469('0x76'),
                            _0x2469('0x77'),
                            'CONNECT',
                            _0x2469('0x97'),
                            'MUTE_MEMBERS',
                            _0x2469('0x98'),
                            _0x2469('0x78'),
                            _0x2469('0x79'),
                            _0x2469('0x7a'),
                            _0x2469('0x99'),
                            _0x2469('0x7b'),
                            'MANAGE_WEBHOOKS',
                            _0x2469('0x7d')
                        ];
                        let _0x24e33b = settings[_0x2469('0x3b')][_0x2469('0x36')](_0x2ffa03 => !_0x59c2d8[_0x2469('0x7e')](_0x2ffa03));
                        if (_0x24e33b[0x0]) {
                            throw new TypeError(_0x2469('0x82') + _0x24e33b[0x0]);
                        }
                    } else {
                        return _0x6d8d1d(_0x56b2f1[_0x2469('0x1c')] + _0x2469('0x9a'));
                    }
                }
                if (!_0x56b2f1[_0x2469('0x2d')]) {
                    return _0x6d8d1d(_0x56b2f1[_0x2469('0x2d')] + _0x2469('0x9b'));
                }
                if (!_0x56b2f1[_0x2469('0x22')] || isNaN(_0x56b2f1[_0x2469('0x22')])) {
                    return _0x6d8d1d(_0x56b2f1[_0x2469('0x22')] + '\x20is\x20not\x20a\x20number.');
                }
                utils[_0x2469('0x9c')](_0x96120f, _0x56b2f1, settings)[_0x2469('0x28')](_0xd5c834 => {
                    _0x2572e1({
                        'ID': _0xd5c834['id'],
                        'messageID': _0xd5c834[_0x2469('0x58')],
                        'channelID': _0xd5c834[_0x2469('0x54')],
                        'endAt': _0xd5c834[_0x2469('0x46')]
                    });
                })[_0x2469('0x59')](_0x424d95 => {
                    _0x6d8d1d(_0x424d95);
                });
            } else {
                msg[_0x2469('0x2a')](settings[_0x2469('0x2b')]);
                let _0x2e3d37 = {
                    'messageID': msg['id'],
                    'channelID': channel['id'],
                    'guildID': channel['guild']['id'],
                    'prize': _0x56b2f1[_0x2469('0x2d')],
                    'time': _0x56b2f1['time'],
                    'createdAt': Date[_0x2469('0x1b')](),
                    'giveawayID': randomstring[_0x2469('0x2e')](0x5),
                    'winnersCount': _0x56b2f1['winnersCount'],
                    'messages': _0x56b2f1[_0x2469('0x9')],
                    'ended': ![]
                };
                giveaways['push'](_0x2e3d37);
                fs[_0x2469('0x5')](settings[_0x2469('0x6')], JSON[_0x2469('0x1a')](giveaways), _0x2469('0x7'));
                _0x2572e1(_0x2e3d37);
            }
        });
    },
    'fetch'() {
        let _0x5783c8 = require(settings['storage']);
        return _0x5783c8;
    },
    async 'reroll'(_0x1219f1) {
        return new Promise(async function (_0x4b4ec9, _0xa31c98) {
            let _0x545dd0 = {
                'congrat': config['messages'][_0x2469('0x9d')],
                'error': _0x2469('0x9e')
            };
            let _0x16635a = require(settings[_0x2469('0x6')]);
            let _0x202835 = _0x16635a['find'](_0x3ec013 => _0x3ec013[_0x2469('0x58')] === _0x1219f1);
            if (!_0x202835) {
                return _0xa31c98(_0x2469('0x3e') + _0x1219f1);
            }
            if (!_0x202835[_0x2469('0x19')]) {
                return _0xa31c98(_0x2469('0x9f') + _0x1219f1 + _0x2469('0xa0'));
            }
            let _0x7d4470 = settings[_0x2469('0x37')][_0x2469('0x53')][_0x2469('0x39')](_0x202835[_0x2469('0x54')]);
            if (!_0x7d4470) {
                return _0xa31c98(_0x2469('0xa1') + _0x202835[_0x2469('0x54')]);
            }
            let _0x2bbe97 = await _0x7d4470[_0x2469('0xa2')](_0x202835['messageID'])['catch'](_0x4be69e => {
            });
            if (_0x2bbe97) {
                if (_0x2469('0xa3') === _0x2469('0xa3')) {
                    let _0xd43d9b = _0x2bbe97[_0x2469('0x2c')];
                    let _0x27e656 = _0x2bbe97['reactions'][_0x2469('0x17')](_0x4fe494 => _0x4fe494[_0x2469('0x31')][_0x2469('0x32')] === settings[_0x2469('0x2b')]);
                    _0x27e656[_0x2469('0x35')] = await _0x27e656[_0x2469('0x33')]();
                    if (_0x27e656) {
                        if (_0x2469('0xa4') !== _0x2469('0xa4')) {
                            return _0xa31c98(_0x2469('0xa1') + _0x202835[_0x2469('0x54')]);
                        } else {
                            let _0x4d5643 = settings['botsCanWin'] ? _0x27e656[_0x2469('0x35')]['filter'](_0x5c285b => _0x5c285b['id'] !== _0x2bbe97[_0x2469('0x37')]['id'])[_0x2469('0x36')](_0x3d077a => _0xd43d9b[_0x2469('0x38')][_0x2469('0x39')](_0x3d077a['id'])) : _0x27e656[_0x2469('0x35')]['filter'](_0x49cbc2 => !_0x49cbc2[_0x2469('0xa5')])[_0x2469('0x36')](_0x2e336a => _0x2e336a['id'] !== _0x2bbe97[_0x2469('0x37')]['id'])[_0x2469('0x36')](_0x5ee01f => _0xd43d9b[_0x2469('0x38')][_0x2469('0x39')](_0x5ee01f['id']));
                            _0x4d5643[_0x2469('0x3a')](_0x563fc7 => {
                                let _0xaa8d74 = _0xd43d9b[_0x2469('0x38')][_0x2469('0x39')](_0x563fc7['id']);
                                settings[_0x2469('0x3b')][_0x2469('0x3a')](_0x48538c => {
                                    if (_0xaa8d74[_0x2469('0x3c')](_0x48538c)) {
                                        if (_0x2469('0xa6') !== _0x2469('0xa7')) {
                                            _0x4d5643 = _0x4d5643[_0x2469('0x36')](_0x17de2d => _0x17de2d['id'] !== _0x563fc7['id']);
                                        } else {
                                            return _0xa31c98(guildChannel + _0x2469('0x92'));
                                        }
                                    }
                                });
                            });
                            if (_0x4d5643[_0x2469('0xa8')] < 0x1) {
                                _0x7d4470[_0x2469('0x27')](_0x545dd0[_0x2469('0xa9')]);
                                _0x4b4ec9(_0x2469('0xaa'));
                            } else {
                                let _0x2ccebf = _0x4d5643[_0x2469('0x3f')](_0x202835[_0x2469('0x22')])[_0x2469('0x36')](_0x5b7107 => _0x5b7107);
                                let _0x2183d8 = _0x2ccebf['map'](_0x30faa5 => '<@' + _0x30faa5['id'] + '>')[_0x2469('0x41')](',\x20');
                                _0x7d4470[_0x2469('0x27')](_0x545dd0['congrat'][_0x2469('0x13')](_0x2469('0x4b'), _0x2183d8));
                                _0x4b4ec9(_0x2ccebf);
                            }
                        }
                    }
                } else {
                    throw new TypeError(setings[_0x2469('0x20')] + _0x2469('0x50'));
                }
            } else {
                if ('XQBEd' !== 'XQBEd') {
                    if (member[_0x2469('0x3c')](perm)) {
                        users = users[_0x2469('0x36')](_0x3623b2 => _0x3623b2['id'] !== user['id']);
                    }
                } else {
                    _0xa31c98(_0x2469('0x88') + _0x202835[_0x2469('0x58')] + _0x2469('0x89') + _0x202835[_0x2469('0x54')]);
                }
            }
        });
    },
    async 'edit'(_0x4d9c7c, _0x2e908e) {
        return new Promise(async function (_0x51f4cf, _0x434933) {
            if ('YXhqO' === _0x2469('0xab')) {
                return _0x434933(_0x2e908e[_0x2469('0x22')] + _0x2469('0x9a'));
            } else {
                let _0x3ddadf = require(settings[_0x2469('0x6')]);
                let _0x3697bc = _0x3ddadf[_0x2469('0x17')](_0x57e4e => _0x57e4e[_0x2469('0x58')] === _0x4d9c7c);
                if (!_0x3697bc) {
                    return _0x434933(_0x2469('0x3e') + _0x4d9c7c);
                }
                if (_0x3697bc[_0x2469('0x19')]) {
                    return _0x434933(_0x2469('0x9f') + _0x4d9c7c + '\x20is\x20ended.');
                }
                let _0x1f4751 = [];
                _0x3ddadf[_0x2469('0x3a')](_0x2d1538 => {
                    if (_0x2d1538['messageID'] !== _0x4d9c7c) {
                        _0x1f4751[_0x2469('0x2f')](_0x2d1538);
                    }
                });
                if (_0x2e908e[_0x2469('0xac')]) {
                    _0x3697bc[_0x2469('0x2d')] = _0x2e908e[_0x2469('0xac')];
                }
                if (_0x2e908e[_0x2469('0x5b')]) {
                    if (_0x2469('0xad') === 'GCwNT') {
                        if (g[_0x2469('0x58')] !== _0x4d9c7c) {
                            _0x1f4751['push'](g);
                        }
                    } else {
                        _0x3697bc[_0x2469('0x22')] = _0x2e908e[_0x2469('0x5b')];
                    }
                }
                if (_0x2e908e[_0x2469('0xae')]) {
                    _0x3697bc[_0x2469('0x1c')] = _0x2e908e[_0x2469('0xae')] + _0x3697bc[_0x2469('0x1c')];
                }
                if (_0x2e908e[_0x2469('0xaf')]) {
                    if (_0x2469('0xb0') === _0x2469('0xb1')) {
                        let _0x16ad9a = settings[_0x2469('0x45')][_0x2469('0x84')]('#') ? settings[_0x2469('0x45')][_0x2469('0x43')](0x1, settings[_0x2469('0x45')][_0x2469('0x44')]) : settings[_0x2469('0x45')];
                        let _0x2d2d89 = parseInt(_0x16ad9a, 0x10);
                        if (isNaN(_0x2d2d89)) {
                            throw new TypeError(settings[_0x2469('0x45')] + _0x2469('0x50'));
                        }
                    } else {
                        _0x3697bc[_0x2469('0x1c')] = _0x2e908e['setEndTimestamp'] - _0x3697bc[_0x2469('0x52')];
                    }
                }
                _0x1f4751[_0x2469('0x2f')](_0x3697bc);
                fs['writeFileSync'](settings[_0x2469('0x6')], JSON[_0x2469('0x1a')](_0x3ddadf), _0x2469('0x7'));
                _0x51f4cf(_0x3697bc);
            }
        });
    },
    async 'delete'(_0x44d6c3) {
        return new Promise(async function (_0x3f6b5b, _0xf9ea53) {
            let _0x4c5628 = require(settings[_0x2469('0x6')]);
            let _0x49961d = _0x4c5628['find'](_0x28e37b => _0x28e37b[_0x2469('0x58')] === _0x44d6c3);
            if (!_0x49961d) {
                return _0xf9ea53('No\x20giveaway\x20found\x20with\x20message\x20ID\x20' + _0x44d6c3);
            }
            if (_0x49961d['ended']) {
                if (_0x2469('0xb2') === _0x2469('0xb2')) {
                    return _0xf9ea53('The\x20giveaway\x20with\x20message\x20ID\x20' + _0x44d6c3 + _0x2469('0xb3'));
                } else {
                    if (member['hasPermission'](perm)) {
                        users = users[_0x2469('0x36')](_0x10feaa => _0x10feaa['id'] !== user['id']);
                    }
                }
            }
            let _0x4b9552 = settings[_0x2469('0x37')]['channels'][_0x2469('0x39')](_0x49961d['channelID']);
            if (!_0x4b9552) {
                return _0xf9ea53(_0x2469('0xa1') + _0x49961d['channelID']);
            }
            let _0x7fccd5 = await _0x4b9552['fetchMessage'](_0x49961d[_0x2469('0x58')])[_0x2469('0x59')](_0x294bf7 => {
            });
            if (_0x7fccd5) {
                if (_0x2469('0xb4') !== _0x2469('0xb4')) {
                    let _0x17ef6a = users[_0x2469('0x3f')](_0x49961d[_0x2469('0x22')])[_0x2469('0x36')](_0x44496f => _0x44496f);
                    let _0x64ccc4 = _0x17ef6a['map'](_0x25b2b4 => '<@' + _0x25b2b4['id'] + '>')[_0x2469('0x41')](',\x20');
                    _0x4b9552['send'](options[_0x2469('0xb5')][_0x2469('0x13')](_0x2469('0x4b'), _0x64ccc4));
                    _0x3f6b5b(_0x17ef6a);
                } else {
                    _0x7fccd5[_0x2469('0x56')]();
                    utils[_0x2469('0x57')](_0x49961d[_0x2469('0x18')], settings);
                    _0x3f6b5b(_0x49961d);
                }
            } else {
                return _0xf9ea53(_0x2469('0x88') + _0x49961d[_0x2469('0x58')] + '\x20in\x20channel\x20' + _0x49961d[_0x2469('0x54')]);
            }
        });
    }
};