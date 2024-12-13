[aardio 文档](../../../index.htm "aardio 编程语言文档首页")

# aardio 范例: COM 接口 - 调用 SpInprocRecognizer

```aardio aardio
//COM 接口 - 调用 SpInprocRecognizer

import win.ui;
/*DSG{{*/
var winform = win.form(text="调用SpInprocRecognizer";right=599;bottom=399)
winform.add(
edit={cls="edit";left=21;top=19;right=583;bottom=374;edge=1;multiline=1;z=1}
)
/*}}*/

var spRecognizer = com.CreateObject("SAPI.SpInprocRecognizer" )
spRecognizer.AudioInput = spRecognizer.GetAudioInputs().Item(0);

var recoContext = spRecognizer.CreateRecoContext();
var dicGrammar =  recoContext.CreateGrammar();
dicGrammar.DictationSetState(spRecognizer.SGDSActive);

var menuRule = dicGrammar.Rules.Add("wordsRule", 0x1|0x20)
menuRule.Clear();
menuRule.InitialState.AddWordTransition(null, "你好", " ", spRecognizer.SGLexical, "你好", 1, "", 1.0);
dicGrammar.CmdSetRuleState("wordsRule", spRecognizer.SGDSActive)
dicGrammar.Rules.Commit()

RecognitionEvents = {

    Recognition = function(streamNumber,streamPosition,recogType,recoResult) {
           var text = recoResult.PhraseInfo.GetText()
           winform.edit.log("识别完成:",text ,'\r\n' )
    }

    Hypothesis = function(streamNumber , streamPosition, recoResult){
        for index,el in com.each(recoResult.PhraseInfo.Elements) {
            winform.edit.log(el.DisplayText ,'\r\n' )
        }
    }
}
//添加事件触发�?com.Connect(recoContext, RecognitionEvents  )

winform.show()
recoContext.Voice.Speak("你好");

win.loopMessage();

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/example/COM/Others/spRecognizer.md)

