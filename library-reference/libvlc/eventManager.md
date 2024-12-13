# libvlc.eventManager 库模块帮助文档

<a id="vlcEventManagerObject"></a>
## vlcEventManagerObject 成员列表


<a id="vlcEventManagerObject.mediaPlayerBackward"></a>
### vlcEventManagerObject.mediaPlayerBackward 
 

```aardio
vlcEventManagerObject.mediaPlayerBackward = function(event){
	io.print("mediaPlayerBackward")
}
```



<a id="vlcEventManagerObject.mediaPlayerBuffering"></a>
### vlcEventManagerObject.mediaPlayerBuffering 
 

```aardio
vlcEventManagerObject.mediaPlayerBuffering = function(event){
	io.print("mediaPlayerBuffering",event.newCache)
}
```



<a id="vlcEventManagerObject.mediaPlayerESAdded"></a>
### vlcEventManagerObject.mediaPlayerESAdded 
 

```aardio
vlcEventManagerObject.mediaPlayerESAdded = function(event){
	io.print("mediaPlayerESAdded",event.newScrambled)
}
```



<a id="vlcEventManagerObject.mediaPlayerESDeleted"></a>
### vlcEventManagerObject.mediaPlayerESDeleted 
 

```aardio
vlcEventManagerObject.mediaPlayerESDeleted = function(event){
	io.print("mediaPlayerESDeleted",event.newScrambled)
}
```



<a id="vlcEventManagerObject.mediaPlayerESSelected"></a>
### vlcEventManagerObject.mediaPlayerESSelected 
 

```aardio
vlcEventManagerObject.mediaPlayerESSelected = function(event){
	io.print("mediaPlayerESSelected",event.newScrambled)
}
```



<a id="vlcEventManagerObject.mediaPlayerEncounteredError"></a>
### vlcEventManagerObject.mediaPlayerEncounteredError 
 

```aardio
vlcEventManagerObject.mediaPlayerEncounteredError = function(event){
	io.print("mediaPlayerEncounteredError")
}
```



<a id="vlcEventManagerObject.mediaPlayerEndReached"></a>
### vlcEventManagerObject.mediaPlayerEndReached 
 

```aardio
vlcEventManagerObject.mediaPlayerEndReached = function(event){
	io.print("mediaPlayerEndReached")
}
```



<a id="vlcEventManagerObject.mediaPlayerForward"></a>
### vlcEventManagerObject.mediaPlayerForward 
 

```aardio
vlcEventManagerObject.mediaPlayerForward = function(event){
	io.print("mediaPlayerForward")
}
```



<a id="vlcEventManagerObject.mediaPlayerLengthChanged"></a>
### vlcEventManagerObject.mediaPlayerLengthChanged 
 

```aardio
vlcEventManagerObject.mediaPlayerLengthChanged = function(event){
	io.print("mediaPlayerSnapshotTaken",event.newLength)
}
```



<a id="vlcEventManagerObject.mediaPlayerMediaChanged"></a>
### vlcEventManagerObject.mediaPlayerMediaChanged 
 

```aardio
vlcEventManagerObject.mediaPlayerMediaChanged = function(event){
	io.print("mediaPlayerPositionChanged",event.newMedia)
}
```



<a id="vlcEventManagerObject.mediaPlayerNothingSpecial"></a>
### vlcEventManagerObject.mediaPlayerNothingSpecial 
 

```aardio
vlcEventManagerObject.mediaPlayerNothingSpecial = function(event){
	io.print("mediaPlayerNothingSpecial",event.metaType)
}
```



<a id="vlcEventManagerObject.mediaPlayerOpening"></a>
### vlcEventManagerObject.mediaPlayerOpening 
 

```aardio
vlcEventManagerObject.mediaPlayerOpening = function(event){
	io.print("mediaPlayerOpening",event.newPosition)
}
```



<a id="vlcEventManagerObject.mediaPlayerPausableChanged"></a>
### vlcEventManagerObject.mediaPlayerPausableChanged 
 

```aardio
vlcEventManagerObject.mediaPlayerPausableChanged = function(event){
	io.print("mediaPlayerPausableChanged",event.metaType)
}
```



<a id="vlcEventManagerObject.mediaPlayerPaused"></a>
### vlcEventManagerObject.mediaPlayerPaused 
 

```aardio
vlcEventManagerObject.mediaPlayerPaused = function(event){
	io.print("mediaPlayerPaused")
}
```



<a id="vlcEventManagerObject.mediaPlayerPlaying"></a>
### vlcEventManagerObject.mediaPlayerPlaying 
 

```aardio
vlcEventManagerObject.mediaPlayerPlaying = function(event){
	io.print("mediaPlayerPlaying")
}
```



<a id="vlcEventManagerObject.mediaPlayerPositionChanged"></a>
### vlcEventManagerObject.mediaPlayerPositionChanged 
 

```aardio
vlcEventManagerObject.mediaPlayerPositionChanged = function(event){
	io.print("mediaPlayerPositionChanged",event.newPosition)
}
```



<a id="vlcEventManagerObject.mediaPlayerScrambledChanged"></a>
### vlcEventManagerObject.mediaPlayerScrambledChanged 
 

```aardio
vlcEventManagerObject.mediaPlayerScrambledChanged = function(event){
	io.print("mediaPlayerScrambledChanged",event.newScrambled)
}
```



<a id="vlcEventManagerObject.mediaPlayerSeekableChanged"></a>
### vlcEventManagerObject.mediaPlayerSeekableChanged 
 

```aardio
vlcEventManagerObject.mediaPlayerSeekableChanged = function(event){
	io.print("mediaPlayerSeekableChanged",event.newSeekable)
}
```



<a id="vlcEventManagerObject.mediaPlayerSnapshotTaken"></a>
### vlcEventManagerObject.mediaPlayerSnapshotTaken 
 

```aardio
vlcEventManagerObject.mediaPlayerSnapshotTaken = function(event){
	var filename = ..string.fromto(event.pUtfFilename,65001,0,true);
	io.print("mediaPlayerSnapshotTaken",filename)
}
```



<a id="vlcEventManagerObject.mediaPlayerStopped"></a>
### vlcEventManagerObject.mediaPlayerStopped 
 

```aardio
vlcEventManagerObject.mediaPlayerStopped = function(event){
	io.print("mediaPlayerStopped")
}
```



<a id="vlcEventManagerObject.mediaPlayerTimeChanged"></a>
### vlcEventManagerObject.mediaPlayerTimeChanged 
 

```aardio
vlcEventManagerObject.mediaPlayerTimeChanged = function(event){
	io.print("mediaPlayerPositionChanged",event.newTime)
}
```



<a id="vlcEventManagerObject.mediaPlayerTitleChanged"></a>
### vlcEventManagerObject.mediaPlayerTitleChanged 
 

```aardio
vlcEventManagerObject.mediaPlayerTitleChanged = function(event){
	io.print("mediaPlayerTitleChanged",event.newTitle)
}
```



<a id="vlcEventManagerObject.mediaPlayerVout"></a>
### vlcEventManagerObject.mediaPlayerVout 
 

```aardio
vlcEventManagerObject.mediaPlayerVout = function(event){
	io.print("mediaPlayerVout",event.newCount)
}
```


