<template>
  <div class="good-life-header">
    <div class="good-life-header__content">
      <div class="good-life-header__description">
        <p>先週、日刊デイリーの投稿をベースにして「いい気分ジェネレーター」を作った。</p>
        <p>いい気分になるセリフが次々と出てくるジェネレーターで、クリック数回ですっかりいい気分だ。</p>
        <p>これを発展させていい一生を味わえる装置ができないだろうか。いいことしか起こらない人生ゲームのようなものだ。ゲームを一緒にやる友達を集めたりするのも面倒なのでひとりでできたほうがいい。サイコロを振る必要もないようにクリックだけで進むようにしよう。</p>
        <p>そうしてできたいい人生を味わうジェネレーターです。
          <br>
        </p>
        <p>
          （text by
          <a href="https://dailyportalz.jp/writer">林雄司</a>）
        </p>
      </div>
      <div class="good-life-header__image">
        <img src="@/assets/001.jpg" alt>
      </div>
      <p>いい人生のイメージ画像</p>
    </div>
  </div>
</template>

<style scoped>
h2 {
  margin: 0;
  padding: 0;
  line-height: 1;
}

.good-life-header {
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: dotted 1px #c6c6c6;
}

.good-life-header__content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.good-life-header__description {
  width: 320px;
}

.good-life-header__image {
  width: 220px;
  font-size: 10px;
  text-align: start;
}
</style>