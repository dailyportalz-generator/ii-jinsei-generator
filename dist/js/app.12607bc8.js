(function(e){function n(n){for(var a,t,m=n[0],o=n[1],i=n[2],l=0,f=[];l<m.length;l++)t=m[l],s[t]&&f.push(s[t][0]),s[t]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);c&&c(n);while(f.length)f.shift()();return u.push.apply(u,i||[]),r()}function r(){for(var e,n=0;n<u.length;n++){for(var r=u[n],a=!0,m=1;m<r.length;m++){var o=r[m];0!==s[o]&&(a=!1)}a&&(u.splice(n--,1),e=t(t.s=r[0]))}return e}var a={},s={app:0},u=[];function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=a,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/";var m=window["webpackJsonp"]=window["webpackJsonp"]||[],o=m.push.bind(m);m.push=n,m=m.slice();for(var i=0;i<m.length;i++)n(m[i]);var c=o;u.push([0,"chunk-vendors"]),r()})({0:function(e,n,r){e.exports=r("56d7")},"034f":function(e,n,r){"use strict";var a=r("64a9"),s=r.n(a);s.a},"28b4":function(e,n,r){"use strict";var a=r("a6c0"),s=r.n(a);s.a},"56d7":function(e,n,r){"use strict";r.r(n);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),s=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"app"}},[0===e.step?r("InputQuestion",{key:"start",on:{start:e.handleStart}}):e._e(),1===e.step?r("GoodLifeResult",{key:"next",attrs:{name:e.name,age:e.age},on:{next:e.handleNext}}):e._e()],1)},u=[],t=(r("7f7f"),function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("form",{staticClass:"input-question",on:{submit:function(n){return n.preventDefault(),e.handleSubmit()}}},[r("dl",[r("dd",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text"},domProps:{value:e.name},on:{input:function(n){n.target.composing||(e.name=n.target.value)}}})])]),r("button",[e._v("いい人生をスタート")]),r("p",[e._v("うそでもいいですが、本名のほうが嬉しいと思います。 （名前はサーバに保存してません）")]),r("p",[e._v("ランダムに文章を出しているので、ときどき同じ文章が出てしまいます。それは見なかったことにしてください。")])])}),m=[],o={data:function(){return{name:"",title:1}},methods:{handleSubmit:function(){""===this.name&&(this.name="おまえ"),this.$emit("start",{name:this.name})}}},i=o,c=(r("28b4"),r("2877")),l=Object(c["a"])(i,t,m,!1,null,"778eb69f",null),f=l.exports,p=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"good-life-result"},[[r("form",{staticClass:"select-result",on:{submit:function(n){return n.preventDefault(),e.sentenceCreate()}}},[r("p",[e._v(e._s(e.name)+"："+e._s(e.age))]),r("p",[e._v(e._s(e.sentence))]),r("p",[e._v("資産："+e._s(e.money)+"円")]),r("button",[e._v("次へ")])])]],2)},h=[],d=(r("6b54"),r("28a5"),r("386d"),r("a481"),r("c5f6"),{props:{name:String,age:Number},data:function(){return{sentence:"",myMoney:0,money:"0"}},computed:{units:function(){return["万","億","兆","京"]},sentenceList:function(){return[["usrnameは生まれたときに天上天下唯我独尊って言ったんだよ;0","usrnameは子どもモデルとして一躍大人気になった;10000","usrnameの顔を見ようと近所の人が集まった;100","usrnameは街の子どもオブザイヤーに選ばれた;10","「あいつ、席がusrnameの隣なんだー、いいなー。」クラスの異性がそう言っている声が聞こえた;0","「モテモテって感じじゃないけど、気になる存在だよねusrnameって」そんなことをよく言われた;0","usrnameさん。卒業生代表の挨拶をお願いします。;0","「usrnameが入ってからこの学校変わったよね。」と先生が言っていた;0","「地味な学校だったけど、usrnameのおかげで華やかになったね」だそうだ。;0","「usrnameがグランドに出るとみんな見てるな」と小林が言っていた;0","「usrnameってどうしてそんなに勉強できるの？」答えに困る質問だ。;0","「隣のクラスで、usrnameが話題になってたらしいよ」。土井が教えてくれた;0","「usrnameの電話番号が高値で取引されているらしいよ」。;0","「同性から見ても爽やかだよね。usrname」だって。そうなのか。;0","「usrnameのおもしろコントをみんな見たがってるよ」そう言われると悪い気はしない。;0","「usrnameさん、授業料を免除しますのでぜひうちの高校に入ってください」。スーツの大人が挨拶に来た。;0","「usrnameって野球部入ってもレギュラー確実だって」。たぶんそうだろうな。;0","「usrnameって勉強だけじゃなくてピアノもうまいのな」。よく言われることだ。;0","「usrnameが踊るバレーは泣けるしかっこいいなあ」。タイツが似合うと思うのだ。;0","「usrnameって大人っぽいよな」。どんな大人になるんだろう。;0","「usrnameってこのクラスで別の生き物みたいにシャンとしてるよ」。へー。;0","「usrnameってバイト行くたびに社員になってくれって言われてるらしいね」。たまに言われていた。;0","「教授がusrnameを跡継ぎにしたいって」。やれやれ。;0","「学園はことしからusrname祭って名前にするって校長が言ってたよ」やめてくれ。;0","「usrnameが普通に就職するってなんかもったいないなー」将来なんになろうかな。;0","「usrnameのノートはコピーさせてもらっても難しくてよく分かんないや」ふふふ。;0","「usrnameは将来出世しそうだから俺の名前を覚えておいてくれよな」オッケー！;0","サッカー部と野球部に誘われたのでusrname部を作った;0","「usrnameの成績をたたえてusrnameの像ができたよ」背中に薪しょってるけどな。;0","うちの学校の社会は世界史か日本史か、usrname史を選ぶことになっている;0","料理の腕を買われて月にいちど、usrnameが給食を作ることになった。;10000","創作ダンスでのusrnameのダンスが好評でDVD化された。;20000","理科の実験中、大発見をしてusrnameの法則と呼ばれる;10000","下校時にusrnameを待つ異性の集団が近所の問題になり、専用のトンネルが掘られる。usrnameちゃんロードと呼ばれる。;0","usrnameのホームランを防ぐための専用のネットusrnameネットが立てられる。;0"],["庭で穴を掘っていたら石油が出てきたのでusrname石油設立;1000000","街で困っているおばあさんを助けて謝礼にマンションをもらった。コーポusrnameと名付ける;20000","パン屋さんになる。あっというまに大きくなってusrname製パンとなる。;3000000","水が燃料のエンジンを開発して、usrname自動車設立。;500000","水分をよく吸うぞうきん「usrnameワウ」を通販で売って大ヒット;800000","独自のエクササイズ方法をまとめたDVD「usrnameズブートキャンプ」を売ったら大流行する;2980000","遠い親戚からプロ野球の球団をもらう。横浜ベイusrnameズという名前にする;31030000","食べられる土を発見。それをもとにファーストフードチェーン「usrnameズキッチン」を展開;5000000","新種のお米を開発「usrname二号」と名付ける。大ヒット;100","クロールにかわる新しい泳法usrnameロールを開発、オリンピック協会にその方法を売る;300","原宿を歩いていたらスカウトされる。ロベルトusrnameとしてデビュー。;70000","ニンジャの真似をしていたらたまたま見ていたタランティーノにスカウトされて映画「レザボアusrname」主演;1100","庭に生えている葉っぱが胃薬になった。キャベusrnameという名前で売る。;5000000","usrnameランドという遊園地とusrnameーマウスというキャラクターを作る;90000000","片手間に小説を書いたらノーベル文学賞。「こんにちは、usrnameです」;30000000","寝言をCD化。「千のusrnameとなって」ゴールドディスク獲得。;2000000","usrname銀行設立。usrnameローンが大人気;2000000","小売業に進出。セブンアンドusrnameホールディングス設立。;40000","NASAに出資。スペースシャトルusrnameカバリー発射。;50000000","淡々と働きながらも夜に株に手を出したらそこそこ儲かった;50000","温泉旅行に行って淡い恋に落ちる。;0","かっこいいsuicaの出し方を考案。usrname出しと呼ばれるようになる。;2000","ボーリングでパーフェクト達成。みんなにプロボーラーusrnameと呼ばれるようになる。;20000","ギター片手に駅前で歌う。いくらかお金が集まった。;200","フォークソングユニット「usrnameと5人の仲間達」結成。仲間割れしてソロプロジェクトになる。;50000","中古自動車の販売をはじめる。usrnameモーターズは順調に売り上げを伸ばす。;500000","先物取引をはじめる。説明会に行った時点で恐くなって逃げ出す。よかった。;0","一輪車をマスター。近所の子どもの人気者に。;1000","原野商法に引っかかる。悔しいのでそこにマンションを建てる。;100000","ゴルフをはじめる。ドライバーショットのときにusrname！と叫んで評判になる。;0"],["物理の実験施設「スーパーusrnameンデ」を作った。;0","河原で拾った石が恐竜の化石だった。「usrnameザウルス」と名付ける;300000","カップ麺「赤いusrname」を作って死ぬほど売れる;2000000","衆議院、参議院に続くusrname院を作って怒られる;0","まんが「usrnameエモン」が大ヒット;100","お笑いイベント「usrname-1グランプリ」を大晦日に開催。出場者、審査員ともにusrname。かわいそうな気がして直前で取りやめ。;0","秋と冬のあいだにusrnameという季節をねじ込む。;-1000","usrnameコーラという飲み物を作る。ほどほど売れる;-10","usrname家という外食チェーンを展開。usrname盛が大人気。;300000","困ってる宇宙人を助ける。木星をもらう。以後、木星は木usrname星となる。;0","usrnameフィナンシャルグループという名の居酒屋を開く。連日大賑わい。;500000","usrname通信という通信社を設立。主に自分のニュースを配信する。;2","庭から当然のように温泉が出た。usrname温泉物語という名前を付ける。;5000000","usrnameィというSNSサイトを作って大人気。広告をたくさん貼る。;5000","ポケットマネーで鳥人間コンテストを開催。でも名前をusrname人間コンテストにする;0","usrname新聞を発行。朝刊の漫画「usrnameさん」がアニメ化し大人気。;100000","ディスカウントショップusrnameキホーテを作って深夜まで大人気;60000000","映画「私をusrnameに連れってって」を制作。コケる。;-5000000","無印usrnameという雑貨屋をオープン;0","劇団usrname旗揚げ。演劇は儲からないことに気づく。;-30000","usrname64というゲーム機開発。ネーミングセンスが古くてあまり売れず;0","離島をひとつ買ってリゾート開発に乗り出す。usrnameアイランドは瞬く間に大流行する;60000000","駅前でおなかをすかせた絵かきにごはんをおごる。実は大物で…ということはなかった。;-500","頼まれて詞を書く。そのうたが大ヒット。作詞印税のすごさを思い知る。;60000","洗濯物がからまないネットを発明。でももうすでにあったので特に儲からず。;0","ものすごく美味いカレーパンの作り方を発明。カレーパン御殿が建つ;800000","肉まんあんまんに続くusrnameまんを発売。社会現象に。;40000","新しいレスリングスタイル「usrnameスタイル」を考えるが誰にも相手にされず。;0","デイリーusrnameZというサイトを作る。お金にはならず。;0","食べられるマウスを開発。ギフト用としてそこそこ人気に。;400"],["娘が新垣結衣のように成長する。usrname結衣としてデビュー。;4000000","usrname小路きみまろとしてデビュー。;100","蕎麦打ちに凝る。usrname庵として開業。おとなの隠れ家として紹介されて連日満員;1000","usrname天市場というオンラインショッピングサイトをオープン;5000","usrnameセメントを設立。コンクリートミキサー車を運転してご満悦;5000","不動産業に進出。土地転がしに異常な才能を発揮する。;500000","自分ちの空いた場所にusrname放送という放送局を設立。自分を称える番組ばかり放送して世間の失笑を買う;0","新種のエビを発見し養殖に成功。usrnameエビと名付けるがザリガニであることが発覚。;0","「日本列島 usrnameいちばん！」という番組をNHKの昼に放送してもらう。;-10000","写経に凝る。その経験を生かし自動写経ロボusrname１号を開発して多いに売れる。;30000","一念発起して歯科医になる。開業する体力ももうないので趣味の範囲にとどめる;20000","陶芸に凝る。usrname堂という名前を名乗る;0","盆栽をはじめるが見る見る巨大になる。巨大盆栽のusrnameというブランドで売り出す;100","体にいいusrname菌入りヨーグルトを発売。絶対売れないと思われたがなぜか大ヒット;5000","usrnameバックスコーヒーという喫茶店を開く。常連ばかりがたむろする店に;0","usrname亭というラーメン店開業。いつのまにか中華スナックになる。;3000","usrname壱番というカレー屋をはじめる。大ヒットしたために周囲の店がすべてusrnameという名になる。;200000","ブッセを作る「usrnameはusrnameのusrname王です。」というコピーにするがうまく伝わらず。;52000","usrnameエースというドリンク剤を発売。キャッチコピーは「usrnameのように元気になる」;20000","usrnameエキス配合の「usrnameの力」つぶタイプ発売。売れるけど自分がやせ細る;50000","「養老のusrname」という居酒屋を始める。2000店を達成。;20000","中東の王族と結婚。お祝いに油田をひとつもらう。;50000000","のり巻き早食いコンテストで優勝。賞金をもらう。;50000","宝石のデザイナーに転身。「usrnameの涙」というティアラを発売。2個売れる。;5000000","新種のきのこを発見。usrnameダケと名付けるが猛毒。;5000","新種のクラゲを発見。usrnameクラゲと名付けるが3メートルあるため嫌われる。;50","なんでも霜降り肉の味にするusrnameオイルを新発売。世界を揺るがすヒット商品となる。;90000000","泳いで津軽海峡を横断。;5000","泳いでお台場に行こうとして湾岸警察に怒られる。;50","家の近所で噴火があり、山ができる。usrname新山と命名する。;300000"],["ふざけておでこにusrnameと書いたら大流行。ビジネスモデル特許取得;20000","usrnameカルタによるusrnameカルタ大会実施。来年は頑張ろう;0","小学生のあいだでジャンプしながらusrname！usrname！という遊びが大流行。困惑;0","DSソフト「脳を鍛えるusrnameトレーニング」発売。5000本買い取る;-200000","フライングusrnameというギター発売。ヴァンヘイレンに送る;-10000","家が広すぎてグーグル社にusrnameマップというサイトを作ってもらう;-2000","東武鉄道を購入。通勤快速をusrname快速という名に変更。;-40000","家に猫型ロボットがやってくる。秘密道具を量産し莫大な富を得る;400000000","ホームセンターで買ったドアをどこでもドアとして売る。;400000","自らの半生を漫画化。水木しげる先生に頼む。「墓場のusrname」というタイトルになる;20000","飼い犬からパンダが生まれる。後のusrname動物園である;100000","家に放置しておいたワインがすっかり年代物のワインになっていた;10000","趣味で日本酒の杜氏になる。大吟醸「usrname」をつくる;6000","ワインバー「usrname」をオープン。そこそこ流行る;400000","高いベンツを買う。ボンネットに大きく「usrname」と書いて探偵ナイトスクープに取材される;4000","永年の功績を称え、近所のバス通りが「usrname通り」と改名される;0","近所のお寺の豆まき大会に呼ばれる。しかし浮かれて鬼の役を申し出て打撲。;100","自分が好きな歌しか配信しない通信カラオケusrnameサウンドをはじめる。同じ好みの人に大好評。;4500100","新橋でお茶漬けスタンドをはじめる。大ヒット！;5500000","ハープを習う。腹話術しながらハープを弾くという芸のスタイルを確立する。フランスで受ける;200000","家の近所で噴火。その話題で「スナックまぐま」をオープン。客は来ず。;300","「割烹usrname」を開く。ミシュランには載らないが近所のおじさんのたまり場になる。;300","プールにウォータースライダー「流れるusrname」を設置。名前が分かりにくいのでヒットせず。;300","パソコンのリサイクルショップをオープン。地味に売れる。;100000","ジャパネットusrnameという通販をはじめる。;140000","usrnameネットというインターネットの会社を設立。思ったほど儲からない。;10000","ラジオ深夜便を聞くのが楽しくてたまらない日々。;0","庭の樹をピンクに塗ってみたら探偵ナイトスクープが来た。;0","ブログ「usrnameのちょっといい話」のデータを消してしまい、しばらく落ち込む。;0","ブログを本にする。気を使った親戚や部下が買ってくれたので初版は売り切れた。;500000"],["孫がアイドルグループに入っていたので見に行く。;0","花の美しさがまぶしく感じるようになった。;0","年寄りでも食べられる焼肉屋「usrname角」をはじめる。大ヒット。;100000","様々な企業から顧問として呼ばれる。;100000","市議会議員になる。;100","自らの半生を綴った「usrname伝」を上梓。近所の小学校に50冊ずつ寄付。;0","近所の子どもにベーゴマを教える。;1000","宝くじが当たった。;5000000","usrname財団を設立。南極探検に出発。;1000","近所の若者にラップを習う。老年ラッパーとして一瞬売れる。;300000","まんじゅう早食い競争に出場。他を圧倒する実力を見せる。;80000","週刊usrnameという雑誌を創刊。毎号の付録を組み合わせると等身大のusrnameができる;30000"]]}},methods:{handleClickRestart:function(){location.href=location.href.replace(location.search,"")},chunk:function(e,n){for(var r=Math.ceil(e.length/n),a=[],s=0;s<r;s++){var u=s*n,t=e.slice(u,u+n);a.push(t)}return a},toJapNum:function(e){var n=this,r=!1;e<0&&(r=!0),e=Math.abs(e);var a=e.toString().split("").reverse(),s=this.chunk(a,4).map(function(e,r){return e.reverse().join("")+(r>0?n.units[r-1]:"")}).reverse().join("");return r&&(s="-"+s),s},randomNumber:function(e){var n=Math.floor(Math.random()*this.sentenceList[e].length),r=this.sentenceList[e][n];r=r.split(";"),this.sentence=r[0].replace("usrname",this.name);for(var a=0;a<3;a++)this.sentence=this.sentence.replace("usrname",this.name);this.myMoney+=Number(r[1]),this.money=this.toJapNum(this.myMoney)},sentenceCreate:function(){var e=this.age;switch(!0){case e>=11&&e<=20:this.randomNumber(0);break;case e>=21&&e<=30:this.randomNumber(1);break;case e>=31&&e<=40:this.randomNumber(2);break;case e>=41&&e<=50:this.randomNumber(3);break;case e>=51&&e<=60:this.randomNumber(4);break;case e>=61&&e<70:this.randomNumber(5);break;case 70==e:this.sentence="若返る薬を買うことができた。";break}this.$emit("next")}}}),b=d,v=(r("76c2"),Object(c["a"])(b,p,h,!1,null,"e3c4bc4a",null)),g=v.exports,y={name:"app",components:{InputQuestion:f,GoodLifeResult:g},data:function(){return{step:0,age:11,name:""}},methods:{handleStart:function(e){this.name=e.name,this.step++},handleNext:function(){70===this.age?this.age=24:this.age++}},computed:{}},_=y,N=(r("034f"),Object(c["a"])(_,s,u,!1,null,null,null)),x=N.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(x)}}).$mount("#app")},"64a9":function(e,n,r){},"76c2":function(e,n,r){"use strict";var a=r("f5ae"),s=r.n(a);s.a},a6c0:function(e,n,r){},f5ae:function(e,n,r){}});
//# sourceMappingURL=app.12607bc8.js.map