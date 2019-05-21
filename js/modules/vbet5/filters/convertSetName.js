/* global VBET5 */
/**
 * @ngdoc filter
 * @name vbet5.filter:convertSetName
 * @description changes set name according to sport type
 *
 */
VBET5.filter('convertSetName', function () {
    'use strict';
    /*    var replacements = {
        "844set0": "0 Half",
        "844set1": "1st Half",
        "844set2": "2nd Half",
        "1308102967set1": "1st Half",//e-fpptball
        "1308102967set2": "2nd Half",
        "844additional_time1": "Additional Time1",
        "844additional_time2": "Additional Time2",
        "844penalty": "Penalty",
        "844finished": "Finished",
        "finished": "Finished",
        "844wait": "Waiting",
        "844timeout": "Timeout",
        "858set": "Round",
        "858set0": "Round 0",
        "858set1": "Round 1",
        "858set2": "Round 2",
        "858set3": "Round 3",
        "858set4": "Round 4",
        "858set5": "Round 5",
        "858set6": "Round 6",
        "858set7": "Round 7",
        "858set8": "Round 8",
        "858set9": "Round 9",
        "858set10": "Round 10",
        "858set11": "Round 11",
        "858set12": "Round 12",
        "848set": "Set",
        "848set0": "Set 0",
        "848set1": "Set 1",
        "848set2": "Set 2",
        "848set3": "Set 3",
        "848set4": "Set 4",
        "848set5": "Set 5",
        "848set6": "Set 6",
        "848set7": "Set 7",
        "848set8": "Set 8",
        "848set9": "Set 9",
        "848set10": "Set 10",
        "846set": "Period",
        "846set0": "Period 0",
        "846set1": "Period 1",
        "846set2": "Period 2",
        "846set3": "Period 3",
        "846set4": "Period 4",
        "1528092937set": "Quarter",
        "1528092937set0": "Quarter 0",
        "1528092937set1": "Quarter 1",
        "1528092937set2": "Quarter 2",
        "1528092937set3": "Quarter 3",
        "1528092937set4": "Quarter 4",
        "1528092937set5": "OT",
        "850set": "Quarter",
        "850set0": "Quarter 0",
        "850set1": "Quarter 1",
        "850set2": "Quarter 2",
        "850set3": "Quarter 3",
        "850set4": "Quarter 4",
        "850set5": "OT",
        "852set": "Set",
        "852set0": "Set 0",
        "852set1": "Set 1",
        "852set2": "Set 2",
        "852set3": "Set 3",
        "852set4": "Set 4",
        "852set5": "Set 5",
        "852set6": "Set 6",
        "852set7": "Set 7",
        "852set8": "Set 8",
        "852set9": "Set 9",
        "852set10": "Set 10",
        "854set": "Half",
        "854set0": "0 Half",
        "854set1": "1st Half",
        "854set2": "2nd Half",
        "856set": "Inning",
        "856set0": "Inning 0",
        "856set1": "1st Inning",
        "856set2": "2nd Inning",
        "856set3": "3rd Inning",
        "856set4": "4th Inning",
        "856set5": "5th Inning",
        "856set6": "6th Inning",
        "856set7": "7th Inning",
        "856set8": "8th Inning",
        "856set9": "9th Inning",
        "856set10": "10th Inning",
        "856set11": "11th Inning",
        "856set12": "12th Inning",
        "856set13": "13th Inning",
        "856set14": "14th Inning",
        "856set15": "15th Inning",
        "856set16": "16th Inning",
        "856set17": "17th Inning",
        "856set18": "18th Inning",
        "856set19": "19th Inning",
        "856set20": "20th Inning",
        "856set21": "21th Inning",
        "856set22": "22th Inning",
        "856set23": "23th Inning",
        "856set24": "24th Inning",
        "856set25": "25th Inning",
        "862set": "Set",
        "862set1": "Set 1",
        "862set2": "Set 2",
        "862set3": "Set 3",
        "864set": "Period",
        "864set1": "Period 1",
        "864set2": "Period 2",
        "864set3": "Period 3",
        "866set": "Time",
        "866set0": "Time 0",
        "866set1": "1st Half",//"Time 1",
        "866set2": "2nd Half",//"Time 2",
        "36116468set": "Time",
        "36116468set1": "1st Half",//"Time 1",
        "36116468set2": "2nd Half",//"Time 2",
        "868set": "Frame",
        "868set0": "Frame 0",
        "868set1": "Frame 1",
        "868set2": "Frame 2",
        "868set3": "Frame 3",
        "868set4": "Frame 4",
        "868set5": "Frame 5",
        "868set6": "Frame 6",
        "868set7": "Frame 7",
        "868set8": "Frame 8",
        "868set9": "Frame 9",
        "868set10": "Frame 10",
        "868set11": "Frame 11",
        "868set12": "Frame 12",
        "868set13": "Frame 13",
        "868set14": "Frame 14",
        "868set15": "Frame 15",
        "868set16": "Frame 16",
        "868set17": "Frame 17",
        "868set18": "Frame 18",
        "868set19": "Frame 19",
        "868set20": "Frame 20",
        "868set21": "Frame 21",
        "868set22": "Frame 22",
        "868set23": "Frame 23",
        "868set24": "Frame 24",
        "868set25": "Frame 25",
        "868set26": "Frame 26",
        "868set27": "Frame 27",
        "868set28": "Frame 28",
        "868set29": "Frame 29",
        "868set30": "Frame 30",
        "868set31": "Frame 31",
        "868set32": "Frame 32",
        "868set33": "Frame 33",
        "868set34": "Frame 34",
        "868set35": "Frame 35",
        "868set36": "Frame 36",
        "868set37": "Frame 37",
        "868set38": "Frame 38",
        "868set39": "Frame 39",
        "870set": "Quarter",
        "870set0": "Quarter 0",
        "870set1": "Quarter 1",
        "870set2": "Quarter 2",
        "870set3": "Quarter 3",
        "870set4": "Quarter 4",
        "886set": "Quarter",
        "886set0": "Quarter 0",
        "886set1": "Quarter 1",
        "886set2": "Quarter 2",
        "886set3": "Quarter 3",
        "886set4": "Quarter 4",
        "872set": "Period",
        "872set0": "Period 0",
        "872set1": "Period 1",
        "872set2": "Period 2",
        "872set3": "Period 3",
        "872set4": "Period 4",
        "872set5": "Period 5",
        "872set6": "Period 6",
        "874set": "Time",
        "874set0": "Time 0",
        "874set1": "1st Half",//"Time 1"
        "874set2": "2nd Half",//"Time 2",
        "878set1": "Period 1",
        "878set2": "Period 2",
        "884set": "Set",
        "884set1": "Set 1",
        "884set2": "Set 2",
        "884set3": "Set 3",
        "884set4": "Set 4",
        "884set5": "Set 5",
        "884set6": "Set 6",
        "884set7": "Set 7",
        "900set": "Game",
        "900set1": "Game 1",
        "900set2": "Game 2",
        "900set3": "Game 3",
        "197402321set": "Game",
        "197402321set0": " 0",
        "197402321set1": "Game 1",
        "197402321set2": "Game 2",
        "197402321set3": "Game 3",
        "197402321set4": "Game 4",
        "197402321set5": "Game 5",
        "108949150set": "Quarter",
        "108949150set1": "Quarter 1",
        "108949150set2": "Quarter 2",
        "108949150set3": "Quarter 3",
        "108949150set4": "Quarter 4",
        "set": "Set",
        "set0": "Set 0",
        "set1": "Set 1",
        "set2": "Set 2",
        "set3": "Set 3",
        "set4": "Set 4",
        "set5": "Set 5",
        "set6": "Set 6",
        "set7": "Set 7",
        "set8": "Set 8",
        "set9": "Set 9",
        "set10": "Set 10",
        "set11": "Set 11",
        "set12": "Set 12",
        "set13": "Set 13",
        "set14": "Set 14",
        "set15": "Set 15",
        "set16": "Set 16",
        "set17": "Set 17",
        "set18": "Set 18",
        "set19": "Set 19",
        "set20": "Set 20"
        };*/
    var replacements = {
        "Soccerset0": "1st Half",
        "Soccerset1": "1st Half",
        "Soccerset2": "2nd Half",
        "Soccerset3": "Extra Time 1st Half",
        "Soccerset4": "Extra Time 2nd Half",
        "Soccerset5": "penalties",
        "CyberFootballset0": "1st Half",
        "CyberFootballset1": "1st Half",
        "CyberFootballset2": "2nd Half",
        "CyberFootballset3": "Extra Time 1st Half",
        "CyberFootballset4": "Extra Time 2nd Half",
        "CyberFootballset5": "penalties",
        "Socceradditional_time1": "Additional Time1",
        "Socceradditional_time2": "Additional Time2",
        "Soccerpenalty": "Penalty",
        "Soccerfinished": "Finished",
        "finished": "Finished",
        "Soccerwait": "Waiting",
        "Soccertimeout": "Timeout",
        "Boxingset": "Round",
        "Boxingset0": "Round 0",
        "Boxingset1": "Round 1",
        "Boxingset2": "Round 2",
        "Boxingset3": "Round 3",
        "Boxingset4": "Round 4",
        "Boxingset5": "Round 5",
        "Boxingset6": "Round 6",
        "Boxingset7": "Round 7",
        "Boxingset8": "Round 8",
        "Boxingset9": "Round 9",
        "Boxingset10": "Round 10",
        "Boxingset11": "Round 11",
        "Boxingset12": "Round 12",
        "Tennisset": "Set",
        "Tennisset0": "Set 0",
        "Tennisset1": "Set 1",
        "Tennisset2": "Set 2",
        "Tennisset3": "Set 3",
        "Tennisset4": "Set 4",
        "Tennisset5": "Set 5",
        "Tennisset6": "Set 6",
        "Tennisset7": "Set 7",
        "Tennisset8": "Set 8",
        "Tennisset9": "Set 9",
        "Tennisset10": "Set 10",
        "IceHockeyset": "Period",
        "IceHockeyset0": "Period 0",
        "IceHockeyset1": "Period 1",
        "IceHockeyset2": "Period 2",
        "IceHockeyset3": "Period 3",
        "IceHockeyset4": "Period 4",
        "E-IceHockeyset": "Period",
        "E-IceHockeyset0": "Period 0",
        "E-IceHockeyset1": "Period 1",
        "E-IceHockeyset2": "Period 2",
        "E-IceHockeyset3": "Period 3",
        "E-IceHockeyset4": "Period 4",
        "EBasketballset": "Quarter",
        "EBasketballset0": "Quarter 0",
        "EBasketballset1": "Quarter 1",
        "EBasketballset2": "Quarter 2",
        "EBasketballset3": "Quarter 3",
        "EBasketballset4": "Quarter 4",
        "EBasketballset5": "OT",
        "Basketballset": "Quarter",
        "Basketballset0": "Quarter 0",
        "Basketballset1": "Quarter 1",
        "Basketballset2": "Quarter 2",
        "Basketballset3": "Quarter 3",
        "Basketballset4": "Quarter 4",
        "Basketballset5": "OT",
        "Volleyballset": "Set",
        "Volleyballset0": "Set 0",
        "Volleyballset1": "Set 1",
        "Volleyballset2": "Set 2",
        "Volleyballset3": "Set 3",
        "Volleyballset4": "Set 4",
        "Volleyballset5": "Set 5",
        "Volleyballset6": "Set 6",
        "Volleyballset7": "Set 7",
        "Volleyballset8": "Set 8",
        "Volleyballset9": "Set 9",
        "Volleyballset10": "Set 10",
        "Handballset": "Half",
        "Handballset0": "0 Half",
        "Handballset1": "1st Half",
        "Handballset2": "2nd Half",
        "Baseballset": "Inning",
        "Baseballset0": "Inning 0",
        "Baseballset1": "1st Inning",
        "Baseballset2": "2nd Inning",
        "Baseballset3": "3rd Inning",
        "Baseballset4": "4th Inning",
        "Baseballset5": "5th Inning",
        "Baseballset6": "6th Inning",
        "Baseballset7": "7th Inning",
        "Baseballset8": "8th Inning",
        "Baseballset9": "9th Inning",
        "Baseballset10": "Extra Inning",
        "Baseballset11": "11th Inning",
        "Baseballset12": "12th Inning",
        "Baseballset13": "13th Inning",
        "Baseballset14": "14th Inning",
        "Baseballset15": "15th Inning",
        "Baseballset16": "16th Inning",
        "Baseballset17": "17th Inning",
        "Baseballset18": "18th Inning",
        "Baseballset19": "19th Inning",
        "Baseballset20": "20th Inning",
        "Baseballset21": "21th Inning",
        "Baseballset22": "22th Inning",
        "Baseballset23": "23th Inning",
        "Baseballset24": "24th Inning",
        "Baseballset25": "25th Inning",
        "BeachVolleyballset": "Set",
        "BeachVolleyballset1": "Set 1",
        "BeachVolleyballset2": "Set 2",
        "BeachVolleyballset3": "Set 3",
        "BeachSoccerset": "Period",
        "BeachSoccerset1": "Period 1",
        "BeachSoccerset2": "Period 2",
        "BeachSoccerset3": "Period 3",
        "BeachFootballset":  "Period",
        "BeachFootballset1": "Period 1",
        "BeachFootballset2": "Period 2",
        "BeachFootballset3": "Period 3",
        "Rugbyset": "Time",
        "Rugbyset0": "Time 0",
        "Rugbyset1": "1st Half",//"Time 1",
        "Rugbyset2": "2nd Half",//"Time 2",
        "RugbyLeagueset": "Half",
        "RugbyLeagueset1": "1st Half",
        "RugbyLeagueset2": "2nd Half",
        "RugbyUnionset": "Half",
        "RugbyUnionset1": "1st Half",
        "RugbyUnionset2": "2nd Half",
        "Snookerset": "Frame",
        "Snookerset0": "Frame 0",
        "Snookerset1": "Frame 1",
        "Snookerset2": "Frame 2",
        "Snookerset3": "Frame 3",
        "Snookerset4": "Frame 4",
        "Snookerset5": "Frame 5",
        "Snookerset6": "Frame 6",
        "Snookerset7": "Frame 7",
        "Snookerset8": "Frame 8",
        "Snookerset9": "Frame 9",
        "Snookerset10": "Frame 10",
        "Snookerset11": "Frame 11",
        "Snookerset12": "Frame 12",
        "Snookerset13": "Frame 13",
        "Snookerset14": "Frame 14",
        "Snookerset15": "Frame 15",
        "Snookerset16": "Frame 16",
        "Snookerset17": "Frame 17",
        "Snookerset18": "Frame 18",
        "Snookerset19": "Frame 19",
        "Snookerset20": "Frame 20",
        "Snookerset21": "Frame 21",
        "Snookerset22": "Frame 22",
        "Snookerset23": "Frame 23",
        "Snookerset24": "Frame 24",
        "Snookerset25": "Frame 25",
        "Snookerset26": "Frame 26",
        "Snookerset27": "Frame 27",
        "Snookerset28": "Frame 28",
        "Snookerset29": "Frame 29",
        "Snookerset30": "Frame 30",
        "Snookerset31": "Frame 31",
        "Snookerset32": "Frame 32",
        "Snookerset33": "Frame 33",
        "Snookerset34": "Frame 34",
        "Snookerset35": "Frame 35",
        "Snookerset36": "Frame 36",
        "Snookerset37": "Frame 37",
        "Snookerset38": "Frame 38",
        "Snookerset39": "Frame 39",
        "AmericanFootballset": "Quarter",
        "AmericanFootballset0": "Quarter 0",
        "AmericanFootballset1": "Quarter 1",
        "AmericanFootballset2": "Quarter 2",
        "AmericanFootballset3": "Quarter 3",
        "AmericanFootballset4": "Quarter 4",
        "AustralianFootballset": "Quarter",
        "AustralianFootballset0": "Quarter 0",
        "AustralianFootballset1": "Quarter 1",
        "AustralianFootballset2": "Quarter 2",
        "AustralianFootballset3": "Quarter 3",
        "AustralianFootballset4": "Quarter 4",
        "WaterPoloset": "Period",
        "WaterPoloset0": "Period 0",
        "WaterPoloset1": "Period 1",
        "WaterPoloset2": "Period 2",
        "WaterPoloset3": "Period 3",
        "WaterPoloset4": "Period 4",
        "WaterPoloset5": "Period 5",
        "WaterPoloset6": "Period 6",
        "MiniSoccerset": "Time",
        "MiniSoccerset0": "Time 0",
        "MiniSoccerset1": "1st Half",//"Time 1"
        "MiniSoccerset2": "2nd Half",//"Time 2",
        "BallHockeyset": "Period",
        "BallHockeyset1": "Period 1",
        "BallHockeyset2": "Period 2",
        "TableTennisset": "Set",
        "TableTennisset1": "Set 1",
        "TableTennisset2": "Set 2",
        "TableTennisset3": "Set 3",
        "TableTennisset4": "Set 4",
        "TableTennisset5": "Set 5",
        "TableTennisset6": "Set 6",
        "TableTennisset7": "Set 7",
        "Badmintonset": "Game",
        "Badmintonset1": "Game 1",
        "Badmintonset2": "Game 2",
        "Badmintonset3": "Game 3",
        "Squashset": "Game",
        "Squashset0": " 0",
        "Squashset1": "Game 1",
        "Squashset2": "Game 2",
        "Squashset3": "Game 3",
        "Squashset4": "Game 4",
        "Squashset5": "Game 5",
        "Netballset": "Quarter",
        "Netballset1": "Quarter 1",
        "Netballset2": "Quarter 2",
        "Netballset3": "Quarter 3",
        "Netballset4": "Quarter 4",
        "Dotaset": "Game",
        "Dotaset1": "Game-1",
        "Dotaset2": "Game-2",
        "Dotaset3": "Game-3",
        "Dotaset4": "Game-4",
        "Dotaset5": "Game-5",
        "Dotaset6": "Game-6",
        "Dotaset7": "Game-7",
        "Dota2set": "Game",
        "Dota2set1": "Game-1",
        "Dota2set2": "Game-2",
        "Dota2set3": "Game-3",
        "Dota2set4": "Game-4",
        "Dota2set5": "Game-5",
        "Dota2set6": "Game-6",
        "Dota2set7": "Game-7",
        "CounterStrikeset": "Map",
        "CounterStrikeset1": "Map 1",
        "CounterStrikeset2": "Map 2",
        "CounterStrikeset3": "Map 3",
        "CounterStrikeset4": "Map 4",
        "CounterStrikeset5": "Map 5",
        "CounterStrikeset6": "Map 6",
        "CounterStrikeset7": "Map 7",
        "Hearthstoneset": "Game",
        "Hearthstoneset1": "Game-1",
        "Hearthstoneset2": "Game-2",
        "Hearthstoneset3": "Game-3",
        "Hearthstoneset4": "Game-4",
        "Hearthstoneset5": "Game-5",
        "Hearthstoneset6": "Game-6",
        "Hearthstoneset7": "Game-7",
        "HeroesOfTheStorm": "Game",
        "HeroesOfTheStorm1": "Game-1",
        "HeroesOfTheStorm2": "Game-2",
        "HeroesOfTheStorm3": "Game-3",
        "HeroesOfTheStorm4": "Game-4",
        "HeroesOfTheStorm5": "Game-5",
        "HeroesOfTheStorm6": "Game-6",
        "HeroesOfTheStorm7": "Game-7",
        "LeagueOfLegendsset": "Game",
        "LeagueOfLegendsset1": "Game-1",
        "LeagueOfLegendsset2": "Game-2",
        "LeagueOfLegendsset3": "Game-3",
        "LeagueOfLegendsset4": "Game-4",
        "LeagueOfLegendsset5": "Game-5",
        "LeagueOfLegendsset6": "Game-6",
        "LeagueOfLegendsset7": "Game-7",
        "LeagueofLegendsset": "Game",
        "LeagueofLegendsset1": "Game-1",
        "LeagueofLegendsset2": "Game-2",
        "LeagueofLegendsset3": "Game-3",
        "LeagueofLegendsset4": "Game-4",
        "LeagueofLegendsset5": "Game-5",
        "LeagueofLegendsset6": "Game-6",
        "LeagueofLegendsset7": "Game-7",
        "StarCraftset": "Map",
        "StarCraftset1": "Map 1",
        "StarCraftset2": "Map 2",
        "StarCraftset3": "Map 3",
        "StarCraftset4": "Map 4",
        "StarCraftset5": "Map 5",
        "StarCraftset6": "Map 6",
        "StarCraftset7": "Map 7",
        "StarCraft2set": "Map",
        "StarCraft2set1": "Map 1",
        "StarCraft2set2": "Map 2",
        "StarCraft2set3": "Map 3",
        "StarCraft2set4": "Map 4",
        "StarCraft2set5": "Map 5",
        "StarCraft2set6": "Map 6",
        "StarCraft2set7": "Map 7",
        "set": "Set",
        "set0": "Set 0",
        "set1": "Set 1",
        "set2": "Set 2",
        "set3": "Set 3",
        "set4": "Set 4",
        "set5": "Set 5",
        "set6": "Set 6",
        "set7": "Set 7",
        "set8": "Set 8",
        "set9": "Set 9",
        "set10": "Set 10",
        "set11": "Set 11",
        "set12": "Set 12",
        "set13": "Set 13",
        "set14": "Set 14",
        "set15": "Set 15",
        "set16": "Set 16",
        "set17": "Set 17",
        "set18": "Set 18",
        "set19": "Set 19",
        "set20": "Set 20",
        "Futsalset": "Half",
        "Futsalset1": "1st Half",
        "Futsalset2": "2nd Half",
        "Futsalset3": "Extra Time 1st Half",
        "Futsalset4": "Extra Time 2nd Half",
        "Futsalset5": "penalties",
        "MortalKombatXLset": "Game",
        "MortalKombatXLset1": "Game 1",
        "MortalKombatXLset2": "Game 2",
        "MortalKombatXLset3": "Game 3",
        "MortalKombatXLset4": "Game 4",
        "MortalKombatXLset5": "Game 5",
        "StreetFighterVset": "Game",
        "StreetFighterVset1": "Game 1",
        "StreetFighterVset2": "Game 2",
        "StreetFighterVset3": "Game 3",
        "StreetFighterVset4": "Game 4",
        "StreetFighterVset5": "Game 5",
        "Cricketset": "Innings",
        "Cricketset0": "Innings 0",
        "Cricketset1": "1st Innings",
        "Cricketset2": "2nd Innings",
        "Floorballset": "Period",
        "Floorballset0": "Period 0",
        "Floorballset1": "Period 1",
        "Floorballset2": "Period 2",
        "Floorballset3": "Period 3",
        "Floorballset4": "Period 4",
        "Hockeyset": "Period",
        "Hockeyset0": "Period 0",
        "Hockeyset1": "Period 1",
        "Hockeyset2": "Period 2",
        "Hockeyset3": "Period 3",
        "Hockeyset4": "Period 4",
        "Dartsset1": "Leg 1",
        "Dartsset2": "Leg 2",
        "Dartsset3": "Leg 3",
        "Dartsset4": "Leg 4",
        "Dartsset5": "Leg 5"
    };
    return function (rawName, sportAlias) {
        if (replacements[sportAlias + rawName] !== undefined) {
            return replacements[sportAlias + rawName];
        }
        if (replacements[rawName] !== undefined) {
            return replacements[rawName];
        }
        return rawName;
    };
});

