[aardio 文档](../../index.htm "aardio 编程语言文档首页")

# libvlc.eventManager 库模块帮助文�?
## vlcEventManagerObject 成员列表

### vlcEventManagerObject.mediaPlayerBackward

```aardio aardio
vlcEventManagerObject.mediaPlayerBackward = function(event){
    io.print("mediaPlayerBackward")
}

```

### vlcEventManagerObject.mediaPlayerBuffering

```aardio aardio
vlcEventManagerObject.mediaPlayerBuffering = function(event){
    io.print("mediaPlayerBuffering",event.newCache)
}

```

### vlcEventManagerObject.mediaPlayerESAdded

```aardio aardio
vlcEventManagerObject.mediaPlayerESAdded = function(event){
    io.print("mediaPlayerESAdded",event.newScrambled)
}

```

### vlcEventManagerObject.mediaPlayerESDeleted

```aardio aardio
vlcEventManagerObject.mediaPlayerESDeleted = function(event){
    io.print("mediaPlayerESDeleted",event.newScrambled)
}

```

### vlcEventManagerObject.mediaPlayerESSelected

```aardio aardio
vlcEventManagerObject.mediaPlayerESSelected = function(event){
    io.print("mediaPlayerESSelected",event.newScrambled)
}

```

### vlcEventManagerObject.mediaPlayerEncounteredError

```aardio aardio
vlcEventManagerObject.mediaPlayerEncounteredError = function(event){
    io.print("mediaPlayerEncounteredError")
}

```

### vlcEventManagerObject.mediaPlayerEndReached

```aardio aardio
vlcEventManagerObject.mediaPlayerEndReached = function(event){
    io.print("mediaPlayerEndReached")
}

```

### vlcEventManagerObject.mediaPlayerForward

```aardio aardio
vlcEventManagerObject.mediaPlayerForward = function(event){
    io.print("mediaPlayerForward")
}

```

### vlcEventManagerObject.mediaPlayerLengthChanged

```aardio aardio
vlcEventManagerObject.mediaPlayerLengthChanged = function(event){
    io.print("mediaPlayerSnapshotTaken",event.newLength)
}

```

### vlcEventManagerObject.mediaPlayerMediaChanged

```aardio aardio
vlcEventManagerObject.mediaPlayerMediaChanged = function(event){
    io.print("mediaPlayerPositionChanged",event.newMedia)
}

```

### vlcEventManagerObject.mediaPlayerNothingSpecial

```aardio aardio
vlcEventManagerObject.mediaPlayerNothingSpecial = function(event){
    io.print("mediaPlayerNothingSpecial",event.metaType)
}

```

### vlcEventManagerObject.mediaPlayerOpening

```aardio aardio
vlcEventManagerObject.mediaPlayerOpening = function(event){
    io.print("mediaPlayerOpening",event.newPosition)
}

```

### vlcEventManagerObject.mediaPlayerPausableChanged

```aardio aardio
vlcEventManagerObject.mediaPlayerPausableChanged = function(event){
    io.print("mediaPlayerPausableChanged",event.metaType)
}

```

### vlcEventManagerObject.mediaPlayerPaused

```aardio aardio
vlcEventManagerObject.mediaPlayerPaused = function(event){
    io.print("mediaPlayerPaused")
}

```

### vlcEventManagerObject.mediaPlayerPlaying

```aardio aardio
vlcEventManagerObject.mediaPlayerPlaying = function(event){
    io.print("mediaPlayerPlaying")
}

```

### vlcEventManagerObject.mediaPlayerPositionChanged

```aardio aardio
vlcEventManagerObject.mediaPlayerPositionChanged = function(event){
    io.print("mediaPlayerPositionChanged",event.newPosition)
}

```

### vlcEventManagerObject.mediaPlayerScrambledChanged

```aardio aardio
vlcEventManagerObject.mediaPlayerScrambledChanged = function(event){
    io.print("mediaPlayerScrambledChanged",event.newScrambled)
}

```

### vlcEventManagerObject.mediaPlayerSeekableChanged

```aardio aardio
vlcEventManagerObject.mediaPlayerSeekableChanged = function(event){
    io.print("mediaPlayerSeekableChanged",event.newSeekable)
}

```

### vlcEventManagerObject.mediaPlayerSnapshotTaken

```aardio aardio
vlcEventManagerObject.mediaPlayerSnapshotTaken = function(event){
    var filename = ..string.fromto(event.pUtfFilename,65001,0,true);
    io.print("mediaPlayerSnapshotTaken",filename)
}

```

### vlcEventManagerObject.mediaPlayerStopped

```aardio aardio
vlcEventManagerObject.mediaPlayerStopped = function(event){
    io.print("mediaPlayerStopped")
}

```

### vlcEventManagerObject.mediaPlayerTimeChanged

```aardio aardio
vlcEventManagerObject.mediaPlayerTimeChanged = function(event){
    io.print("mediaPlayerPositionChanged",event.newTime)
}

```

### vlcEventManagerObject.mediaPlayerTitleChanged

```aardio aardio
vlcEventManagerObject.mediaPlayerTitleChanged = function(event){
    io.print("mediaPlayerTitleChanged",event.newTitle)
}

```

### vlcEventManagerObject.mediaPlayerVout

```aardio aardio
vlcEventManagerObject.mediaPlayerVout = function(event){
    io.print("mediaPlayerVout",event.newCount)
}

```

[Markdown 格式](https://www.aardio.com/zh-cn/doc/library-reference/libvlc/eventManager.md)

