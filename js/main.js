const DEFAULT_CSS = 
`body {
  background-color: rgba(0, 0, 0, 0);
  margin: 0;
  padding: 0;
  overflow: hidden;
}`;

const DISCORD_STREAMKIT_HTML_SAMPLE = 
`<div id="app-mount">
  <div style="font-family:Whitney, sans-serif;background-color:transparent;" class=" " data-reactid=".0">
    <div class="voice-container" data-reactid=".0.0">
      <ul class="voice-states" data-reactid=".0.0.0">
        <li class="voice-state" data-reactid=".0.0.0.$235088799074484224/=1$235088799074484224">
          <img class="avatar speaking" src="https://cdn.discordapp.com/avatars/235088799074484224/16c197c4c3f0eb808f9bceb6e1075e71.jpg" data-reactid=".0.0.0.$235088799074484224/=1$235088799074484224.$=10">
          <div class="user" data-reactid=".0.0.0.$235088799074484224/=1$235088799074484224.$/=11">
            <span class=" name" style="color:#ffffff;font-size:14px;background-color:rgba(30, 33, 36, 0.95);" data-reactid=".0.0.0.$235088799074484224/=1$235088799074484224.$/=11.0">Rythm Bot</span>
          </div>
        </li>
        <li class="voice-state" data-reactid=".0.0.0.$448994167029497867/=1$448994167029497867">
          <img class="avatar" src="https://cdn.discordapp.com/avatars/448994167029497867/b95dc78d27b8e12d7f9c5ca9e9aef35e.jpg" data-reactid=".0.0.0.$448994167029497867/=1$448994167029497867.$=10">
          <div class="user" data-reactid=".0.0.0.$448994167029497867/=1$448994167029497867.$/=11">
            <span class=" name" style="color:#ffffff;font-size:14px;background-color:rgba(30, 33, 36, 0.95);" data-reactid=".0.0.0.$448994167029497867/=1$448994167029497867.$/=11.0">ガンジー</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>`;

const DISCORD_STREAMKIT_HTML_BASE = 
`<div id="app-mount">
  <div style="font-family:Whitney, sans-serif;background-color:transparent;" class=" " data-reactid=".0">
    <div class="voice-container" data-reactid=".0.0">
      <ul class="voice-states" data-reactid=".0.0.0">
      </ul>
    </div>
  </div>
</div>`;

const DISCORD_STREAMKIT_AVATAR_HTML_BASE = 
`<li class="voice-state" data-reactid=".0.0.0.$%id%/=1$%id%">
  <img class="avatar" src="%image%" data-reactid=".0.0.0.$%id%/=1$%id%.$=10">
  <div class="user" data-reactid=".0.0.0.$%id%/=1$%id%.$/=11">
    <span class=" name" style="color:#ffffff;font-size:14px;background-color:rgba(30, 33, 36, 0.95);" data-reactid=".0.0.0.$%id%/=1$%id%.$/=11.0">%name%</span>
  </div>
</li>`;

const AVATAR_COUNT = 4;

const AVATAR_NAMES = [
	'Blue',
	'Orange',
	'Red',
	'Purple',
];

const STREAMKIT_SAMPLES = [
	{
		title: 'バニラウィジェット',
		description: 'CSSをカスタマイズしない場合のウィジェットです。',
		css: '',
	},
	{
		title: '横並び１',
		description: 'アバターを横並びにします。名前はアイコンの下に表示します。',
		css: 
`%parent%.voice-states * {
  display: inline-block;
  position: relative;
  top: 0;
  left: 0;
}
%parent%.voice-state { 	
  width: 70px;
  height: 90px;
} 
%parent%.avatar {
  left: 7px;
}
%parent%.user {
  left: 2px;
  top: 2px;
  background: rgba(0,0,0,.7);
  padding: 4px 5px 0px !important;
  border-radius: 4px;
}
%parent%.name {
  width: 55px;
  height: 17px;
  line-height: 17px !important;
  white-space: nowrap;
  text-overflow: clip;
  text-align: center;
  background-color: rgba(0,0,0,0) !important;
  padding: 0 !important;
  overflow: hidden;
}`,
	},
	{
		title: '横並び２',
		description: 'アバターを横並びにします。名前はアイコンの右に表示します。',
		css: 
`%parent%.voice-states * {
  display: inline-block;
  position: relative;
  top: 0;
  left: 0;
}
%parent%.voice-state {
  padding-right: 6px;
  height: 70px;
} 
%parent%.avatar {
  left: 7px;
}
%parent%.user {
  top: 14px;
  left: 2px;
  background: rgba(0,0,0,.7);
  padding: 4px 5px 0px !important;
  border-radius: 4px;
}
%parent%.name {
  min-width: 55px;
  height: 17px;
  white-space: nowrap;
  text-overflow: clip;
  text-align: center;
  background-color: rgba(0,0,0,0) !important;
  padding: 0 !important;
  overflow: hidden;
}`,
	},
	{
		title: '明るさを変更する',
		description: '「話している人」を明るくし、「話していない人」を暗くします。',
		css: 
`%parent%.avatar {
  border-width: 4px ! important;
  border-color: rgba(0,0,0,0) ! important;
  filter: brightness(60%);
}
%parent%.speaking {
  filter: brightness(100%);
}`,
	},
	{
		title: '最後に話した人を表示',
		description: '「一番最後に話した人」を表示します。話し終わったあともアバターは表示されます。',
		height: 100,
		css: 
`%parent%.voice-state {
  display: block;
  position: absolute;
}
%parent%.user,
%parent%.avatar {
  position: absolute;
  left: 10px;
  top: 10px;
  border: none !important;
  z-index: 0;
  animation: not-speaking-zindex 100s linear;
}
%parent%.user {
  left: 70px;
  top: 5px;
}
%parent%.name {
  text-align: center;
  width: 100px;
  display: inline-block;
}
%parent%.speaking,
%parent%.speaking + .user {
  animation: speaking-zindex 100s linear;
}
@keyframes not-speaking-zindex {
  0% {
    z-index: 100000;
  }
  100% {
    z-index: 0;
  }
}
@keyframes speaking-zindex {
  0% {
    z-index: 200000;
  }
  100% {
    z-index: 100000;
  }
}`,
	},
	{
		title: '特定のユーザーのアイコンや名前を変更する',
		description: 'ユーザーIDが必要です。「000000000000000000」の部分をユーザーIDで置換してください。',
		css: 
`%parent%.voice-state[data-reactid*="000000000000000000"] .user:before {
  content: '-CUSTOM NAME-';
  color: #ffffff;
  font-size: 14px;
  background-color: #1e2124;
  border-radius: 3px;
  padding: 4px 6px;
}
%parent%.voice-state[data-reactid*="000000000000000000"] .name {
  display: none !important;
}
%parent%.voice-state[data-reactid*="000000000000000000"] .avatar {
  content: url('https://gungeespla.github.io/obs_discord_sample/img/dump/bigicon1.jpg');
}`,
	},
	{
		title: '特定のユーザーのアイコンを話しているときだけ変更する',
		description: 'ユーザーIDが必要です。「000000000000000000」の部分をユーザーIDで置換してください。',
		css: 
`%parent%.voice-state[data-reactid*="000000000000000000"] .avatar.speaking {
  content: url('https://gungeespla.github.io/obs_discord_sample/img/icon0.gif');
}
%parent%.voice-state[data-reactid*="000000000000000001"] .avatar.speaking {
  content: url('https://gungeespla.github.io/obs_discord_sample/img/icon1.gif');
}
%parent%.voice-state[data-reactid*="000000000000000002"] .avatar.speaking {
  content: url('https://gungeespla.github.io/obs_discord_sample/img/icon2.gif');
}
%parent%.voice-state[data-reactid*="000000000000000003"] .avatar.speaking {
  content: url('https://gungeespla.github.io/obs_discord_sample/img/icon3.gif');
}`,
	},
];

function speak(slc) {
	const $this = $(slc);
	const time1 = 1000 + 3 * 1000 * Math.random();
	const time2 = 1000 + 3 * 1000 * Math.random();
	setTimeout(function(){
		$this.addClass('speaking');
		setTimeout(function(){
			$this.removeClass('speaking');
			speak(slc);
		}, time2);
	}, time1);
};

function copy(str) {
	var tmp = document.createElement('div');
	var pre = document.createElement('pre');
	pre.style.webkitUserSelect = 'auto';
	pre.style.userSelect = 'auto';
	tmp.appendChild(pre).textContent = str;
	var s = tmp.style;
	s.position = 'fixed';
	s.right = '200%';
	document.body.appendChild(tmp);
	document.getSelection().selectAllChildren(tmp);
	var result = document.execCommand('copy');
	document.body.removeChild(tmp);
	if (result) {
		toastr.options = {
		  'positionClass': 'toast-bottom-right',
		  'timeOut': '2000',
		};
		toastr.success('Copied!');
	}
	return result;
}

function createWidget() {
	const $widget = $(DISCORD_STREAMKIT_HTML_BASE);
	const $states = $widget.find('.voice-states');
	for (let i = 0; i < AVATAR_COUNT; i++) {
		const id = ('000000000000000000' + i).slice(-18);
		const image = './img/icon' + i + '.png';
		const name = AVATAR_NAMES[i] || 'User ' + i;
		const html = DISCORD_STREAMKIT_AVATAR_HTML_BASE
			.replace(/%id%/g, id)
			.replace(/%image%/g, image)
			.replace(/%name%/g, name);
		const $state = $(html);
		$state.find('img').addClass('avatar-' + i);
		$states.append($state);
	}
	return $widget;
}

window.onload = function () {
	$('#discord-html').text(DISCORD_STREAMKIT_HTML_SAMPLE);
	hljs.highlightBlock($('#discord-html').get(0));
	STREAMKIT_SAMPLES.forEach((opt, i) => {
		const $div = $('<div></div>');
		const $widget = createWidget();
		if (opt.height) {
			$widget.find('.voice-container').css('height', opt.height + 'px');
		}
		$widget.find('.voice-container').attr('id', 'widget-' + i);
		const $title = $('<h3>' + opt.title + '</h3>');
		const $description = $('<p>' + opt.description + '</p>');
		const $style = $('<style></style>');
		const $css = $('<pre><code class="css"></code></pre>');
		const css = DEFAULT_CSS + '\n' + opt.css.replace(/%parent%/g, '');
		const $button = $('<button>Copy this custom CSS</button>');
		$button.on('click', (e) => {
			copy(css);
			document.getSelection().selectAllChildren($css.get(0));
		});
		const $hr = $('<hr>');
		$div.append($title);
		$div.append($description);
		$div.append($widget);
		$div.append($css);
		$div.append($button);
		$div.append($style);
		$div.append($hr);
		$style.text(opt.css.replace(/%parent%/g, '#widget-' + i + ' '));
		$css.find('code').text(css);
		hljs.highlightBlock($css.get(0));
		$('#streamkit-sample-area').append($div);
	});
	speak('.avatar-0');
	speak('.avatar-1');
	speak('.avatar-2');
	speak('.avatar-3');
};
