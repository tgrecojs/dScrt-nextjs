/* eslint-disable no-unused-vars */
import { compose } from 'redux'

import testData from './test-data'

export const testArray = [
  {
    previousPrice: 2695.4778071496326,
    dayIndex: 90,
    timestamp: 1622040861000,
    currentPrice: 2771.395193353322,
    dailyPriceVolatility: 2.8164723153098192,
    priceChangeInDollars: 75.9173862036896
  },
  {
    previousPrice: 2640.1596323488234,
    dayIndex: 89,
    timestamp: 1621987200000,
    currentPrice: 2695.4778071496326,
    dailyPriceVolatility: 2.09525871553438,
    priceChangeInDollars: 55.318174800809174
  },
  {
    previousPrice: 2120.0373745099428,
    dayIndex: 88,
    timestamp: 1621900800000,
    currentPrice: 2640.1596323488234,
    dailyPriceVolatility: 24.53363625059249,
    priceChangeInDollars: 520.1222578388806
  },
  {
    previousPrice: 2306.371266867117,
    dayIndex: 87,
    timestamp: 1621814400000,
    currentPrice: 2120.0373745099428,
    dailyPriceVolatility: -8.079093554190981,
    priceChangeInDollars: -186.33389235717414
  },
  {
    previousPrice: 2419.1032171150196,
    dayIndex: 86,
    timestamp: 1621728000000,
    currentPrice: 2306.371266867117,
    dailyPriceVolatility: -4.660071941136303,
    priceChangeInDollars: -112.73195024790266
  },
  {
    previousPrice: 2778.279660560299,
    dayIndex: 85,
    timestamp: 1621641600000,
    currentPrice: 2419.1032171150196,
    dailyPriceVolatility: -12.928016158490099,
    priceChangeInDollars: -359.17644344527935
  },
  {
    previousPrice: 2505.014945945662,
    dayIndex: 84,
    timestamp: 1621555200000,
    currentPrice: 2778.279660560299,
    dailyPriceVolatility: 10.908705956302285,
    priceChangeInDollars: 273.2647146146369
  },
  {
    previousPrice: 3399.0492796569383,
    dayIndex: 83,
    timestamp: 1621468800000,
    currentPrice: 2505.014945945662,
    dailyPriceVolatility: -26.30248225767148,
    priceChangeInDollars: -894.0343337112763
  },
  {
    previousPrice: 3288.2298872378637,
    dayIndex: 82,
    timestamp: 1621382400000,
    currentPrice: 3399.0492796569383,
    dailyPriceVolatility: 3.370183844176529,
    priceChangeInDollars: 110.81939241907457
  },
  {
    previousPrice: 3602.0048969299023,
    dayIndex: 81,
    timestamp: 1621296000000,
    currentPrice: 3288.2298872378637,
    dailyPriceVolatility: -8.711121130331568,
    priceChangeInDollars: -313.77500969203857
  },
  {
    previousPrice: 3659.9218442136184,
    dayIndex: 80,
    timestamp: 1621209600000,
    currentPrice: 3602.0048969299023,
    dailyPriceVolatility: -1.5824640456539676,
    priceChangeInDollars: -57.91694728371613
  },
  {
    previousPrice: 4088.73170832043,
    dayIndex: 79,
    timestamp: 1621123200000,
    currentPrice: 3659.9218442136184,
    dailyPriceVolatility: -10.48760091629876,
    priceChangeInDollars: -428.80986410681135
  },
  {
    previousPrice: 3750.3415950592753,
    dayIndex: 78,
    timestamp: 1621036800000,
    currentPrice: 4088.73170832043,
    dailyPriceVolatility: 9.022914438166163,
    priceChangeInDollars: 338.3901132611545
  },
  {
    previousPrice: 3906.108903329409,
    dayIndex: 77,
    timestamp: 1620950400000,
    currentPrice: 3750.3415950592753,
    dailyPriceVolatility: -3.9877871335682364,
    priceChangeInDollars: -155.76730827013353
  },
  {
    previousPrice: 4182.790285752286,
    dayIndex: 76,
    timestamp: 1620864000000,
    currentPrice: 3906.108903329409,
    dailyPriceVolatility: -6.614756263667548,
    priceChangeInDollars: -276.68138242287705
  },
  {
    previousPrice: 3979.6086519212827,
    dayIndex: 75,
    timestamp: 1620777600000,
    currentPrice: 4182.790285752286,
    dailyPriceVolatility: 5.105568200353339,
    priceChangeInDollars: 203.18163383100318
  },
  {
    previousPrice: 3932.754068170969,
    dayIndex: 74,
    timestamp: 1620691200000,
    currentPrice: 3979.6086519212827,
    dailyPriceVolatility: 1.19139368844655,
    priceChangeInDollars: 46.85458375031385
  },
  {
    previousPrice: 3912.7429165968124,
    dayIndex: 73,
    timestamp: 1620604800000,
    currentPrice: 3932.754068170969,
    dailyPriceVolatility: 0.5114353792393173,
    priceChangeInDollars: 20.01115157415643
  },
  {
    previousPrice: 3493.534500000208,
    dayIndex: 72,
    timestamp: 1620518400000,
    currentPrice: 3912.7429165968124,
    dailyPriceVolatility: 11.999549928491602,
    priceChangeInDollars: 419.20841659660437
  },
  {
    previousPrice: 3495.0758690360576,
    dayIndex: 71,
    timestamp: 1620432000000,
    currentPrice: 3493.534500000208,
    dailyPriceVolatility: -0.04410116099352927,
    priceChangeInDollars: -1.5413690358495842
  },
  {
    previousPrice: 3524.562728476055,
    dayIndex: 70,
    timestamp: 1620345600000,
    currentPrice: 3495.0758690360576,
    dailyPriceVolatility: -0.836610431182388,
    priceChangeInDollars: -29.48685943999726
  },
  {
    previousPrice: 3245.663148933579,
    dayIndex: 69,
    timestamp: 1620259200000,
    currentPrice: 3524.562728476055,
    dailyPriceVolatility: 8.592992148125822,
    priceChangeInDollars: 278.89957954247575
  },
  {
    previousPrice: 3439.8550695192603,
    dayIndex: 68,
    timestamp: 1620172800000,
    currentPrice: 3245.663148933579,
    dailyPriceVolatility: -5.645351814569926,
    priceChangeInDollars: -194.19192058568115
  },
  {
    previousPrice: 2953.2973480804735,
    dayIndex: 67,
    timestamp: 1620086400000,
    currentPrice: 3439.8550695192603,
    dailyPriceVolatility: 16.475067156885846,
    priceChangeInDollars: 486.55772143878676
  },
  {
    previousPrice: 2944.9169473185057,
    dayIndex: 66,
    timestamp: 1620000000000,
    currentPrice: 2953.2973480804735,
    dailyPriceVolatility: 0.2845717183840659,
    priceChangeInDollars: 8.380400761967849
  },
  {
    previousPrice: 2776.70371169874,
    dayIndex: 65,
    timestamp: 1619913600000,
    currentPrice: 2944.9169473185057,
    dailyPriceVolatility: 6.058018898849521,
    priceChangeInDollars: 168.21323561976578
  },
  {
    previousPrice: 2757.497552304977,
    dayIndex: 64,
    timestamp: 1619827200000,
    currentPrice: 2776.70371169874,
    dailyPriceVolatility: 0.6965068519356807,
    priceChangeInDollars: 19.206159393762846
  },
  {
    previousPrice: 2748.7845851218613,
    dayIndex: 63,
    timestamp: 1619740800000,
    currentPrice: 2757.497552304977,
    dailyPriceVolatility: 0.316975263550145,
    priceChangeInDollars: 8.71296718311578
  },
  {
    previousPrice: 2647.158189660288,
    dayIndex: 62,
    timestamp: 1619654400000,
    currentPrice: 2748.7845851218613,
    dailyPriceVolatility: 3.839075271682768,
    priceChangeInDollars: 101.62639546157334
  },
  {
    previousPrice: 2532.3868028851084,
    dayIndex: 61,
    timestamp: 1619568000000,
    currentPrice: 2647.158189660288,
    dailyPriceVolatility: 4.53214282448567,
    priceChangeInDollars: 114.77138677517951
  },
  {
    previousPrice: 2307.35532084471,
    dayIndex: 60,
    timestamp: 1619481600000,
    currentPrice: 2532.3868028851084,
    dailyPriceVolatility: 9.752788398364906,
    priceChangeInDollars: 225.03148204039826
  },
  {
    previousPrice: 2212.8437976342047,
    dayIndex: 59,
    timestamp: 1619395200000,
    currentPrice: 2307.35532084471,
    dailyPriceVolatility: 4.271043591578834,
    priceChangeInDollars: 94.5115232105054
  },
  {
    previousPrice: 2364.2312036020908,
    dayIndex: 58,
    timestamp: 1619308800000,
    currentPrice: 2212.8437976342047,
    dailyPriceVolatility: -6.403240331877673,
    priceChangeInDollars: -151.38740596788602
  },
  {
    previousPrice: 2426.0711497906045,
    dayIndex: 57,
    timestamp: 1619222400000,
    currentPrice: 2364.2312036020908,
    dailyPriceVolatility: -2.548974962826263,
    priceChangeInDollars: -61.83994618851375
  },
  {
    previousPrice: 2373.501344298211,
    dayIndex: 56,
    timestamp: 1619136000000,
    currentPrice: 2426.0711497906045,
    dailyPriceVolatility: 2.214863101665416,
    priceChangeInDollars: 52.5698054923937
  },
  {
    previousPrice: 2324.2846872281943,
    dayIndex: 55,
    timestamp: 1619049600000,
    currentPrice: 2373.501344298211,
    dailyPriceVolatility: 2.117496937464635,
    priceChangeInDollars: 49.21665707001648
  },
  {
    previousPrice: 2168.032726735651,
    dayIndex: 54,
    timestamp: 1618963200000,
    currentPrice: 2324.2846872281943,
    dailyPriceVolatility: 7.207084956130144,
    priceChangeInDollars: 156.25196049254328
  },
  {
    previousPrice: 2245.7607533508544,
    dayIndex: 53,
    timestamp: 1618876800000,
    currentPrice: 2168.032726735651,
    dailyPriceVolatility: -3.4611000525869433,
    priceChangeInDollars: -77.72802661520336
  },
  {
    previousPrice: 2345.266962776132,
    dayIndex: 52,
    timestamp: 1618790400000,
    currentPrice: 2245.7607533508544,
    dailyPriceVolatility: -4.242852136009727,
    priceChangeInDollars: -99.50620942527758
  },
  {
    previousPrice: 2424.5538447081194,
    dayIndex: 51,
    timestamp: 1618704000000,
    currentPrice: 2345.266962776132,
    dailyPriceVolatility: -3.2701637913730224,
    priceChangeInDollars: -79.28688193198741
  },
  {
    previousPrice: 2514.1684155812304,
    dayIndex: 50,
    timestamp: 1618617600000,
    currentPrice: 2424.5538447081194,
    dailyPriceVolatility: -3.5643821757419434,
    priceChangeInDollars: -89.614570873111
  },
  {
    previousPrice: 2429.6615277515734,
    dayIndex: 49,
    timestamp: 1618531200000,
    currentPrice: 2514.1684155812304,
    dailyPriceVolatility: 3.478134170723783,
    priceChangeInDollars: 84.50688782965699
  },
  {
    previousPrice: 2304.3435163110134,
    dayIndex: 48,
    timestamp: 1618444800000,
    currentPrice: 2429.6615277515734,
    dailyPriceVolatility: 5.438338969581218,
    priceChangeInDollars: 125.31801144055999
  },
  {
    previousPrice: 2142.476275865736,
    dayIndex: 47,
    timestamp: 1618358400000,
    currentPrice: 2304.3435163110134,
    dailyPriceVolatility: 7.555147390365834,
    priceChangeInDollars: 161.86724044527728
  },
  {
    previousPrice: 2150.2651427927744,
    dayIndex: 46,
    timestamp: 1618272000000,
    currentPrice: 2142.476275865736,
    dailyPriceVolatility: -0.3622282095370831,
    priceChangeInDollars: -7.788866927038271
  },
  {
    previousPrice: 2142.7960653929085,
    dayIndex: 45,
    timestamp: 1618185600000,
    currentPrice: 2150.2651427927744,
    dailyPriceVolatility: 0.3485668804649574,
    priceChangeInDollars: 7.46907739986591
  },
  {
    previousPrice: 2069.6677960855295,
    dayIndex: 44,
    timestamp: 1618099200000,
    currentPrice: 2142.7960653929085,
    dailyPriceVolatility: 3.533333680201737,
    priceChangeInDollars: 73.12826930737901
  },
  {
    previousPrice: 2081.3540625398964,
    dayIndex: 43,
    timestamp: 1618012800000,
    currentPrice: 2069.6677960855295,
    dailyPriceVolatility: -0.5614742183800301,
    priceChangeInDollars: -11.686266454366887
  },
  {
    previousPrice: 1989.1480619041722,
    dayIndex: 42,
    timestamp: 1617926400000,
    currentPrice: 2081.3540625398964,
    dailyPriceVolatility: 4.635451850047664,
    priceChangeInDollars: 92.2060006357242
  },
  {
    previousPrice: 2115.0554517461082,
    dayIndex: 41,
    timestamp: 1617840000000,
    currentPrice: 1989.1480619041722,
    dailyPriceVolatility: -5.952912002283049,
    priceChangeInDollars: -125.90738984193604
  },
  {
    previousPrice: 2097.7963827792596,
    dayIndex: 40,
    timestamp: 1617753600000,
    currentPrice: 2115.0554517461082,
    dailyPriceVolatility: 0.8227237451893694,
    priceChangeInDollars: 17.259068966848645
  },
  {
    previousPrice: 2077.755212422407,
    dayIndex: 39,
    timestamp: 1617667200000,
    currentPrice: 2097.7963827792596,
    dailyPriceVolatility: 0.9645587813728524,
    priceChangeInDollars: 20.04117035685249
  },
  {
    previousPrice: 2016.6672472930366,
    dayIndex: 38,
    timestamp: 1617580800000,
    currentPrice: 2077.755212422407,
    dailyPriceVolatility: 3.0291544235355965,
    priceChangeInDollars: 61.08796512937056
  },
  {
    previousPrice: 2134.101788297294,
    dayIndex: 37,
    timestamp: 1617494400000,
    currentPrice: 2016.6672472930366,
    dailyPriceVolatility: -5.502761941732568,
    priceChangeInDollars: -117.43454100425765
  },
  {
    previousPrice: 1970.4711995232753,
    dayIndex: 36,
    timestamp: 1617408000000,
    currentPrice: 2134.101788297294,
    dailyPriceVolatility: 8.304135011646286,
    priceChangeInDollars: 163.63058877401886
  },
  {
    previousPrice: 1915.8325358462234,
    dayIndex: 35,
    timestamp: 1617321600000,
    currentPrice: 1970.4711995232753,
    dailyPriceVolatility: 2.851954054163612,
    priceChangeInDollars: 54.63866367705191
  },
  {
    previousPrice: 1840.294951985396,
    dayIndex: 34,
    timestamp: 1617235200000,
    currentPrice: 1915.8325358462234,
    dailyPriceVolatility: 4.104645496056705,
    priceChangeInDollars: 75.53758386082745
  },
  {
    previousPrice: 1817.626388088868,
    dayIndex: 33,
    timestamp: 1617148800000,
    currentPrice: 1840.294951985396,
    dailyPriceVolatility: 1.2471520024730003,
    priceChangeInDollars: 22.668563896527985
  },
  {
    previousPrice: 1689.0367982059097,
    dayIndex: 32,
    timestamp: 1617062400000,
    currentPrice: 1817.626388088868,
    dailyPriceVolatility: 7.613190548574537,
    priceChangeInDollars: 128.5895898829583
  },
  {
    previousPrice: 1713.8378756834459,
    dayIndex: 31,
    timestamp: 1616976000000,
    currentPrice: 1689.0367982059097,
    dailyPriceVolatility: -1.4471075607222172,
    priceChangeInDollars: -24.801077477536182
  },
  {
    previousPrice: 1700.3668693581185,
    dayIndex: 30,
    timestamp: 1616889600000,
    currentPrice: 1713.8378756834459,
    dailyPriceVolatility: 0.7922411667790628,
    priceChangeInDollars: 13.47100632532738
  },
  {
    previousPrice: 1587.2979641585232,
    dayIndex: 29,
    timestamp: 1616803200000,
    currentPrice: 1700.3668693581185,
    dailyPriceVolatility: 7.123357287208308,
    priceChangeInDollars: 113.06890519959529
  },
  {
    previousPrice: 1581.631055931366,
    dayIndex: 28,
    timestamp: 1616716800000,
    currentPrice: 1587.2979641585232,
    dailyPriceVolatility: 0.3582952045551544,
    priceChangeInDollars: 5.666908227157137
  },
  {
    previousPrice: 1673.8591835627929,
    dayIndex: 27,
    timestamp: 1616630400000,
    currentPrice: 1581.631055931366,
    dailyPriceVolatility: -5.50990958720435,
    priceChangeInDollars: -92.22812763142679
  },
  {
    previousPrice: 1686.8911971580417,
    dayIndex: 26,
    timestamp: 1616544000000,
    currentPrice: 1673.8591835627929,
    dailyPriceVolatility: -0.7725461853855345,
    priceChangeInDollars: -13.032013595248827
  },
  {
    previousPrice: 1790.3780747526928,
    dayIndex: 25,
    timestamp: 1616457600000,
    currentPrice: 1686.8911971580417,
    dailyPriceVolatility: -5.780168951686133,
    priceChangeInDollars: -103.4868775946511
  },
  {
    previousPrice: 1817.8601431294944,
    dayIndex: 24,
    timestamp: 1616371200000,
    currentPrice: 1790.3780747526928,
    dailyPriceVolatility: -1.511781226992002,
    priceChangeInDollars: -27.482068376801635
  },
  {
    previousPrice: 1817.1329628084297,
    dayIndex: 23,
    timestamp: 1616284800000,
    currentPrice: 1817.8601431294944,
    dailyPriceVolatility: 0.040018002862091166,
    priceChangeInDollars: 0.7271803210646794
  },
  {
    previousPrice: 1780.1596459528505,
    dayIndex: 22,
    timestamp: 1616198400000,
    currentPrice: 1817.1329628084297,
    dailyPriceVolatility: 2.076966351845868,
    priceChangeInDollars: 36.97331685557924
  },
  {
    previousPrice: 1828.7548332342565,
    dayIndex: 21,
    timestamp: 1616112000000,
    currentPrice: 1780.1596459528505,
    dailyPriceVolatility: -2.6572827805169834,
    priceChangeInDollars: -48.59518728140597
  },
  {
    previousPrice: 1808.5512173614395,
    dayIndex: 20,
    timestamp: 1616025600000,
    currentPrice: 1828.7548332342565,
    dailyPriceVolatility: 1.1171160473018142,
    priceChangeInDollars: 20.203615872816954
  },
  {
    previousPrice: 1791.047851830107,
    dayIndex: 19,
    timestamp: 1615939200000,
    currentPrice: 1808.5512173614395,
    dailyPriceVolatility: 0.9772695639285931,
    priceChangeInDollars: 17.50336553133252
  },
  {
    previousPrice: 1866.0715447008808,
    dayIndex: 18,
    timestamp: 1615852800000,
    currentPrice: 1791.047851830107,
    dailyPriceVolatility: -4.02040817158485,
    priceChangeInDollars: -75.02369287077386
  },
  {
    previousPrice: 1927.7207203999014,
    dayIndex: 17,
    timestamp: 1615766400000,
    currentPrice: 1866.0715447008808,
    dailyPriceVolatility: -3.198034603592973,
    priceChangeInDollars: -61.64917569902059
  },
  {
    previousPrice: 1770.9361793697751,
    dayIndex: 16,
    timestamp: 1615680000000,
    currentPrice: 1927.7207203999014,
    dailyPriceVolatility: 8.853201084068505,
    priceChangeInDollars: 156.78454103012632
  },
  {
    previousPrice: 1826.0574768119818,
    dayIndex: 15,
    timestamp: 1615593600000,
    currentPrice: 1770.9361793697751,
    dailyPriceVolatility: -3.018595972041367,
    priceChangeInDollars: -55.121297442206696
  },
  {
    previousPrice: 1802.3110916881178,
    dayIndex: 14,
    timestamp: 1615507200000,
    currentPrice: 1826.0574768119818,
    dailyPriceVolatility: 1.3175519605564971,
    priceChangeInDollars: 23.746385123864002
  },
  {
    previousPrice: 1869.3311016255,
    dayIndex: 13,
    timestamp: 1615420800000,
    currentPrice: 1802.3110916881178,
    dailyPriceVolatility: -3.585240189878833,
    priceChangeInDollars: -67.02000993738216
  },
  {
    previousPrice: 1837.5330305439452,
    dayIndex: 12,
    timestamp: 1615334400000,
    currentPrice: 1869.3311016255,
    dailyPriceVolatility: 1.7304761630402878,
    priceChangeInDollars: 31.79807108155478
  },
  {
    previousPrice: 1727.463096224567,
    dayIndex: 11,
    timestamp: 1615248000000,
    currentPrice: 1837.5330305439452,
    dailyPriceVolatility: 6.371767626176217,
    priceChangeInDollars: 110.06993431937826
  },
  {
    previousPrice: 1661.9279698998157,
    dayIndex: 10,
    timestamp: 1615161600000,
    currentPrice: 1727.463096224567,
    dailyPriceVolatility: 3.943319296124597,
    priceChangeInDollars: 65.53512632475122
  },
  {
    previousPrice: 1539.0484290947375,
    dayIndex: 9,
    timestamp: 1615075200000,
    currentPrice: 1661.9279698998157,
    dailyPriceVolatility: 7.984124377252738,
    priceChangeInDollars: 122.87954080507825
  },
  {
    previousPrice: 1546.4996211167372,
    dayIndex: 8,
    timestamp: 1614988800000,
    currentPrice: 1539.0484290947375,
    dailyPriceVolatility: -0.4818101420949076,
    priceChangeInDollars: -7.451192021999759
  },
  {
    previousPrice: 1579.4271687603093,
    dayIndex: 7,
    timestamp: 1614902400000,
    currentPrice: 1546.4996211167372,
    dailyPriceVolatility: -2.084777841919542,
    priceChangeInDollars: -32.9275476435721
  },
  {
    previousPrice: 1497.0891042633873,
    dayIndex: 6,
    timestamp: 1614816000000,
    currentPrice: 1579.4271687603093,
    dailyPriceVolatility: 5.49987734614065,
    priceChangeInDollars: 82.33806449692202
  },
  {
    previousPrice: 1570.3996896340539,
    dayIndex: 5,
    timestamp: 1614729600000,
    currentPrice: 1497.0891042633873,
    dailyPriceVolatility: -4.66827558962075,
    priceChangeInDollars: -73.31058537066656
  },
  {
    previousPrice: 1416.661552837565,
    dayIndex: 4,
    timestamp: 1614643200000,
    currentPrice: 1570.3996896340539,
    dailyPriceVolatility: 10.852142947519976,
    priceChangeInDollars: 153.7381367964888
  },
  {
    previousPrice: 1480.1295768477528,
    dayIndex: 3,
    timestamp: 1614556800000,
    currentPrice: 1416.661552837565,
    dailyPriceVolatility: -4.288004577636792,
    priceChangeInDollars: -63.46802401018772
  },
  {
    previousPrice: 1450.988746804119,
    dayIndex: 2,
    timestamp: 1614470400000,
    currentPrice: 1480.1295768477528,
    dailyPriceVolatility: 2.0083429391039727,
    priceChangeInDollars: 29.14083004363374
  },
  {
    previousPrice: 1468.8601037286776,
    dayIndex: 1,
    timestamp: 1614384000000,
    currentPrice: 1450.988746804119,
    dailyPriceVolatility: -1.2166820297720926,
    priceChangeInDollars: -17.87135692455854
  },
  {
    previousPrice: 0,
    dayIndex: 0,
    timestamp: 1614297600000,
    currentPrice: 1468.8601037286776,
    dailyPriceVolatility: 0,
    priceChangeInDollars: 0
  }
]
const stdev = 6.61

const sum = (x = 0, y = 0) => x + y
const squareNumber = (x) => x * x
const getDailyVolatility = ({ dailyPriceVolatility }) => dailyPriceVolatility

const sumVolatilityChanges = (arr = []) =>
  arr.map(getDailyVolatility).reduce(sum, 0) //?

const getAverage = (length) => (sum) => sum / length
const getNinetyDayAvg = getAverage(90)
const averageVolatilityChange = (arr = []) =>
  getNinetyDayAvg(sumVolatilityChanges(arr))
const subtract = (x) => (y) => y - x
const subtractAvgVolatilityChange = averageVolatilityChange(testArray)

const withRoi = ({
  leverageRatio = 2,
  investmentValue = 0,
  dailyPriceVolatility,
  ...rest
} = {}) => ({
  ...rest,
  tokenRoi: investmentValue * ((dailyPriceVolatility / 100) * leverageRatio)
})
const withVolatilityChange =
  (averageVolatility = 0) =>
  (obj) => ({
    ...obj,
    deviationAmount: subtract(averageVolatility)(obj.dailyPriceVolatility),
    averageVolatility,
    stdev: averageVolatility
  })

const withAverage = (avg) => (data) =>
  data.reduceRight((acc, val) => {
    if (val.previousPrice === 0) return acc
    return acc.concat(withVolatilityChange(avg)(val))
  }, [])
const trace = (label) => (val) => {
  console.log(`${label}::`, val)
  return val
}

const aggVolDecay = (data = []) =>
  data.reduce((acc, val, index) => {
    if (acc.length <= 0) {
      const newVal = {
        combinedVol: val.dailyPriceVolatility
      }
      return newVal
    } else {
      const newVal = {
        ...val,
        combinedVol: acc.combinedVal
      }
      return { combinedVol: acc.combinedVol + val.dailyPriceVolatility }
    }
  }, [])

const withVolStd = (data = []) =>
  data.reduce((acc, val) => {
    console.log({ acc, val })
    if (acc.length <= 0) {
      const obj = {
        combinedDailyVolatility: val.dailyPriceVolatility,
        volSquared: squareNumber(val.deviationAmount),
        length: val.length
      }
      return obj
    } else {
      const newAcc = {
        combinedDailyVolatility:
          val.dailyPriceVolatility + acc.combinedDailyVolatility,
        volSquared: squareNumber(val.deviationAmount) + acc.volSquared,
        length: val.length
      }
      console.log({ newAcc })
      return newAcc
    }
  }, []) //?
const toDecimal = (x) => x / 100

const buildVolDecayArray = compose(
  (x) => x,
  (data) =>
    data.map((x) => ({
      ...x,
      fliRoi: 1000 * ((x.dailyPriceVolatility / 100) * 1.7)
    })),
  withAverage(subtractAvgVolatilityChange)
)
const evaluateInvestmentDecay =
  (investment = 100) =>
  (decay) =>
    decay * investment + investment
const calculateReturnWithVolDecay = (volDecayStd) => (percent, lr) => {
  console.log({ volDecayStd, percent, lr })
  const res = Math.pow(1 + toDecimal(percent), lr)
  const powTimesVol = res * volDecayStd - 1
  const times100 = powTimesVol * 100
  console.log({ res, powTimesVol, times100 })
  return times100
}
const getStd = ({ volSquared, length }) =>
  Math.sqrt(volSquared / length - 1) / 10

const defaultInputs = {
  leverageRatio: 2,
  percentChange: 0.25
}
const fliRoiWithDecay =
  (holdingDecay) =>
  ({ leverageRatio, percentChange } = defaultInputs) =>
    Math.pow(1 + percentChange, holdingDecay) * leverageRatio

const buildVolDecayStats = (x) =>
  compose(
    (x) => ({
      ...x,
      calculateHoldingVol: ({ ratio, holdingPeriod }) =>
        Math.exp(
          ((ratio - Math.pow(ratio, 2)) *
            Math.pow(x.annualizedVol / 100, 2) *
            (holdingPeriod / 365)) /
            2
        )
    }),
    (x) => ({
      ...x,
      annualizedVol: Math.sqrt(365) * (x.volDecayStd * 10)
    }),
    trace('after running getStd'),
    (x) => ({
      ...x,
      calculateDecay: (percent, lr) =>
        calculateReturnWithVolDecay(x.volDecayStd)(percent, lr)
    }),
    (x) => ({ ...x, volDecayStd: getStd(x) }),
    trace('after running withVolStd'),
    withVolStd,
    (data) => data.map((x) => ({ ...x, length: data.length }))
  )(buildVolDecayArray(x))

//?
// const x = (percentChange, lr) =>  Math.pow((1 + percentChange), lr);

// const getStd = x => l => (Math.sqrt(x / l - 1)) / 10;

// const getDecay = (change, x) => vol => ((Math.pow((1 + change), x) * vol) - 1) * 100;

// const calcDecay = x(.25, 2) * getStd(plusSq)(testData.length)

// const decay = calcDecay - 1; //?

// const evaluateInvestmentDecay = (investment = 100) => decay => (decay * investment) + investment; //?
// evaluateInvestmentDecay(1000)(decay) //?
// const output  = { fliReturn: x => ((testDecay * x)  + x) } //?
//output.fliReturn(100) //?

// const calculateVolDecay = (investment, ration) =>
export {
  buildVolDecayArray,
  buildVolDecayStats,
  calculateReturnWithVolDecay,
  fliRoiWithDecay
}
