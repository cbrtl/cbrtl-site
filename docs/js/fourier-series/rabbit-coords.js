const rabbitCoords = [
  [591.7699890136719, 329.3479919433594],
  [589.9680938720703, 325.9975051879883],
  [588.0187530517578, 322.73028564453125],
  [585.9670104980469, 319.52628326416016],
  [583.8399200439453, 316.37171936035156],
  [581.6529541015625, 313.2583312988281],
  [579.4177398681641, 310.1794128417969],
  [577.1409606933594, 307.13109588623047],
  [574.8284301757812, 304.1097640991211],
  [572.4841766357422, 301.1129913330078],
  [570.1114501953125, 298.1387176513672],
  [567.7132263183594, 295.18495178222656],
  [565.2906036376953, 292.2511444091797],
  [562.8460540771484, 289.3356246948242],
  [560.3796234130859, 286.4385528564453],
  [557.8934173583984, 283.55848693847656],
  [555.3875274658203, 280.69544982910156],
  [552.8622283935547, 277.84960174560547],
  [550.3184814453125, 275.0201873779297],
  [547.7564239501953, 272.2073211669922],
  [545.1753692626953, 269.4119415283203],
  [542.5757293701172, 266.63379669189453],
  [539.9574584960938, 263.87318420410156],
  [537.3195495605469, 261.13138580322266],
  [534.6615905761719, 258.40899658203125],
  [531.9829864501953, 255.7069091796875],
  [529.2821350097656, 253.02704620361328],
  [526.5579833984375, 250.3708953857422],
  [523.8089752197266, 247.74049377441406],
  [521.0325469970703, 245.13902282714844],
  [518.2257690429688, 242.57037353515625],
  [515.3851623535156, 240.03916931152344],
  [512.5063323974609, 237.55154418945312],
  [509.5823211669922, 235.11727142333984],
  [506.6038360595703, 232.74996948242188],
  [503.5583801269531, 230.46959686279297],
  [500.4252624511719, 228.31163024902344],
  [497.1678161621094, 226.34718322753906],
  [493.7825622558594, 224.6119613647461],
  [492.69834899902344, 221.96148681640625],
  [493.7472686767578, 218.30425262451172],
  [494.7184143066406, 214.62559509277344],
  [495.61077880859375, 210.92705917358398],
  [496.4236755371094, 207.21021270751953],
  [497.1562805175781, 203.47673797607422],
  [497.80809020996094, 199.7282943725586],
  [498.3784637451172, 195.9665870666504],
  [498.86680603027344, 192.19335556030273],
  [499.27252197265625, 188.41036224365234],
  [499.5957489013672, 184.61944961547852],
  [499.83648681640625, 180.82239151000977],
  [499.99464416503906, 177.0209732055664],
  [500.0703125, 173.21706008911133],
  [500.0634460449219, 169.41239166259766],
  [499.9732666015625, 165.6087646484375],
  [499.7975769042969, 161.80812454223633],
  [499.53330993652344, 158.01264572143555],
  [499.1785888671875, 154.22458267211914],
  [498.7319030761719, 150.4461784362793],
  [498.18931579589844, 146.6804428100586],
  [497.5507354736328, 142.92977905273438],
  [496.81236267089844, 139.19744873046875],
  [495.9735565185547, 135.4864158630371],
  [495.03257751464844, 131.79999923706055],
  [493.9867706298828, 128.14188385009766],
  [492.8355407714844, 124.51564025878906],
  [491.5776062011719, 120.92498779296875],
  [490.2119140625, 117.37393188476562],
  [488.7375030517578, 113.86659812927246],
  [487.1536865234375, 110.40732383728027],
  [485.4600067138672, 107.00050926208496],
  [483.6560974121094, 103.65074348449707],
  [481.7417755126953, 100.36286163330078],
  [479.71690368652344, 97.14182472229004],
  [477.58079528808594, 93.99356079101562],
  [475.3332214355469, 90.92378616333008],
  [472.97422790527344, 87.93892097473145],
  [470.50074768066406, 85.04811477661133],
  [467.9110412597656, 82.26112365722656],
  [465.1986541748047, 79.59341430664062],
  [462.34852600097656, 77.07383728027344],
  [459.3865661621094, 76.79265022277832],
  [456.60414123535156, 79.38683700561523],
  [453.95973205566406, 82.12188339233398],
  [451.43516540527344, 84.96809768676758],
  [449.02330017089844, 87.91043663024902],
  [446.72052001953125, 90.93902397155762],
  [444.52467346191406, 94.04593467712402],
  [442.4348449707031, 97.22517776489258],
  [440.45057678222656, 100.47135162353516],
  [438.57159423828125, 103.77960395812988],
  [436.79771423339844, 107.14531707763672],
  [435.1287536621094, 110.56435966491699],
  [433.56439208984375, 114.03242874145508],
  [432.10435485839844, 117.5457534790039],
  [430.7480926513672, 121.10040283203125],
  [429.4956512451172, 124.69296646118164],
  [428.3461608886719, 128.31986236572266],
  [427.29811096191406, 131.97726821899414],
  [426.35113525390625, 135.6621971130371],
  [425.50413513183594, 139.37134170532227],
  [424.7550048828125, 143.1014633178711],
  [424.1035614013672, 146.8499412536621],
  [423.5469665527344, 150.61367416381836],
  [423.0843048095703, 154.39009857177734],
  [422.7136993408203, 158.17667388916016],
  [422.43267822265625, 161.97095108032227],
  [422.23968505859375, 165.77070999145508],
  [422.13330078125, 169.57399368286133],
  [422.1102752685547, 173.3786277770996],
  [422.17051696777344, 177.182861328125],
  [422.31398010253906, 180.9848747253418],
  [422.54034423828125, 184.7828598022461],
  [422.8495178222656, 188.5749740600586],
  [423.24131774902344, 192.35943222045898],
  [423.71533203125, 196.13450622558594],
  [424.2715606689453, 199.89831924438477],
  [424.90936279296875, 203.64920043945312],
  [425.6277770996094, 207.38543319702148],
  [426.4259338378906, 211.10549545288086],
  [427.3031005859375, 214.80764770507812],
  [428.25836181640625, 218.49051666259766],
  [427.3074035644531, 220.9688949584961],
  [423.6183776855469, 221.89886474609375],
  [419.98291015625, 223.01944732666016],
  [416.5785675048828, 224.04639434814453],
  [415.766357421875, 220.32939910888672],
  [414.87623596191406, 216.6303482055664],
  [413.908203125, 212.95082092285156],
  [412.86244201660156, 209.29271697998047],
  [411.73895263671875, 205.6576042175293],
  [410.5379180908203, 202.0474624633789],
  [409.25970458984375, 198.46393966674805],
  [407.904541015625, 194.90883255004883],
  [406.4722900390625, 191.38394927978516],
  [404.9639587402344, 187.89104080200195],
  [403.38023376464844, 184.43172073364258],
  [401.72166442871094, 181.0076141357422],
  [399.98907470703125, 177.62039184570312],
  [398.18328857421875, 174.27154159545898],
  [396.30529022216797, 170.96267700195312],
  [394.3558349609375, 167.69534301757812],
  [392.33556365966797, 164.47145080566406],
  [390.24525451660156, 161.29232788085938],
  [388.0840606689453, 158.1610984802246],
  [385.85008239746094, 155.0812759399414],
  [383.54359436035156, 152.05543518066406],
  [381.16393280029297, 149.0867919921875],
  [378.7098846435547, 146.17937469482422],
  [376.18206787109375, 143.3358039855957],
  [373.5796585083008, 140.56041717529297],
  [370.9030227661133, 137.8565673828125],
  [368.1526870727539, 135.2275733947754],
  [365.3288116455078, 132.6779441833496],
  [362.43196868896484, 130.21137619018555],
  [359.4636001586914, 127.83154296875],
  [356.4247817993164, 125.5423583984375],
  [353.31690979003906, 123.34781646728516],
  [350.1416778564453, 121.25193405151367],
  [346.9010543823242, 119.25875091552734],
  [343.5971221923828, 117.37229537963867],
  [340.2323303222656, 115.5967845916748],
  [336.80919647216797, 113.93648719787598],
  [333.32989501953125, 112.39714813232422],
  [329.7979736328125, 110.98306465148926],
  [326.2161560058594, 109.70036506652832],
  [322.5872802734375, 108.55772399902344],
  [318.9145965576172, 107.56514358520508],
  [315.20101165771484, 106.7388858795166],
  [311.44881439208984, 106.11209297180176],
  [308.8360824584961, 107.51678657531738],
  [307.85225677490234, 111.19154167175293],
  [307.0589294433594, 114.91230773925781],
  [306.42540740966797, 118.66366958618164],
  [305.9386901855469, 122.4369125366211],
  [305.5896453857422, 126.22542190551758],
  [305.37266540527344, 130.02379608154297],
  [305.2838592529297, 133.82723999023438],
  [305.31995391845703, 137.6317024230957],
  [305.47815704345703, 141.4329719543457],
  [305.7559280395508, 145.22738647460938],
  [306.15081787109375, 149.01143264770508],
  [306.6604690551758, 152.7819061279297],
  [307.28240966796875, 156.53529357910156],
  [308.0142593383789, 160.26882553100586],
  [308.8539352416992, 163.97970962524414],
  [309.79933166503906, 167.6650390625],
  [310.8469467163086, 171.32259368896484],
  [311.99451446533203, 174.9500732421875],
  [313.2400207519531, 178.54506301879883],
  [314.5793228149414, 182.1061897277832],
  [316.0115509033203, 185.63109588623047],
  [317.53189849853516, 189.1187744140625],
  [319.1389694213867, 192.5673828125],
  [320.8291702270508, 195.97595977783203],
  [322.59947967529297, 199.3437614440918],
  [324.4475860595703, 202.66939163208008],
  [326.37071990966797, 205.95227813720703],
  [328.36515045166016, 209.19231796264648],
  [330.4300079345703, 212.38800048828125],
  [332.5636215209961, 215.53810119628906],
  [334.7651672363281, 218.64116668701172],
  [337.0335693359375, 221.69564056396484],
  [339.3678207397461, 224.70012664794922],
  [341.7667541503906, 227.6532745361328],
  [344.22943115234375, 230.55343627929688],
  [346.75452423095703, 233.3995590209961],
  [349.3404312133789, 236.19063568115234],
  [351.9856643676758, 238.92547607421875],
  [354.68875885009766, 241.6029815673828],
  [357.4482727050781, 244.22225952148438],
  [360.26294708251953, 246.78250885009766],
  [363.1308135986328, 249.28256225585938],
  [366.0506591796875, 251.7217788696289],
  [369.0210876464844, 254.09912872314453],
  [372.0404968261719, 256.4140396118164],
  [375.1073303222656, 258.66575622558594],
  [378.22000885009766, 260.85343170166016],
  [380.69374084472656, 263.20086669921875],
  [379.46192169189453, 266.80030822753906],
  [378.3757858276367, 270.446533203125],
  [377.4318313598633, 274.1321029663086],
  [375.6545867919922, 275.2999267578125],
  [372.5706558227539, 273.07167053222656],
  [369.44158935546875, 270.9069061279297],
  [366.2693099975586, 268.8063659667969],
  [363.05530548095703, 266.7704162597656],
  [359.8009490966797, 264.79942321777344],
  [356.5078430175781, 262.8937530517578],
  [353.1776123046875, 261.0539093017578],
  [349.81165313720703, 259.28014373779297],
  [346.4115447998047, 257.57286834716797],
  [342.97875213623047, 255.93235778808594],
  [339.5146255493164, 254.3588409423828],
  [336.02088165283203, 252.8527069091797],
  [332.4987564086914, 251.4141387939453],
  [328.9495544433594, 250.04327392578125],
  [325.37474060058594, 248.74059295654297],
  [321.7757568359375, 247.50648498535156],
  [318.1539306640625, 246.3406753540039],
  [314.5111389160156, 245.24346160888672],
  [310.84818267822266, 244.21477508544922],
  [307.1665496826172, 243.25475311279297],
  [303.4676818847656, 242.36348724365234],
  [299.75281524658203, 241.54170989990234],
  [296.02327728271484, 240.7888946533203],
  [292.28053283691406, 240.1048812866211],
  [288.5259094238281, 239.48969268798828],
  [284.7606430053711, 238.94316864013672],
  [280.9860153198242, 238.4661102294922],
  [277.2032165527344, 238.0577850341797],
  [273.4136657714844, 237.71782684326172],
  [269.61871337890625, 237.44605255126953],
  [265.8194351196289, 237.242919921875],
  [262.01725006103516, 237.1081314086914],
  [258.21307373046875, 237.04084014892578],
  [254.40848541259766, 237.0408172607422],
  [250.60442352294922, 237.1088638305664],
  [246.8021240234375, 237.24429321289062],
  [243.00277709960938, 237.44742584228516],
  [239.20773315429688, 237.71876525878906],
  [235.41825103759766, 238.05899810791016],
  [231.63538360595703, 238.467529296875],
  [227.86048126220703, 238.94454193115234],
  [224.09507751464844, 239.49012756347656],
  [220.3404083251953, 240.10474395751953],
  [216.5977554321289, 240.7886199951172],
  [212.8683319091797, 241.54122924804688],
  [209.15322494506836, 242.36270904541016],
  [205.45416259765625, 243.25292205810547],
  [201.77227783203125, 244.2119140625],
  [198.1092414855957, 245.24000549316406],
  [194.46612930297852, 246.3369903564453],
  [190.8443832397461, 247.50245666503906],
  [187.24542236328125, 248.73624420166016],
  [183.67041397094727, 250.0383529663086],
  [180.12081146240234, 251.40853118896484],
  [176.59822845458984, 252.84657287597656],
  [173.10417556762695, 254.35220336914062],
  [169.63986587524414, 255.92560577392578],
  [166.20705032348633, 257.5662307739258],
  [162.8069190979004, 259.2737350463867],
  [159.44118881225586, 261.0477066040039],
  [156.11133575439453, 262.8878479003906],
  [152.81861877441406, 264.79393005371094],
  [149.56449127197266, 266.76563262939453],
  [146.35101318359375, 268.80224609375],
  [143.1794204711914, 270.9035873413086],
  [140.05118942260742, 273.0692443847656],
  [136.96804809570312, 275.29866790771484],
  [133.93157577514648, 277.5913772583008],
  [130.94353485107422, 279.94677734375],
  [128.00559616088867, 282.3642044067383],
  [125.11932754516602, 284.84315490722656],
  [122.286376953125, 287.3830108642578],
  [119.50863265991211, 289.98292541503906],
  [116.78802871704102, 292.64241790771484],
  [114.12619018554688, 295.36073303222656],
  [111.52447891235352, 298.13709259033203],
  [108.98500633239746, 300.9702606201172],
  [106.50942039489746, 303.85941314697266],
  [104.09948348999023, 306.8035659790039],
  [101.75742149353027, 309.80200958251953],
  [99.4850082397461, 312.85355377197266],
  [97.28361129760742, 315.95677947998047],
  [95.15507888793945, 319.11026763916016],
  [93.10168838500977, 322.3132858276367],
  [91.1251163482666, 325.56436920166016],
  [89.2267074584961, 328.86138916015625],
  [87.40849876403809, 332.2032928466797],
  [85.67253303527832, 335.5888442993164],
  [84.01957130432129, 339.01564025878906],
  [81.0597915649414, 338.14598083496094],
  [77.53653335571289, 336.72025299072266],
  [73.83245849609375, 335.86808013916016],
  [70.04056739807129, 335.60765838623047],
  [66.25723361968994, 335.96659088134766],
  [62.58784866333008, 336.9554977416992],
  [59.129950523376465, 338.53299713134766],
  [55.964308738708496, 340.6367645263672],
  [53.15388584136963, 343.19632720947266],
  [50.75110721588135, 346.1420364379883],
  [48.801222801208496, 349.40513610839844],
  [47.346455574035645, 352.9169616699219],
  [46.42640781402588, 356.6053009033203],
  [46.07333183288574, 360.38990783691406],
  [46.30313777923584, 364.1840362548828],
  [47.10414123535156, 367.89988708496094],
  [48.44703388214111, 371.45618438720703],
  [50.29326915740967, 374.77913665771484],
  [52.60092735290527, 377.79996490478516],
  [55.326446533203125, 380.44970703125],
  [58.41928672790527, 382.65919494628906],
  [61.819549560546875, 384.3575897216797],
  [65.45083141326904, 385.47840118408203],
  [69.21833801269531, 385.975830078125],
  [69.95492553710938, 388.5342483520508],
  [69.11178207397461, 392.2442855834961],
  [68.30713653564453, 395.96228790283203],
  [67.80151081085205, 399.7322692871094],
  [67.42512035369873, 403.51824951171875],
  [67.08882141113281, 407.30816650390625],
  [66.78462600708008, 411.1007843017578],
  [66.51183605194092, 414.89573669433594],
  [66.2671070098877, 418.69256591796875],
  [66.05113983154297, 422.4910888671875],
  [65.86307334899902, 426.2911682128906],
  [65.70242977142334, 430.092529296875],
  [65.57104301452637, 433.89503479003906],
  [65.4674596786499, 437.6984558105469],
  [65.39369678497314, 441.5025177001953],
  [65.34940528869629, 445.3070373535156],
  [65.33625316619873, 449.1117858886719],
  [65.35424613952637, 452.9165344238281],
  [65.40585327148438, 456.7209167480469],
  [65.49087429046631, 460.52484130859375],
  [65.61128902435303, 464.3276672363281],
  [65.76922035217285, 468.1291198730469],
  [65.96556663513184, 471.9288330078125],
  [66.20236206054688, 475.7264404296875],
  [66.48174953460693, 479.52088928222656],
  [66.80604934692383, 483.3118591308594],
  [67.17771911621094, 487.0984344482422],
  [67.59940242767334, 490.8798370361328],
  [68.07553672790527, 494.6545104980469],
  [68.60784149169922, 498.42181396484375],
  [69.20180702209473, 502.1800537109375],
  [69.86060333251953, 505.9271240234375],
  [70.58980369567871, 509.6614227294922],
  [71.3951301574707, 513.3799285888672],
  [72.28275108337402, 517.0796203613281],
  [73.25912666320801, 520.7568359375],
  [74.33378982543945, 524.4066314697266],
  [75.5146713256836, 528.0234222412109],
  [76.81242561340332, 531.5998382568359],
  [78.23865127563477, 535.126953125],
  [79.8069896697998, 538.5932769775391],
  [81.53173446655273, 541.9843444824219],
  [83.42925643920898, 545.2814788818359],
  [85.51545715332031, 548.4625244140625],
  [87.806884765625, 551.4986419677734],
  [90.3194351196289, 554.3544921875],
  [93.06248664855957, 556.9893341064453],
  [96.03924369812012, 559.3563842773438],
  [99.24054527282715, 561.4092712402344],
  [102.64403533935547, 563.1060638427734],
  [106.21396827697754, 564.4160461425781],
  [109.90599250793457, 565.3279113769531],
  [113.67342758178711, 565.8479766845703],
  [117.47380447387695, 566],
  [121.2785415649414, 566],
  [125.08334732055664, 566],
  [128.88799285888672, 566],
  [132.6926383972168, 566],
  [136.49734115600586, 566],
  [140.3021697998047, 566],
  [144.10682678222656, 566],
  [147.91149520874023, 566],
  [151.71632385253906, 566],
  [155.5211067199707, 566],
  [159.3260040283203, 566],
  [163.1306381225586, 566],
  [166.93545532226562, 566],
  [170.7401580810547, 566],
  [174.54478073120117, 566],
  [178.34976959228516, 566],
  [182.15438079833984, 566],
  [185.9591178894043, 566],
  [189.76417541503906, 566],
  [193.56878662109375, 566],
  [197.37330627441406, 566],
  [201.1781463623047, 566],
  [204.98283767700195, 566],
  [208.78767776489258, 566],
  [212.59280395507812, 566],
  [216.39752960205078, 566],
  [220.20220947265625, 566],
  [224.0069122314453, 566],
  [227.81172943115234, 566],
  [231.61634063720703, 566],
  [235.42127227783203, 566],
  [239.22613525390625, 566],
  [243.03104400634766, 566],
  [246.83592987060547, 566],
  [250.6407012939453, 566],
  [254.4453125, 566],
  [258.25006103515625, 566],
  [262.05492401123047, 566],
  [265.85955810546875, 566],
  [269.6642608642578, 566],
  [273.4691925048828, 566],
  [277.27428436279297, 566],
  [281.07896423339844, 566],
  [284.88387298583984, 566],
  [288.6886901855469, 566],
  [292.4935989379883, 566],
  [296.2984619140625, 566],
  [300.10323333740234, 566],
  [301.6942138671875, 563.8909454345703],
  [301.0841751098633, 560.1390686035156],
  [299.91234588623047, 556.523193359375],
  [298.2071533203125, 553.1259002685547],
  [296.03831481933594, 550.0034942626953],
  [293.4917297363281, 547.1798706054688],
  [290.65233612060547, 544.6495819091797],
  [287.5906295776367, 542.3926239013672],
  [284.36119842529297, 540.3826293945312],
  [281.0046691894531, 538.592041015625],
  [277.5510940551758, 536.9959564208984],
  [274.02313232421875, 535.5724029541016],
  [270.4365539550781, 534.3026580810547],
  [266.8045425415039, 533.1706085205078],
  [263.13561248779297, 532.1630706787109],
  [259.4374313354492, 531.2692413330078],
  [255.71585845947266, 530.4791412353516],
  [251.9748077392578, 529.7855834960938],
  [248.21833038330078, 529.1814270019531],
  [244.44896697998047, 528.661865234375],
  [240.66976165771484, 528.2226867675781],
  [236.8822021484375, 527.8600463867188],
  [233.0885772705078, 527.5717468261719],
  [229.29019165039062, 527.3558197021484],
  [225.48841857910156, 527.2110290527344],
  [221.68458557128906, 527.1372375488281],
  [217.8802032470703, 527.1350402832031],
  [220.769287109375, 525.8008422851562],
  [224.23746490478516, 524.2372589111328],
  [227.65636444091797, 522.5678405761719],
  [231.02262115478516, 520.7943267822266],
  [234.33271026611328, 518.9186401367188],
  [237.5838623046875, 516.9425201416016],
  [240.77305603027344, 514.8678436279297],
  [243.89717864990234, 512.6965789794922],
  [246.9537353515625, 510.43028259277344],
  [249.9394760131836, 508.0717010498047],
  [252.85174560546875, 505.6230773925781],
  [255.68743133544922, 503.0868835449219],
  [258.4444274902344, 500.4651794433594],
  [261.1198043823242, 497.7605285644531],
  [263.7112731933594, 494.9751281738281],
  [266.2164077758789, 492.1115417480469],
  [268.6323471069336, 489.1726989746094],
  [270.9570999145508, 486.1607971191406],
  [273.1880798339844, 483.07904052734375],
  [275.32276916503906, 479.9298553466797],
  [277.35931396484375, 476.7162628173828],
  [279.2957000732422, 473.44114685058594],
  [281.1296615600586, 470.1079406738281],
  [282.85945892333984, 466.719482421875],
  [284.4833068847656, 463.27874755859375],
  [285.9994201660156, 459.7892150878906],
  [287.4061965942383, 456.2542724609375],
  [288.7021713256836, 452.67735290527344],
  [289.8860397338867, 449.0619354248047],
  [290.95672607421875, 445.4112243652344],
  [291.91324615478516, 441.72901916503906],
  [292.75482177734375, 438.0185241699219],
  [293.48072052001953, 434.2839050292969],
  [294.0902328491211, 430.52850341796875],
  [294.5834274291992, 426.7558898925781],
  [294.9603271484375, 422.9698181152344],
  [295.2211151123047, 419.17408752441406],
  [295.3661804199219, 415.372314453125],
  [295.3963928222656, 411.568115234375],
  [295.31163787841797, 407.7645568847656],
  [295.11141204833984, 403.96539306640625],
  [294.79505157470703, 400.1741943359375],
  [294.3626251220703, 396.3942337036133],
  [293.8139953613281, 392.629150390625],
  [293.1493682861328, 388.8827667236328],
  [292.36913299560547, 385.15901947021484],
  [291.47386169433594, 381.4614791870117],
  [290.46424102783203, 377.79346466064453],
  [289.3410949707031, 374.15836334228516],
  [288.1055679321289, 370.55997467041016],
  [286.75882720947266, 367.00159454345703],
  [285.3023147583008, 363.4868621826172],
  [283.7375183105469, 360.01898193359375],
  [282.06617736816406, 356.60150146484375],
  [280.2898483276367, 353.23719024658203],
  [278.4104309082031, 349.9293670654297],
  [276.4299621582031, 346.68119049072266],
  [274.35018157958984, 343.49556732177734],
  [272.1729202270508, 340.3751983642578],
  [269.90106201171875, 337.3235397338867],
  [267.53646087646484, 334.34281158447266],
  [265.08179473876953, 331.43621826171875],
  [262.5393295288086, 328.6062545776367],
  [259.91123962402344, 325.8552780151367],
  [257.2002487182617, 323.1860580444336],
  [254.40894317626953, 320.60113525390625],
  [251.5397491455078, 318.1027069091797],
  [248.59497833251953, 315.69315338134766],
  [245.57794952392578, 313.3755416870117],
  [242.4911346435547, 311.15135955810547],
  [239.3373031616211, 309.0227584838867],
  [236.11991119384766, 306.9922332763672],
  [232.84156799316406, 305.0615692138672],
  [229.50534057617188, 303.2327117919922],
  [226.114501953125, 301.50762939453125],
  [222.67163848876953, 299.8877868652344],
  [219.18080139160156, 298.3752212524414],
  [215.6444854736328, 296.97135162353516],
  [212.06671905517578, 295.67791748046875],
  [208.4503288269043, 294.4956970214844],
  [204.7991600036621, 293.4259490966797],
  [201.1166114807129, 292.4696578979492],
  [197.40623092651367, 291.62757873535156],
  [193.67177200317383, 290.90039825439453],
  [189.9167022705078, 290.2885513305664],
  [186.1447525024414, 289.7922897338867],
  [182.35948181152344, 289.4118423461914],
  [183.76813507080078, 289.14551544189453],
  [187.57021713256836, 289.0025329589844],
  [191.37470245361328, 288.97010040283203],
  [195.17874145507812, 289.04808044433594],
  [198.97845458984375, 289.24137115478516],
  [202.77046585083008, 289.55043029785156],
  [206.55126190185547, 289.9755096435547],
  [210.3172149658203, 290.5166320800781],
  [214.0647201538086, 291.1736373901367],
  [217.78988647460938, 291.9461364746094],
  [221.48953247070312, 292.8336715698242],
  [225.15969848632812, 293.8353729248047],
  [228.79722595214844, 294.950439453125],
  [232.39838409423828, 296.17774963378906],
  [235.95992279052734, 297.5161590576172],
  [239.4782257080078, 298.96424865722656],
  [242.9499053955078, 300.5205535888672],
  [246.37168884277344, 302.18358612060547],
  [249.74069213867188, 303.9515380859375],
  [253.05341339111328, 305.82239532470703],
  [256.3068542480469, 307.7942810058594],
  [259.4983825683594, 309.86536407470703],
  [262.6247253417969, 312.03333282470703],
  [265.68302154541016, 314.29603576660156],
  [268.6705017089844, 316.65122985839844],
  [271.5848083496094, 319.0969467163086],
  [274.4231262207031, 321.6307144165039],
  [277.1825256347656, 324.2499237060547],
  [279.86014556884766, 326.95237731933594],
  [282.4542236328125, 329.7356719970703],
  [284.96219635009766, 332.59708404541016],
  [287.3812484741211, 335.5335006713867],
  [289.7091598510742, 338.5423355102539],
  [291.9441452026367, 341.6213912963867],
  [294.0837097167969, 344.7675323486328],
  [296.1256790161133, 347.9778289794922],
  [298.0680618286133, 351.2494430541992],
  [299.90845489501953, 354.57935333251953],
  [301.6451187133789, 357.96414947509766],
  [303.2766571044922, 361.4012451171875],
  [304.8010559082031, 364.8867492675781],
  [306.21714782714844, 368.4181900024414],
  [307.5231704711914, 371.9917221069336],
  [308.71788787841797, 375.60400390625],
  [309.8002014160156, 379.2518768310547],
  [310.76878356933594, 382.9307632446289],
  [311.6232223510742, 386.6387634277344],
  [312.3622360229492, 390.37088775634766],
  [312.98548126220703, 394.12416076660156],
  [313.4928207397461, 397.89439392089844],
  [313.88427734375, 401.67881774902344],
  [314.15987396240234, 405.4732666015625],
  [314.3199996948242, 409.27476501464844],
  [314.3648147583008, 413.0791931152344],
  [314.3021697998047, 416.8833465576172],
  [314.13417053222656, 420.6842956542969],
  [313.85841369628906, 424.47874450683594],
  [313.4730911254883, 428.2640838623047],
  [312.97618865966797, 432.03564453125],
  [312.36544036865234, 435.7912292480469],
  [311.6393127441406, 439.52561950683594],
  [310.79620361328125, 443.2357940673828],
  [309.83492279052734, 446.91712951660156],
  [308.7547836303711, 450.5649108886719],
  [307.5549850463867, 454.1755676269531],
  [306.2356872558594, 457.7436065673828],
  [304.79661560058594, 461.265869140625],
  [303.23863983154297, 464.7367248535156],
  [301.56189727783203, 468.15223693847656],
  [299.76808166503906, 471.5072326660156],
  [297.85906982421875, 474.79795837402344],
  [295.836669921875, 478.02052307128906],
  [293.7034225463867, 481.1702575683594],
  [291.4607925415039, 484.2438659667969],
  [289.11317443847656, 487.23736572265625],
  [286.6631317138672, 490.148193359375],
  [284.1145553588867, 492.9728240966797],
  [281.4705123901367, 495.708740234375],
  [278.73521423339844, 498.35292053222656],
  [275.9125061035156, 500.90403747558594],
  [273.00689697265625, 503.3599853515625],
  [270.02227783203125, 505.71934509277344],
  [266.96295166015625, 507.98097229003906],
  [263.83331298828125, 510.14385986328125],
  [260.6367492675781, 512.2078704833984],
  [257.37843322753906, 514.1720886230469],
  [254.06204986572266, 516.0367889404297],
  [250.69149017333984, 517.8016052246094],
  [247.27078247070312, 519.4668579101562],
  [243.8031768798828, 521.0338745117188],
  [240.29364013671875, 522.5031127929688],
  [243.42993927001953, 522.6317901611328],
  [247.2335205078125, 522.7150573730469],
  [251.03465270996094, 522.88525390625],
  [254.8302459716797, 523.1420135498047],
  [258.61963653564453, 523.4862976074219],
  [262.3997116088867, 523.9212646484375],
  [266.1673126220703, 524.4484710693359],
  [269.9205856323242, 525.072265625],
  [273.6555480957031, 525.7967681884766],
  [277.3682174682617, 526.6291198730469],
  [281.0534896850586, 527.574951171875],
  [284.70513916015625, 528.6425933837891],
  [288.31531524658203, 529.8428039550781],
  [291.8749771118164, 531.1853332519531],
  [295.37181091308594, 532.6840057373047],
  [298.7901382446289, 534.3532867431641],
  [302.11082458496094, 536.2096099853516],
  [305.3082809448242, 538.2704162597656],
  [308.3508529663086, 540.5536956787109],
  [311.1982116699219, 543.0753326416016],
  [313.80316162109375, 545.8467712402344],
  [316.11026763916016, 548.869384765625],
  [318.0649185180664, 552.1314086914062],
  [319.6159133911133, 555.6033172607422],
  [322.38826751708984, 556.1210021972656],
  [325.9828796386719, 554.8728179931641],
  [329.5514450073242, 553.5540466308594],
  [333.09373474121094, 552.1648712158203],
  [336.6072540283203, 550.7060699462891],
  [340.0918197631836, 549.1776885986328],
  [343.54493713378906, 547.5807800292969],
  [346.96612548828125, 545.9154815673828],
  [350.3534622192383, 544.1825256347656],
  [353.70511627197266, 542.3828277587891],
  [357.02051544189453, 540.5164794921875],
  [360.29796600341797, 538.5843048095703],
  [363.5363235473633, 536.5866241455078],
  [366.7337112426758, 534.5245361328125],
  [369.8893051147461, 532.3981781005859],
  [373.00079345703125, 530.2088317871094],
  [376.0671920776367, 527.9568176269531],
  [379.08763122558594, 525.6423187255859],
  [382.05934143066406, 523.2671203613281],
  [384.9818649291992, 520.8311309814453],
  [387.85316467285156, 518.3353576660156],
  [390.6725082397461, 515.7799835205078],
  [393.43751525878906, 513.1663818359375],
  [396.14678955078125, 510.4951477050781],
  [398.79884338378906, 507.7670593261719],
  [401.3919143676758, 504.9829864501953],
  [403.9213333129883, 504.0513916015625],
  [406.42230224609375, 506.9185028076172],
  [408.92333984375, 509.7857971191406],
  [411.42433166503906, 512.6529998779297],
  [413.9257354736328, 515.5206604003906],
  [416.42677307128906, 518.3878631591797],
  [418.9279479980469, 521.2552490234375],
  [421.4290313720703, 524.1225433349609],
  [423.929931640625, 526.9896087646484],
  [426.43101501464844, 529.8569030761719],
  [428.9319152832031, 532.7240142822266],
  [431.4329071044922, 535.5911712646484],
  [433.93385314941406, 538.4582824707031],
  [436.43507385253906, 541.3257141113281],
  [438.93597412109375, 544.1928253173828],
  [441.4371032714844, 547.0601196289062],
  [443.938232421875, 549.9275054931641],
  [446.4389953613281, 552.79443359375],
  [448.94012451171875, 555.6617736816406],
  [451.44093322753906, 558.5287475585938],
  [453.94215393066406, 561.3961791992188],
  [456.4431915283203, 564.263427734375],
  [459.4586639404297, 566],
  [463.2631378173828, 566],
  [467.0684356689453, 566],
  [470.8733215332031, 566],
  [474.6782531738281, 566],
  [478.48341369628906, 566],
  [482.2878875732422, 566],
  [486.0927734375, 566],
  [489.89747619628906, 566],
  [493.70277404785156, 566],
  [497.50743103027344, 566],
  [501.3125915527344, 566],
  [505.11756896972656, 566],
  [508.9220428466797, 566],
  [512.7270660400391, 566],
  [516.5318145751953, 566],
  [520.3367919921875, 566],
  [524.141357421875, 566],
  [527.9460144042969, 566],
  [529.9952392578125, 563.9247741699219],
  [530.3628234863281, 560.1389770507812],
  [530.3260192871094, 556.3367462158203],
  [529.8066864013672, 552.5709533691406],
  [528.7379455566406, 548.9228973388672],
  [527.0911865234375, 545.4983673095703],
  [524.8940124511719, 542.3974304199219],
  [522.231201171875, 539.6853637695312],
  [519.2085876464844, 537.3786010742188],
  [515.9275665283203, 535.4560852050781],
  [512.4665069580078, 533.8789978027344],
  [508.8835906982422, 532.6021575927734],
  [505.2182312011719, 531.5852813720703],
  [501.4967041015625, 530.7941284179688],
  [497.7391052246094, 530.2005920410156],
  [493.9575653076172, 529.7828369140625],
  [490.16197204589844, 529.5241088867188],
  [486.35887145996094, 529.4138336181641],
  [482.5540313720703, 529.4489440917969],
  [478.7549133300781, 529.6473388671875],
  [477.90406799316406, 526.1133117675781],
  [477.21092224121094, 522.3723297119141],
  [476.5177307128906, 518.6310729980469],
  [475.8246765136719, 514.8903656005859],
  [475.13148498535156, 511.14915466308594],
  [474.43833923339844, 507.40830993652344],
  [473.74510192871094, 503.6667785644531],
  [473.0519561767578, 499.9257507324219],
  [472.3588562011719, 496.18495178222656],
  [475.1420593261719, 493.9014892578125],
  [478.2225341796875, 491.6687469482422],
  [481.21864318847656, 489.32403564453125],
  [484.1244812011719, 486.86822509765625],
  [486.9324493408203, 484.3008117675781],
  [489.63636779785156, 481.6247253417969],
  [492.2305145263672, 478.84156799316406],
  [494.70770263671875, 475.95404052734375],
  [497.06349182128906, 472.9667205810547],
  [499.2933044433594, 469.8838653564453],
  [501.39215087890625, 466.71092224121094],
  [503.3570556640625, 463.45274353027344],
  [505.185546875, 460.11692810058594],
  [506.8768005371094, 456.7086486816406],
  [508.4279327392578, 453.2349090576172],
  [509.8409118652344, 449.702392578125],
  [511.11509704589844, 446.1175537109375],
  [512.2521820068359, 442.4873046875],
  [513.2534484863281, 438.8168640136719],
  [514.1217346191406, 435.1128692626953],
  [514.8589172363281, 431.3801727294922],
  [515.4670562744141, 427.62449645996094],
  [515.9495391845703, 423.85032653808594],
  [516.3087005615234, 420.0624694824219],
  [516.546875, 416.2652282714844],
  [516.6662139892578, 412.46217346191406],
  [516.6682281494141, 408.65802001953125],
  [516.5537872314453, 404.85496520996094],
  [516.3224792480469, 401.05770111083984],
  [515.9717864990234, 397.2693862915039],
  [515.495849609375, 393.4949188232422],
  [514.8789215087891, 389.74066162109375],
  [515.9098052978516, 387.4700164794922],
  [519.7120819091797, 387.3360061645508],
  [523.5063934326172, 387.05521392822266],
  [527.2870635986328, 386.63191986083984],
  [531.0497894287109, 386.0699234008789],
  [534.7895812988281, 385.37176513671875],
  [538.502685546875, 384.5413360595703],
  [542.1837921142578, 383.5811538696289],
  [545.8292388916016, 382.4916763305664],
  [549.4342651367188, 381.27562713623047],
  [552.9940643310547, 379.93389892578125],
  [556.5042877197266, 378.46575927734375],
  [559.9581604003906, 376.8708190917969],
  [563.35009765625, 375.1487808227539],
  [566.6726837158203, 373.29515838623047],
  [569.917724609375, 371.3083953857422],
  [573.07373046875, 369.18407440185547],
  [576.1280212402344, 366.9162902832031],
  [579.0652160644531, 364.4982223510742],
  [581.8639373779297, 361.92183685302734],
  [584.4983215332031, 359.17777252197266],
  [586.9337158203125, 356.25511169433594],
  [589.1230163574219, 353.14520263671875],
  [591.0054779052734, 349.8413848876953],
  [592.5012664794922, 346.34542083740234],
  [593.51123046875, 342.6808395385742],
  [593.9261016845703, 338.90289306640625],
  [593.6583557128906, 335.1134567260742],
  [592.6794738769531, 331.4422607421875],
  [519.46630859375, 321.786376953125],
  [515.8378448486328, 320.6979064941406],
  [512.7478942871094, 318.50711822509766],
  [510.5121765136719, 315.44930267333984],
  [509.3688201904297, 311.83837127685547],
  [509.4305725097656, 308.05065155029297],
  [510.6933135986328, 304.4792022705078],
  [513.0284118652344, 301.4969177246094],
  [516.1898651123047, 299.40892028808594],
  [519.8521575927734, 298.44207763671875],
  [523.6319122314453, 298.6880569458008],
  [527.1367340087891, 300.12598419189453],
  [530.0008697509766, 302.6049346923828],
  [531.9300231933594, 305.8647155761719],
  [532.7162322998047, 309.5696487426758],
  [532.2896423339844, 313.33361053466797],
  [530.6841735839844, 316.76466369628906],
  [528.0705261230469, 319.50691986083984],
  [524.7216644287109, 321.2765197753906],
];

export default {
  xs: rabbitCoords.map(([x, _]) => x / 2),
  ys: rabbitCoords.map(([_, y]) => y / 2),
};